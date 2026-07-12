import styles from "./CapabilityCard.module.css";

export default function CapabilityCard({ title, description, rows, markColor, hoverBorder }) {
  return (
    <div className={styles.card} style={{ "--hover-border": hoverBorder }}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.rows}>
        {rows.map((row, i) => (
          <li key={row} className={styles.row}>
            <span className={styles.number} style={{ color: markColor }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
}
