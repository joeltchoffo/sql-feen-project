import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGame } from "../context/GameContext";

export default function MissionPage() {
  const { level, mission } = useParams();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const { earnPoints, markMissionCompleted } = useGame();

  const validateQuery = (sql) => {
    const allowed = ["select", "from", "where", "join", "on", "substr", "reverse"];
    const lowered = sql.toLowerCase();
    return allowed.every(keyword => !lowered.includes(";")) && allowed.some(kw => lowered.includes(kw));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateQuery(query)) {
      setFeedback("🚫 Ungültige SQL-Abfrage!");
      return;
    }

    try {
      // Später: API-Call ans Backend
      const simulatedResult = [{ Fee: "Luna", Feenstaub: "Glitzer" }];
      setResult(simulatedResult);
      setFeedback("✨ Du hast die Fee befreit!");

      earnPoints(10); // Punkte gutschreiben
      markMissionCompleted(`L${level}M${mission}`);
    } catch (err) {
      setFeedback("Fehler beim Ausführen der Abfrage");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Level {level} – Mission {mission}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          rows={5}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Gib deine SQL-Abfrage ein..."
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          🧪 Abfrage ausführen
        </button>
      </form>

      {feedback && <p className="mt-4 text-lg">{feedback}</p>}

      {result && (
        <div className="mt-6 border rounded p-4">
          <h2 className="font-semibold mb-2">🔍 Ergebnis:</h2>
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                {Object.keys(result[0]).map((key) => (
                  <th key={key} className="border p-2 bg-gray-100">{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j} className="border p-2">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
