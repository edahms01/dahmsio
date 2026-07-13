import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function PrimaryButton({ to, href, arrow = false, size, children, ...rest }) {
  const className = `${styles.btn} ${styles.primary} ${size === "lg" ? styles.lg : ""}`;
  const content = (
    <>
      {children}
      {arrow && <span className={styles.arrow}>→</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...rest}>
      {content}
    </button>
  );
}
