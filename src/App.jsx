import Home from "./pages/Home.jsx";
import Data from "./pages/Data.jsx";
import Technology from "./pages/Technology.jsx";
import Consulting from "./pages/Consulting.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

// Route definitions for vite-react-ssg. Each top-level route is pre-rendered to its own
// static HTML file at build time (see ssgOptions.dirStyle in vite.config.js).
//
// "/404" is a real, pre-rendered route (Netlify is configured to serve it for any unmatched
// path — see netlify.toml). "*" covers genuine client-side navigation to a bad in-app link;
// it's a dynamic route so vite-react-ssg excludes it from pre-rendering automatically.
export const routes = [
  { path: "/", element: <Home /> },
  { path: "/data", element: <Data /> },
  { path: "/technology", element: <Technology /> },
  { path: "/consulting", element: <Consulting /> },
  { path: "/contact", element: <Contact /> },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
];
