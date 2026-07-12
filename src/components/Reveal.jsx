import useInView from "../hooks/useInView.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import styles from "./Reveal.module.css";

export default function Reveal({ as: Tag = "div", delay = 0, duration, className = "", style, children }) {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView({ skip: reduced });

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${inView ? styles.visible : ""} ${className}`}
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        transitionDuration: duration ? `${duration}ms` : undefined,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
