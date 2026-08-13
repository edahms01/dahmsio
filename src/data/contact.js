import { ROUTE_PATHS } from "../routes.js";

export const META = {
  path: ROUTE_PATHS.contact,
  title: "Contact | DahmsIO",
  description: "Tell us about your data or technology challenge. A DahmsIO consultant will be in touch.",
};

export const HERO = {
  eyebrow: "Get In Touch",
  heroPrefix: "Start your journey",
  heroAccent: "with us",
  heroSubcopy: "Your next chapter starts with a message. Tell us where you are today. We'll show you what's possible.",
  primaryCtaLabel: "Jump to the form",
};

export const MOCKUP = {
  filename: "hello@dahms.io",
  thread: [
    { from: "them", text: "Hi, we're looking to modernize our data stack before Q3. Where would you start?" },
    {
      from: "us",
      text: "Great question. A consultant will follow up shortly to scope it properly.",
      meta: "✓✓ Delivered",
    },
  ],
  stats: [
    { label: "RESPONSE TIME", value: "< 24 hrs" },
    { label: "OUR ROLE", value: "Your Tech Partner" },
    { label: "NO OBLIGATION", value: "100%" },
  ],
};

export const FORM_INTRO =
  "Send us a message below. Describe your business challenge, goal, or idea, and a consultant will be in touch. Or if you'd prefer to send an email, drop us a note at";

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
    options: ["Not sure yet", "Under $5k", "$5k – $15k", "$15k – $35k", "$35k – $75k", "$75k+"],
  },
  firstName: { name: "firstName", label: "First Name", required: true, type: "text" },
  lastName: { name: "lastName", label: "Last Name", required: true, type: "text" },
  email: { name: "email", label: "Email", required: true, type: "email" },
  subject: { name: "subject", label: "Subject", required: true, type: "text" },
  message: {
    name: "message",
    label: "Message",
    required: true,
    type: "textarea",
    helper: "If you don't know exactly what you need, just describe the challenge or problem you're facing.",
  },
};

export const CONTACT_INFO_HEADING = "Contact Info";
export const SUBMIT_LABEL = "Send Message";

export const FAQ_HEADING = "Common questions";

export const FAQ = [
  {
    question: "What if I don't know exactly what I need?",
    answer:
      "That's normal, and it's where most conversations start. Describe the problem, not the solution, we'll help you figure out the rest.",
  },
  {
    question: "How fast can you start?",
    answer: "Once we've scoped the work together, most projects begin within a couple of weeks.",
  },
  {
    question: "I've never worked with a consultant before. Is that a problem?",
    answer: "No. Most of the businesses we talk to haven't either.",
  },
  {
    question: "What if I'm not sure I can afford this?",
    answer:
      "Every engagement is scoped and priced to fit your budget before any work starts, there's no minimum project size.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. Some clients work with us on retainer, others for a single project with a clear end date. You pick the model that fits.",
  },
];
