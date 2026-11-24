import { ROUTE_PATHS } from "../routes.js";
import { NAV_CTA_LABEL } from "./site.js";

export const META = {
  path: ROUTE_PATHS.home,
  title: "DahmsIO | Where innovation meets intelligence",
  description:
    "DahmsIO brings enterprise-grade data, technology, and AI to businesses of any size, scoped and priced to fit your goals.",
};

// heroAccent has no trailing period — Home.jsx appends it, same convention as
// InteriorPageTemplate/About's {heroPrefix} <span>{heroAccent}.</span> pattern.
// primaryCtaLabel reuses NAV_CTA_LABEL rather than its own string since the hero button and
// the nav CTA are meant to say the same thing site-wide; single-sourced here instead of a
// third hardcoded copy.
export const HERO = {
  heroLine1: "Where innovation",
  heroPrefix: "meets",
  heroAccent: "intelligence",
  heroSubcopy:
    "We bring enterprise-grade data, technology, and AI to businesses of any size, scoped and priced to fit your goals.",
  primaryCtaLabel: NAV_CTA_LABEL,
  secondaryCtaLabel: "Explore services",
};


export const SERVICES_EYEBROW = "What we do";
export const SERVICES_HEADING = "Three ways we move your business forward.";

export const METHODOLOGY_EYEBROW = "How we work";
export const METHODOLOGY_HEADING = "Check-ins before every phase, so nothing surprises you.";
export const METHODOLOGY_TEXT =
  "Every project follows the same steps, with regular check-ins scheduled. If your needs change, we adjust the plan, and you always know where things stand.";

export const SERVICES = [
  {
    title: "Data Intelligence",
    description:
      "We pull your scattered data into one place and turn it into reports and forecasts you can trust.",
    bullets: [
      "Data Foundations",
      "Reporting & Dashboards",
      "Analytics & Forecasting",
      "Data Science & Machine Learning",
    ],
    href: ROUTE_PATHS.data,
    linkLabel: "View the Data page",
    icon: "square",
  },
  {
    title: "Tech Implementation",
    description: "We build software, connect the systems you already run, and automate the manual work in between.",
    bullets: [
      "Custom Software Development",
      "Systems Integration",
      "Workflow Automation",
      "AI Implementation",
    ],
    href: ROUTE_PATHS.technology,
    linkLabel: "View the Technology page",
    icon: "circle",
  },
  {
    title: "Data & Tech Consulting",
    description: "Advice on what to do next and experienced people to join your team.",
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
      "We design the approach around your industry, timeline, and budget, and agree up front how to measure success.",
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
      "We measure, refine, and maintain systems to keep your data and technology running smoothly as your business grows.",
  },
];

// "What you can count on" — moved here from About's Operating Principles (merged with
// Credibility's ownership/handover points). Rendered with the same list treatment as before.
export const PRINCIPLES = {
  eyebrow: "Our principles",
  heading: "What you can count on.",
  items: [
    {
      lead: "One lead, the right specialists.",
      body: "Every project has one person accountable to you, with specialists from our network brought in as the work needs them.",
    },
    {
      lead: "Plain English, always.",
      body: "Every recommendation comes with what it does, what it costs, and what happens if you do nothing. If we can't explain it in terms of your business, we don't understand it well enough yet.",
    },
    {
      lead: "Scope and price agreed up front.",
      body: "You get a written scope, a price, and an estimated timeline before any work starts. If something changes mid-project, you hear about it before it affects the bill.",
    },
    {
      lead: "What we build, you own.",
      body: "Code, data, documentation, and accounts are in your name from day one, and everything is documented well enough for another developer to pick up. Nothing we build depends on us to keep running.",
    },
  ],
};

export const CTA = {
  heading: "Where do you want to be next year?",
  text: "Tell us what's slowing your business down and one of our specialists will come back with how we'd approach it. There's no obligation to go further.",
  buttonLabel: "Send a message",
};
