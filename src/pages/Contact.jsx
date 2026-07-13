import { useState } from "react";
import Layout from "../components/Layout.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import HeroBadgePill from "../components/HeroBadgePill.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import { INTERIOR_GLOW_BLOBS, CONTACT_EMAIL, CONTACT_MAILTO } from "../data/site.js";
import { HERO, FORM_INTRO, FIELDS, CONTACT_INFO_HEADING, SUBMIT_LABEL } from "../data/contact.js";
import styles from "./Contact.module.css";

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const initialValues = Object.fromEntries(Object.keys(FIELDS).map((key) => [key, ""]));

function Field({ def, value, onChange }) {
  const { name, label, required, type, placeholder, helper } = def;
  return (
    <label className={styles.field}>
      <span className={styles.label}>
        {label} {required && <span className={styles.required}>(required)</span>}
      </span>
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
        body: encode({ "form-name": "contact", ...values }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={styles.heroCanvas} />
        <HeroBadgePill className={`${styles.badge} ${styles.anim}`}>{HERO.eyebrow}</HeroBadgePill>
        <h1 className={`${styles.h1} ${styles.anim} ${styles.animDelay1}`}>
          {HERO.heroPrefix} <span className={styles.gradientSpan}>{HERO.heroAccent}</span>.
        </h1>
        <p className={`${styles.subcopy} ${styles.anim} ${styles.animDelay2}`}>{HERO.heroSubcopy}</p>
      </header>

      <section className={styles.formSection}>
        {status === "success" ? (
          <Reveal className={styles.formCard}>
            <h2 className={styles.successHeading}>Message sent.</h2>
            <p className={styles.successText}>
              Thanks for reaching out — a consultant will be in touch soon.
            </p>
          </Reveal>
        ) : (
          <Reveal className={styles.formCard}>
            <p className={styles.formIntro}>{FORM_INTRO}</p>

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
                  Don&apos;t fill this out if you&apos;re human:
                  <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} />
                </label>
              </p>

              <div className={styles.row2}>
                <Field def={FIELDS.companyName} value={values.companyName} onChange={handleChange} />
                <Field def={FIELDS.website} value={values.website} onChange={handleChange} />
              </div>
              <Field def={FIELDS.location} value={values.location} onChange={handleChange} />

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
                  Something went wrong sending that — try again, or email us directly at{" "}
                  <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>.
                </p>
              )}

              <PrimaryButton type="submit" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : SUBMIT_LABEL}
              </PrimaryButton>
            </form>
          </Reveal>
        )}
      </section>
    </Layout>
  );
}
