import styles from "./DemoChatMockup.module.css";

/**
 * Chat interface mockup for demo case study pages. Shows example Q&A exchange
 * from the demo's knowledgebase (e.g., Gods/Heroes/Monsters asks about mythology,
 * gets a sourced answer).
 */
export default function DemoChatMockup({ question, answer, answerSource }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.glow} />
      <div className={styles.window}>
        <div className={styles.header}>
          <div className={styles.title}>Chat</div>
          <div className={styles.controls}>
            <div className={styles.control} />
            <div className={styles.control} />
            <div className={styles.control} />
          </div>
        </div>

        <div className={styles.messages}>
          {/* User question */}
          <div className={styles.messageGroup}>
            <div className={styles.messageSent}>
              <p>{question}</p>
            </div>
          </div>

          {/* AI answer */}
          <div className={styles.messageGroup}>
            <div className={styles.messageReceived}>
              <p>{answer}</p>
              {answerSource && <div className={styles.source}>{answerSource}</div>}
            </div>
          </div>
        </div>

        <div className={styles.inputArea}>
          <input
            type="text"
            className={styles.input}
            placeholder="Ask your next question..."
            disabled
          />
        </div>
      </div>
    </div>
  );
}
