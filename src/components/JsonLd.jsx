import { Head } from "vite-react-ssg";

/**
 * Renders a JSON-LD <script> tag into the pre-rendered HTML <head> — via <Head> (see
 * PageMeta.jsx) rather than a plain tag, so it's captured at build time, not appended after
 * hydration. Build `data` with a helper from src/utils/schema.js.
 */
export default function JsonLd({ data }) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
