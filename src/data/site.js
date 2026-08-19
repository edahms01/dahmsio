import { ROUTE_PATHS } from "../routes.js";

export const NAV_LINKS = [
  { label: "Home", to: ROUTE_PATHS.home },
  { label: "Data", to: ROUTE_PATHS.data },
  { label: "Technology", to: ROUTE_PATHS.technology },
  { label: "Consulting", to: ROUTE_PATHS.consulting },
  { label: "About", to: ROUTE_PATHS.about },
  { label: "Contact", to: ROUTE_PATHS.contact },
];

export const FOOTER_LINKS = [
  { label: "Data", to: ROUTE_PATHS.data },
  { label: "Technology", to: ROUTE_PATHS.technology },
  { label: "Consulting", to: ROUTE_PATHS.consulting },
  { label: "About", to: ROUTE_PATHS.about },
  { label: "Contact", to: ROUTE_PATHS.contact },
];

export const SITE_URL = "https://dahms.io";

export const CONTACT_EMAIL = "hello@dahms.io";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const TAGLINE = "Where innovation meets intelligence.";

// Shared UI labels for the sub-service accordion sections (Data/Technology/Consulting) —
// lives here rather than in a page data file because all three pages reuse it verbatim.
export const SUBSERVICE_LABELS = {
  symptoms: "You might need this if",
  deliverables: "What you get",
  open: "See more →",
  close: "Close ↓",
};

// Shared ambient background blobs for the interior pages (Data/Technology/Consulting/About) — identical across all four.
export const INTERIOR_GLOW_BLOBS = [
  {
    top: "-14%",
    right: "-8%",
    size: "50vw",
    color: "rgba(21,155,200,.26)",
    fade: 62,
    blur: 30,
    duration: 15,
    speed: 0.15,
  },
  {
    top: "44%",
    left: "-12%",
    size: "44vw",
    color: "rgba(43,184,216,.18)",
    fade: 64,
    blur: 34,
    duration: 17,
    delay: 1.5,
    speed: 0.24,
  },
];
