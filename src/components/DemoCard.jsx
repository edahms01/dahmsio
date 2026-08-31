import { Link } from "react-router-dom";
import DemoAppScreenshot from "./mockups/DemoAppScreenshot.jsx";
import styles from "./DemoCard.module.css";

/**
 * One demo tile in the Technology page's Demos section. The whole card is the link target
 * (to the demo's Case Study page), not a button nested inside it. Visual treatment — gradient
 * fill, hairline border, hover border — is the same one CapabilityCard / SubServiceSection
 * use elsewhere, so this reads as native to the page rather than a new component language.
 *
 * Displays either a screenshot image (if thumbnail provided) or a rendered app mockup
 * (if mockup data provided). To use a real screenshot, add a thumbnail path and remove
 * the mockup fields.
 */
export default function DemoCard({
  slug,
  category,
  title,
  summary,
  thumbnail,
  mockupTitle,
  mockupQuestion,
  mockupAnswer,
  mockupSource,
}) {
  return (
    <Link to={`/demos/${slug}/`} className={styles.card}>
      <div className={styles.thumb}>
        {thumbnail ? (
          <img src={thumbnail} alt="" loading="lazy" />
        ) : mockupTitle ? (
          <DemoAppScreenshot
            title={mockupTitle}
            question={mockupQuestion}
            answer={mockupAnswer}
            answerSource={mockupSource}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.05)" }} />
        )}
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
        <span className={styles.cta}>See the case →</span>
      </div>
    </Link>
  );
}
