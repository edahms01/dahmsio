import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.technology,
  title: "Tech Implementation | DahmsIO",
  description:
    "DahmsIO builds technology that closes the gaps in your business: custom software, systems integration, workflow automation, and AI implementation.",
};

export const HERO = {
  eyebrow: "Tech Implementation",
  heroPrefix: "Technology that closes the",
  heroAccent: "gaps in your business",
  heroSubcopy:
    "We bring innovation into your business with new software and AI tools that work alongside the systems you already have.",
  primaryCtaLabel: "Scope a tech project",
};

export const MOCKUP = {
  filename: "integration.ts",
  terminalCommand: "$ npm run deploy",
  terminalResult: "✓ Build complete, deployed to production",
};

// Sub-service accordion — replaces the old CAPABILITIES block (subservice-expansion-plan-v6,
// "Technology — APPROVED"). First intro paragraph updated post-build per Eric's direct edit;
// the rest of the section's copy is still verbatim from the plan doc.
export const SUBSERVICE_GROUPS = [
  {
    eyebrow: "What we build",
    heading: "Build, connect, automate, then add AI.",
    paragraphs: [
      "Each step makes the next one more useful. Connected systems are easier to automate, and automated processes give AI something reliable to work with.",
      "You don't need to start at the beginning. If you already run plenty of systems and need one piece added, like a connection, an automation, or AI, tell us where you are and we'll start there.",
    ],
    numbered: true,
    items: [
      {
        number: "01",
        id: "custom-software",
        // RESERVED, unrouted. Do not add a route, sitemap entry, or page component for this
        // slug — anchor-only until outreach data shows real demand to promote it (same for
        // every `slug` in this file; see subservice-expansion-plan-v6.md).
        slug: "/technology/custom-software-development/",
        title: "Custom Software Development",
        outcome: "Software built around how your business works.",
        body: "Off-the-shelf tools make your business work the way the software expects. When that stops fitting, we build software around your process instead: web apps, mobile apps, or internal tools your team uses every day.",
        symptoms: [
          "Your team spends time working around a tool's limits",
          "Nothing off-the-shelf fits how your business runs",
          "You've outgrown a spreadsheet or a patched-together tool that was never meant to last",
        ],
        deliverables: [
          "Software built around your process",
          "Everything from the screens your team uses to the database behind them, built to work together",
          "Web and mobile versions wherever your team needs them",
          "Built so new features can be added later",
        ],
        // Footnote-style cross-link to a related sub-service on another page. Rendered as a
        // small italic aside beneath `body`, not part of the approved plan-doc copy — see
        // SubServiceSection.jsx.
        crossLink: {
          before: "Locking in scope before development starts is usually an ",
          linkText: "Advisory",
          after: " conversation.",
          to: "/consulting/",
        },
      },
      {
        number: "02",
        id: "systems-integration",
        slug: "/technology/systems-integration/",
        title: "Systems Integration",
        outcome: "Connect the tools you already use so they share information automatically.",
        body: "One tool holds your customers, another holds your orders, and a third holds your finances, and none of them share information. We connect what you already have, and when a new system joins, we set it up to work with the rest from day one.",
        symptoms: [
          "The same information gets typed into two or three different systems",
          "You recently added a new tool and now it doesn't connect to what you already had",
          "Someone's full-time job is moving data from one place to another",
        ],
        deliverables: [
          "Your existing systems connected, so information moves between them automatically",
          "New systems added cleanly, with everything you already run still working",
          "A single source of truth that all your systems share",
          "Fewer manual handoffs between tools and between people",
        ],
        // Footnote-style cross-link to a related sub-service on another page. Rendered as a
        // small italic aside beneath `body`, not part of the approved plan-doc copy — see
        // SubServiceSection.jsx.
        crossLink: {
          before: "Once systems are connected, seeing it all in one place usually comes down to ",
          linkText: "Reporting & Dashboards",
          after: ".",
          to: "/data/",
        },
      },
      {
        number: "03",
        id: "workflow-automation",
        slug: "/technology/workflow-automation/",
        title: "Workflow Automation",
        outcome: "Put the repetitive parts of your business on autopilot.",
        body: "Every business has tasks that happen the same way every time: a form gets filled out, an invoice gets sent, a follow-up email goes out three days later. We find where that repetition lives and automate it, so your team can spend their time on work that needs a person.",
        symptoms: [
          "The same multi-step task happens every day or week, the same way each time",
          "A new customer or order kicks off a checklist someone has to remember to run through",
          "You've thought \"there has to be a faster way to do this\" more than once",
        ],
        deliverables: [
          "Repetitive steps that start on their own, so nobody has to remember them",
          "Fewer missed steps and forgotten follow-ups",
          "Notifications and hand-offs that happen automatically at the right moment",
          "More time for your team to focus on work that needs their judgment",
        ],
      },
      {
        number: "04",
        id: "ai-implementation",
        slug: "/technology/ai-implementation/",
        title: "AI Implementation",
        outcome: "AI that does real work inside your business.",
        body: "Most AI talk is either overhyped or too vague to act on. We build the specific piece that helps: an assistant that knows your business and answers your team's questions, or a tool that takes action across your systems on its own. Before anything gets built, we'll tell you what's worth building and what isn't.",
        symptoms: [
          "Your team answers the same kind of question over and over, and most of the answer already lives in your systems",
          "You want software that takes action across your tools, and stops when it should",
          "You've been pitched AI more than once and want a plain answer on what's worth it for you",
        ],
        deliverables: [
          "An assistant that knows your business's own information",
          "Assistants that can take action in the tools you already use",
          "The rules that link several steps into one process that runs on its own",
        ],
      },
    ],
  },
];

export const PIPELINE_EYEBROW = "The build";
export const PIPELINE_HEADING = "From first idea to working system.";

export const PIPELINE = [
  {
    label: "STEP 01",
    title: "Discover",
    description: "Review the systems you run today and where something new would fit.",
  },
  {
    label: "STEP 02",
    title: "Strategize",
    description: "Plan the approach around your systems, budget, and timeline.",
  },
  {
    label: "STEP 03",
    title: "Build",
    description: "Build what's new and connect it to what you already run.",
  },
  {
    label: "STEP 04",
    title: "Optimize",
    description: "Launch it, watch how it performs, and keep improving it.",
    highlighted: true,
  },
];

export const CTA = {
  heading: "Ready to build something that lasts?",
  text: "You don't need to know what to build. Tell us the problem, and we'll design the technology that fixes it.",
  buttonLabel: "Start a tech project",
};
