import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useMemo } from "react";

import Scene from "./components/Scene";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

/* -------------------------------------------------------
   Layout Component
   Keeps ONE global Three.js scene alive
------------------------------------------------------- */
function Layout() {
  const location = useLocation();

  // Prevent unnecessary re-renders of the Canvas
  const scene = useMemo(
    () => <Scene route={location.pathname} />,
    [location.pathname]
  );

  return (
    <>
      {/* 3D Background Scene */}
      {scene}

      {/* HTML Overlay */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

/* -------------------------------------------------------
   App Entry
------------------------------------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
