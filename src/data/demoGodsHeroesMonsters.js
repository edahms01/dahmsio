import { ROUTE_PATHS } from "../routes.js";

// Case Study page copy — code-brief-demos-technology-v4.md §5 (approved). Company voice,
// no pricing, no em dashes. Keep it that way in any future edits here.
//
// The module key (`demoGodsHeroesMonsters`) matches its ROUTE_PATHS key exactly, so
// generate-llms.mjs's dynamic `import('../src/data/<key>.js')` resolves it at build time.

// Reused for the hero H1 and the last breadcrumb crumb, so the two can't drift apart.
export const NAME = "Gods, Heroes, and Monsters";

// Path to the standalone chat app (Step 3 drops the file at public/…/app/). Not a
// ROUTE_PATHS entry: it's a real static file, not an SPA route, so it's linked with a plain
// <a href>, never a <Link>.
export const APP_PATH = "/demos/gods-heroes-and-monsters/app/";

export const META = {
  path: ROUTE_PATHS.demoGodsHeroesMonsters,
  title: "Gods, Heroes, and Monsters | DahmsIO",
  description:
    "An AI chat built on Bulfinch's Age of Fable. See how the same approach works on any knowledgebase, not just a 170-year-old book.",
};

// Home > Demos > Gods, Heroes, and Monsters. The middle crumb points at the #demos anchor
// on the Technology page (the id is on DemoSection's wrapping <section>).
export const BREADCRUMBS = [
  { path: `${ROUTE_PATHS.technology}#demos`, label: "Demos" },
  { path: ROUTE_PATHS.demoGodsHeroesMonsters, label: NAME },
];

export const HERO = {
  eyebrow: "Demo",
  name: NAME,
  tagline: "Ask and the Old Gods will answer.",
  body: "This one's built on Thomas Bulfinch's 1855 collection of Greek, Roman, and Norse myth. Point the same approach at your product manuals, your policy documents, or years of support tickets, and you get the same thing: a straight, sourced answer instead of a search bar that hands back forty results.",
  tryItLabel: "Try it now",
  appPath: APP_PATH,
  // Hero graphic: a screenshot of the live app, shown in the site's window frame
  // (DemoScreenshotFrame). public/images/demos/. screenshotLabel is the window's chrome-bar
  // text — a mock domain, matching the technical filenames the interior pages use.
  screenshot: "/images/demos/gods-heroes-and-monsters-screenshot.jpg",
  screenshotAlt:
    "The Gods, Heroes, and Monsters chat app: its title, tagline, and starter questions over a constellation backdrop.",
  screenshotLabel: "fables-ai.io",
};

export const PROBLEM = {
  heading: "The problem",
  body: 'A big body of text is only useful if you can actually find what you need in it. Go looking for "the three sisters at the root of Yggdrasil" inside a 400-page mythology collection and you\'ll be scanning chapters for a while. That\'s true of any large archive: manuals, transcripts, historical records, whatever it is. The information\'s in there. Getting to it costs time.',
};

export const WHAT_IT_DOES = {
  heading: "What it does",
  body: "Ask a plain-English question about any god, hero, or myth, Greek, Roman, or Norse, and get an answer pulled directly from the text, in the voice of the original telling. No need to know which chapter, which name variant, or which pantheon it belongs to.",
};

export const HOW_IT_WORKS = {
  heading: "How it works",
  steps: [
    {
      lead: "Connect the source.",
      body: "The full text of Bulfinch's Age of Fable, indexed once.",
    },
    {
      lead: "Build the knowledgebase.",
      body: "Every myth, name, and event structured so an answer can always be traced back to the actual passage.",
    },
    {
      lead: "Ask, in plain English.",
      body: "Type a question, get an answer, and follow it wherever it leads.",
    },
  ],
};

export const FEATURES = {
  heading: "Key features",
  items: [
    {
      lead: "Grounded answers.",
      body: "Every answer pulled straight from the source text, nothing invented.",
    },
    {
      lead: "Guided exploration.",
      body: "Follow-up paths after each answer, continue down a thread or branch to something new, instead of another search box.",
    },
    {
      lead: "Two reading modes.",
      body: 'A modern chat view, or a "classic" scrolling log for a more literary feel.',
    },
    {
      lead: "Lightweight and standalone.",
      body: "Runs as its own self-contained experience.",
    },
  ],
};

export const WHO = {
  heading: "Who this is for",
  body: "Publishers and reference sites sitting on an archive nobody can search. Museums and education sites with a large body of historical text. Any brand with a deep well of content and no easy way for someone to just ask it a question.",
};

export const CTA = {
  heading: "Want this pointed at your own content?",
  text: "Manuals, records, years of support tickets, whatever you're sitting on.",
  buttonLabel: "Let's talk",
  buttonTo: ROUTE_PATHS.contact,
};
