# DahmsIO website

Marketing site for DahmsIO, a data, technology, and AI consultancy. DahmsIO is founded by
Eric Dahms and staffs each project from a vetted network of specialists, with one person
accountable to the client. Positioning is size- and region-neutral: "businesses of any size".

## Stack

Vite + React + react-router-dom, deployed on Netlify. Static marketing site with a Netlify
Forms contact form.

## SEO is a primary constraint, not an afterthought

Every route must ship pre-rendered HTML containing its real content, its own `<title>`, its
own meta description, and its own self-referencing canonical. No AI crawler (GPTBot,
ClaudeBot, PerplexityBot, OAI-SearchBot) executes JavaScript — content that only exists after
hydration is invisible to them.

## Content pattern

Content lives in `src/data/*.js`, one module per page, each exporting a `META` object plus
page section constants. Keep this pattern for any new page.

## Audience

Non-technical business owners and operators. Copy is plain-language, problem-led, never
jargon. Assume the reader knows their problem, not the technology that fixes it.

## Positioning

- Visionary line (Home H1, title, footer tagline): "Where innovation meets intelligence."
- Positioning line (Home hero subline; echoed in meta descriptions and the About hero):
  "We bring enterprise-grade data, technology, and AI to businesses of any size, scoped and
  priced to fit your goals."
- Three supporting points, each with proof on the site:
  1. One lead, the right specialists (About "Our network", Home principles).
  2. Plain English, scope and price agreed up front (Home principles, Contact FAQ).
  3. What we build, you own (Home principles, Contact engagement models).
- "Innovation" and "intelligence" echoes: tie each to something concrete. Intelligence =
  numbers you can make decisions from (Data side). Innovation = new software and AI put to
  work (Technology side). Current placements: Data intro and Data CTA, Technology hero
  subline, About Background. Don't add more without a reason.
- Data page motif: "decisions you can trust". Keep "trust" to the headline, the section
  heading, and nowhere else nearby.

## Voice

- Plural company voice ("we", "our", "us") everywhere. DahmsIO is a team, not a solo
  practice. The only first-person copy is the signed Founder's Note on `/about`.
- Write "DahmsIO" as one word in readable text; "DahmsI/O" exists only in the logo files.
- "Consultant" is fine as a category noun, never as a self-reference (use "we").

## Copy rules

Run new or edited copy through the `dahmsio-copywriting` and `humanizer` skills before
shipping. Hard rules:

- No em or en dashes in rendered or hidden copy (ranges use "to": "$5k to $15k"). When
  removing a dash, use a period, colon, or parentheses. Never a comma splice.
- Oxford comma in every list of three or more.
- Sentence case for headings. Eyebrows are typed in uppercase by CSS.
- Never use "solution" or "solutions". Never "journey".
- No "X without Y" constructions. No negation lists ("No X, no Y").
- Avoid staged contrasts ("X, not Y", "instead of", "rather than", "isn't the same as").
  The site keeps exactly one on purpose: About Background ("aren't short on tools or data").
- Cut filler intensifiers: "actually", "genuinely", "just", "exactly", "quietly", "real".
  Don't repeat "honest" or "straight answer".
- No "Whether you're X or Y" openers, no staged run-ups, no one-line summary closers.
- Say "updated automatically", not "current". Avoid "gap" outside Consulting's staffing sense.
- Jargon to avoid in client-facing copy: RAG (say "AI Chat"), pipeline, data stack,
  full stack, orchestration, agents, production-ready, iterate, stakeholder alignment,
  resourcing, operationalize.
- No claims that assume a track record ("most projects", "our clients") and no promises
  of anything free.
- Closing CTA headings are questions ("Ready to...?"). Step-card section headings use the
  "From X to Y." shape.
- No employer names anywhere. No business-size language about a specific client.
- Geography: none in visible copy. The Westbrook and London addresses live only in the
  `ProfessionalService` JSON-LD (`src/data/organization.js`).

## Scope guardrails

No industry-specific pages yet. The site is deliberately horizontal right now. Do not add
`/industries` or any vertical-specific routes unless explicitly asked.

## Demo Section and Case Study Pages

### Demo Section on Technology Page
- Currently hidden: the section is commented out on the Technology page (demos may live in
  Eric's personal portfolio instead). Don't re-enable it unless asked.
- Located in `src/components/DemoSection.jsx`
- Renders as a main section (same structural styling as Capabilities and Pipeline)
- Includes eyebrow label ("Featured Demos") defined in `src/data/demos.js`
- Card styling uses accent colors consistently with other site components

### Demo Case Study Pages (DemoCaseTemplate)
- Template for individual demo case studies (e.g., Gods, Heroes, and Monsters)
- **Hero layout:** Two-column grid (text left, framed app screenshot right) matching InteriorPageTemplate
  - On desktop: full-width `var(--max-wide)` with grid layout
  - On mobile (<1100px): stacks vertically
- **Narrative body:** Uses an 82ch prose measure (widened 20% from the original 68ch) for readability (distinct from hero's wide layout)
- **Hero graphic:** `DemoScreenshotFrame.jsx` — a screenshot of the live demo app in the site's
  window frame (chrome bar + dots + neutral drop shadow), sized/aligned like the interior pages' hero visuals
  - Data via `hero.screenshot` (path under `public/images/demos/`) and `hero.screenshotAlt`
  - Hero and card use **two different images**: `<slug>-screenshot.jpg` (hero, framed) and
    `<slug>-card.jpg` (card thumbnail, a 5:2 strip of the app's title + blurb). Do not point
    both at one file — the card needs a 5:2 crop and the hero renders at the screenshot's own
    aspect ratio, so they need different source shapes. Full mechanics in
    `src/data/_TEMPLATE_case-study.md`.
  - The hero screenshot renders at `width: 100%; height: auto` (its own intrinsic aspect
    ratio), so the window frame's bottom edge always meets the screenshot's content exactly —
    no per-demo height to tune, whatever the source image's proportions.

### Adding a New Demo
Follow `src/data/_TEMPLATE_case-study.md` (full spec + checklist). In short:
1. Add card data to `src/data/demos.js` (`thumbnail` -> `<slug>-card.jpg`)
2. Copy `src/data/_TEMPLATE_case-study.js` to `src/data/<key>.js`, fill in; `<key>` must
   equal the `ROUTE_PATHS` key
3. Add the route to `src/routes.js` and `src/App.jsx`; add the wrapper in `src/pages/demos/`
4. Add both images (`<slug>-screenshot.jpg`, `<slug>-card.jpg`)
   - The hero screenshot also needs WebP variants at 640, 960 and 1200px wide next to it
     (`<slug>-screenshot-640.webp`, `-960.webp`, `-1200.webp`). Opt-in: set `screenshotWebp: true`
     in the demo's data; `DemoScreenshotFrame.jsx` then serves them through `<picture>`/`srcset`
     with the JPG as the `<img>` fallback. Without the flag it renders the plain JPG.
     e.g. `cwebp -q 80 -m 6 -resize 640 0 <slug>-screenshot.jpg -o <slug>-screenshot-640.webp`
5. Demo app: drop it at `public/demos/<slug>/app/`; its `index.html` needs a `noindex` meta,
   a "Back to the case study" link, and (only if it needs a server-side secret) a Netlify
   Edge Function under `netlify/edge-functions/` with a demo-namespaced `config.path`
6. Route auto-renders at `/demos/<slug>/`; `npm run build` regenerates the sitemap + llms.txt
