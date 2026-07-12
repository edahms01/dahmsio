export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Data", to: "/data" },
  { label: "Technology", to: "/technology" },
  { label: "Consulting", to: "/consulting" },
];

export const FOOTER_LINKS = [
  { label: "Data", to: "/data" },
  { label: "Technology", to: "/technology" },
  { label: "Consulting", to: "/consulting" },
  { label: "Contact", to: "/#contact" },
];

export const CONTACT_EMAIL = "hello@dahms.io";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const TAGLINE = "Where innovation meets intelligence.";

// Shared ambient background blobs for the 3 interior pages (Data/Technology/Consulting) — identical across all three.
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
