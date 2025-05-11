import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function More() {
  const links = [
    { name: "Book Appointments", path: "/appointments" },
    { name: "Cycle Tracker", path: "/cycle-tracker" },
    { name: "Cycle Details", path: "/cycle-details" },
    { name: "Calendar View", path: "/calendar" },
    { name: "Insights", path: "/insights" },
    { name: "Trends", path: "/trends" },
    { name: "History", path: "/history" },
    { name: "Nearby Services", path: "/nearby" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 top-0 bg-white z-50 p-4 pt-6 pb-24 overflow-y-auto"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <h2 className="text-xl font-semibold mb-4">More Options</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="block p-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
