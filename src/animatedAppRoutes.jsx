// src/AnimatedAppRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Symptoms from "./pages/symptoms";
import Appointments from "./pages/appointments";
import More from "./pages/more";
import BookAppointment from "./pages/bookAppointment";
import Calendar from "./pages/calendarScreen";
import CycleDetails from "./pages/cycleDetails";
import CycleTracker from "./pages/cycleTracker";
import History from "./pages/history";
import Insights from "./pages/insights";
import Nearby from "./pages/nearbyServices";
import Settings from "./pages/settings";
import Trends from "./pages/trends";
import CycleSymptoms from "./pages/cycleSymptoms";

export default function AnimatedAppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/more" element={<More />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/cycle-details" element={<CycleDetails />} />
        <Route path="/cycle-tracker" element={<CycleTracker />} />
        <Route path="/history" element={<History />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/cycle-symptoms" element={<CycleSymptoms />} />


      </Routes>
    </AnimatePresence>
  );
}
