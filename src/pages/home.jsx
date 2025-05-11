import { useNavigate } from "react-router-dom";
import { CalendarDays, HeartPulse, CalendarPlus, Activity } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      name: "Cycle Tracker",
      icon: <HeartPulse className="w-8 h-8 text-pink-600" />, 
      route: "/cycle-tracker",
    },
    {
      name: "Book Appointment",
      icon: <CalendarPlus className="w-8 h-8 text-blue-600" />, 
      route: "/book-appointment",
    },
    {
      name: "Calendar View",
      icon: <CalendarDays className="w-8 h-8 text-indigo-600" />, 
      route: "/calendar",
    },
    {
      name: "Insights",
      icon: <Activity className="w-8 h-8 text-emerald-600" />, 
      route: "/insights",
    },
    {
      name: "Symptoms Log",
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />, 
      route: "/symptoms",
    },
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-b from-white to-rose-50">
      <h1 className="text-xl font-bold text-center mb-6">Welcome to CycleSense</h1>
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.name}
            onClick={() => navigate(feature.route)}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-4 cursor-pointer transition-transform hover:scale-105"
          >
            {feature.icon}
            <span className="mt-2 text-sm text-gray-700 font-medium text-center">
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
