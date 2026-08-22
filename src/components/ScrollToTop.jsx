import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Client-side navigation (<Link>/<NavLink>) never resets scroll position on its own — only a
 * real browser navigation does. Without this, clicking a nav link while scrolled halfway down
 * one page lands the user halfway down the next page instead of at its top.
 *
 * Skipped when the URL has a hash: SubServiceSection.jsx owns scrolling to a specific
 * sub-service row for deep links like /technology/#some-id, and this would fight that.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
