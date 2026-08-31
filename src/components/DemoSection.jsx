import Reveal from "./Reveal.jsx";
import DemoCard from "./DemoCard.jsx";
import styles from "./DemoSection.module.css";
import { EYEBROW } from "../data/demos.js";

// One-liner under the heading, above the grid. Company voice, per website/CLAUDE.md.
const INTRO =
  "A few of the AI tools we've built. Same approach every time: point a knowledgebase at whatever source already exists, then just ask it questions.";

/**
 * The "Demos" block on the Technology page, rendered by InteriorPageTemplate just above the
 * closing CTA when a `demos` array is passed (only Technology passes one for now).
 *
 * `id="demos"` mirrors the template's own `id="capabilities"` anchor pattern — it's the
 * scroll target for the "Demos" breadcrumb crumb on each demo's Case Study page
 * (/technology/#demos).
 */
export default function DemoSection({ demos }) {
  return (
    <section id="demos" className={styles.section}>
      <Reveal className={styles.head}>
        <div className="eyebrow">{EYEBROW}</div>
        <h2 className={`sectionHeading ${styles.heading}`}>See them in action</h2>
        <p className={styles.intro}>{INTRO}</p>
      </Reveal>
      <div className={styles.grid}>
        {demos.map((demo, i) => (
          <Reveal as="div" key={demo.slug} delay={i * 100}>
            <DemoCard {...demo} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
