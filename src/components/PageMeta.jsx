import { Head } from "vite-react-ssg";
import { SITE_URL } from "../data/site.js";

/**
 * Renders a page's <title>, meta description, self-referencing canonical, and matching
 * og and twitter tags into the pre-rendered HTML <head>.
 *
 * Sourced from a page's `META` object in `src/data/*.js` (must include `path`, `title`,
 * `description`). Rendered directly in JSX — not a hook — so vite-react-ssg's SSG pass can
 * capture it at build time; anything set only via a client-side effect never reaches AI
 * crawlers or other non-JS clients.
 */
export default function PageMeta({ path, title, description }) {
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
