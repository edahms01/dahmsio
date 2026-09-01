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
    thumbnail: "/images/demos/gods-heroes-and-monsters-card.jpg",
  },
  {
    slug: "ask-the-archive",
    category: "AI Chat · Knowledgebase",
    title: "AskTheArchive",
    summary:
      "Search the declassified U.S. Election Integrity file release: electronic voting system vulnerabilities, foreign acquisition of voter data, voter-registration concerns, and noncitizens on voter rolls.",
    thumbnail: "/images/demos/ask-the-archive-card.jpg",
  },
];
