import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import JsonLd from "./JsonLd.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { buildOrganizationSchema } from "../utils/schema.js";

export default function Layout({ children }) {
  return (
    <>
      <ScrollToTop />
      <JsonLd data={buildOrganizationSchema()} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
