import { ACCENT, ACCENT2, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";
import { ROUTE_PATHS } from "../routes.js";
import { NAV_CTA_LABEL } from "./site.js";

export const META = {
  path: ROUTE_PATHS.home,
  title: "DahmsIO | Where innovation meets intelligence",
  description:
    "DahmsIO is a data, technology, and consulting firm that turns complex data and technology into clear, practical systems.",
};

// heroAccent has no trailing period — Home.jsx appends it, same convention as
// InteriorPageTemplate/About's {heroPrefix} <span>{heroAccent}.</span> pattern.
// primaryCtaLabel reuses NAV_CTA_LABEL rather than its own string since the hero button and
// the nav CTA are meant to say the same thing site-wide; single-sourced here instead of a
// third hardcoded copy.
export const HERO = {
  heroPrefix: "Where innovation meets",
  heroAccent: "intelligence",
  heroSubcopy:
    "We turn complex data and technology into clear, practical systems that grow revenue, boost efficiency, and set ambitious businesses apart from competitors.",
  primaryCtaLabel: NAV_CTA_LABEL,
  secondaryCtaLabel: "Explore services",
};

// Hero assurance strip — five scannable commitments under the CTA row. Deliberately
// commercial rather than capability copy. Order is load-bearing: the first three remove
// the cost of starting a conversation, the last two remove the fear of being locked in
// afterward, so a mid-width wrap breaks between those two groups rather than mid-thought.
// "Full ownership" (not "You own everything built") is deliberately two words, matching
// the declarative rhythm of the other four items and buying back line width at narrower
// desktop viewports. Plain text, not an image, so it indexes and matches the language
// used in outreach.
export const HERO_ASSURANCES = [
  "Free project scoping",
  "No obligation",
  "No minimum project size",
  "Full ownership",
  "No vendor lock-in",
];

export const SERVICES_EYEBROW = "What we do";
export const SERVICES_HEADING = "Three ways we move your business forward.";

// textAccent renders inside its own <span> for the gradient treatment; textPrefix/textSuffix
// are the plain-text copy around it.
export const MISSION = {
  eyebrow: "Our mission",
  textPrefix: "We make advanced technology",
  textAccent: "accessible to businesses of every size",
  textSuffix: ", bridging the gap between complex tech and real business impact.",
  linkLabel: "More on our mission →",
};

export const METHODOLOGY_EYEBROW = "How we work";
export const METHODOLOGY_HEADING = "A methodology built around check-ins, not surprises.";
export const METHODOLOGY_TEXT =
  "Every project runs through a clear framework with collaboration points before each phase, so we can adapt fast when needs change and you always know exactly where things stand.";

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
      "Pipelines, warehouses, and dashboards that turn scattered data into decisions you can trust.",
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
    description: "We build new platforms, connect the systems you already run, and manage cloud and AI end to end.",
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
      "We map your goals, data, and systems, whether you know exactly what you need or are still defining it.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We shape a solution built around your industry, timeline, and budget, with a clear plan and a way to tell whether it worked.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We deliver end to end, whether that's a new platform or new capabilities connected into what you already run.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "We measure, refine, and maintain systems to keep your data and technology working as your business grows.",
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

export const CTA = {
  heading: "Start your journey.",
  text: "Tell us the business challenge you're facing and one of our specialists will be in touch. No pressure, no obligation.",
  buttonLabel: "Send a message",
};
