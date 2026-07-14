import styles from "./MessageMockup.module.css";

export default function MessageMockup({ thread, stats }) {
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
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
