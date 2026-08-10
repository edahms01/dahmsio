import { ROUTE_PATHS } from "../routes.js";
import { ACCENT, ACCENT2, ACCENT3 } from "./colors.js";
import { hexToRgba } from "../utils/color.js";

// Real copy — about-page-copy-v23.md. Company voice ("we"/"our") throughout except
// FOUNDERS_NOTE, the one deliberate first-person exception (paired with the headshot). No em
// dashes, no employer names, no business-size language (positioning is by geography and by
// relationship to technology, not by size) — keep it that way in any future edits here.
// "twenty years" used in place of the source doc's "two decades" per standing preference
// (career start Oct 2007 -> 18-19 years as of 2026; Eric's call was to just say "twenty
// years" outright rather than hedge with "close to" or "nearly").

export const META = {
  path: ROUTE_PATHS.about,
  title: "About — DahmsIO",
  description:
    "DahmsIO brings enterprise-grade data, analytics, and technology experience to businesses across New England, founded by Eric Dahms.",
};

export const HERO = {
  eyebrow: "About",
  heroPrefix: "Global experience.",
  heroAccent: "Local focus",
  heroSubcopy:
    "Twenty years of enterprise data infrastructure, analytics, and technology development experience, now working for the businesses that drive New England.",
  primaryCtaLabel: "Get in touch",
};

export const BACKGROUND = {
  heading: "Enterprise capability, brought within reach",
  paragraphs: [
    "For twenty years, DahmsIO's founder has built the data, analytics, tech, and AI systems that global organizations run on: econometrics platforms used by modelling teams across continents, infrastructure processing millions of records a day, and AI tools that turn weeks of work into days.",
    "That capability rarely reaches the businesses keeping local and regional economies running: the ones still reconciling numbers by hand, or watching a national competitor pull steadily ahead. It isn't that the technology doesn't fit them; nobody has been building it for them.",
    "DahmsIO exists to close that gap, bringing the same standards, rigor, and technology that large enterprises invest millions in, sized and priced to help your business compete. Whether you've never taken on work like this or you know exactly how far behind you've fallen, it starts the same way: an honest look at what you have, and what it could be doing for you.",
  ],
};

export const CREDIBILITY = {
  heading: "What this looks like in practice",
  items: [
    {
      lead: "A single clear view of your business.",
      body: "One trustworthy picture of what's happening, updated automatically, instead of a spreadsheet rebuilt by hand every Monday.",
    },
    {
      lead: "Data that runs itself.",
      body: "Automated pipelines and quality checks, proven at millions of records a day, keep your numbers current and consistent without anyone chasing them.",
    },
    {
      lead: "Tools your team actually uses.",
      body: "Systems built to be fast and obvious, because software that fights your team is software your team works around.",
    },
    {
      lead: "AI applied where it pays.",
      body: "Assistants and agents that take real work off your team's plate, and a straight answer when AI isn't the right tool yet.",
    },
    {
      lead: "Answers, not correlations.",
      body: "Econometrics and statistical modelling separate what is genuinely driving your results from what merely happens at the same time.",
    },
  ],
};

export const HOW_WE_WORK = {
  heading: "A network, not a bottleneck",
  paragraph:
    "Very few people are genuine experts in tech infrastructure, data science, software engineering, and product development all at once. DahmsIO works through a vetted network of technical specialists, brought into a project based on need. You get the right expert for the problem in front of you, and one point of contact from the first conversation to the final handover. You won't be passed around, and you won't have to explain your business twice.",
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
      title: "Build & deploy",
      description:
        "We design, build, and hand over a finished solution. You own it outright from day one, and you handle maintenance going forward.",
      markColor: ACCENT2,
      hoverBorder: hexToRgba(ACCENT2, 0.45),
    },
    {
      title: "Advisory & strategy",
      description:
        "Not every problem needs something built. We assess what you have, diagnose what's holding it back, and hand you a clear, costed roadmap to run yourself, hand to your own team, or bring back to us.",
      markColor: ACCENT,
      hoverBorder: hexToRgba(ACCENT, 0.45),
    },
  ],
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

export const HEADSHOT = {
  // TODO(Eric): add a real founder photo at public/headshot.jpg (or similar), then swap the
  // placeholder box in About.jsx for an <img src="/headshot.jpg" alt="Eric Dahms, founder of DahmsIO" />.
  filename: "eric_dahms.jpg",
};

export const FOUNDERS_NOTE = {
  heading: "A note from Eric, founder of DahmsIO",
  paragraphs: [
    "I grew up in Westbrook, Maine, and graduated from Westbrook High School. I've spent the twenty years since in London, working across global markets. I've led data, analytics, and tech product teams for some of the largest marketing and technology organizations in the world, building the products and platforms their analysts and data scientists work in every day.",
    "I've stayed hands-on my entire career. I design and ship AI assistants, automation pipelines, and working prototypes myself. It means I can tell you quickly and honestly what today's technology will do for your business, and just as usefully, what it won't.",
    "I started DahmsIO to bring that experience back to the place I'm from. There's no shortage of ambition or capability in this region. What's missing is technology built for the businesses here, at a sensible size and price. I'm building this company with the goal of moving home to run it in person.",
    "Business ownership runs in my family. My father worked his way from the job site to owning the construction company he'd spent thirty years at, and my brother runs it today. I'd like to join them with something of my own.",
    "If you're running a business in Maine or elsewhere in New England and want a partner who understands both enterprise-grade technology and local business, let's talk about where new technology could take your business next.",
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
  text: "Tell us what's slowing your business down. We'll tell you honestly whether we can help, what it would take, and what it would cost, before you commit to anything.",
  buttonLabel: "Get in touch",
};
