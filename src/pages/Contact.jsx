import { useState } from "react";
import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import JsonLd from "../components/JsonLd.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import MessageMockup from "../components/mockups/MessageMockup.jsx";
import FaqAccordion from "../components/FaqAccordion.jsx";
import { INTERIOR_GLOW_BLOBS, CONTACT_EMAIL, CONTACT_MAILTO } from "../data/site.js";
import {
  META,
  HERO,
  MOCKUP,
  FORM_INTRO,
  FIELDS,
  CONTACT_INFO_HEADING,
  SUBMIT_LABEL,
  SUBMITTING_LABEL,
  SUCCESS,
  HONEYPOT_LABEL,
  ERROR_TEXT,
  FAQ_EYEBROW,
  FAQ_HEADING,
  FAQ,
} from "../data/contact.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
import styles from "./Contact.module.css";

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const initialValues = Object.fromEntries(
  Object.keys(FIELDS).map((key) => [key, FIELDS[key].type === "checkboxGroup" ? [] : ""]),
);

function Field({ def, value, onChange }) {
  const { name, label, required, type, placeholder, helper, options } = def;
  const labelEl = (
    <span className={styles.label}>
      {label} {required && <span className={styles.required}>(required)</span>}
    </span>
  );

  if (type === "checkboxGroup") {
    const selected = value || [];
    const toggle = (option) => {
      const next = selected.includes(option) ? selected.filter((o) => o !== option) : [...selected, option];
      onChange({ target: { name, value: next } });
    };
    return (
      <div className={styles.field}>
        {labelEl}
        <div className={styles.checkboxGroup}>
          {options.map((option) => (
            <label key={option} className={styles.checkboxOption}>
              <input type="checkbox" checked={selected.includes(option)} onChange={() => toggle(option)} />
              {option}
            </label>
          ))}
        </div>
        {helper && <span className={styles.helper}>{helper}</span>}
      </div>
    );
  }

  if (type === "select") {
    return (
      <label className={styles.field}>
        {labelEl}
        <select name={name} required={required} value={value} onChange={onChange}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {helper && <span className={styles.helper}>{helper}</span>}
      </label>
    );
  }

  return (
    <label className={styles.field}>
      {labelEl}
      {type === "textarea" ? (
        <textarea name={name} required={required} value={value} onChange={onChange} rows={5} />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {helper && <span className={styles.helper}>{helper}</span>}
    </label>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (botField) return;
    setStatus("submitting");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values, services: values.services.join(", ") }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <PageMeta {...META} />
      <JsonLd data={buildBreadcrumbSchema(META.path)} />
      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={styles.heroCanvas} />
        <div>
          <div className={`eyebrow ${styles.anim}`}>{HERO.eyebrow}</div>
          <h1 className={`${styles.h1} ${styles.anim} ${styles.animDelay1}`}>
            {HERO.heroPrefix} <span className={styles.gradientSpan}>{HERO.heroAccent}.</span>
          </h1>
          <p className={`${styles.subcopy} ${styles.anim} ${styles.animDelay2}`}>{HERO.heroSubcopy}</p>
          <div className={`${styles.ctaRow} ${styles.anim} ${styles.animDelay3}`}>
            <PrimaryButton href="#contact-form" arrow>
              {HERO.primaryCtaLabel}
            </PrimaryButton>
          </div>
        </div>
        <AppWindowMockup filename={MOCKUP.filename}>
          <MessageMockup thread={MOCKUP.thread} stats={MOCKUP.stats} />
        </AppWindowMockup>
      </header>

      <section id="contact-form" className={styles.formSection}>
        {status === "success" ? (
          <Reveal className={styles.formCard}>
            <h2 className={styles.successHeading}>{SUCCESS.heading}</h2>
            <p className={styles.successText}>{SUCCESS.text}</p>
          </Reveal>
        ) : (
          <Reveal className={styles.formCard}>
            <p className={styles.formIntro}>
              {FORM_INTRO} <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className={styles.honeypot}>
                <label>
                  {HONEYPOT_LABEL}
                  <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
                </label>
              </p>

              <div className={styles.row2}>
                <Field def={FIELDS.companyName} value={values.companyName} onChange={handleChange} />
                <Field def={FIELDS.website} value={values.website} onChange={handleChange} />
              </div>
              <Field def={FIELDS.location} value={values.location} onChange={handleChange} />
              <Field def={FIELDS.services} value={values.services} onChange={handleChange} />
              <Field def={FIELDS.budget} value={values.budget} onChange={handleChange} />

              <h2 className={styles.sectionLabel}>{CONTACT_INFO_HEADING}</h2>

              <div className={styles.row2}>
                <Field def={FIELDS.firstName} value={values.firstName} onChange={handleChange} />
                <Field def={FIELDS.lastName} value={values.lastName} onChange={handleChange} />
              </div>
              <div className={styles.row2}>
                <Field def={FIELDS.email} value={values.email} onChange={handleChange} />
                <Field def={FIELDS.subject} value={values.subject} onChange={handleChange} />
              </div>
              <Field def={FIELDS.message} value={values.message} onChange={handleChange} />

              {status === "error" && (
                <p className={styles.errorText}>
                  {ERROR_TEXT} <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
                </p>
              )}

              <PrimaryButton type="submit" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? SUBMITTING_LABEL : SUBMIT_LABEL}
              </PrimaryButton>
            </form>
          </Reveal>
        )}
      </section>

      <section className={styles.faqSection}>
        <Reveal duration={900}>
          <div className="eyebrow" style={{ textAlign: "center" }}>
            {FAQ_EYEBROW}
          </div>
          <h2 className={`sectionHeading ${styles.faqHeading}`}>{FAQ_HEADING}</h2>
          <FaqAccordion items={FAQ} />
        </Reveal>
      </section>
    </Layout>
  );
}
