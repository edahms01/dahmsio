# Case Study / Demo page — build template

Reference for building a new Case Study page. **Not wired into the site** — nothing imports
`_TEMPLATE_case-study.*`. Copy the `.js` skeleton to a real data module and fill it in.

Two flavours share one structure:

| Flavour | Hero eyebrow | Hero has "Try it now" + app screenshot? |
| --- | --- | --- |
| **Demo case study** (live app, e.g. Gods, Heroes, and Monsters) | `Demo` | Yes |
| **Client case study** (project work, no live app) | `Case study` | No — use a photo/diagram/result graphic instead, and drop `appPath` / `tryItLabel` |

Everything else — section order, headings, CTA — is identical for both. Section **headings are
fixed**; only the content changes each time.

---

## Files to create for a new case study

Mirrors the "Adding a New Demo" list in `website/CLAUDE.md`, fuller:

1. **`src/data/<key>.js`** — copy `_TEMPLATE_case-study.js`, rename, fill in. `<key>` is
   camelCase and **must equal** the `ROUTE_PATHS` key (step 3) exactly — `generate-llms.mjs`
   does `import('../src/data/<key>.js')` off that key at build time.
2. **`src/routes.js`** — add `<key>: "/demos/<slug>/"` to `ROUTE_PATHS` (single source of
   truth: router + `META.path` + sitemap all read it). `<slug>` is kebab-case.
3. **`src/pages/demos/<Name>.jsx`** — thin wrapper: import the data module, spread it into
   `<DemoCaseTemplate>` (copy `src/pages/demos/GodsHeroesAndMonsters.jsx`, ~28 lines).
4. **`src/App.jsx`** — add `{ path: ROUTE_PATHS.<key>, element: <Name /> }` to `routes`.
5. **`src/data/demos.js`** — add one object to `DEMOS` (the card on the Technology page):
   `slug`, `category`, `title`, `summary`, `thumbnail`. For a client case study with no card,
   skip this. `thumbnail` is the **card image** (step 6b), not the hero screenshot.
6. **Two images in `public/images/demos/`** (see "Hero & card images" below for the crop
   mechanics — they are not the same file):
   - **6a. `<slug>-screenshot.jpg`** — the hero graphic. Rendered inside the site window
     frame by `DemoScreenshotFrame`.
   - **6b. `<slug>-card.jpg`** — the Technology-page card thumbnail. A 5:2 strip of the
     app's title + blurb. `demos.js` `thumbnail` points here.
7. **Demo app only:** drop the standalone app at `public/demos/<slug>/app/` so
   `hero.appPath` (`/demos/<slug>/app/`) resolves to a real static file. The app's
   `index.html` needs three things beyond the app itself — see "The standalone demo app"
   below: a `noindex` meta, a "Back to the case study" link, and (if it has a backend) a
   demo-namespaced edge function.

Route auto-renders at `/demos/<slug>/`. Run `npm run build` — it regenerates the sitemap and
`llms.txt`.

---

## Voice & style (from `website/CLAUDE.md`)

- **Company voice** — "we / our / us". Never first-person singular, never "I".
- **Audience:** non-technical business owners. Plain language, pain-point-led, zero jargon.
- **No pricing** anywhere on the page.
- **No em dashes.** Use commas or full stops. (See the example copy — lists that want an
  em dash use ", whatever it is" instead.)
- Lead with the reader's problem, not with the tech.

---

## Section-by-section spec

### `META`  — page `<head>` (drives title, description, canonical, OG/Twitter)

| Field | Rule | Example |
| --- | --- | --- |
| `path` | `ROUTE_PATHS.<key>` — never a literal string | `ROUTE_PATHS.demoGodsHeroesMonsters` |
| `title` | `"<Name> \| DahmsIO"` | `"Gods, Heroes, and Monsters \| DahmsIO"` |
| `description` | 1–2 sentences, ~120–160 chars. What it is + the transferable point. | `"An AI chat built on Bulfinch's Age of Fable. See how the same approach works on any knowledgebase, not just a 170-year-old book."` |

### `BREADCRUMBS`  — array, feeds the breadcrumb JSON-LD

Always two crumbs:
```js
[
  { path: `${ROUTE_PATHS.technology}#demos`, label: "Demos" },
  { path: ROUTE_PATHS.<key>, label: NAME },
]
```
`Home` is prepended by `buildBreadcrumbSchema`. Middle crumb points at the `#demos` anchor on
the Technology page.

### `HERO`

