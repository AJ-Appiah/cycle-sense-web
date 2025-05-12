import { useState } from "react";

export default function CycleTracker() {
  const [date, setDate] = useState("");
  const [type, setType] = useState("symptom");
  const [note, setNote] = useState("");

  const addSymptom = (newEntry) => {
    const existing = JSON.parse(localStorage.getItem("cycle_symptoms")) || [];
    existing.push(newEntry);
    localStorage.setItem("cycle_symptoms", JSON.stringify(existing));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !note) return;
    addSymptom({ date, type, note });
    setDate("");
    setType("symptom");
    setNote("");
    alert("Entry saved!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Cycle Tracker</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="symptom">Symptom</option>
            <option value="cycle">Cycle Event</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border rounded p-2 w-full"
            placeholder="e.g. cramps, flow started"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Save Entry
        </button>
      </form>
    </div>
  );
}
