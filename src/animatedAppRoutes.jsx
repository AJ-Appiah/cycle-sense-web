// src/AnimatedAppRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Symptoms from "./pages/symptoms";
import Appointments from "./pages/appointments";
import More from "./pages/more";

export default function AnimatedAppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </AnimatePresence>
  );
}
