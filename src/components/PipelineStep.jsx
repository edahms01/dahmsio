import styles from "./PipelineStep.module.css";

export default function PipelineStep({ label, labelColor, title, description, highlighted = false }) {
  return (
    <div className={`${styles.step} ${highlighted ? styles.highlighted : ""}`}>
      <div className={styles.label} style={{ color: highlighted ? "#fff" : labelColor }}>
        {label}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
