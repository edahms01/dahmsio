import { Link } from "react-router-dom";
import styles from "./Brand.module.css";

// The wordmark is a static asset (public/logo.svg), not DOM text — its slash-form styling
// must never appear as crawlable text. img alt supplies the link's accessible name; no
// aria-label on the Link itself (that would win over alt and make the alt text pointless).
export default function Brand({ size = 27 }) {
  return (
    <Link to="/" className={styles.brand} style={{ "--logo-height": `${size}px` }}>
      <img src="/logo.svg" alt="DahmsIO" className={styles.logo} />
    </Link>
  );
}
