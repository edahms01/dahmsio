import { ROUTE_PATHS } from "../routes.js";

// Case Study page copy — first draft, company voice, no pricing, no em dashes. Adjust freely.
//
// The module key (`askTheArchive`) matches its ROUTE_PATHS key exactly, so
// generate-llms.mjs's dynamic `import('../src/data/<key>.js')` resolves it at build time.

// Reused for the hero H1 and the last breadcrumb crumb, so the two can't drift apart.
export const NAME = "AskTheArchive";

// Path to the standalone chat app at public/demos/ask-the-archive/app/. Not a ROUTE_PATHS
// entry: it's a real static file, linked with a plain <a href>, never a <Link>.
export const APP_PATH = "/demos/ask-the-archive/app/";

export const META = {
  path: ROUTE_PATHS.askTheArchive,
  title: "AskTheArchive | DahmsIO",
  description:
    "An AI chat over a large set of declassified government documents. The same approach turns any pile of PDFs into something you can just ask a question of.",
};

// Home > Demos > AskTheArchive. The middle crumb points at the #demos anchor on the
// Technology page (the id is on DemoSection's wrapping <section>).
export const BREADCRUMBS = [
  { path: `${ROUTE_PATHS.technology}#demos`, label: "Demos" },
  { path: ROUTE_PATHS.askTheArchive, label: NAME },
];

export const HERO = {
  eyebrow: "Demo",
  name: NAME,
  tagline: "Ask the archive what the documents actually say.",
  body: "This one runs on a batch of declassified U.S. government files, thousands of pages of reports, memos, and findings. Point the same setup at your contracts, your case files, or a decade of board minutes and it behaves the same way: ask in plain English, get an answer tied to what the records actually say, and nothing invented to fill a gap.",
  tryItLabel: "Try it now",
  appPath: APP_PATH,
  // Hero graphic: a screenshot of the live app, shown in the site's window frame
  // (DemoScreenshotFrame). public/images/demos/. screenshotLabel is the window's chrome-bar
  // text, a mock domain matching the technical filenames the interior pages use.
  screenshot: "/images/demos/ask-the-archive-screenshot.jpg",
  screenshotAlt:
    "The AskTheArchive chat app: its title, a short description of the document set, and starter questions above a chat box, on a dark blue backdrop.",
  screenshotLabel: "ask-the-archive.io",
  // Frame is shorter than the DemoScreenshotFrame default (524, tuned for the Gods/Heroes
  // app and its view-toggle). This app ends at the chat input, so 490 pulls the window's
  // bottom edge up to meet the screenshot instead of leaving a dead navy band.
  screenshotHeight: 490,
};

export const PROBLEM = {
  heading: "The problem",
  body: "A big batch of documents lands and the useful parts are buried in it. Somewhere in those thousands of pages is the finding you need, but getting to it means reading, or guessing the right keywords and hoping. That is true of any large record set: discovery documents, regulatory filings, research archives, years of meeting notes. The information is in there. The cost is the hours it takes to dig it out.",
};

export const WHAT_IT_DOES = {
  heading: "What it does",
  body: "You ask a question the way you would ask a colleague, and it answers from the documents themselves. It stays with what the records actually say, attributes findings to the source in plain terms, and tells you when the documents do not cover something instead of guessing. No keyword syntax, no need to know which file to open first.",
};

export const HOW_IT_WORKS = {
  heading: "How it works",
  steps: [
    {
      lead: "Connect the source.",
      body: "Every document in the release, loaded once and held together as a single searchable body of text.",
    },
    {
      lead: "Build the knowledgebase.",
      body: "The text is broken up and organized so every answer can be traced back to the passage it came from.",
    },
    {
      lead: "Ask in plain English.",
      body: "Type a question, get a grounded answer, and follow up as if you were talking to someone who had read all of it.",
    },
  ],
};

export const FEATURES = {
  heading: "Key features",
  items: [
    {
      lead: "Grounded answers.",
      body: "Every response is drawn from the source documents, with nothing invented to fill a gap.",
    },
    {
      lead: "Honest gaps.",
      body: "When the records are silent or redacted, it says so, rather than guessing to sound complete.",
    },
    {
      lead: "A neutral voice.",
      body: "It reports what the documents state and leaves the editorializing out, which matters for sensitive material.",
    },
    {
      lead: "Plain-language questions.",
      body: "No search operators or file names to learn, ask the way you would ask a person.",
    },
    {
      lead: "Self-contained.",
      body: "Runs as its own standalone page, with nothing for the reader to install or set up.",
    },
  ],
};

export const WHO = {
  heading: "Who this is for",
  body: "Legal teams working through discovery. Journalists and researchers with a document dump and a deadline. Compliance and policy staff who need to know what a filing actually says. Anyone handed a large body of records and expected to answer questions from it quickly, without reading every page first.",
};

export const CTA = {
  heading: "Want this pointed at your own documents?",
  text: "Contracts, filings, case files, research archives, whatever you need to be able to question.",
  buttonLabel: "Let's talk",
  buttonTo: ROUTE_PATHS.contact,
};
