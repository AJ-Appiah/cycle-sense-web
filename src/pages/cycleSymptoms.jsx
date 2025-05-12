import { useEffect, useState } from "react";

export default function CycleSymptoms() {
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cycle_symptoms")) || [];
    const filtered = stored.filter((entry) => entry.type === "symptom");
    setSymptoms(filtered);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Logged Symptoms</h1>
      {symptoms.length === 0 ? (
        <p>No symptoms logged yet.</p>
      ) : (
        <ul className="space-y-2">
          {symptoms.map((item, index) => (
            <li
              key={index}
              className="p-3 border rounded shadow-sm bg-white text-sm"
            >
              <strong>{item.date}</strong>: {item.note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
