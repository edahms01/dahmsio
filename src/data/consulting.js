import { ACCENT, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";

export const HERO = {
  eyebrow: "Data & Tech Consulting",
  heroPrefix: "Strategy and talent that become part of your",
  heroAccent: "team",
  heroSubcopy:
    "From technology strategy to hands-on resourcing, we plug into how you already work, so every project has the right thinking and the right people behind it.",
  primaryCtaLabel: "Scope a consulting project",
};

export const MOCKUP = {
  filename: "sprint_board.io",
  sprintLabel: "CURRENT SPRINT",
  sprintName: "Sprint 14",
  status: "On track",
  progress: 60,
  progressLabel: "Day 6 of 10",
  columns: [
    {
      title: "TO DO",
      items: [{ label: "Stakeholder review", variant: "default" }],
    },
    {
      title: "IN PROGRESS",
      items: [
        { label: "Roadmap v2", variant: "active" },
        { label: "API design", variant: "default" },
      ],
    },
    {
      title: "DONE",
      items: [
        { label: "Discovery", variant: "done" },
        { label: "Kickoff", variant: "done" },
      ],
    },
  ],
  stats: [
    { label: "VELOCITY", value: "32" },
    { label: "TEAM SIZE", value: "6" },
    { label: "NPS", value: "9.4" },
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
