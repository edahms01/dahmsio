export const HERO = {
  eyebrow: "Where expert guides lead journeys.",
  heroPrefix: "Start Your Journey",
  heroAccent: "With Us",
  heroSubcopy: "Get on the path of transformation. A new world of data & technology awaits!",
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
