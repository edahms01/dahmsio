import styles from "./DemoAppScreenshot.module.css";

/**
 * Full app screenshot mockup for demo cards. Shows the complete app interface
 * with window chrome, background gradient, chat area, and header.
 *
 * This component creates a visual representation of what the demo app looks like.
 * You can export this to PNG for use as a demo card thumbnail, or replace with
 * an actual screenshot from the live app.
 */
export default function DemoAppScreenshot({ title, question, answer, answerSource }) {
  return (
    <div className={styles.appWindow}>
      {/* Browser/Window chrome */}
      <div className={styles.chrome}>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.red}`} />
          <div className={`${styles.dot} ${styles.amber}`} />
          <div className={`${styles.dot} ${styles.green}`} />
        </div>
        <div className={styles.url}>gods-heroes-and-monsters.app</div>
      </div>

      {/* App background */}
      <div className={styles.background} />

      {/* App content */}
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.appTitle}>{title}</h1>
          <p className={styles.subtitle}>Ask and the Old Gods will answer</p>
        </div>

        {/* Chat area */}
        <div className={styles.chatArea}>
          {/* User message */}
          <div className={styles.messageGroup}>
            <div className={styles.messageSent}>{question}</div>
          </div>

          {/* AI response */}
          <div className={styles.messageGroup}>
            <div className={styles.messageReceived}>{answer}</div>
            {answerSource && <div className={styles.source}>{answerSource}</div>}
          </div>
        </div>

        {/* Input area */}
        <div className={styles.inputBar}>
          <input type="text" placeholder="Ask your next question..." disabled />
        </div>
      </div>
    </div>
  );
}
