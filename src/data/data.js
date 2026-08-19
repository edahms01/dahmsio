import { ACCENT, ACCENT2, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";
import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.data,
  title: "Data Intelligence | DahmsIO",
  // "Econometric" placed here per subservice-expansion-plan-v6.md (D6) — the word doesn't
  // appear in any visible sub-service copy, only in META and structured data, for search.
  description:
    "Data foundations, reporting dashboards, econometric analytics, and data science and machine learning. DahmsIO turns scattered data into decisions you can trust.",
};

export const HERO = {
  eyebrow: "Data Intelligence",
  heroPrefix: "Turn scattered data into",
  heroAccent: "decisions you can trust",
  heroSubcopy:
    "From multi-source pipelines to boardroom-ready dashboards and predictive model forecasts, we engineer the full data stack, so every number your team relies on is accurate, timely and understood.",
  primaryCtaLabel: "Scope a data project",
};

// Hero mockup — DashboardMockup: bars 1-6 are actuals; bars 7-8 are dashed "forecast"
// columns. Ported from the Claude Design hero graphic (project a37bbdf4, Data.dc.html),
// which also overlays an actual-vs-forecast trend line (fixed in the component itself, not
// data-driven) — echoes the hero copy's "predictive model forecasts" line.
export const MOCKUP = {
  filename: "revenue_dashboard.io",
  label: "MONTHLY REVENUE",
  value: "$1.28M",
  delta: "18.4%",
  bars: [
    { height: 46, from: "rgba(21,155,200,.5)", to: "rgba(21,155,200,.12)" },
    { height: 62, from: "rgba(21,155,200,.55)", to: "rgba(21,155,200,.14)" },
    { height: 54, from: "rgba(43,184,216,.55)", to: "rgba(43,184,216,.14)" },
    { height: 78, from: "rgba(129,110,247,.6)", to: "rgba(129,110,247,.15)" },
    { height: 70, from: "rgba(79,216,255,.6)", to: "rgba(79,216,255,.15)" },
    { height: 82, from: "var(--accent)", to: "rgba(79,216,255,.4)", glow: true },
    { height: 90, forecast: true, bg: "rgba(79,216,255,.08)", border: "rgba(79,216,255,.55)" },
    { height: 98, forecast: true, bg: "rgba(79,216,255,.06)", border: "rgba(79,216,255,.4)" },
  ],
  stats: [
    { label: "CONVERSION", value: "4.7%" },
    { label: "CHURN", value: "1.9%" },
    { label: "LTV", value: "$3.4k" },
  ],
};

