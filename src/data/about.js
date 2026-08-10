import { ROUTE_PATHS } from "../routes.js";

// TODO(Eric): replace every placeholder below with your real background, credentials, and
// story. Keep the first-person voice and the section order — swap the content, not the shape.
// This is also the source for the JSON-LD Person node's extended bio (see
// src/data/organization.js) once there's real content to draw from.

export const META = {
  path: ROUTE_PATHS.about,
  title: "About — DahmsIO",
  description:
    "Meet Eric Dahms, founder of DahmsIO — a data and technology consultancy for small and mid-sized businesses across New England.",
};

export const HERO = {
  eyebrow: "About",
  heroPrefix: "The person behind",
  heroAccent: "DahmsIO",
  heroSubcopy:
    "TODO(Eric): one or two sentences introducing yourself in your own voice — this is the first thing a visitor reads.",
  primaryCtaLabel: "Get in touch",
};

export const HEADSHOT = {
  // TODO(Eric): add a real headshot at public/headshot.jpg (or similar), then swap the
  // placeholder box in About.jsx for an <img src="/headshot.jpg" alt="Eric Dahms" />.
  filename: "eric_dahms.jpg",
};

export const SECTIONS = [
  {
    eyebrow: "Who I Am",
    heading: "TODO: a short, human headline about who you are",
    paragraphs: [
      "TODO(Eric): a paragraph introducing yourself — role, focus, what makes your background relevant to the businesses you serve.",
    ],
  },
  {
    eyebrow: "Background & Credentials",
    heading: "TODO: headline summarizing your experience",
    paragraphs: [
      "TODO(Eric): your professional background, degrees, certifications, prior roles — whatever establishes credibility with a non-technical business owner.",
    ],
  },
  {
    eyebrow: "Why I Started DahmsIO",
    heading: "TODO: headline about your motivation",
    paragraphs: [
      "TODO(Eric): the problem you saw, the gap you wanted to fill, why you started this instead of staying elsewhere.",
    ],
  },
  {
    eyebrow: "How I Work",
    heading: "TODO: headline about your working style",
    paragraphs: [
      "TODO(Eric): what a client should expect working with you day to day — communication style, process, pace.",
    ],
  },
  {
    eyebrow: "Who I Work With",
    heading: "TODO: headline describing your ideal client",
    paragraphs: [
      "TODO(Eric): the kinds of businesses and owners you're the best fit for (and, optionally, who you're not).",
    ],
  },
];

export const CTA = {
  heading: "Let's talk about your business.",
  text: "Tell me the challenge you're facing and I'll tell you honestly whether I'm the right fit to help.",
  buttonLabel: "Get in touch",
};
