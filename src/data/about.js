import { ROUTE_PATHS } from "../routes.js";

// Approved copy, Nov 2026 update. Company voice ("we"/"our") throughout except
// FOUNDERS_NOTE, the one deliberate first-person exception (paired with the headshot). No em
// or en dashes anywhere, Oxford comma in every list of three or more, no employer names.
// Positioning is "businesses of any size, scoped and priced to fit your goals" — keep it that
// way in any future edits here.
// "fifteen years" (London tenure, not total career length) is the current figure per Eric's
// 2026-08 rewrite — update if it drifts out of date.

export const META = {
  path: ROUTE_PATHS.about,
  title: "About | DahmsIO",
  description:
    "DahmsIO brings enterprise-grade data, technology, and AI to businesses of any size. Founded by Eric Dahms and backed by a network of specialists.",
};

export const HERO = {
  eyebrow: "About",
  heroPrefix: "Global experience,",
  heroAccent: "applied to your business",
  heroSubcopy:
    "Our team has spent careers solving data and technology problems inside large, complex organizations. DahmsIO brings that experience to businesses of any size, scoped and priced to fit your goals.",
  primaryCtaLabel: "Get in touch",
};

// Hero mockup — OrbitNetworkMockup, ported from the Claude Design hero graphic (project
// a37bbdf4, About.dc.html): orbiting nodes firing inward toward a pulsing center hub,
// visualizing the "Global experience, applied to your business." headline. Purely illustrative,
// so the only page-specific data is the app-window filename.
export const MOCKUP = {
  filename: "applied-experience.io",
};

export const BACKGROUND = {
  eyebrow: "Background",
  heading: "Enterprise capability, brought within reach.",
  paragraphs: [
    "Most businesses aren't short on tools or data. They're short on the time to get value from them. Numbers get reconciled by hand, the same spreadsheet gets rebuilt every month, and everyone works around systems that don't talk to each other.",
    "None of that is a technology problem. The fixes have existed for years, but most of them assume someone in-house has the time to set them up and keep them running.",
    "DahmsIO exists to put that innovation and intelligence to work for you. Twenty years of building data and technology systems for large organizations means we know which parts matter for a business like yours, and which you can safely leave out.",
    "You might know what's broken, or you might not be sure where to start. Either way, we begin with a clear look at where you are and where you want to go next.",
  ],
};

export const HOW_WE_WORK = {
  eyebrow: "Our network",
  heading: "The right specialist for each part of the job.",
  paragraph:
    "Very few people are expert in infrastructure, data science, software engineering, and product development combined. We build each team from a vetted network of specialists, chosen for the work in front of us. You get the right people for the problem, and one person accountable for the whole project.",
};

// Text content for BenchNetworkMockup (the "bench of specialists -> PM hub -> You" graphic
// in HOW_WE_WORK's section). Layout (x/y coordinates, stroke colors) stays a local constant
// in the component itself since that's presentation, not copy; only the labels live here.
export const BENCH_NETWORK = {
  filename: "experts.io",
  specialists: [
    { code: "DS", line1: "Data", line2: "Scientist" },
    { code: "CL", line1: "Cloud", line2: "Architect" },
    { code: "BE", line1: "Backend", line2: "Engineer" },
    { code: "UX", line1: "UX", line2: "Designer" },
    { code: "SC", line1: "Security", line2: "Specialist" },
    { code: "DO", line1: "DevOps", line2: "Engineer" },
  ],
  hub: { badge: "PM", title: "Product Manager", subtitle: ["Your single", "point of contact"] },
  chip: ["Discovery · Vision", "Strategy · Roadmap"],
  youLabel: "You",
};

export const HEADSHOT = {
  // AppWindowMockup's fake browser-chrome filename label, not the actual served path (see
  // src below) — kept as the display name shown in the mock titlebar.
  filename: "eric_dahms.jpg",
  src: "/founder-photo.jpg",
  alt: "Eric Dahms, founder of DahmsIO",
};

export const FOUNDERS_NOTE = {
  eyebrow: "Founder's Note",
  heading: "A note from our founder",
  paragraphs: [
    "I grew up in Westbrook, Maine, and I've spent the last fifteen years in London, building data and technology systems for large multinational companies.",
    "I've stayed hands-on the whole time: designing and shipping custom products, building data platforms and automations with engineering teams, and now creating AI tools. I can tell you quickly and honestly what today's technology will do for your business and, just as usefully, what it won't.",
    "I'm building DahmsIO to bring that experience to businesses that haven't had access to it. For bigger projects, I bring in specialists I've worked alongside for years, so you get a full team with one person accountable. If you want more from your data or technology, send us a message and let's talk.",
  ],
  // Source copy styles the signature as "— Eric Dahms, Founder" with a leading em dash;
  // omitted here since the page-wide "no em dash" constraint takes precedence over that one
  // styling choice.
  signature: "Eric Dahms, Founder",
  credentials: [
    "MSc International Economics, University of Essex",
    "BSc Marketing & Information Technology, Bentley University",
    "Certified Product Manager",
    "Certified Google Cloud Leader",
  ],
};

export const CTA = {
  heading: "Ready to work together?",
  text: "Good partnerships start with a conversation. Tell us about your business and where you want to take it.",
  buttonLabel: "Get in touch",
};
