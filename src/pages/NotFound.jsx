import { Head } from "vite-react-ssg";
import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import { META, CONTENT } from "../data/notFound.js";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <PageMeta {...META} />
      <Head>
        {/* Never index the 404 page itself, page-specific and additive to PageMeta's tags. */}
        <meta name="robots" content="noindex" />
      </Head>
      <section className={styles.section}>
        <div className="eyebrow">{CONTENT.eyebrow}</div>
        <h1 className={`sectionHeading ${styles.heading}`}>{CONTENT.heading}</h1>
        <p className={styles.text}>{CONTENT.text}</p>
        <PrimaryButton to="/" arrow>
          {CONTENT.buttonLabel}
        </PrimaryButton>
      </section>
    </Layout>
  );
}
