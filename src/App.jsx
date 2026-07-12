import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Data from "./pages/Data.jsx";
import Technology from "./pages/Technology.jsx";
import Consulting from "./pages/Consulting.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data" element={<Data />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/consulting" element={<Consulting />} />
    </Routes>
  );
}
