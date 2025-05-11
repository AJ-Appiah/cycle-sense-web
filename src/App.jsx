// ✅ In App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BottomNav from "./components/BottomNav";
import AnimatedAppRoutes from "./animatedAppRoutes"; // we create this file

export default function App() {
  return (
    <Router>
      <div className="pb-16">
        <AnimatedAppRoutes />
        <BottomNav />
      </div>
    </Router>
  );
}
