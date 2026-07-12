import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function SecondaryButton({ to, href, children, ...rest }) {
  const className = `${styles.btn} ${styles.secondary}`;

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  );
}
