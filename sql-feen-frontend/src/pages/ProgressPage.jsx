import { useEffect, useState, useContext } from "react";
import { getPlayerProgress } from "../api/progress";
import { AuthContext } from "../context/AuthContext";

export default function ProgressPage() {
  const { authToken } = useContext(AuthContext);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const data = await getPlayerProgress(authToken);
        setProgress(data);
      } catch (err) {
        console.error("Fehler beim Laden des Fortschritts:", err);
        setError("Zugriff verweigert oder Serverfehler");
      }
    };

    if (authToken) fetchProgress();
  }, [authToken]);

  if (!authToken) {
    return <p className="p-4">Bitte zuerst einloggen.</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📊 Fortschritt</h1>
      {error && <p className="text-red-500">{error}</p>}
      {!progress ? (
        <p>⏳ Lade Fortschritt...</p>
      ) : (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(progress, null, 2)}</pre>
      )}
    </div>
  );
}
