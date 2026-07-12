import styles from "./MethodologyStep.module.css";

export default function MethodologyStep({ number, title, description }) {
  return (
    <div className={styles.step}>
      <div className={styles.head}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
