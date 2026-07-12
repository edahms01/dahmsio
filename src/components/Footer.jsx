import { Link } from "react-router-dom";
import Brand from "./Brand.jsx";
import { FOOTER_LINKS, TAGLINE } from "../data/site.js";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Brand size={32} fontSize="19px" />
      <div className={styles.tagline}>{TAGLINE}</div>
      <div className={styles.links}>
        {FOOTER_LINKS.map((link) => (
          <Link key={link.label} to={link.to} className={styles.link}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
