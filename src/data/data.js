import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.data,
  title: "Data Intelligence | DahmsIO",
  description:
    "DahmsIO turns scattered data into decisions you can trust. Data foundations, reporting and dashboards, analytics and forecasting, and machine learning.",
};

export const HERO = {
  eyebrow: "Data Intelligence",
  heroPrefix: "Turn scattered data into",
  heroAccent: "decisions you can trust",
  heroSubcopy:
    "We pull your numbers from every system into reports and forecasts that update automatically, so you can plan with confidence and trace any figure back to its source.",
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
    { height: 46, from: "rgba(134,195,90,.4)" },
    { height: 62, from: "rgba(134,195,90,.5)" },
    { height: 54, from: "rgba(134,195,90,.6)" },
    { height: 78, from: "rgba(134,195,90,.45)" },
    { height: 70, from: "rgba(134,195,90,.7)" },
    { height: 82, from: "var(--accent)", glow: true },
    { height: 90, forecast: true, bg: "rgba(134,195,90,.08)", border: "rgba(134,195,90,.55)" },
    { height: 98, forecast: true, bg: "rgba(134,195,90,.06)", border: "rgba(134,195,90,.4)" },
  ],
  stats: [
    { label: "CONVERSION", value: "4.7%" },
    { label: "CHURN", value: "1.9%" },
    { label: "LTV", value: "$3.4k" },
  ],
  legend: { actual: "Actual", forecast: "Model Forecast" },
};

// Sub-service accordion — replaces the old CAPABILITIES block (subservice-expansion-plan-v6,
// "Data — APPROVED"). Intro paragraphs updated post-build per Eric's direct edit; the rest of
// the section's copy is still verbatim from the plan doc.
export const SUBSERVICE_GROUPS = [
  {
    eyebrow: "What we do",
    heading: "We build that trust, one stage at a time.",
    paragraphs: [
      "You shouldn't need a translator to understand your own business. We give the data spread across your systems one reliable home. Every report, forecast, and model is built on that foundation, and that's what turns your data into intelligence you can act on.",
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
        outcome: "Get all your data into one place, cleaned and updated automatically.",
        body: "You probably already have the data you need. It's spread across systems that don't easily talk to one another. We connect those sources, clean up the data, and automate the whole process, so every report and forecast starts from the same clean set of numbers.",
        symptoms: [
          "Your numbers live in different systems and never quite agree",
          "Someone on your team spends hours every week copying data between spreadsheets",
          "You've been told a report isn't possible because the data isn't available yet",
        ],
        deliverables: [
          "One place that collects the data from all your systems",
          "Data collected automatically on a set schedule",
          "Cleanup that removes duplicates, so records match across systems",
          "Automated checks that flag bad or missing data before it reaches a report",
          "Documentation of where every number comes from",
        ],
      },
      {
        number: "02",
        id: "reporting-dashboards",
        slug: "/data/reporting-dashboards/",
        title: "Reporting & Dashboards",
        outcome: "Monitor your key numbers at a glance.",
        body: "Most businesses already produce reports. The catch is that someone has to build them, usually the same person, usually on a Monday morning. We automate that work, so your reports update themselves, open on phone or desktop, and show everyone the same numbers.",
        symptoms: [
          "Your weekly numbers get built by hand and are stale by the time anyone reads them",
          "Two people pull the same report and come back with different answers",
          "Only one person knows how the spreadsheet works",
        ],
        deliverables: [
          "Dashboards that update automatically, on desktop and phone",
          "One agreed definition for every number, so nobody argues about whose figure is right",
          "Reports that send themselves on whatever schedule suits you",
          "Separate views for each team, showing what's relevant to them",
          "The tools to answer new questions yourself, whenever they come up",
        ],
      },
      {
        number: "03",
        id: "analytics-forecasting",
        slug: "/data/analytics-forecasting/",
        title: "Analytics & Forecasting",
        outcome: "Understand why something happened and what's likely next.",
        body: "Dashboards show you what happened. We explain why it happened and forecast what comes next. You'll see which decisions moved your numbers, and plan the next quarter on evidence.",
        symptoms: [
          "You can see the numbers moving but nobody can say why",
          "You're planning next year off last year plus a gut feeling",
          "You want to know whether something you spent money on paid off",
        ],
        deliverables: [
          "A clear read on which factors move your results and which are coincidence",
          "Forecasts for demand, revenue, or inventory, with a realistic range around each number",
          "Before-and-after measurement on a change you made, so you know whether it worked",
          "Scenarios that show what happens to the business if costs rise or sales fall",
          "A written explanation of the method in plain English, so you can defend the numbers to someone else",
        ],
      },
      {
        number: "04",
        id: "data-science-ml",
        slug: "/data/data-science-machine-learning/",
        title: "Data Science & Machine Learning",
        outcome: "Systems that predict, score, and decide on their own.",
        body: "Machine learning takes routine calls off your team's plate. A model learns from your own history and flags what matters as new data arrives, like customers about to leave, orders that look wrong, or jobs likely to run late. You set the rules and can see every call it makes.",
        symptoms: [
          "You'd act on problems early if you could see them coming",
          "The same rule-based decision comes up more often than your team can handle",
          "Your data could predict what customers will do next, but nobody has built it for you yet",
        ],
        deliverables: [
          "Automatic scoring that ranks new records by how much they need your attention",
          "Predictions built on your own business history",
          "A plain-English explanation of how the model makes each call",
          "Monitoring that alerts you when the model's accuracy slips",
          "A clear answer up front on whether this is worth building for you",
        ],
        // Footnote-style cross-link to a related sub-service on another page. Rendered as a
        // small italic aside beneath `body`, not part of the approved plan-doc copy — see
        // SubServiceSection.jsx.
        crossLink: {
          before:
            "Letting your team ask the model questions in plain English is part of ",
          linkText: "AI Implementation",
          after: ".",
          to: "/technology/",
        },
      },
    ],
  },
];

export const PIPELINE_EYEBROW = "The flow";
export const PIPELINE_HEADING = "From raw source to real result.";

export const PIPELINE = [
  {
    label: "STEP 01",
    title: "Collect",
    description: "Pull from every platform, database, and spreadsheet into one place.",
  },
  {
    label: "STEP 02",
    title: "Clean",
    description: "Remove duplicates and fix errors so the numbers match everywhere.",
  },
  {
    label: "STEP 03",
    title: "Analyze",
    // Changed per subservice-expansion-plan-v6 ("Data pipeline — stage lines"): "forecasting"
    // dropped as redundant with "statistical modeling" and to bring this card's copy length
    // in line with the other three steps.
    description: "Run the calculations and models that turn your data into answers.",
  },
  {
    label: "STEP 04",
    title: "Deliver",
    description: "Send results wherever they're needed: a live dashboard, a report, or straight into another system.",
    highlighted: true,
  },
];

export const CTA = {
  heading: "Ready to turn your data into intelligence?",
  text: "Tell us where your data lives today. We'll show you the quickest way to numbers you can rely on.",
  buttonLabel: "Start a data project",
};
