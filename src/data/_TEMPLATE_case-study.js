/* eslint-disable */
// =============================================================================
// CASE STUDY / DEMO PAGE — DATA MODULE SKELETON
// -----------------------------------------------------------------------------
// Reference only. Nothing imports this file. To build a new case study:
//   1. Copy this file to  src/data/<key>.js   (<key> = camelCase, MUST match the
//      ROUTE_PATHS key you add in step 2).
//   2. Add   <key>: "/demos/<slug>/"   to ROUTE_PATHS in src/routes.js.
//   3. Copy src/pages/demos/GodsHeroesAndMonsters.jsx -> src/pages/demos/<Name>.jsx,
//      repoint the import to your new data module.
//   4. Add   { path: ROUTE_PATHS.<key>, element: <Name /> }   to routes in src/App.jsx.
//   5. Add a card object to DEMOS in src/data/demos.js (skip if no Technology-page card).
//      Its `thumbnail` is the CARD image (6b), not the hero screenshot.
//   6. Add TWO images to public/images/demos/ (see _TEMPLATE_case-study.md "Hero & card
//      images" for the crop rules — they are not the same file):
//        6a. <slug>-screenshot.jpg  — the hero graphic (goes in the window frame).
//        6b. <slug>-card.jpg        — the Technology-page card, a 5:2 strip of the app's
//                                     title + blurb.
//   7. DEMO ONLY: deploy the app to  public/demos/<slug>/app/  so APP_PATH resolves. Its
//      index.html also needs a noindex meta and a "Back to the case study" link; only if it
//      needs a server-side secret, a demo-namespaced Netlify Edge Function. See the .md.
//
// Fill in every TODO. Delete the DEMO-ONLY block for a client case study.
// Style rules: company voice (we/our/us), plain language, pain-point-led,
// NO em dashes, NO pricing. See _TEMPLATE_case-study.md for the full spec + checklist.
// =============================================================================

import { ROUTE_PATHS } from "../routes.js";

// Reused for the hero H1 and the last breadcrumb crumb, so the two can't drift apart.
export const NAME = "TODO Case Study Name";

// ---- DEMO ONLY --------------------------------------------------------------
// Path to the standalone app dropped at public/demos/<slug>/app/. NOT a ROUTE_PATHS
// entry: it's a real static file, linked with a plain <a href>, never a <Link>.
// Delete this const (and hero.appPath / hero.tryItLabel below) for a client case study.
export const APP_PATH = "/demos/TODO-slug/app/";
// ---------------------------------------------------------------------------

export const META = {
  path: ROUTE_PATHS.TODOkey,                 // ROUTE_PATHS.<key> — never a string literal
  title: "TODO Case Study Name | DahmsIO",   // "<NAME> | DahmsIO"
  description:
    "TODO 1-2 sentences, ~120-160 chars. What it is, plus the transferable point " +
    "(the reader's version of this, not just this specific example).",
};

// Home > Demos > <NAME>. Middle crumb points at the #demos anchor on the Technology page.
// "Home" is prepended automatically by buildBreadcrumbSchema.
export const BREADCRUMBS = [
  { path: `${ROUTE_PATHS.technology}#demos`, label: "Demos" },
  { path: ROUTE_PATHS.TODOkey, label: NAME },
];

// ---- HERO -----------------------------------------------------------------
export const HERO = {
  eyebrow: "Demo",                 // "Demo" (live app) | "Case study" (client work)
  name: NAME,
  tagline: "TODO one short hook line, ~4-8 words. Voice, not a description.",
  body:
    "TODO one paragraph, ~45-75 words. Name the reader's version of the problem, " +
    "then the payoff. Generalise past this specific example.",

  // Hero graphic (NOT the card — that's <slug>-card.jpg in demos.js). Shown in the site
  // window frame by DemoScreenshotFrame. Keep app content clear of the far left/right
  // edges: the frame is fixed-height and crops the SIDES. See the .md.
  screenshot: "/images/demos/TODO-slug-screenshot.jpg",
  screenshotAlt: "TODO real alt text describing what is in the image.",

  // ---- DEMO ONLY (delete for a client case study) ----
  // Optional: px height of the frame's screenshot area, overriding DemoScreenshotFrame's
  // 524 default. Lower it if the window's bottom edge sits below the app's content (e.g.
  // 490). Shorten the FRAME here, never crop the image.
  screenshotHeight: undefined,
  screenshotLabel: "TODO-name.io",   // window chrome bar. Site convention: <name>.io
  appPath: APP_PATH,
  tryItLabel: "Try it now",
  // ---------------------------------------------------
};

// ---- BODY SECTIONS — headings are FIXED, do not edit the `heading` strings ----

export const PROBLEM = {
  heading: "The problem",
  body:
    "TODO one paragraph, ~50-80 words. The reader's pain in their terms. " +
    "Widen it past this case (\"that's true of any ...\").",
};

export const WHAT_IT_DOES = {
  heading: "What it does",
  body:
    "TODO one paragraph, ~40-70 words. Plain description of what it does for the " +
    "user. No implementation detail yet.",
};

export const HOW_IT_WORKS = {
  heading: "How it works",
  // EXACTLY 3 steps. `lead` = imperative phrase ending in a period.
  // Keep it conceptual (connect -> structure -> ask), not a tech-stack list.
  steps: [
    { lead: "TODO step one.", body: "TODO one sentence finishing the thought." },
    { lead: "TODO step two.", body: "TODO one sentence." },
    { lead: "TODO step three.", body: "TODO one sentence." },
  ],
};

export const FEATURES = {
  heading: "Key features",
  // 3 to 5 items. `lead` = noun phrase ending in a period. `body` = one sentence of benefit.
  items: [
    { lead: "TODO feature.", body: "TODO one sentence of benefit." },
    { lead: "TODO feature.", body: "TODO one sentence of benefit." },
    { lead: "TODO feature.", body: "TODO one sentence of benefit." },
  ],
};

export const WHO = {
  heading: "Who this is for",
  body:
    "TODO one paragraph, ~40-70 words. Name 2-4 audience types, then close on the " +
    "broad case (\"Any brand with ...\").",
};

// ---- CTA — same visual band every time. Target is ALWAYS contact. ----
export const CTA = {
  heading: "TODO closing question, e.g. \"Want this pointed at your own content?\"",
  text: "TODO one sentence naming the reader's inputs.",
  buttonLabel: "Let's talk",          // varies per case, 2-3 words
  buttonTo: ROUTE_PATHS.contact,      // DO NOT CHANGE
};
