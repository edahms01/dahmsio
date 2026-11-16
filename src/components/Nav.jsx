import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Brand from "./Brand.jsx";
import { NAV_LINKS, DESKTOP_NAV_LINKS, NAV_CTA_LABEL } from "../data/site.js";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

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

  // Mobile menu behaviour while open: lock page scroll, move focus into the menu, close on
  // Escape (returning focus to the toggle).
  useEffect(() => {
    if (!menuOpen) return undefined;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a")?.focus();
    const toggle = toggleRef.current;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggle?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled || menuOpen ? styles.scrolled : ""}`}>
      <Brand />
      <div className={styles.links}>
        {DESKTOP_NAV_LINKS.map((link) => (
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
        <Link to="/contact/" className={styles.cta}>
          {NAV_CTA_LABEL}
        </Link>
        <button
          type="button"
          ref={toggleRef}
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu} ref={menuRef}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ""}`}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact/" className={styles.mobileCta} onClick={closeMenu}>
            {NAV_CTA_LABEL}
          </Link>
        </div>
      )}
    </nav>
  );
}
