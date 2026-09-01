// Data source for the "Demos" section on the Technology page (see
// code-brief-demos-technology-v3.md). Adding a demo is one more object in this array — the
// card, its `/demos/${slug}/` link, and (once its own Case Study route exists) the
// destination page all key off `slug`.

export const EYEBROW = "Our Work";

export const DEMOS = [
  {
    slug: "gods-heroes-and-monsters",
    category: "AI Chat · Knowledgebase",
    title: "Gods, Heroes, and Monsters",
    summary:
      "Ask about any god, hero, or monster and get an answer pulled straight from Bulfinch's 1855 telling of Greek, Roman, and Norse myth.",
    thumbnail: "/images/demos/gods-heroes-and-monsters-screenshot.jpg",
  },
];
