import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PrimaryButton from "./PrimaryButton.jsx";
import Reveal from "./Reveal.jsx";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import { SUBSERVICE_LABELS } from "../data/site.js";
import { ROUTE_PATHS } from "../routes.js";
import styles from "./SubServiceSection.module.css";

// Matches the grid-template-rows transition duration on .panelOuter in
// SubServiceSection.module.css. Kept as a JS constant, rather than reading the CSS value, so
// the "re-apply `hidden` once fully closed" timer can't drift out of sync with it.
const COLLAPSE_MS = 320;

/**
 * Animates a panel's open/closed height without ever unmounting its content, via the
 * 0fr/1fr grid-template-rows trick (no scrollHeight measurement needed). The `hidden`
 * attribute is the source of truth for both a11y (removed from the accessibility tree and
 * tab order) and the pre-rendered HTML (content is always in the DOM, satisfying §2 of the
 * build spec) — it's applied a beat late on close, once the collapse transition has actually
 * finished, so the animation isn't cut short by an instant `display: none`. With reduced
 * motion, `hidden` is applied immediately and no transition runs.
 */
function SubServicePanel({ isOpen, reducedMotion, id, headerId, children }) {
  const [closed, setClosed] = useState(!isOpen);

  useEffect(() => {
    if (isOpen) {
      setClosed(false);
      return undefined;
    }
    if (reducedMotion) {
      setClosed(true);
      return undefined;
    }
    const timeout = setTimeout(() => setClosed(true), COLLAPSE_MS);
    return () => clearTimeout(timeout);
  }, [isOpen, reducedMotion]);

  return (
    <div
      id={id}
      role="region"
      aria-labelledby={headerId}
      hidden={closed}
      className={`${styles.panelOuter} ${isOpen ? styles.panelOpen : ""} ${reducedMotion ? styles.noAnim : ""}`}
    >
      <div className={styles.panelInner}>{children}</div>
    </div>
  );
}

/**
 * Renders one page's SUBSERVICE_GROUPS (Data, Technology, Consulting — see
 * subservice-expansion-plan-v6.md and code-instructions-subservices-v2.md §3).
 *
 * All rows start closed (D1). A matching `location.hash` opens that one item and scrolls it
 * into view. Each group's rows are single-open independently of any other group's rows.
 *
 * Panels are always rendered — visibility is controlled with the `hidden` attribute, never
 * conditional mounting — so every sub-service's full copy is present in the pre-rendered HTML
 * regardless of open/closed state (hard constraint, §2 of the build spec).
 */
export default function SubServiceSection({ groups, ctaLabel }) {
  const { hash } = useLocation();
  const reducedMotion = usePrefersReducedMotion();
  const [openByGroup, setOpenByGroup] = useState(() => groups.map(() => null));

  useEffect(() => {
    const id = hash.replace("#", "");
    if (!id) return;

    const groupIndex = groups.findIndex((group) => group.items.some((item) => item.id === id));
    if (groupIndex === -1) return;

    setOpenByGroup((current) => {
      const next = [...current];
      next[groupIndex] = id;
      return next;
    });

    const row = document.getElementById(id);
    row?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    // Runs once on mount to honor a deep link (e.g. from cold-email/outreach copy). Later
    // in-page toggles are handled by toggle()/history.replaceState below, not this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (groupIndex, id) => {
    setOpenByGroup((current) => {
      const next = [...current];
      next[groupIndex] = current[groupIndex] === id ? null : id;
      return next;
    });

    const isOpening = openByGroup[groupIndex] !== id;
    if (isOpening) {
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <>
      {groups.map((group, groupIndex) => (
        <div className={styles.group} key={group.heading}>
          <Reveal>
            {group.eyebrow && <div className="eyebrow">{group.eyebrow}</div>}
            <h2 className={`sectionHeading ${styles.heading}`}>{group.heading}</h2>
            {group.paragraphs.map((paragraph) => (
              <p className={styles.intro} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </Reveal>

          <div className={styles.accordion}>
            {group.items.map((item, i) => {
              const isOpen = openByGroup[groupIndex] === item.id;
              const headerId = `subservice-header-${item.id}`;
              const panelId = `subservice-panel-${item.id}`;

              return (
                <Reveal as="div" key={item.id} delay={i * 80} className={styles.rowWrap}>
                  <div id={item.id} className={styles.row} style={{ "--hover-border": item.hoverBorder }}>
                    <button
                      type="button"
                      id={headerId}
                      className={styles.header}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(groupIndex, item.id)}
                    >
                      <span className={styles.headerMain}>
                        {group.numbered && (
                          <span className={styles.number} style={{ color: item.markColor }}>
                            {item.number}
                          </span>
                        )}
                        <span className={styles.title}>{item.title}</span>
                        <span className={styles.outcome}>{item.outcome}</span>
                      </span>
                      <span className={styles.toggleLabel}>
                        {isOpen ? SUBSERVICE_LABELS.close : SUBSERVICE_LABELS.open}
                      </span>
                    </button>

                    <SubServicePanel
                      id={panelId}
                      headerId={headerId}
                      isOpen={isOpen}
                      reducedMotion={reducedMotion}
                    >
                      <p className={styles.body}>{item.body}</p>

                      <div className={styles.listBlock}>
                        <h3 className={styles.listLabel}>{SUBSERVICE_LABELS.symptoms}</h3>
                        <ul className={styles.list}>
                          {item.symptoms.map((symptom) => (
                            <li key={symptom}>{symptom}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.listBlock}>
                        <h3 className={styles.listLabel}>{SUBSERVICE_LABELS.deliverables}</h3>
                        <ul className={styles.list}>
                          {item.deliverables.map((deliverable) => (
                            <li key={deliverable}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.cta}>
                        <PrimaryButton to={ROUTE_PATHS.contact} arrow>
                          {ctaLabel}
                        </PrimaryButton>
                      </div>
                    </SubServicePanel>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
