import { CalendarDays, HeartPulse, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2 z-50">
      <NavLink to="/" className="flex flex-col items-center text-sm">
        <CalendarDays className="h-5 w-5" />
        Home
      </NavLink>
      <NavLink to="/cycle-symptoms" className="flex flex-col items-center text-sm">
        <HeartPulse className="h-5 w-5" />
        Symptoms
      </NavLink>
      <NavLink to="/more" className="flex flex-col items-center text-sm">
        <Menu className="h-5 w-5" />
        More
      </NavLink>
    </nav>
  );
}
