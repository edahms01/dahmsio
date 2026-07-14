import { ACCENT, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";

export const META = {
  title: "Data Intelligence — DahmsIO",
  description:
    "Multi-source data engineering, BI dashboards, statistical analysis and machine learning — DahmsIO turns scattered data into decisions you can trust.",
};

export const HERO = {
  eyebrow: "Data Intelligence",
  heroPrefix: "Turn scattered data into decisions you can",
  heroAccent: "trust",
  heroSubcopy:
    "From multi-source pipelines to boardroom-ready dashboards, we engineer the full data stack, so every number your team relies on is accurate, timely and understood.",
  primaryCtaLabel: "Scope a data project",
};

export const MOCKUP = {
  filename: "revenue_dashboard.io",
  label: "MONTHLY REVENUE",
  value: "£1.28M",
  delta: "18.4%",
  bars: [
    { height: 46, from: "rgba(21,155,200,.5)", to: "rgba(21,155,200,.12)" },
    { height: 62, from: "rgba(21,155,200,.55)", to: "rgba(21,155,200,.14)" },
    { height: 54, from: "rgba(43,184,216,.55)", to: "rgba(43,184,216,.14)" },
    { height: 78, from: "rgba(129,110,247,.6)", to: "rgba(129,110,247,.15)" },
    { height: 70, from: "rgba(79,216,255,.6)", to: "rgba(79,216,255,.15)" },
    { height: 100, from: "var(--accent)", to: "rgba(79,216,255,.4)", glow: true },
  ],
  stats: [
    { label: "CONVERSION", value: "4.7%" },
    { label: "CHURN", value: "1.9%" },
    { label: "LTV", value: "£3.4k" },
  ],
};

export const CAPABILITIES_HEADING = "Two disciplines, one dependable data foundation.";
export const CAPABILITIES_HEADING_WIDTH = "22ch";

export const CAPABILITIES = [
  {
    title: "Data Management",
    description: "Collect, clean and structure data from every source into one reliable, automated pipeline.",
    rows: [
      "Multi-source data collection",
      "Standardisation & automation",
      "Cleansing & processing",
      "Database engineering",
      "Cloud & infrastructure development",
    ],
    markColor: ACCENT,
    hoverBorder: hexToRgba(ACCENT, 0.45),
  },
  {
    title: "Business Analytics",
    description: "Turn that clean data into models, dashboards and answers your teams act on every day.",
    rows: [
      "Business analytics",
      "Marketing analytics",
      "Reporting solutions & dashboards",
      "ROI & efficiency modeling",
      "Statistical analysis & forecasting",
      "Data science & machine learning",
    ],
    markColor: ACCENT3,
    hoverBorder: hexToRgba(ACCENT3, 0.45),
  },
];

export const PIPELINE_EYEBROW = "The pipeline";
export const PIPELINE_HEADING = "From raw source to real result.";

export const PIPELINE = [
  {
    label: "STEP 01",
    labelColor: ACCENT,
    title: "Collect",
    description: "Pull from every platform, database and spreadsheet into one place.",
  },
  {
    label: "STEP 02",
    labelColor: ACCENT,
    title: "Standardize",
    description: "Clean, de-duplicate and automate so data stays consistent.",
  },
  {
    label: "STEP 03",
    labelColor: ACCENT3,
    title: "Model",
    description: "Apply statistics and forecasting to surface what matters.",
  },
  {
    label: "STEP 04",
    title: "Report",
    description: "Live dashboards your team actually understands and uses.",
    highlighted: true,
  },
];

export const CTA = {
  heading: "Ready to trust your numbers?",
  text: "Tell us where your data lives today and we'll map the fastest path to clean, useful, decision-ready analytics.",
  buttonLabel: "Start a data project",
};
