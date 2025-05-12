import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/calendar.css";
import { format } from "date-fns";

const SYMPTOM_OPTIONS = [
  "Cramps",
  "Bloating",
  "Fatigue",
  "Mood Swings",
  "Headache",
  "Acne",
  "Back Pain",
];

const CONTEXT_OPTIONS = [
  "Stress/Exams",
  "Sick/Illness",
  "Medication",
  "Heavy Workload",
  "Travel",
  "No Unusual Context",
];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [description, setDescription] = useState("");
  const [context, setContext] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cycle_symptoms")) || [];
    const dateList = storedData.map((item) => item.date);
    setMarkedDates(dateList);
  }, []);

  const handleSave = () => {
    if (!selectedSymptom) {
      alert("Please select a symptom.");
      return;
    }

    const entry = {
      date: format(selectedDate, "yyyy-MM-dd"),
      type: "symptom",
      symptom: selectedSymptom,
      description,
      context,
    };

    const existing = JSON.parse(localStorage.getItem("cycle_symptoms")) || [];
    existing.push(entry);
    localStorage.setItem("cycle_symptoms", JSON.stringify(existing));
    setMarkedDates((prev) => [...prev, entry.date]);

    // Reset form
    setSelectedSymptom("");
    setDescription("");
    setContext("");
    alert("Symptom logged!");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Cycle Calendar</h2>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={({ date, view }) => {
          const dateStr = format(date, "yyyy-MM-dd");
          if (view === "month" && markedDates.includes(dateStr)) {
            return "marked-date";
          }
          return null;
        }}
      />

      <p className="mt-4 text-gray-600">
        Selected Date: <strong>{format(selectedDate, "PPP")}</strong>
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block font-medium mb-1">Select Symptom</label>
          <select
            value={selectedSymptom}
            onChange={(e) => setSelectedSymptom(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">-- Choose a symptom --</option>
            {SYMPTOM_OPTIONS.map((symptom) => (
              <option key={symptom} value={symptom}>
                {symptom}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Description (optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Any extra notes about the symptom..."
            className="w-full border rounded p-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Context / Influences</label>
          <select
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">-- Select context --</option>
            {CONTEXT_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSave}
          className="mt-2 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600"
        >
          Save Symptom Entry
        </button>
      </div>
    </div>
  );
}
