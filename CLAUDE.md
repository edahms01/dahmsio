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
- **Narrative body:** Uses narrowed 68ch prose measure for readability (distinct from hero's wide layout)
- **Hero graphic:** `DemoScreenshotFrame.jsx` — a screenshot of the live demo app in the site's
  window frame (chrome bar + dots + glow), sized/aligned like the interior pages' hero visuals
  - Data via `hero.screenshot` (path under `public/images/demos/`) and `hero.screenshotAlt`
  - Card thumbnail is the same screenshot with no frame (`thumbnail` in `src/data/demos.js`)

### Adding a New Demo
1. Add demo card data to `src/data/demos.js` array (incl. `thumbnail` screenshot path)
2. Create data module `src/data/demo[YourName].js` with HERO section incl. `screenshot`/`screenshotAlt`
3. Create route in `src/routes.js` pointing to DemoCaseTemplate with the data module
4. The case study route auto-renders as `/demos/[slug]/`
