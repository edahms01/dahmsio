import { ACCENT, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";
import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.consulting,
  title: "Data & Tech Consulting — DahmsIO",
  description:
    "Data & technology strategy, product consulting, and embedded analyst and engineer resourcing from DahmsIO.",
};

export const HERO = {
  eyebrow: "Data & Tech Consulting",
  heroPrefix: "Vision, strategy and talent that become",
  heroAccent: "part of your business",
  heroSubcopy:
    "From strategy and vision to hands-on resourcing, we plug into how you already work, so every project has the right thinking and the right people behind it.",
  primaryCtaLabel: "Scope a consulting project",
};

// Hero mockup — RoadmapMockup, ported from the Claude Design hero graphic (project
// a37bbdf4, Consulting.dc.html): a four-stage engagement timeline (Discover -> Plan -> Embed
// -> Deliver) sitting above the current-sprint/columns block, replacing the prior
// sprint-board-only KanbanMockup.
export const MOCKUP = {
  filename: "roadmap.io",
  headerLabel: "PRODUCT ROADMAP",
  progressPercent: 62,
  stages: [
    { label: "Discover", state: "done" },
    { label: "Plan", state: "done" },
    { label: "Embed", state: "current" },
    { label: "Deliver", state: "upcoming" },
  ],
  sprintLabel: "CURRENT SPRINT",
  sprintName: "Sprint 14 · Embed phase",
  status: "On track",
  progress: 60,
  progressLabel: "Day 6 of 10",
  columns: [
    { title: "TO DO", item: "Stakeholder review", variant: "default" },
    { title: "IN PROGRESS", item: "Roadmap v2", variant: "active" },
    { title: "DONE", item: "Discovery", variant: "done" },
  ],
};

export const CAPABILITIES_HEADING = "Two disciplines, one embedded team.";
export const CAPABILITIES_HEADING_WIDTH = "22ch";

export const CAPABILITIES = [
  {
    title: "Strategy & Product",
    description: "Define the roadmap and the product decisions that get you where you're going.",
    rows: [
      "Data & technology strategy",
      "Product & Agile consulting",
      "Roadmapping & prioritization",
      "Stakeholder alignment",
    ],
    markColor: ACCENT,
    hoverBorder: hexToRgba(ACCENT, 0.45),
  },
  {
    title: "Talent & Design",
    description: "Embed the specialist skills your team needs, exactly when you need them.",
    rows: ["Analyst & engineer resourcing", "UX & product design", "Team augmentation", "Interim leadership"],
    markColor: ACCENT3,
    hoverBorder: hexToRgba(ACCENT3, 0.45),
  },
];

export const PIPELINE_EYEBROW = "The engagement";
export const PIPELINE_HEADING = "From first conversation to embedded team.";

export const PIPELINE = [
  {
    label: "STEP 01",
    labelColor: ACCENT,
    title: "Discover",
    description: "Understand your goals, constraints and where strategy or extra hands would help most.",
  },
  {
    label: "STEP 02",
    labelColor: ACCENT,
    title: "Plan",
    description: "Shape a roadmap and resourcing plan scoped to your timeline and budget.",
  },
  {
    label: "STEP 03",
    labelColor: ACCENT3,
    title: "Embed",
    description: "Our strategists, analysts or engineers plug directly into your existing team.",
  },
  {
    label: "STEP 04",
    title: "Deliver",
    description: "Ship against the roadmap, with regular check-ins so nothing drifts.",
    highlighted: true,
  },
];

export const CTA = {
  heading: "Ready to bring in the right people?",
  text: "Tell us the gap, strategic or hands-on, and we'll map the right mix of thinking and talent to close it.",
  buttonLabel: "Start a consulting project",
};
