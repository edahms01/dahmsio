import GlowField from "./GlowField.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import JsonLd from "./JsonLd.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { buildOrganizationSchema } from "../utils/schema.js";

export default function Layout({ blobs, children }) {
  return (
    <>
      <ScrollToTop />
      <JsonLd data={buildOrganizationSchema()} />
      <GlowField blobs={blobs} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
