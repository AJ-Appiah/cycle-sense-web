import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function Symptoms() {
  const [symptom, setSymptom] = useState("");
  const [description, setDescription] = useState("");
  const [context, setContext] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!symptom) {
      alert("Please select a symptom.");
      return;
    }

    const newEntry = {
      date: new Date().toISOString().split("T")[0], // "YYYY-MM-DD"
      type: "symptom",
      symptom,
      description,
      context,
    };

    const existing = JSON.parse(localStorage.getItem("cycle_symptoms")) || [];
    existing.push(newEntry);
    localStorage.setItem("cycle_symptoms", JSON.stringify(existing));

    // Reset form and redirect
    setSymptom("");
    setDescription("");
    setContext("");
    navigate("/cycle-symptoms");
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Log a Symptom</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Symptom</label>
          <select
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            className="w-full border rounded p-2"
            required
          >
            <option value="">-- Select a symptom --</option>
            {SYMPTOM_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Description (optional)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add any details or notes..."
            className="w-full border rounded p-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Context / What might have influenced this?</label>
          <select
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="">-- Choose a context --</option>
            {CONTEXT_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition"
        >
          Save Symptom
        </button>
      </form>
    </div>
  );
}