// Sub-service accordion — replaces the old CAPABILITIES block (subservice-expansion-plan-v6,
// "Data — APPROVED"). Intro paragraphs updated post-build per Eric's direct edit; the rest of
// the section's copy is still verbatim from the plan doc.
export const SUBSERVICE_GROUPS = [
  {
    eyebrow: "What we do",
    heading: "Four stages, each one unlocks the next.",
    paragraphs: [
      "Clean, reliable data is what makes reporting valuable. Quality reporting is what makes analysis worth trusting. And trusted analysis is the foundation upon which advanced data science techniques can be confidently implemented.",
      "Most businesses are somewhere in the first two stages. You don't necessarily need to do all four stages, depending on your need, and we will focus on one stage at a time, keeping you updated along the way.",
    ],
    numbered: true,
    items: [
      {
        number: "01",
        id: "data-foundations",
        // RESERVED, unrouted. Do not add a route, sitemap entry, or page component for this
        // slug — anchor-only until outreach data shows real demand to promote it (same for
        // every `slug` in this file; see subservice-expansion-plan-v6.md).
        slug: "/data/foundations/",
        title: "Data Foundations",
        outcome: "Get everything into one place, clean, current, and updating itself.",
        body: "Most businesses already have the data they need. It's just scattered across systems that were never meant to talk to each other. We connect those sources, clean what comes out, and set the whole thing to run on its own, so everything downstream starts from numbers you can trust.",
        symptoms: [
          "Your numbers live in different systems and never quite agree",
          "Someone on your team spends hours every week copying data between spreadsheets",
          "You've been told a report isn't possible because the data isn't there yet",
        ],
        deliverables: [
          "One place where your data from every system lands together",
          "Automated collection that runs on schedule instead of by hand",
          "Cleaning and de-duplication so records match across sources",
          "Checks that flag bad or missing data before it reaches a report",
          "Documentation of where every number comes from",
        ],
        markColor: ACCENT,
        hoverBorder: hexToRgba(ACCENT, 0.45),
      },
      {
        number: "02",
        id: "reporting-dashboards",
        slug: "/data/reporting-dashboards/",
        title: "Reporting & Dashboards",
        outcome: "See what's happening without rebuilding a spreadsheet.",
        body: "Most businesses already produce reports. The catch is that a person has to build them, usually the same person, usually on a Monday morning. We take what you're assembling by hand and turn it into something that's just there when you open it: current, on your phone or your desktop, and showing everyone the same numbers.",
        symptoms: [
          "Your weekly numbers get built by hand and are stale by the time anyone reads them",
          "Two people pull the same report and come back with different answers",
          "Only one person actually knows how the spreadsheet works",
        ],
        deliverables: [
          "Dashboards that update on their own, on desktop and phone",
          "One agreed definition for every number, so nobody argues about whose figure is right",
          "Reports that send themselves on whatever schedule suits you",
          "Separate views per team, so people see what's theirs and not everything at once",
          "Room to answer a new question yourself instead of waiting on whoever owns the spreadsheet",
        ],
        markColor: ACCENT3,
        hoverBorder: hexToRgba(ACCENT3, 0.45),
      },
      {
        number: "03",
        id: "analytics-forecasting",
        slug: "/data/analytics-forecasting/",
        title: "Analytics & Forecasting",
        outcome: "Understand why something happened and what's likely next.",
        body: "A dashboard tells you what happened. It rarely tells you why. This is the work of pulling apart what is actually driving your results and what only looks like it is, then using that to put a credible number on what's coming. It's the difference between noticing that revenue dipped and knowing which of the six things you changed that month caused it.",
        symptoms: [
          "You can see the numbers moving but nobody can say why",
          "You're planning next year off last year plus a gut feeling",
          "You want to know whether something you spent money on actually worked",
        ],
        deliverables: [
          "A clear read on which factors genuinely move your results and which are coincidence",
          "Forecasts for demand, revenue, or inventory, with an honest range rather than one confident number",
          "Before-and-after measurement on a change you made, so you know if it paid",
          "Scenario answers: what happens to the business if this goes up and that goes down",
          "A written explanation of the method in plain English, so you can defend the numbers to someone else",
        ],
        markColor: ACCENT2,
        hoverBorder: hexToRgba(ACCENT2, 0.45),
      },
      {
        number: "04",
        id: "data-science-ml",
        slug: "/data/data-science-machine-learning/",
        title: "Data Science & Machine Learning",
        outcome: "Systems that predict, score, and decide on their own.",
        body: "Everything above puts a person in front of the numbers to make a call. This stage lets the numbers make the routine calls themselves. A model learns the patterns in your own history and then applies them to every new record as it arrives: which customers are about to leave, which orders look wrong, which of tomorrow's jobs will run late. You still set the rules and see every call it makes. It just handles the volume no team could work through by hand.",
        symptoms: [
          "You'd act on something if you could spot it early, but you only find out after the fact",
          "The judgment call is repeatable, but it happens too many times per day or week for anyone to keep up",
          "An algorithm could learn what your best customers have in common, but nobody has built one for your business",
        ],
        deliverables: [
          "Scoring that flags the records worth your attention, ranked, as they come in",
          "Predictions built on your own history rather than an industry average",
          "A plain-English account of what the model weighs, so it's never a black box",
          "Monitoring that tells you when the model starts drifting, before it makes bad calls",
          "An honest answer up front on whether this is worth building for you at all",
        ],
        markColor: ACCENT,
        hoverBorder: hexToRgba(ACCENT, 0.45),
      },
    ],
  },
];

export const PIPELINE_EYEBROW = "The pipeline";
export const PIPELINE_HEADING = "From raw source to real result.";

export const PIPELINE = [
  {
    label: "STEP 01",
    labelColor: ACCENT,
    title: "Collect",
    description: "Pull from every platform, database and spreadsheet into one place.",
  },
  {
    label: "STEP 02",
    labelColor: ACCENT,
    title: "Standardize",
    description: "Clean, de-duplicate and automate so data stays consistent.",
  },
  {
    label: "STEP 03",
    labelColor: ACCENT3,
    title: "Compute",
    // Changed per subservice-expansion-plan-v6 ("Data pipeline — stage lines"): "forecasting"
    // dropped as redundant with "statistical modeling" and to bring this card's copy length
    // in line with the other three steps.
    description: "Apply statistical modeling or business logic to turn data into something useful.",
  },
  {
    label: "STEP 04",
    title: "Deliver",
    description: "Put it wherever it's needed: a live dashboard, a report, or straight into another system.",
    highlighted: true,
  },
];

// Connects each pipeline step to the sub-service stage(s) that do that work — an orientation
// diagram, not an exhaustive coverage matrix (see plan doc). Data-only; no other page's
// pipeline gets this treatment. `steps` are zero-based indices into PIPELINE above.
export const PIPELINE_STAGE_LINES = [
  { steps: [0, 1], labels: ["Data Foundations"] },
  {
    steps: [2],
    labels: ["Analytics & Forecasting", "Data Science & Machine Learning"],
    mobileLabels: ["Analytics", "Data Science"],
  },
  {
    steps: [3],
    labels: ["Reporting & Dashboards"],
    mobileLabels: ["Reporting", "Dashboards"],
  },
];

export const CTA = {
  heading: "Ready to trust your numbers?",
  text: "Tell us where your data lives today and we'll map the fastest path to clean, useful, decision-ready analytics.",
  buttonLabel: "Start a data project",
};
