import { ACCENT, ACCENT2, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";
import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.consulting,
  title: "Data & Tech Consulting | DahmsIO",
  description:
    "Data and technology assessment, strategy and product consulting, plus embedded analysts, engineers, and interim leadership from DahmsIO.",
};

export const HERO = {
  eyebrow: "Data & Tech Consulting",
  heroPrefix: "Strategy, vision, and talent that become",
  heroAccent: "part of your business",
  heroSubcopy:
    "Some problems need a decision made. Others need someone to do the work. We plug into how you already run things, so every project has the right thinking and the right people behind it.",
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
      "Every advisory engagement answers three questions: what's actually happening, what should happen next, and how the work gets carried out once you commit. Start wherever you need. No build, no code, and no obligation to take on further work afterward.",
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
        outcome: "A clear, honest picture of what you have and what it's costing you.",
        body: "Before anything gets fixed, someone has to look at it plainly. We go through your systems, your process, your data, and the competitive landscape around you, then tell you what's actually working, what's quietly costing you time or money, and what to leave alone. No build happens here, and no assumption that one should.",
        symptoms: [
          "You suspect something's wrong but can't put your finger on what",
          "You want a second opinion before committing to a bigger project",
          "You don't know how you compare to competitors, or what they're doing that you aren't",
          "You inherited systems or a process nobody on your team fully understands anymore",
        ],
        deliverables: [
          "A plain-English writeup of what you have today and how it's actually performing",
          "A ranked list of what's genuinely costing you time or money, and what isn't",
          "A look at where you stand against competitors and where the market's heading",
          "Recommendations you can act on yourself, hand to your team, or bring back to us",
          "No obligation to do anything else afterward",
        ],
        markColor: ACCENT,
        hoverBorder: hexToRgba(ACCENT, 0.45),
        // Footnote-style cross-link to a related sub-service on another page. Rendered as a
        // small italic aside beneath `body`, not part of the approved plan-doc copy — see
        // SubServiceSection.jsx.
        crossLink: {
          before:
            "Audits tend to circle back to the same thing: the data itself needs work first. That's ",
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
        outcome: "A clear plan for what to do next and in what order.",
        body: "Knowing something's wrong isn't the same as knowing what to do about it. We take stock of where you are, where you want to get to, and what you can actually afford right now, then turn that into a sequenced plan: what happens first, what comes after, and what can wait. You walk away with a roadmap, not a stack of options.",
        symptoms: [
          "You have five things you know you should fix and no idea which one to start with",
          "You're planning next year's budget and want the technology and data pieces to make sense together",
          "You've been given a vague mandate to \"modernize\" and need it turned into an actual plan",
        ],
        deliverables: [
          "A written roadmap sequencing what to tackle now, next, and later",
          "Priorities weighed against your actual budget and timeline, not a wish list",
          "Clear success measures for each phase, so you know if it's working",
          "A plan built to hand to your own team, or bring back to us to run",
        ],
        markColor: ACCENT3,
        hoverBorder: hexToRgba(ACCENT3, 0.45),
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
        body: "A roadmap tells you what to build. This is where that turns into a plan a team can actually execute: needs mapped out, features defined and prioritized, wireframes or a clickable prototype if it helps everyone see the same thing before a line of code gets written. We can lead the process or work alongside whoever's already running it. The full build happens under a separate engagement, this is the thinking that shapes it.",
        symptoms: [
          "You know what you want built but not exactly how it should work or look",
          "You're running a build project yourself and want an experienced product person guiding the approach",
          "You want to see it before you commit, in wireframes or a working prototype, not just a written spec",
        ],
        deliverables: [
          "Requirements and priorities defined clearly enough for a team to build against",
          "Wireframes or a clickable prototype, so everyone sees the same thing before code gets written",
          "Agile process and stakeholder alignment run for you",
          "A scoped, ready-to-build plan you can hand to your own team, ours, or anyone else",
        ],
        markColor: ACCENT2,
        hoverBorder: hexToRgba(ACCENT2, 0.45),
      },
    ],
  },
  {
    eyebrow: "Talent",
    heading: "The people to make it happen.",
    paragraphs: [
      "Advisory answers what to do. Talent answers who does it, whether that's extra hands for a specific project or a senior leader directing the effort. Both join your team directly rather than working from a separate shop.",
    ],
    numbered: false,
    items: [
      {
        // Unnumbered per D3/plan (Talent's own intro states explicitly it is not a sequence)
        // — the "01"/"02" in the plan doc are document ordering only, not display numbers.
        id: "embedded-specialists",
        slug: "/consulting/embedded-specialists/",
        title: "Embedded Specialists",
        outcome: "The right person on your team, for exactly as long as you need them.",
        body: "Sometimes the gap isn't a decision, it's hands. We place analysts, engineers, or designers directly into your team, working alongside the people you already have rather than off in a separate shop. You get someone who shows up to your meetings and knows your systems, for the stretch of time the work actually requires, not a fixed headcount you're stuck with after it's done. They're not working in isolation either, when something calls for a second opinion or a harder problem needs another mind, they can bring it back to our wider network rather than guessing alone.",
        symptoms: [
          "You have more work than people, but not enough to justify a full-time hire",
          "You need a specific skill, data engineering, design, development, that nobody on your team has right now",
          "A key person is on leave or just left, and the work can't wait for a replacement search",
        ],
        deliverables: [
          "A vetted specialist embedded directly in your team, not working from a separate queue",
          "Analysts, engineers, or designers, matched to the specific gap you have",
          "Someone who joins your meetings and knows your systems, not a black box handing off finished work",
          "Backed by a wider network for a second opinion when a problem calls for one",
          "A commitment sized to the actual work, not locked into a long-term hire",
        ],
        markColor: ACCENT,
        hoverBorder: hexToRgba(ACCENT, 0.45),
      },
      {
        id: "interim-leadership",
        slug: "/consulting/interim-leadership/",
        title: "Interim Leadership",
        outcome: "Senior, strategic leadership for the gap in your team.",
        body: "Not all gaps need extra hands for day-to-day work, some need senior, strategic leadership. We step in as your data or technology lead for as long as the gap lasts, directing strategy, managing the people already doing the work, and answering directly to you. When you're ready to hire permanently or the gap closes, we hand everything over cleanly.",
        symptoms: [
          "You need senior technology or data leadership but aren't ready to hire a full-time executive",
          "You're growing fast and nobody on your team owns those decisions yet",
          "A leader just left and you need continuity while you search for their replacement",
        ],
        deliverables: [
          "A senior leader directing strategy and owning the decisions during the gap",
          "Direct accountability to you, not buried inside a larger team",
          "Guidance for any specialists or staff already in place",
          "A clean handoff plan for when you hire permanently or the gap closes",
        ],
        markColor: ACCENT3,
        hoverBorder: hexToRgba(ACCENT3, 0.45),
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
    labelColor: ACCENT,
    title: "Discover",
    description: "Understand your business, your systems, and where things actually stand.",
  },
  {
    label: "STEP 02",
    labelColor: ACCENT,
    title: "Plan",
    description: "Turn what we learned into a prioritized, sequenced set of recommendations.",
  },
  {
    label: "STEP 03",
    labelColor: ACCENT3,
    title: "Refine",
    description: "Walk the plan through with you and adjust it based on what you push back on.",
  },
  {
    label: "STEP 04",
    title: "Deliver",
    description: "A finished roadmap or plan, ready to act on, by you, by us, or by anyone else.",
    highlighted: true,
  },
];

export const CTA = {
  heading: "Ready to close the gap?",
  text: "Tell us where the gap is and we'll map whether you need advice, extra hands, or both.",
  buttonLabel: "Start a consulting project",
};
