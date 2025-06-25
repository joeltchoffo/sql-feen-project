import { useGame } from "../context/GameContext";

export default function ProgressPage() {
  const { mode, points, scrolls, completedMissions } = useGame();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📊 Fortschritt</h1>

      <div className="space-y-4">
        <div>
          <strong>Spielmodus:</strong> {mode ? mode : "Noch nicht ausgewählt"}
        </div>

        <div>
          <strong>Punkte:</strong> {points}
        </div>

        <div>
          <strong>Erworbene Schriftrollen:</strong>
          <ul className="list-disc list-inside text-green-700">
            {scrolls.length > 0 ? (
              scrolls.map((s) => <li key={s}>{s}</li>)
            ) : (
              <li>Keine Schriftrollen gekauft</li>
            )}
          </ul>
        </div>

        <div>
          <strong>Abgeschlossene Missionen:</strong>
          <ul className="list-disc list-inside text-blue-700">
            {completedMissions.length > 0 ? (
              completedMissions.map((m) => <li key={m}>{m}</li>)
            ) : (
              <li>Noch keine Mission abgeschlossen</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
