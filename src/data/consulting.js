import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.consulting,
  title: "Data & Tech Consulting | DahmsIO",
  description:
    "Data and technology consulting from DahmsIO: assessments, strategy, and product direction, plus embedded specialists and interim leadership.",
};

export const HERO = {
  eyebrow: "Data & Tech Consulting",
  heroPrefix: "Strategy, vision, and talent that become",
  heroAccent: "part of your business",
  heroSubcopy:
    "Some problems need a decision made. Others need someone to do the work. We can help with both, working inside your business the way it already runs.",
  primaryCtaLabel: "Scope a consulting project",
};

// Hero mockup — RoadmapMockup, ported from the Claude Design hero graphic (project
// a37bbdf4, Consulting.dc.html): a four-stage engagement timeline (Discover -> Plan -> Refine
// -> Deliver) sitting above the current-sprint/columns block, replacing the prior
// sprint-board-only KanbanMockup. Stage 3 updated from "Embed" to "Refine" to match the
// Advisory pipeline's new step 03 (see PIPELINE below) — the old label no longer matched
// once the pipeline was replaced.
export const MOCKUP = {
  filename: "roadmap.io",
  headerLabel: "ROADMAP",
  progressPercent: 62,
  stages: [
    { label: "Discover", state: "done" },
    { label: "Plan", state: "done" },
    { label: "Refine", state: "current" },
    { label: "Deliver", state: "upcoming" },
  ],
  sprintLabel: "CURRENT SPRINT",
  sprintName: "Sprint 14 · Refine phase",
  status: "On track",
  progress: 60,
  progressLabel: "Day 6 of 10",
  columns: [
    { title: "TO DO", item: "Stakeholder review", variant: "default" },
    { title: "IN PROGRESS", item: "Roadmap v2", variant: "active" },
    { title: "DONE", item: "Discovery", variant: "done" },
  ],
};

