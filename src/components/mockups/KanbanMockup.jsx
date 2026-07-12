import styles from "./KanbanMockup.module.css";

export default function KanbanMockup({ sprintLabel, sprintName, status, progress, progressLabel, columns, stats }) {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <div>
          <div className={styles.label}>{sprintLabel}</div>
          <div className={styles.value}>{sprintName}</div>
        </div>
        <div className={styles.status}>▲ {status}</div>
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.progressLabel}>{progressLabel}</div>
      <div className={styles.columns}>
        {columns.map((col) => (
          <div key={col.title}>
            <div className={styles.colTitle}>{col.title}</div>
            <div className={styles.items}>
              {col.items.map((item) => (
                <div key={item.label} className={`${styles.item} ${styles[item.variant]}`}>
                  {item.variant === "done" ? `✓ ${item.label}` : item.label}
                </div>
              ))}
            </div>
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
