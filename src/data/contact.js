import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.contact,
  title: "Contact | DahmsIO",
  description: "Tell us about your data or technology challenge and we'll start planning your tech future.",
};

export const HERO = {
  eyebrow: "Get In Touch",
  heroPrefix: "Let's talk about your",
  heroAccent: "next steps",
  heroSubcopy: "You don't need to know the solution yet. Describe the challenge you're dealing with, and we'll take it from there.",
  primaryCtaLabel: "Jump to the form",
};

export const MOCKUP = {
  filename: "hello@dahms.io",
  thread: [
    { from: "them", text: "Hi, we're looking to modernize our data stack before Q3. Where would you start?" },
    {
      from: "us",
      text: "Great question. A specialist will follow up shortly to walk through it with you.",
      meta: "✓✓ Delivered",
    },
  ],
  // "What happens next" steps, replacing the old stats row — reads as a natural continuation
  // of the chat thread above it instead of three disconnected facts. No response-time claim
  // (deliberately dropped per Eric's review — not a promise we want to make).
  steps: ["You send a message", "A specialist will respond", "Free project scoping, no obligation"],
};

export const FORM_INTRO =
  "Send us a message below. Describe your business challenge, goal, or idea, and a specialist will be in touch. Or if you'd prefer to send an email, drop us a note at";

export const FIELDS = {
  companyName: { name: "companyName", label: "Company Name", required: true, type: "text" },
  website: { name: "website", label: "Website", required: false, type: "text", placeholder: "http://" },
  location: {
    name: "location",
    label: "Location",
    required: false,
    type: "text",
    helper: "Please provide your city, state, or country so we know your timezone.",
  },
  services: {
    name: "services",
    label: "Services You're Interested In",
    required: false,
    type: "checkboxGroup",
    options: ["Data Intelligence", "Tech Implementation", "Data & Tech Consulting"],
  },
  budget: {
    name: "budget",
    label: "Estimated Budget",
    required: false,
    type: "select",
    placeholder: "Select a range…",
    options: ["Not sure yet", "Under $5k", "$5k – $15k", "$15k – $35k", "$35k – $50k", "$50k+"],
  },
  firstName: { name: "firstName", label: "First Name", required: true, type: "text" },
  lastName: { name: "lastName", label: "Last Name", required: true, type: "text" },
  email: { name: "email", label: "Email", required: true, type: "email" },
  message: {
    name: "message",
    label: "Message",
    required: true,
    type: "textarea",
    helper: "If you don't know exactly what you need, just describe the challenge or problem you're facing.",
  },
};

// Three section labels split the form into: who you are (Business Info), what you need
// (Project Details — leaves room to grow if project-description fields are added later),
// and how to reach you (Contact Info).
export const BUSINESS_INFO_HEADING = "Business Info";
export const PROJECT_DETAILS_HEADING = "Project Details";
export const CONTACT_INFO_HEADING = "Contact Info";

// Netlify Forms uses a field literally named "subject" to set the notification email's
// subject line. There's no visible Subject field on the form (removed — asking visitors to
// summarize their own message was unnecessary friction), so this fixed value is sent as a
// hidden field instead, just to keep notification emails out of Netlify's generic default
// subject line.
export const SUBJECT_FALLBACK = "New contact form submission";
export const SUBMIT_LABEL = "Send Message";
export const SUBMITTING_LABEL = "Sending…";

// Em dashes replaced with periods here (were "reaching out — a consultant" / "sending that —
// try again") to match the site-wide no-em-dash convention — both strings render live on
// error/success states, not just in hidden metadata, so the rule applies same as visible copy.
export const SUCCESS = {
  heading: "Message sent.",
  text: "Thanks for reaching out. We'll be back with honest thoughts on where to start.",
};

export const HONEYPOT_LABEL = "Don't fill this out if you're human:";

// Trailing text before the mailto link, same pattern as FORM_INTRO (plain string, link and
// closing period appended in JSX).
export const ERROR_TEXT = "Something went wrong sending that. Try again, or email us directly at";

export const FAQ_EYEBROW = "FAQ";

export const FAQ_HEADING = "Common questions";

export const FAQ = [
  {
    question: "What if I don't know exactly what I need?",
    answer:
      "That's normal, and it's where most conversations start. Describe the problem, not the solution. We'll help you figure out the rest.",
  },
  {
    question: "How fast can you start?",
    answer: "Once we've scoped the work together, most projects begin within a couple of weeks.",
  },
  {
    question: "I've never worked with a consultant before. Is that a problem?",
    answer: "No. We'll walk you through exactly how it works, no prior experience required.",
  },
  {
    question: "What if I'm not sure I can afford this?",
    answer:
      "Every engagement is scoped and priced to fit your budget before any work starts. There's no minimum project size.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. You can work with us on retainer, or for a single project with a clear end date. You pick the model that fits.",
  },
];
