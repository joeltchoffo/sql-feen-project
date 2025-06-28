import { useParams } from "react-router-dom";
import { useState } from "react";
import MainLayout from "../components/MainLayout";

export default function MissionPage() {
  const { level, mission } = useParams();
  const [sql, setSql] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // hier später fetch an Backend (temporär nur Demo)
      if (sql.toLowerCase().includes("select")) {
        setResult("🎉 Du hast die Fee befreit!");
        setError(null);
      } else {
        throw new Error("Nur SELECT-Zauber sind hier erlaubt!");
      }
    } catch (err) {
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6 max-w-4xl mx-auto text-purple-100">
        <h1 className="text-3xl font-bold text-purple-300">📘 Mission {level}.{mission}</h1>
        <p>
          Die Datenfee wurde in einem geheimen Datensatz gefangen.  
          Nutze dein SQL-Wissen, um sie zu befreien!
        </p>

        <div className="bg-[#2a1b4d] border border-purple-700 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-purple-200 mb-2">🧪 Aufgabe:</h2>
          <p>
            Schreibe eine SQL-Abfrage, die alle Zauberer mit dem Rang "Meister" aus der Tabelle `magier` auswählt.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            rows={5}
            value={sql}
            onChange={(e) => setSql(e.target.value)}
            placeholder="z.B. SELECT * FROM magier WHERE rang = 'Meister';"
            className="w-full p-4 bg-[#1c1237] text-white border border-purple-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition"
          >
            ✨ Ausführen
          </button>
        </form>

        {/* Feedback */}
        {result && (
          <div className="bg-green-800 border border-green-500 p-4 rounded mt-4 text-green-100">
            ✅ {result}
          </div>
        )}
        {error && (
          <div className="bg-red-800 border border-red-500 p-4 rounded mt-4 text-red-100">
            ⚠️ {error}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
