import styles from "./CardChatPreview.module.css";

/**
 * Compact chat preview for demo cards. Shows a single question/answer exchange
 * from the demo's knowledgebase in a minimal, inline format.
 */
export default function CardChatPreview({ question, answer, source }) {
  return (
    <div className={styles.preview}>
      <div className={styles.message}>
        <div className={styles.label}>Q:</div>
        <div className={styles.text}>{question}</div>
      </div>
      <div className={styles.message}>
        <div className={styles.label}>A:</div>
        <div className={styles.text}>{answer}</div>
      </div>
      {source && <div className={styles.source}>{source}</div>}
    </div>
  );
}