// Sub-service accordion — replaces the old CAPABILITIES block (subservice-expansion-plan-v6,
// "Consulting — APPROVED"). Copy is verbatim from that file; do not edit wording here.
// Two independent groups, no page-level intro above them — each carries its own eyebrow,
// heading, and intro instead. Accent color cycles continuously across both groups in
// document order (Advisory 01-03, then Talent), same convention as Data/Technology's single
// group.
export const SUBSERVICE_GROUPS = [
  {
    eyebrow: "Advisory",
    heading: "Think before you build.",
    paragraphs: [
      "Every advisory engagement answers three questions: what's happening now, what should happen next, and how the work gets done once you commit. Start wherever you need. Advisory is planning only, and there's no obligation to continue with us afterward.",
    ],
    numbered: true,
    items: [
      {
        number: "01",
        id: "assessment-audit",
        // RESERVED, unrouted. Do not add a route, sitemap entry, or page component for this
        // slug — anchor-only until outreach data shows real demand to promote it (same for
        // every `slug` in this file; see subservice-expansion-plan-v6.md).
        slug: "/consulting/assessment-audit/",
        title: "Assessment & Audit",
        outcome: "A clear picture of what you have and what it's costing you.",
        body: "Before anything gets fixed, someone has to look at it plainly. We review your systems, processes, data, and how your competitors operate, then tell you what's working, what's costing you time or money, and what to leave alone.",
        symptoms: [
          "You suspect something's wrong but can't put your finger on what",
          "You want a second opinion before committing to a bigger project",
          "You don't know how your business compares to competitors, or what they're doing that you aren't",
          "You inherited systems or a process nobody on your team fully understands anymore",
        ],
        deliverables: [
          "A plain-English writeup of what you have today and how it's performing",
          "A ranked list of what's costing you time or money, and what isn't",
          "A look at where you stand against competitors and where the market's heading",
          "Recommendations you can act on yourself, hand to your team, or bring back to us",
        ],
        // Footnote-style cross-link to a related sub-service on another page. Rendered as a
        // small italic aside beneath `body`, not part of the approved plan-doc copy — see
        // SubServiceSection.jsx.
        crossLink: {
          before:
            "Audits often find that the data needs work first. That's ",
          linkText: "Data Foundations",
          after: ".",
          to: "/data/",
        },
      },
      {
        number: "02",
        id: "strategy-roadmap",
        slug: "/consulting/strategy-roadmap/",
        title: "Strategy & Roadmap",
        outcome: "A plan for what to do next, and in what order.",
        body: "Once you know what's wrong, the next question is what to do about it. We look at where you are, where you want to be, and what you can afford right now, then turn that into a plan: what happens first, what comes next, and what can wait.",
        symptoms: [
          "You have five things you know you should fix and no idea which one to start with",
          "You're planning next year's budget and want the technology and data pieces to make sense together",
          "You've been given a vague mandate to \"modernize\" and need it turned into a concrete plan",
        ],
        deliverables: [
          "A written roadmap sequencing what to tackle now, next, and later",
          "Priorities weighed against your real budget and timeline",
          "Clear success measures for each phase, so you know if it's working",
          "A plan built to hand to your own team, or bring back to us to implement",
        ],
        // Footnote-style cross-link to a related sub-service on another page. Rendered as a
        // small italic aside beneath `body`, not part of the approved plan-doc copy — see
        // SubServiceSection.jsx.
        crossLink: {
          before: "Roadmaps often surface a manual process worth automating. That's ",
          linkText: "Workflow Automation",
          after: ".",
          to: "/technology/",
        },
      },
      {
        number: "03",
        id: "product-delivery",
        slug: "/consulting/product-delivery/",
        title: "Product & Delivery",
        outcome: "Product thinking and hands-on direction once you've decided to build something.",
        body: "A roadmap tells you what to build. This stage turns it into a plan a team can work from: needs mapped out, features defined and prioritized, and wireframes or a clickable prototype so everyone sees the same thing before any code is written. We can lead the process or support whoever's already running it. The build itself is a separate engagement.",
        symptoms: [
          "You know what you want built but not how it should work or look",
          "You're running a build project yourself and want an experienced product person guiding the approach",
          "You want to see it before you commit, in wireframes or a working prototype, not just a written spec",
        ],
        deliverables: [
          "Requirements and priorities defined clearly enough for a team to build against",
          "Wireframes or a clickable prototype, so everyone sees the same thing before code gets written",
          "We run the planning meetings and keep everyone agreed on priorities",
          "A scoped, ready-to-build plan you can hand to your own team, ours, or anyone else",
        ],
      },
    ],
  },
  {
    eyebrow: "Talent",
    heading: "The people to make it happen.",
    paragraphs: [
      "Advisory answers what to do. Talent answers who does it, whether that's extra hands for a specific project or a senior leader directing the effort. Either way, they work inside your team.",
    ],
    numbered: false,
    items: [
      {
        // Unnumbered per D3/plan (Talent's own intro states explicitly it is not a sequence)
        // — the "01"/"02" in the plan doc are document ordering only, not display numbers.
        id: "embedded-specialists",
        slug: "/consulting/embedded-specialists/",
        title: "Embedded Specialists",
        outcome: "The right person on your team, for as long as you need them.",
        body: "Some work just needs more hands. We place analysts, engineers, or designers directly into your team, working alongside the people you already have. They join your meetings, learn your systems, and stay for as long as the work takes. When a problem needs a second opinion or more experience, they can call on the rest of our network.",
        symptoms: [
          "You have more work than people, but not enough to justify a full-time hire",
          "You need a skill nobody on your team has right now (data engineering, design, or development)",
          "A key person is on leave or just left, and the work can't wait for a replacement search",
        ],
        deliverables: [
          "A vetted specialist working inside your team",
          "Analysts, engineers, or designers, matched to the work",
          "Backed by our wider network when a problem needs a second opinion",
          "A commitment that ends when the work does",
        ],
      },
      {
        id: "interim-leadership",
        slug: "/consulting/interim-leadership/",
        title: "Interim Leadership",
        outcome: "Senior, strategic leadership for the gap in your team.",
        body: "Some teams need a senior leader more than extra hands. We step in as your data or technology lead for as long as you need, setting strategy, managing the people already doing the work, and reporting directly to you. When you hire permanently, we hand everything over cleanly.",
        symptoms: [
          "You need senior technology or data leadership but aren't ready to hire a full-time executive",
          "You're growing fast and nobody on your team owns those decisions yet",
          "A leader just left and you need continuity while you search for their replacement",
        ],
        deliverables: [
          "A senior leader setting strategy and owning the decisions",
          "Accountable directly to you",
          "Guidance for any specialists or staff already in place",
          "A clean handover plan for when you hire permanently",
        ],
      },
    ],
  },
];

export const PIPELINE_EYEBROW = "The engagement";
// Updated post-build per Eric's review of the flagged Pass 3 open item (was "From first
// conversation to embedded team." — no longer fit the Advisory-only, no-embedding pipeline).
export const PIPELINE_HEADING = "From first conversation to a finished plan.";

// Pipeline replaced entirely (Discover -> Plan -> Refine -> Deliver), Advisory only — see
// subservice-expansion-plan-v6.md "Consulting pipeline (APPROVED)". Talent gets no pipeline;
// placing a specialist or a leader isn't a sequence the way running an advisory engagement is.
export const PIPELINE = [
  {
    label: "STEP 01",
    title: "Discover",
    description: "Understand your business, your systems, and where things stand.",
  },
  {
    label: "STEP 02",
    title: "Plan",
    description: "Turn what we learn into a prioritized set of recommendations.",
  },
  {
    label: "STEP 03",
    title: "Refine",
    description: "Walk through the plan with you and adjust it based on your feedback.",
  },
  {
    label: "STEP 04",
    title: "Deliver",
    description: "A finished roadmap, ready for you, us, or anyone else to act on.",
    highlighted: true,
  },
];

export const CTA = {
  heading: "Ready to decide what's next?",
  text: "Tell us what's holding your business back and we'll work out whether you need advice, extra hands, or both.",
  buttonLabel: "Start a consulting project",
};
