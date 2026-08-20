import styles from "./MessageMockup.module.css";

export default function MessageMockup({ thread, steps }) {
  return (
    <div className={styles.body}>
      <div className={styles.thread}>
        {thread.map((msg, i) => (
          <div key={i} className={msg.from === "them" ? styles.bubbleIn : styles.bubbleOut}>
            {msg.text}
            {msg.meta && <div className={styles.meta}>{msg.meta}</div>}
          </div>
        ))}
      </div>
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <div key={step} className={styles.step}>
            <span className={styles.stepNumber}>{i + 1}</span>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
