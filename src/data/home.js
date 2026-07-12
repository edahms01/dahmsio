import { ACCENT, ACCENT2, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";

export const HERO_STATS = ["AI-Powered", "Built to Scale", "Future-Proof", "Differentiate"];

export const MARQUEE_ITEMS = [
  "Data Automation",
  "Business Analytics",
  "Data Science",
  "Workflow Automation",
  "AI Implementation",
  "Tech Integrations",
  "Web & App Development",
  "Cloud Migration",
  "Full-Stack Development",
  "Team Resourcing",
  "Consulting",
];

export const SERVICES = [
  {
    title: "Data Intelligence",
    description:
      "Pipelines, warehouses and dashboards that turn scattered data into decisions you can trust.",
    bullets: [
      "Multi-source data engineering",
      "Reporting & BI dashboards",
      "Statistical analysis & forecasting",
      "Data science & machine learning",
    ],
    href: "/data",
    linkLabel: "View the Data page",
    icon: "square",
    markColor: ACCENT,
    hoverBorder: hexToRgba(ACCENT, 0.5),
    iconBg: `linear-gradient(135deg, ${hexToRgba(ACCENT, 0.25)}, ${hexToRgba(ACCENT2, 0.12)})`,
    iconBorder: hexToRgba(ACCENT, 0.3),
    iconGradient: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`,
  },
  {
    title: "Tech Implementation",
    description: "New platforms built, existing systems integrated, cloud and AI managed end-to-end.",
    bullets: [
      "Full-stack app development",
      "System integration & modernization",
      "Cloud development & migration",
      "AI implementation",
    ],
    href: "/technology",
    linkLabel: "View the Technology page",
    icon: "circle",
    markColor: ACCENT3,
    hoverBorder: hexToRgba(ACCENT3, 0.5),
    iconBg: `linear-gradient(135deg, ${hexToRgba(ACCENT3, 0.25)}, ${hexToRgba(ACCENT2, 0.12)})`,
    iconBorder: hexToRgba(ACCENT3, 0.3),
    iconGradient: `linear-gradient(135deg, ${ACCENT3}, ${ACCENT2})`,
  },
  {
    title: "Data & Tech Consulting",
    description: "Strategy, product vision and the right people, embedded alongside your team.",
    bullets: [
      "Data & technology strategy",
      "Product & Agile consulting",
      "Analyst & engineer resourcing",
      "UX & product design",
    ],
    href: "/consulting",
    linkLabel: "View the Consulting page",
    icon: "triangle",
    markColor: ACCENT2,
    hoverBorder: hexToRgba(ACCENT2, 0.5),
    iconBg: `linear-gradient(135deg, ${hexToRgba(ACCENT2, 0.25)}, ${hexToRgba(ACCENT, 0.12)})`,
    iconBorder: hexToRgba(ACCENT2, 0.3),
    iconGradient: `linear-gradient(135deg, ${ACCENT2}, ${ACCENT})`,
  },
];

export const METHODOLOGY_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your goals, data and systems, whether you know exactly what you need or are still defining it.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We shape a solution scoped to your size, industry and budget, with a clear plan and success measures.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "End-to-end delivery: a fresh platform or new capabilities integrated with your existing technology.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We measure, refine and maintain systems to keep your data and technology working as your business grows.",
  },
];

export const HOME_GLOW_BLOBS = [
  {
    top: "-12%",
    left: "-8%",
    size: "52vw",
    color: "rgba(21,155,200,.28)",
    fade: 62,
    blur: 30,
    duration: 14,
    speed: 0.15,
  },
  {
    top: "38%",
    right: "-14%",
    size: "46vw",
    color: "rgba(79,216,255,.20)",
    blur: 34,
    duration: 18,
    delay: 2,
    speed: 0.28,
  },
  {
    bottom: "-16%",
    left: "24%",
    size: "44vw",
    color: "rgba(43,184,216,.18)",
    blur: 34,
    duration: 16,
    delay: 1,
    speed: 0.2,
  },
];
