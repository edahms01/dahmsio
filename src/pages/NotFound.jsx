import { Head } from "vite-react-ssg";
import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import { META } from "../data/notFound.js";
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
        <div className="eyebrow">404</div>
        <h1 className={`sectionHeading ${styles.heading}`}>Page not found.</h1>
        <p className={styles.text}>
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <PrimaryButton to="/" arrow>
          Back to home
        </PrimaryButton>
      </section>
    </Layout>
  );
}
