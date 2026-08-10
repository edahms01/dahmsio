import { ROUTE_PATHS } from "../routes.js";

// TODO(Eric): replace every placeholder below with the real company story, background, and
// credentials. Keep company voice ("we"/"our") and the section order — swap the content, not
// the shape. This page names you as founder (both here and in the JSON-LD founder Person node
// in src/data/organization.js) for search-trust and buyer-trust reasons, but reads as company
// history — "Our Story" — not a personal first-person bio.

export const META = {
  path: ROUTE_PATHS.about,
  title: "About — DahmsIO",
  description:
    "DahmsIO is a data and technology consultancy for small and mid-sized businesses across New England, founded by Eric Dahms.",
};

export const HERO = {
  eyebrow: "About",
  heroPrefix: "The story behind",
  heroAccent: "DahmsIO",
  heroSubcopy:
    "TODO(Eric): one or two sentences introducing DahmsIO — this is the first thing a visitor reads. Company voice (\"we\"), not \"I.\"",
  primaryCtaLabel: "Get in touch",
};

export const HEADSHOT = {
  // TODO(Eric): add a real founder photo at public/headshot.jpg (or similar), then swap the
  // placeholder box in About.jsx for an <img src="/headshot.jpg" alt="Eric Dahms, founder of DahmsIO" />.
  filename: "eric_dahms.jpg",
};

export const SECTIONS = [
  {
    eyebrow: "Our Story",
    heading: "TODO: a short headline about how DahmsIO came to be",
    paragraphs: [
      "TODO(Eric): introduce DahmsIO — what the company does, and how your background led to founding it. Company voice throughout; name yourself as founder where it's relevant, but this isn't a personal resume.",
    ],
  },
  {
    eyebrow: "Background & Credentials",
    heading: "TODO: headline summarizing the experience behind DahmsIO",
    paragraphs: [
      "TODO(Eric): the professional background, degrees, certifications, and prior roles DahmsIO draws on — whatever establishes credibility with a non-technical business owner.",
    ],
  },
  {
    eyebrow: "Why We Started DahmsIO",
    heading: "TODO: headline about the motivation behind the company",
    paragraphs: [
      "TODO(Eric): the problem you saw, the gap DahmsIO exists to fill, why it was started instead of staying elsewhere.",
    ],
  },
  {
    eyebrow: "How We Work",
    heading: "TODO: headline about DahmsIO's working style",
    paragraphs: [
      "TODO(Eric): what a client should expect working with DahmsIO day to day — communication style, process, pace.",
    ],
  },
  {
    eyebrow: "Who We Work With",
    heading: "TODO: headline describing DahmsIO's ideal client",
    paragraphs: [
      "TODO(Eric): the kinds of businesses and owners DahmsIO is the best fit for (and, optionally, who it's not).",
    ],
  },
];

export const CTA = {
  heading: "Let's talk about your business.",
  text: "Tell us the challenge you're facing and we'll tell you honestly whether DahmsIO is the right fit to help.",
  buttonLabel: "Get in touch",
};
