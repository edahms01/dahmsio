import GlowField from "./GlowField.jsx";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ blobs, children }) {
  return (
    <>
      <GlowField blobs={blobs} />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
