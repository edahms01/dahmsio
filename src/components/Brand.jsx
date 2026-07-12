import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import styles from "./Brand.module.css";

export default function Brand({ size = 34, fontSize }) {
  return (
    <Link to="/" className={styles.brand} style={fontSize ? { fontSize } : undefined}>
      <Logo size={size} />
      <span>
        Dahms<span className={styles.accent}>I/O</span>
      </span>
    </Link>
  );
}
