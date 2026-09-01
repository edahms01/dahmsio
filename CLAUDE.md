# DahmsIO website

Marketing site for DahmsIO, a solo data & technology consultancy serving small and mid-sized
businesses across New England (ME, NH, VT, MA, RI, CT).

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

Non-technical business owners and operators. Copy is plain-language, pain-point-led, never
jargon.

## Voice

Plural/company voice ("we," "our," "us") throughout — the site reads as DahmsIO the company,
not a personal freelance pitch, even though Eric Dahms is the sole consultant behind it.
The `/about` page is the deliberate exception in framing, not in pronoun: it can and should
name Eric Dahms as founder (search engines and buyers both weight a real, credentialed human
as a trust signal), but should read as company history — "Our Story," not a personal
first-person bio. Don't reintroduce first-person-singular voice site-wide; that was a prior
misreading of the original task brief, corrected in T5.

## Scope guardrails

No industry-specific pages yet. The site is deliberately horizontal right now. Do not add
`/industries` or any vertical-specific routes unless explicitly asked.

## Demo Section and Case Study Pages

### Demo Section on Technology Page
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
  window frame (chrome bar + dots + glow), sized/aligned like the interior pages' hero visuals
  - Data via `hero.screenshot` (path under `public/images/demos/`) and `hero.screenshotAlt`
  - Hero and card use **two different images**: `<slug>-screenshot.jpg` (hero, framed) and
    `<slug>-card.jpg` (card thumbnail, a 5:2 strip of the app's title + blurb). Do not point
    both at one file — the 5:2 card crop and the fixed-height framed hero crop need different
    source shapes. Full mechanics in `src/data/_TEMPLATE_case-study.md`.
  - Optional `hero.screenshotHeight` shortens the window frame (default 524, tuned for
    Gods/Heroes) so its bottom edge meets a shorter app's screenshot.

### Adding a New Demo
Follow `src/data/_TEMPLATE_case-study.md` (full spec + checklist). In short:
1. Add card data to `src/data/demos.js` (`thumbnail` -> `<slug>-card.jpg`)
2. Copy `src/data/_TEMPLATE_case-study.js` to `src/data/<key>.js`, fill in; `<key>` must
   equal the `ROUTE_PATHS` key
3. Add the route to `src/routes.js` and `src/App.jsx`; add the wrapper in `src/pages/demos/`
4. Add both images (`<slug>-screenshot.jpg`, `<slug>-card.jpg`)
5. Demo app: drop it at `public/demos/<slug>/app/`; its `index.html` needs a `noindex` meta,
   a "Back to the case study" link, and (only if it needs a server-side secret) a Netlify
   Edge Function under `netlify/edge-functions/` with a demo-namespaced `config.path`
6. Route auto-renders at `/demos/<slug>/`; `npm run build` regenerates the sitemap + llms.txt
