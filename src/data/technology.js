import { ACCENT, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";

export const HERO = {
  eyebrow: "Tech Implementation",
  heroPrefix: "Build what's next, without breaking what already",
  heroAccent: "works",
  heroSubcopy:
    "From full-stack builds to legacy integrations, we architect the technology stack, so every system you rely on is modern, connected and built to last.",
  primaryCtaLabel: "Scope a tech project",
};

export const MOCKUP = {
  filename: "integration.ts",
};

export const CAPABILITIES_HEADING = "Two disciplines, one dependable delivery engine.";
export const CAPABILITIES_HEADING_WIDTH = "24ch";

export const CAPABILITIES = [
  {
    title: "Product Development",
    description:
      "Design and build the software your business runs on, from scratch or bolted onto what you already have.",
    rows: [
      "Full-stack app development",
      "Web & mobile app development",
      "System integration & modernization",
      "API & platform architecture",
    ],
    markColor: ACCENT,
    hoverBorder: hexToRgba(ACCENT, 0.45),
  },
  {
    title: "Cloud, AI & Automation",
    description: "Modern infrastructure and intelligent automation that keeps everything running.",
    rows: ["Cloud development & migration", "AI implementation", "Workflow automation", "Tech integrations"],
    markColor: ACCENT3,
    hoverBorder: hexToRgba(ACCENT3, 0.45),
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
    description: "Design the technical approach, scoped to your systems, budget and timeline.",
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
  heading: "Ready to modernize your stack?",
  text: "Tell us what you're building or integrating and we'll map the fastest path to a system that works reliably.",
  buttonLabel: "Start a tech project",
};
