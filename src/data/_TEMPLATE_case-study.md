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
   skip this.
6. **`public/images/demos/<slug>-screenshot.jpg`** — hero graphic + card thumbnail (same
   image; card is unframed, hero gets the window frame via `DemoScreenshotFrame`).
7. **Demo app only:** drop the standalone app at `public/demos/<slug>/app/` so
   `hero.appPath` (`/demos/<slug>/app/`) resolves to a real static file.

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
| `screenshot` | `/images/demos/<slug>-screenshot.jpg`. Client case study: a photo, diagram, or result graphic instead. | |
| `screenshotAlt` | Real alt text describing what's in the image. | |
| `screenshotLabel` | Demo only: fake domain shown in the window chrome bar (e.g. `"fables-ai.app"`). Omit for client case studies. | |
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
- [ ] Card added to `demos.js` (if it should appear on the Technology page)
- [ ] `public/images/demos/<slug>-screenshot.jpg` exists (hero + thumbnail)
- [ ] Demo only: app deployed at `public/demos/<slug>/app/`, `appPath` resolves
- [ ] `npm run build` passes; new URL is in `dist/sitemap.xml` and `dist/llms.txt`
- [ ] Rendered `dist/demos/<slug>/index.html` contains the real copy, its own `<title>`,
      description, and canonical (SEO is a hard constraint — no JS-only content)