| Field | Rule | Example |
| --- | --- | --- |
| `eyebrow` | `"Demo"` (live app) or `"Case study"` (client work) | `"Demo"` |
| `name` | The `NAME` const. Reused as H1 **and** last breadcrumb, so they can't drift. | `"Gods, Heroes, and Monsters"` |
| `tagline` | One short line, ~4–8 words. Voice/hook, not a description. | `"Ask and the Old Gods will answer."` |
| `body` | One paragraph, ~45–75 words. Name the reader's version of the problem and the payoff. | see `demoGodsHeroesMonsters.js` |
| `screenshot` | `/images/demos/<slug>-screenshot.jpg` — the **hero** image (not the card). Client case study: a photo, diagram, or result graphic instead. | |
| `screenshotAlt` | Real alt text describing what's in the image. | |
| `screenshotHeight` | **Demo only, optional.** px height of the window frame's screenshot area, overriding the `DemoScreenshotFrame` default of `524`. The default suits a taller app (Gods/Heroes has a control strip below its input). If the screenshot's content is shorter, the window's bottom edge floats below it in dead space — set a smaller value to pull the frame's bottom up to meet the content (AskTheArchive uses `490`). Shorten the **frame** here, never crop the image (see "Hero & card images"). | `490` |
| `screenshotLabel` | Demo only: text in the window chrome bar. Site convention is `<name>.io`, echoing `dahms.io` (`roadmap.io`, `experts.io`, `revenue_dashboard.io`). Gods/Heroes' `fables-ai.app` predates that convention — don't copy it. Omit for client case studies. | `"ask-the-archive.io"` |
| `appPath` | **Demo only.** `APP_PATH` const = `/demos/<slug>/app/`. Delete for client case studies. | |
| `tryItLabel` | **Demo only.** Button text, e.g. `"Try it now"`. Delete for client case studies. | |

> Client case study note: `DemoCaseTemplate.jsx` currently always renders the "Try it now"
> button and framed screenshot. For a no-app case study, either pass a non-app image and a
> variant of the template that omits `HeroActions`, or keep the button and point it at the
> most relevant live page. Flag this to Eric when the first client case study comes up.

### `PROBLEM`  — heading fixed: **"The problem"**

One paragraph, ~50–80 words. The reader's pain, in their terms. Generalise past this specific
case ("that's true of any large archive: manuals, transcripts, historical records...").

### `WHAT_IT_DOES`  — heading fixed: **"What it does"**

One paragraph, ~40–70 words. Plain description of what the thing does for the user. No
implementation detail yet.

### `HOW_IT_WORKS`  — heading fixed: **"How it works"**

`steps`: **exactly 3**, each `{ lead, body }`.
- `lead` — imperative phrase ending in a period: `"Connect the source."`
- `body` — one sentence finishing the thought.
Keep it conceptual (connect → structure → ask), not a tech stack list.

### `FEATURES`  — heading fixed: **"Key features"**

`items`: **3–5**, each `{ lead, body }`.
- `lead` — noun phrase ending in a period: `"Grounded answers."`
- `body` — one sentence of benefit.

### `WHO`  — heading fixed: **"Who this is for"**

