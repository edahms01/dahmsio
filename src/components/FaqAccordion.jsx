import { useState } from "react";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
            >
              {item.question}
              <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true" />
            </button>
            {isOpen && <p className={styles.answer}>{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
