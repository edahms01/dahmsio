import { ACCENT, ACCENT2, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";
import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.technology,
  title: "Tech Implementation | DahmsIO",
  description:
    "DahmsIO implements the technology that closes gaps in your business. Software development, systems integration, workflow automation, and AI implementation.",
};

export const HERO = {
  eyebrow: "Tech Implementation",
  heroPrefix: "Implement the technology that closes",
  heroAccent: "gaps in your business",
  heroSubcopy:
    "From new builds to connecting the older systems you can't replace, we work out how the pieces fit together, so every system you rely on is modern, connected, and built to last.",
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
    heading: "Built, connected, automated, and made intelligent.",
    paragraphs: [
      "Build the software, connect it to what you already run, automate the manual work between them, then let AI sit on top. Each step makes the next one worth doing.",
      "You don't need to start at the beginning. If you're already running plenty of systems and just need one piece added, a connection, an automation, or an AI layer. Tell us where you are and we'll start there.",
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
        outcome: "Software built around how your business actually works.",
        body: "Off-the-shelf tools ask your business to work the way the software expects. When that stops fitting, we design and build something instead, a web app, a mobile app, or an internal tool your team uses every day, built full stack from the database up, so the system matches your process instead of you working around its limits.",
        symptoms: [
          "You're working around a tool instead of it working for you",
          "Nothing off-the-shelf actually fits how your business runs",
          "You've outgrown a spreadsheet or a patched-together tool that was never meant to last",
        ],
        deliverables: [
          "A working application built for your process, not a generic template",
          "Interface, logic, and database all built to work together",
          "Web and mobile versions wherever your team needs them",
          "An architecture built to be extended later, not thrown away and rebuilt",
        ],
        markColor: ACCENT,
        hoverBorder: hexToRgba(ACCENT, 0.45),
      },
      {
        number: "02",
        id: "systems-integration",
        slug: "/technology/systems-integration/",
        title: "Systems Integration",
        outcome: "Connect the tools you already run so they finally talk to each other.",
        body: "Most businesses aren't short on software, they're short on it working together. One tool holds your customers, another holds your orders, and a third holds your finances, and none of them know the others exist. We connect what you already have, and where a new system needs to join the mix, we bring it in clean rather than bolting it on.",
        symptoms: [
          "The same information gets typed into two or three different systems",
          "You just added a new tool and now nothing talks to what you already had",
          "Someone's full-time job is moving data from one place to another",
        ],
        deliverables: [
          "Your existing systems connected, so information moves on its own",
          "A new system brought in without breaking what already works",
          "One source of truth instead of three versions of the same number",
          "Fewer manual handoffs between tools and between people",
        ],
        markColor: ACCENT3,
        hoverBorder: hexToRgba(ACCENT3, 0.45),
      },
      {
        number: "03",
        id: "workflow-automation",
        slug: "/technology/workflow-automation/",
        title: "Workflow Automation",
        outcome: "Put the repetitive parts of your business on autopilot.",
        body: "Every business has a handful of tasks that happen the same way, every single time: a form gets filled out, an invoice gets sent, a follow-up email goes out three days later. None of that needs a person doing it by hand. We map out where the repetition lives and set it to run itself, so your team's time goes toward the work that actually needs a person.",
        symptoms: [
          "The same multi-step task happens every day or every week, exactly the same way",
          "A new customer or order kicks off a checklist someone has to remember to run through",
          "You've thought \"there has to be a faster way to do this\" more than once",
        ],
        deliverables: [
          "The repetitive steps in your process running on their own, without anyone remembering to start them",
          "Fewer things falling through the cracks because a step got missed or forgotten",
          "Notifications and hand-offs that happen automatically at the right moment",
          "Time back for your team to spend where their judgment actually matters",
        ],
        markColor: ACCENT2,
        hoverBorder: hexToRgba(ACCENT2, 0.45),
      },
      {
        number: "04",
        id: "ai-implementation",
        slug: "/technology/ai-implementation/",
        title: "AI Implementation",
        outcome: "AI that does real work inside your business.",
        body: "Most AI talk is either overhyped or too vague to act on. We build the specific piece that actually helps: an assistant that knows your business and answers real questions, an agent that can take action across your systems, or the decision logic that determines what happens next without a person in the loop. You get a straight answer on what's worth building and what isn't, before anything gets built.",
        symptoms: [
          "Your team answers the same kind of question over and over, and most of the answer already lives in your systems",
          "You want something to take action, not just generate text, and stop when it's supposed to",
          "You've been pitched AI more than once and want someone to tell you plainly what's actually worth it for you",
        ],
        deliverables: [
          "An assistant built on your own information, not a generic chatbot",
          "Agents that can take real action across the tools you already use",
          "The orchestration and decision logic that ties multiple steps together into one working system",
          "An honest answer up front on whether this is worth building for you at all",
        ],
        markColor: ACCENT,
        hoverBorder: hexToRgba(ACCENT, 0.45),
      },
    ],
  },
];

export const PIPELINE_EYEBROW = "The build";
export const PIPELINE_HEADING = "From concept to production-ready system.";

export const PIPELINE = [
  {
    label: "STEP 01",
    labelColor: ACCENT,
    title: "Assess",
    description: "Audit your current stack and map where new technology fits or needs to integrate.",
  },
  {
    label: "STEP 02",
    labelColor: ACCENT,
    title: "Architect",
    description: "Design the technical approach around your systems, budget, and timeline.",
  },
  {
    label: "STEP 03",
    labelColor: ACCENT3,
    title: "Build & Integrate",
    description: "Ship new capabilities or connect them cleanly into what you already run.",
  },
  {
    label: "STEP 04",
    title: "Deploy & Monitor",
    description: "Launch with confidence, then monitor performance and iterate.",
    highlighted: true,
  },
];

export const CTA = {
  heading: "Ready to modernize your tech?",
  text: "Show us what you're building or trying to connect. We'll come back with a straight answer on what it takes to make it work reliably.",
  buttonLabel: "Start a tech project",
};
