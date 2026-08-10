import { ROUTE_PATHS } from "../routes.js";

// Real copy — about-page-copy-v8.md. Company voice ("we"/"our") throughout except
// FOUNDERS_NOTE, the one deliberate first-person exception (paired with the headshot). No em
// dashes, no employer names, no business-size language (positioning is by geography and by
// relationship to technology, not by size) — keep it that way in any future edits here.

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
    "For twenty years, DahmsIO's founder has built the data, analytics, tech, and AI systems that global organizations run on: custom econometrics platforms used by modelling teams across continents, data infrastructure processing millions of records a day, and AI tools that turn weeks of work into days.",
    "All of it was built for organizations with dedicated data teams and technology budgets in the millions. Very little of that capability reaches the businesses that actually keep local and regional economies running: the manufacturer still reconciling production numbers by hand, the operator whose booking system has never spoken to its accounting system, the service company watching a national competitor pull steadily ahead. It isn't that the technology doesn't fit them; nobody has been building it for them.",
    "DahmsIO exists to close that gap. We bring the same standards, the same rigor, and the same technology that large enterprises invest millions in, sized, priced, and explained to help your business compete.",
    "Some of the businesses we work with have never taken on work like this before. Others know exactly how far behind the curve they've fallen and want a straightforward way to catch up. Both start the same way: with an honest look at what you already have, and what it could be doing for you.",
  ],
};

export const CREDIBILITY = {
  heading: "What twenty years of that experience buys you",
  items: [
    {
      lead: "A single clear view of your business.",
      body: "We've built the analytics and reporting platforms that global teams make decisions in every day. Applied to your business, that means one trustworthy picture of what's happening, updated automatically, not rebuilt by hand every Monday morning.",
    },
    {
      lead: "Data that runs itself.",
      body: "We've designed automated data pipelines and quality checks operating at millions of records a day. Most businesses need a fraction of that, which is precisely the point: the manual reconciliation, the copy-pasting, and the \"which version is right?\" simply stop.",
    },
    {
      lead: "Tools your team actually uses.",
      body: "We've taken slow, frustrating enterprise systems and made them fast and obvious, cutting support demand sharply in the process. Software that fights your team is software your team works around.",
    },
    {
      lead: "AI applied where it pays.",
      body: "We've shipped production AI assistants and agents that turned work measured in weeks into work measured in days. We're equally direct about where AI isn't the right answer yet, and we'll tell you before you spend money finding out.",
    },
    {
      lead: "Answers, not correlations.",
      body: "We use econometrics and statistical modelling to separate what is genuinely driving your results from what merely happens at the same time. That's the difference between a report you read and a decision you can act on.",
    },
  ],
};

export const HOW_WE_WORK = {
  heading: "A network, not a bottleneck",
  paragraph:
    "No single person is genuinely expert in data infrastructure, data science, and software engineering all at once, and we won't pretend otherwise. DahmsIO works through a vetted network of technical specialists, brought in project by project. You get the right expert for the problem in front of you, and one point of contact from the first conversation to the final handover. No account managers, no hand-offs, no explaining your business twice.",
  engagementHeading: "Four ways to work together",
  engagementModels: [
    {
      lead: "Ongoing partner.",
      body: "We act as your data and technology department on retainer: a set number of hours each month, spent on maintenance, improvements, or new work as your priorities move.",
    },
    {
      lead: "Build & maintain.",
      body: "We design and build the system, then keep it running, patched, and improving under an ongoing arrangement.",
    },
    {
      lead: "Build & deploy.",
      body: "We design, build, and hand over a finished solution. You own it outright from day one. Maintenance is yours if you want it, ours if you don't.",
    },
    {
      lead: "Advisory & strategy.",
      body: "Not every problem needs something built. We assess what you have, diagnose what's holding it back, and hand you a clear, costed roadmap to run yourself, hand to your own team, or bring back to us.",
    },
  ],
  operatingPrinciples: [
    {
      lead: "Plain English, always.",
      body: "If we can't explain it in terms of your business, we don't understand it well enough yet.",
    },
    { lead: "Scope and price agreed up front.", body: "No open meters, no surprise invoices." },
    { lead: "What we build, you own.", body: "Your data, your systems, your accounts. No lock-in." },
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
    "I grew up in Westbrook, Maine, and graduated from Westbrook High School. I've spent the twenty years since living in London and working across global markets, leading data, analytics, and tech product teams for some of the largest marketing and technology organizations in the world, building the products and platforms their analysts, data scientists, and modellers work in every day.",
    "I've stayed hands-on my entire career. I still design and ship AI assistants, automation pipelines, and working prototypes myself. It means I can tell you quickly and honestly what today's technology will do for your business, and just as usefully, what it won't.",
    "I started DahmsIO to bring that work back to the place I'm from. Businesses here are every bit as sophisticated as the ones I've spent my career serving; they've simply never had this kind of technology built for them at a sensible size and price. I'm building this company with the goal of moving home to run it in person.",
    "I also come from a family that runs businesses. My father spent thirty years at a construction company, from the job site to buying it outright, and my brother runs it today. Building something of my own alongside them matters to me.",
    "If you're running a business in Maine or New England and want a partner who understands both enterprise-grade technology and what it takes to actually run a company, I'd like to hear from you.",
  ],
  signature: "Eric Dahms, Founder",
  credentialsLine:
    "MSc International Economics, University of Essex · BSc Marketing & Information Technology, Bentley University · Certified Product Manager · Certified Google Cloud Leader",
};

export const CTA = {
  heading: "Start with a conversation",
  text: "Tell us what's slowing your business down. We'll tell you honestly whether we can help, what it would take, and what it would cost, before you commit to anything.",
  buttonLabel: "Get in touch",
};
