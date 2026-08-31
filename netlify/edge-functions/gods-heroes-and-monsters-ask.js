// ---- Tunables ----
const SYSTEM_PROMPT = `You are the narrator of these old tales — a chronicler in the tradition of the bards and poets who first told these stories aloud, drawing every answer from Bulfinch's "Age of Fable." Speak with some of the weight and cadence of epic storytelling: use the old epithets these figures were known by where the source gives them (the Thunderer, the Far-Shooter, the Grey-Eyed One), let a little drama into how you recount a myth's turning points, and don't shy from grand language when a god's wrath or a hero's fall calls for it. But narration serves the facts, not the reverse: never invent an epithet, a lineage, or an ending that isn't in the retrieved text, and never let flourish replace the underlying story. When multiple ancient variants of a myth exist, say so plainly rather than picking one silently. If the retrieved passages don't cover what's asked, drop the theatrical register and say so directly — the archive doesn't have that story — rather than filling in from general knowledge.`;

const PIPELINE_ID = 'ca55ecd7-c3b2-4811-a8f0-1e9221416f89';
const LLAMA_CHAT_URL = `https://api.cloud.llamaindex.ai/api/v1/pipelines/${PIPELINE_ID}/chat`;

const MODEL = 'CLAUDE_4_5_SONNET';
const TEMPERATURE = 0.5; // narrator voice benefits from a bit more room than plain Q&A, still grounded by retrieval

const TOP_K = 15;
const RERANK = true;
const RERANK_TOP_N = 6;

const HISTORY_TURNS = 4;

const FALLBACK_ANSWER = 'The old gods are quiet right now. Please try again shortly.';

function ndjsonError(message) {
  return new Response(JSON.stringify({ type: 'error', error: message }) + '\n', {
    status: 200,
    headers: { 'Content-Type': 'application/x-ndjson' },
  });
}

export default async (request) => {
  const tStart = Date.now();

  if (request.method !== 'POST') {
    return ndjsonError('Method not allowed');
  }

  const LLAMA_KEY = Netlify.env.get('LLAMA_CLOUD_API_KEY');
  if (!LLAMA_KEY) return ndjsonError('Missing LLAMA_CLOUD_API_KEY env var');

  let query, history;
  try {
    ({ query, history } = await request.json());
  } catch {
    return ndjsonError('Invalid JSON body');
  }
  if (!query || typeof query !== 'string' || !query.trim()) {
    return ndjsonError('Missing query');
  }
  if (!Array.isArray(history)) history = [];

  const messages = history
    .slice(-HISTORY_TURNS)
    .map((m) => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text }))
    .concat([{ role: 'user', content: query }]);

  let chatRes;
  try {
    const tChat = Date.now();
    chatRes = await fetch(LLAMA_CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LLAMA_KEY}`,
      },
      body: JSON.stringify({
        messages,
        data: {
          retrieval_parameters: {
            dense_similarity_top_k: TOP_K,
            enable_reranking: RERANK,
            rerank_top_n: RERANK_TOP_N,
          },
          llm_parameters: {
            model_name: MODEL,
            system_prompt: SYSTEM_PROMPT,
            temperature: TEMPERATURE,
            // Keep off: the model's inline [citation:uuid] tags aren't rendered by this UI.
            use_citation: false,
          },
        },
      }),
    });
    if (!chatRes.ok) throw new Error(`HTTP ${chatRes.status}`);
    console.log('[timing] chat request started ms:', Date.now() - tChat);
  } catch (err) {
    return ndjsonError(`LlamaCloud chat failed: ${err.message}`);
  }

  const encoder = new TextEncoder();

  // LlamaCloud's pipeline chat endpoint streams the Vercel AI SDK "data stream protocol":
  // each line is `<prefix>:<jsonValue>`. `0` = text delta (JSON string), `8` = message
  // annotations (source-node metadata), `3` = error, `d`/`e` = finish parts.
  const stream = new ReadableStream({
    async start(controller) {
      let gotDelta = false;
      let finishReason = null;

      try {
        const reader = chatRes.body.getReader();
        const decoder = new TextDecoder();
        let buf = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });

          let nl;
          while ((nl = buf.indexOf('\n')) !== -1) {
            const line = buf.slice(0, nl);
            buf = buf.slice(nl + 1);
            if (!line) continue;

            const sep = line.indexOf(':');
            if (sep === -1) continue;
            const prefix = line.slice(0, sep);
            const rest = line.slice(sep + 1);

            if (prefix === '0') {
              let text;
              try {
                text = JSON.parse(rest);
              } catch {
                continue;
              }
              if (typeof text !== 'string' || !text) continue;
              gotDelta = true;
              controller.enqueue(encoder.encode(JSON.stringify({ type: 'delta', text }) + '\n'));
            } else if (prefix === '3') {
              let msg;
              try {
                msg = JSON.parse(rest);
              } catch {
                msg = rest;
              }
              console.log('[llamacloud] stream error part:', msg);
            } else if (prefix === 'd' || prefix === 'e') {
              try {
                const parsed = JSON.parse(rest);
                if (parsed && parsed.finishReason) finishReason = parsed.finishReason;
              } catch {
                // ignore
              }
            }
          }
        }

        if (!gotDelta) {
          controller.enqueue(encoder.encode(JSON.stringify({ type: 'delta', text: FALLBACK_ANSWER }) + '\n'));
        } else if (finishReason === 'length') {
          controller.enqueue(encoder.encode(JSON.stringify({ type: 'delta', text: '…' }) + '\n'));
        }
      } catch (err) {
        controller.enqueue(encoder.encode(JSON.stringify({ type: 'error', error: `LlamaCloud stream failed: ${err.message}` }) + '\n'));
      } finally {
        console.log('[timing] total ms:', Date.now() - tStart);
        controller.close();
      }
    },
  });

  return new Response(stream, {
    status: 200,
    headers: { 'Content-Type': 'application/x-ndjson' },
  });
};

// Demo-specific path (was '/.netlify/functions/ask') so a second demo folded into this
// project the same way can't collide. The fetch() call in the app's index.html matches.
export const config = { path: '/.netlify/functions/gods-heroes-and-monsters-ask' };
