import styles from "./CapabilityCard.module.css";

export default function CapabilityCard({ title, description, rows = [], className = "" }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {rows.length > 0 && (
        <ul className={styles.rows}>
          {rows.map((row, i) => (
            <li key={row} className={styles.row}>
              <span className={styles.number}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {row}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
