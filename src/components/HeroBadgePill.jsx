import styles from "./HeroBadgePill.module.css";

export default function HeroBadgePill({ children, className = "" }) {
  return (
    <div className={`${styles.pill} ${className}`}>
      <span className={styles.dot} />
      {children}
    </div>
  );
}
