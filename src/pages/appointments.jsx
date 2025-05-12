import { useEffect, useState } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
  };

  return (
    <div className="p-4 min-h-screen bg-rose-50 pb-20">
      <h1 className="text-xl font-bold mb-4 text-rose-700">Your Appointments</h1>

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments yet.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appt, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md relative border border-rose-100"
            >
              <h2 className="text-lg font-semibold text-gray-800">{appt.title}</h2>
              <p className="text-sm text-gray-600">
                📅 {appt.date} ⏰ {appt.time}
              </p>
              <p className="text-sm text-gray-600">📍 {appt.location}</p>
              {appt.reason && (
                <p className="text-sm text-gray-500 mt-1">📝 {appt.reason}</p>
              )}

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete
                </button>
                {/* Edit functionality will be added next */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
