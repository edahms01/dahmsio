import GlowField from "./GlowField.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import JsonLd from "./JsonLd.jsx";
import { buildOrganizationSchema } from "../utils/schema.js";

export default function Layout({ blobs, children }) {
  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <GlowField blobs={blobs} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
