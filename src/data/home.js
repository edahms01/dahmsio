import { ACCENT, ACCENT2, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";
import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.home,
  title: "DahmsIO | Where innovation meets intelligence",
  // "New England" here (not in visible copy) targets regional search intent without
  // narrowing how the page reads to visitors — DahmsIO works with businesses anywhere;
  // New England is the initial target market, not the whole addressable one.
  description:
    "DahmsIO is a New England data, technology and consulting firm that turns complex data and technology into clear, practical systems.",
};

// Aligned to the sub-service names introduced in subservice-expansion-plan-v6.md, in each
// page's own order (Data, Technology, Consulting Advisory, Consulting Talent).
export const MARQUEE_ITEMS = [
  "Data Foundations",
  "Reporting & Dashboards",
  "Analytics & Forecasting",
  "Data Science & Machine Learning",
  "Custom Software Development",
  "Systems Integration",
  "Workflow Automation",
  "AI Implementation",
  "Assessment & Audit",
  "Strategy & Roadmap",
  "Product & Delivery",
  "Embedded Specialists",
  "Interim Leadership",
];

export const SERVICES = [
  {
    title: "Data Intelligence",
    description:
      "Pipelines, warehouses and dashboards that turn scattered data into decisions you can trust.",
    bullets: [
      "Data Foundations",
      "Reporting & Dashboards",
      "Analytics & Forecasting",
      "Data Science & Machine Learning",
    ],
    href: ROUTE_PATHS.data,
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
      "Custom Software Development",
      "Systems Integration",
      "Workflow Automation",
      "AI Implementation",
    ],
    href: ROUTE_PATHS.technology,
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
    // 5 bullets here vs. 4 on the Data/Technology cards above — Consulting has 5
    // sub-services (3 Advisory + 2 Talent) and Eric's call was to list all of them rather
    // than force a 4-item match with the other two cards.
    bullets: [
      "Assessment & Audit",
      "Strategy & Roadmap",
      "Product & Delivery",
      "Embedded Specialists",
      "Interim Leadership",
    ],
    href: ROUTE_PATHS.consulting,
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
