import styles from "./AppWindowMockup.module.css";

export default function AppWindowMockup({ filename, children }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.glow} />
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <span className={`${styles.dot} ${styles.red}`} />
          <span className={`${styles.dot} ${styles.amber}`} />
          <span className={`${styles.dot} ${styles.green}`} />
          <span className={styles.filename}>{filename}</span>
        </div>
        {children}
      </div>
    </div>
  );
}
