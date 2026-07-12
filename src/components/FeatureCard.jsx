import { Link } from "react-router-dom";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  title,
  description,
  bullets,
  href,
  linkLabel,
  icon,
  markColor,
  hoverBorder,
  iconBg,
  iconBorder,
  iconGradient,
}) {
  return (
    <div className={styles.card} style={{ "--hover-border": hoverBorder }}>
      <div className={styles.iconBox} style={{ background: iconBg, borderColor: iconBorder }}>
        <div className={`${styles.iconGlyph} ${styles[icon]}`} style={{ background: iconGradient }} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.bullets}>
        {bullets.map((bullet) => (
          <li key={bullet}>
            <span className={styles.mark} style={{ color: markColor }}>
              ›
            </span>
            {bullet}
          </li>
        ))}
      </ul>
      <Link to={href} className={styles.link} style={{ color: markColor }}>
        {linkLabel} <span>→</span>
      </Link>
    </div>
  );
}
