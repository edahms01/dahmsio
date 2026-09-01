import Home from "./pages/Home.jsx";
import Data from "./pages/Data.jsx";
import Technology from "./pages/Technology.jsx";
import Consulting from "./pages/Consulting.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import GodsHeroesAndMonsters from "./pages/demos/GodsHeroesAndMonsters.jsx";
import AskTheArchive from "./pages/demos/AskTheArchive.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ROUTE_PATHS } from "./routes.js";

// Route definitions for vite-react-ssg. Each top-level route is pre-rendered to its own
// static HTML file at build time (see ssgOptions.dirStyle in vite.config.js). Paths come from
// ROUTE_PATHS (src/routes.js) — the same single source of truth the sitemap generator reads,
// so a new page added here also appears in sitemap.xml with no extra step.
//
// "/404" is a real, pre-rendered route (Netlify is configured to serve it for any unmatched
// path — see netlify.toml). "*" covers genuine client-side navigation to a bad in-app link;
// it's a dynamic route so vite-react-ssg excludes it from pre-rendering automatically. Neither
// is a real indexable page, so both are wired directly here rather than through ROUTE_PATHS.
export const routes = [
  { path: ROUTE_PATHS.home, element: <Home /> },
  { path: ROUTE_PATHS.data, element: <Data /> },
  { path: ROUTE_PATHS.technology, element: <Technology /> },
  { path: ROUTE_PATHS.consulting, element: <Consulting /> },
  { path: ROUTE_PATHS.about, element: <About /> },
  { path: ROUTE_PATHS.contact, element: <Contact /> },
  { path: ROUTE_PATHS.demoGodsHeroesMonsters, element: <GodsHeroesAndMonsters /> },
  { path: ROUTE_PATHS.askTheArchive, element: <AskTheArchive /> },
  { path: "/404/", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
];