One paragraph, ~40–70 words. 2–4 audience types, ending on the broad case ("Any brand with a
deep well of content and no easy way for someone to just ask it a question.").

### `CTA`  — the closing band (same visual treatment every time)

| Field | Rule | Example |
| --- | --- | --- |
| `heading` | Varies per case. Question form works well. | `"Want this pointed at your own content?"` |
| `text` | Varies per case. One sentence or fragment naming the reader's inputs. | `"Manuals, records, years of support tickets, whatever you're sitting on."` |
| `buttonLabel` | Varies per case. 2–3 words. | `"Let's talk"` |
| `buttonTo` | **Always `ROUTE_PATHS.contact`.** Do not change the target. | |

---

## Hero & card images

Two separate files. They are cropped differently and one will not stand in for the other.

### `<slug>-card.jpg` — the Technology-page card

The card CSS (`DemoCard.module.css` `.thumb`) forces a **5:2 banner**, `object-fit: cover`,
`object-position: top`. It only ever shows the top strip of whatever you give it, so:

- Content = the top band of the app only (its title / header / intro line). Anything lower
  gets cropped or drifts in and out depending on the source's height.
- Export it at (or crop it to) **exactly 5:2** — e.g. 1250×500. Then the card's `cover` crop
  is a no-op and nothing shifts.
- If the source strip is **wider** than 5:2, pad the **top and bottom** (never the sides —
  see below) with the app's own background colour to reach 5:2. Sample the actual edge
  colour or replicate the edge row; a flat guess seams visibly on these dark UIs.
- ~1200–1500px wide is plenty (the card renders at ~370px on desktop, ~850px one-column).

### `<slug>-screenshot.jpg` — the hero

Rendered by `DemoScreenshotFrame` inside the site window frame: `.shot` is a **fixed height**
(`screenshotHeight`, default 524px), `object-fit: cover`, `object-position: top center`.

- Height is the binding dimension, so the frame crops the **sides** to the hero column
  width (~5px each side at the max width, more at narrower viewports). Keep the app's
  content clear of the far left/right edges, or make sure the app's own background bleeds
  there, so the side-crop removes margin and not text.
- **Do not add side padding to fix side-cropping** — a wider image overflows the fixed-height
  frame *more*, so it crops *more*. Counterintuitive but it bit us twice.
- Aspect close to ~1:1 (slightly portrait is fine). Frame the part of the app that shows
  what it does at a glance, top-anchored, like Gods/Heroes and AskTheArchive.
- To remove dead space **below** the app, lower `screenshotHeight` (pull the frame's bottom
  edge up). Never crop the image to do this — changing its aspect re-triggers side-cropping.

---

## The standalone demo app (`public/demos/<slug>/app/`)

Whatever the app is (chat UI, dashboard, interactive tool, single static page), it's copied
in as-is — its own stack, framework, and build output are fine. Only two site-integration
edits to its `index.html` are **always** required (1 and 2); item 3 applies only if the app
needs a server-side secret. Gods/Heroes and AskTheArchive are the current examples, and both
happen to be RAG chats, but nothing here assumes that.

1. **`noindex` meta**, right after the viewport meta:
   ```html
   <!-- The Case Study page (/demos/<slug>/) is the canonical, search-facing version of
        this; the raw app shouldn't compete with it in results. -->
   <meta name="robots" content="noindex, follow">
   ```

2. **"Back to the case study" link** — fixed top-left, first child of `<body>`. Same markup,
   position, and behaviour every time; the font is always the site's display font (Space
   Grotesk, add it to the app's Google Fonts link), the colour follows *this app's* accent:
   ```html
   <a class="<prefix>-back" href="/demos/<slug>/">
     <span class="<prefix>-back-arrow" aria-hidden="true">&larr;</span>
     <img class="<prefix>-back-icon" src="/favicon.svg" alt="" width="16" height="16">
     <span class="<prefix>-back-label">Back to the case study</span>
   </a>
   ```
   ```css
   .<prefix>-back{position:fixed;top:22px;left:24px;z-index:10;display:inline-flex;
     align-items:center;gap:9px;font-family:'Space Grotesk',system-ui,-apple-system,
     'Segoe UI',sans-serif;font-weight:500;font-size:12.5px;letter-spacing:0.01em;
     color:<app-accent>;text-decoration:none;padding:6px 6px 6px 2px;transition:color .15s ease}
   .<prefix>-back:hover{color:<app-fg>}
   .<prefix>-back-arrow{font-size:15px;line-height:1}
   .<prefix>-back-icon{display:block;width:16px;height:16px}
   @media (max-width:640px){.<prefix>-back{top:14px;left:12px;font-size:11.5px;gap:7px}}
   ```

3. **Server-side secret (only if the app needs one)** — e.g. an API key that must not ship
   in client code. Put the logic behind a Netlify Edge Function under
   `netlify/edge-functions/`, and **demo-namespace its path** so two demos folded in the
   same way can't collide:
   ```js
   export const config = { path: '/.netlify/functions/<slug>-<action>' };
   ```
   Then repoint the app's own `fetch()` to that path. Add the secret as a Netlify env var
   (dashboard → Site settings → Environment variables); if a later demo needs the same
   provider, reuse the existing var rather than adding a duplicate.

   *What the two current demos do:* a single edge function (`<slug>-ask.js`, path
   `/.netlify/functions/<slug>-ask`) that calls LlamaCloud, reading a shared
   `LLAMA_CLOUD_API_KEY` and carrying its own `PIPELINE_ID` constant. A different demo could
   need a different provider, several functions, or none — this is a pattern, not a contract.

---

## Pre-publish checklist

**Data module**
- [ ] `<key>` matches the `ROUTE_PATHS` key exactly (camelCase)
- [ ] `NAME` const used for both `HERO.name` and the last breadcrumb `label`
- [ ] `META.path` is `ROUTE_PATHS.<key>`, not a string literal
- [ ] `META.title` ends `" | DahmsIO"`
- [ ] `META.description` 120–160 chars, states the transferable point
- [ ] `BREADCRUMBS` = Demos (`#demos` anchor) + this page

**Content**
- [ ] All six headings are the fixed strings, unchanged
- [ ] Company voice throughout ("we/our/us"), no "I"
- [ ] No em dashes anywhere
- [ ] No pricing
- [ ] `HOW_IT_WORKS` has exactly 3 steps; every `lead` ends in a period
- [ ] `FEATURES` has 3–5 items; every `lead` ends in a period
- [ ] `CTA.buttonTo` is `ROUTE_PATHS.contact`

**Wiring**
- [ ] Route added to `ROUTE_PATHS` and `App.jsx`
- [ ] Page wrapper created in `src/pages/demos/`
- [ ] Card added to `demos.js` (if it should appear on the Technology page), `thumbnail`
      pointing at `<slug>-card.jpg`
- [ ] Both images exist: `<slug>-screenshot.jpg` (hero) and `<slug>-card.jpg` (card, 5:2)
- [ ] `screenshotHeight` set if the window frame's bottom edge doesn't meet the screenshot
- [ ] Demo only: app deployed at `public/demos/<slug>/app/`, `appPath` resolves
- [ ] Demo app: `noindex` meta + "Back to the case study" link both present in its
      `index.html`; `fetch()` path matches its edge function's `config.path` (if it has one)
- [ ] `npm run build` passes; new URL is in `dist/sitemap.xml` and `dist/llms.txt`
- [ ] Rendered `dist/demos/<slug>/index.html` contains the real copy, its own `<title>`,
      description, and canonical (SEO is a hard constraint — no JS-only content)
