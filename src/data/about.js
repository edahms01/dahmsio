import { ROUTE_PATHS } from "../routes.js";
import { ACCENT, ACCENT2, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";

// Real copy — about-page-copy-v23.md. Company voice ("we"/"our") throughout except
// FOUNDERS_NOTE, the one deliberate first-person exception (paired with the headshot). No em
// dashes anywhere, no employer
// names, no business-size language (positioning is by geography and by relationship to
// technology, not by size) — keep it that way in any future edits here.
// "twenty years" used in place of the source doc's "two decades" per standing preference
// (career start Oct 2007 -> 18-19 years as of 2026; Eric's call was to just say "twenty
// years" outright rather than hedge with "close to" or "nearly").

export const META = {
  path: ROUTE_PATHS.about,
  title: "About | DahmsIO",
  description:
    "DahmsIO brings enterprise-grade data, analytics, and technology experience to businesses, founded by Eric Dahms.",
};

export const HERO = {
  eyebrow: "About",
  heroPrefix: "Global experience.",
  heroAccent: "Local focus",
  heroSubcopy:
    "We've spent our careers solving hard data and technology problems inside large, complex organizations. DahmsIO brings that same thinking to businesses that don't have an enterprise budget but deserve enterprise-level results.",
  primaryCtaLabel: "Get in touch",
};

// Hero mockup — OrbitNetworkMockup, ported from the Claude Design hero graphic (project
// a37bbdf4, About.dc.html): orbiting nodes firing inward toward a pulsing center hub,
// visualizing the "Global experience. Local focus." headline. Purely illustrative, so the
// only page-specific data is the app-window filename.
export const MOCKUP = {
  filename: "network.io",
};

export const BACKGROUND = {
  eyebrow: "Background",
  heading: "Enterprise capability, brought within reach.",
  paragraphs: [
    "Most businesses aren't short on tools or data. They're short on time to get real value out of them. The numbers get reconciled by hand, the same spreadsheet gets rebuilt every month, and everyone works around systems that don't talk to each other.",
    "None of that is a technology problem. The fixes have existed for years. Most of them just assume someone in-house has the time to set them up and keep them running.",
    "DahmsIO exists to close that gap. Twenty years of doing this at enterprise scale means we know which parts actually matter for a business like yours, and which you can safely leave out.",
    "So whether you're not sure where to start or already know exactly what's broken, it begins the same way: an honest look at where you are, and where you want to go next.",
  ],
};

export const CREDIBILITY = {
  eyebrow: "In action",
  heading: "What this looks like in practice",
  // Small tiles, deliberately lighter-weight than engagementModels' CapabilityCard treatment
  // below (flat background instead of a gradient panel, no numbered row list) so the two card
  // grids on this page read as related but distinct. hoverBorder cycles through the site's
  // three accents same as engagementModels.
  items: [
    {
      lead: "A single clear view.",
      body: "One trustworthy picture of your business, updated automatically, instead of three reports that don't agree.",
      hoverBorder: hexToRgba(ACCENT, 0.45),
    },
    {
      lead: "Data that runs itself.",
      body: "Automated pipelines and quality checks keep your numbers current and consistent, with no chasing.",
      hoverBorder: hexToRgba(ACCENT3, 0.45),
    },
    {
      lead: "Tools your team actually uses.",
      body: "Software that fits how your team already works, so it gets used.",
      hoverBorder: hexToRgba(ACCENT2, 0.45),
    },
    {
      lead: "AI applied where it pays.",
      body: "Assistants and agents that take real work off your team's plate, and a straight answer when AI isn't the right fit.",
      hoverBorder: hexToRgba(ACCENT, 0.45),
    },
    {
      lead: "Answers you can act on.",
      body: "Statistical modeling separates what's actually moving your results from what is happening in the background.",
      hoverBorder: hexToRgba(ACCENT3, 0.45),
    },
    {
      lead: "A roadmap you can execute.",
      body: "A clear, costed plan for what to do first, whether you run it yourself or bring us back to build it.",
      hoverBorder: hexToRgba(ACCENT2, 0.45),
    },
  ],
};

export const HOW_WE_WORK = {
  eyebrow: "Our network",
  heading: "A network of experts to build your future.",
  paragraph:
    "Few people are genuinely expert in infrastructure, data science, software engineering, and product development all at once. DahmsIO works through a vetted network of specialists, brought in as a project needs them. You get the right person for the problem, and one point of contact throughout.",
  engagementEyebrow: "Engagement models",
  engagementHeading: "Four ways to work together",
  // Same shape as CapabilityCard's props (title/description/markColor/hoverBorder) — reusing
  // that component directly so these look like the capability cards on Data/Technology/
  // Consulting, not a bespoke treatment unique to this page.
  engagementModels: [
    {
      title: "Ongoing partner",
      description:
        "We act as your data and technology department on retainer: a set number of hours each month, spent on maintenance, improvements, or new work as your priorities move.",
      markColor: ACCENT,
      hoverBorder: hexToRgba(ACCENT, 0.45),
    },
    {
      title: "Build & maintain",
      description:
        "We design and build the system, then keep it running, patched, and improving under an ongoing arrangement.",
      markColor: ACCENT3,
      hoverBorder: hexToRgba(ACCENT3, 0.45),
    },
    {
      title: "Build & hand-over",
      description:
        "We design, build, and hand over a finished solution. You own it outright from day one, and you handle maintenance going forward.",
      markColor: ACCENT2,
      hoverBorder: hexToRgba(ACCENT2, 0.45),
    },
    {
      title: "Advisory",
      description:
        "Not every problem needs something built. We assess what you have, diagnose what's holding it back, and give you a clear roadmap you can run yourself or bring back to us.",
      markColor: ACCENT,
      hoverBorder: hexToRgba(ACCENT, 0.45),
    },
  ],
  operatingEyebrow: "Operating principles",
  operatingHeading: "How we operate",
  operatingPrinciples: [
    {
      lead: "Plain English, always.",
      body: "Every recommendation comes with what it does, what it costs, and what happens if you do nothing. If we can't explain it in terms of your business, we don't understand it well enough yet.",
    },
    {
      lead: "Scope and price agreed up front.",
      body: "You get a written scope, a price, and a timeline before any work starts. If something changes mid-project, you hear about it before it affects the bill, not after.",
    },
    {
      lead: "What we build, you own.",
      body: "Code, data, documentation, and accounts are in your name from day one. No proprietary black boxes, no systems that stop working if you stop working with us.",
    },
    {
      lead: "Built to be handed over.",
      body: "Everything we build is documented well enough for another developer to pick it up. You should be free to leave, not locked in.",
    },
  ],
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
  heading: "A note from our Founder",
  paragraphs: [
    "I've spent the past twenty years in London, England, working for the largest global agencies. I've led data, analytics, and tech product teams for some of the largest clients in the world, building the products and platforms that marketers, analysts and data scientists use every day.",
    "I've stayed hands-on my entire career. I design and ship data platforms, AI assistants, automation pipelines, and working prototypes myself, which means I can tell you quickly and honestly what today's technology will do for your business, and just as usefully, what it won't.",
    "If you're running a business in Maine or elsewhere in New England and want a partner who understands what this technology can actually do for a local business, send us a message and let's talk about where new technology could take your business.",
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
  heading: "Start with a conversation",
  text: "Tell us what's slowing your business down. You'll get an honest answer on whether we can help, what it would take, and what it would cost, before you commit to anything.",
  buttonLabel: "Get in touch",
};
