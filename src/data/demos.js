// Data source for the "Demos" section on the Technology page (see
// code-brief-demos-technology-v3.md). Adding a demo is one more object in this array — the
// card, its `/demos/${slug}/` link, and (once its own Case Study route exists) the
// destination page all key off `slug`.

export const EYEBROW = "Our Work";

export const DEMOS = [
  {
    slug: "gods-heroes-and-monsters",
    category: "AI Chat · RAG",
    title: "Gods, Heroes, and Monsters",
    summary:
      "Ask about any god, hero, or monster and get an answer pulled straight from Bulfinch's 1855 telling of Greek, Roman, and Norse myth.",
    // Replace with actual app screenshot: /images/demos/gods-heroes-and-monsters-screenshot.jpg
    // For now, using rendered mockup (DemoAppScreenshot component)
    thumbnail: null,
    mockupTitle: "Gods, Heroes, and Monsters",
    mockupQuestion: "Who were the three Fates?",
    mockupAnswer: "In Greek mythology, the three Fates (Moirai) were Clotho, Lachesis, and Atropos, representing the inevitable course of human destiny.",
    mockupSource: "From Bulfinch's Age of Fable",
  },
];
