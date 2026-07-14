export const META = {
  title: "Contact — DahmsIO",
  description: "Tell us about your data or technology challenge — a DahmsIO consultant will be in touch.",
};

export const HERO = {
  eyebrow: "Where expert guides lead journeys.",
  heroPrefix: "Start your journey",
  heroAccent: "with us",
  heroSubcopy: "Get on the path of transformation. A new world of data & technology awaits!",
  primaryCtaLabel: "Jump to the form",
};

export const MOCKUP = {
  filename: "hello@dahms.io",
  thread: [
    { from: "them", text: "Hi — we're looking to modernise our data stack before Q3. Where would you start?" },
    {
      from: "us",
      text: "Great question. A consultant will follow up shortly to scope it properly.",
      meta: "✓✓ Delivered",
    },
  ],
  stats: [
    { label: "RESPONSE TIME", value: "< 24 hrs" },
    { label: "PROJECTS SCOPED", value: "150+" },
    { label: "NO OBLIGATION", value: "100%" },
  ],
};

export const FORM_INTRO =
  "Send us a message below. Describe your business challenge, goal, or idea, and a consultant will be in touch. Thanks!";

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
    options: ["Not sure yet", "Under $10k", "$10k – $50k", "$50k – $150k", "$150k+"],
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
