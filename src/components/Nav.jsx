import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Brand from "./Brand.jsx";
import { NAV_LINKS } from "../data/site.js";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled((prev) => {
        const next = window.scrollY > 30;
        return prev === next ? prev : next;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className={`${styles.nav} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <Brand />
      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className={styles.rightGroup}>
        <a href="#contact" className={styles.cta}>
          Start your journey
        </a>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
          <a href="#contact" className={styles.mobileCta}>
            Start your journey
          </a>
        </div>
      )}
    </nav>
  );
}
