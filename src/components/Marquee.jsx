import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import styles from "./Marquee.module.css";

function Track({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <span key={i}>
          <span>{item}</span>
          <span className={styles.sep}>✦</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee({ items }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={styles.wrap}>
      <div className={`${styles.track} ${reduced ? styles.paused : ""}`}>
        <Track items={items} />
        <Track items={items} />
      </div>
    </div>
  );
}
