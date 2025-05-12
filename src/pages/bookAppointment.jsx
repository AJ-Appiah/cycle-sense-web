import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookAppointment() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    reason: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const updatedAppointments = [...storedAppointments, form];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/appointments");
    }, 2000);
  };

  return (
    <div className="p-4 min-h-screen bg-rose-50 pb-20 relative">
      <h1 className="text-xl font-bold mb-4 text-rose-700">Book Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow">
        {["title", "date", "time", "location"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field}
            </label>
            <input
              type={field === "date" ? "date" : field === "time" ? "time" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-rose-400 focus:outline-none"
              placeholder={`Enter ${field}`}
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700">Reason (Optional)</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            rows="3"
            className="mt-1 w-full border rounded-lg px-3 py-2"
            placeholder="Brief description of your visit"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition"
        >
          Confirm Appointment
        </button>
      </form>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg transition">
          Appointment booked successfully!
        </div>
      )}
    </div>
  );
}
