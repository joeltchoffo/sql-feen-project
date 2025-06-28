import { useGame } from "../context/GameContext";
import MainLayout from "../components/MainLayout";

export default function ProgressPage() {
  const { mode, points, scrolls, completedMissions } = useGame();

  return (
    <MainLayout>
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-purple-300 drop-shadow mb-2">📊 Fortschritt</h1>
        <p className="text-purple-100">Dein aktueller Stand in der magischen Welt der SQL-Feen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Spielmodus & Punkte */}
        <div className="bg-[#2e204a] p-5 rounded-xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold text-purple-200 mb-2">🧭 Spielmodus</h2>
          <p className="text-purple-100 mb-4">
            Aktiver Pfad: <span className="font-bold">{mode || "nicht ausgewählt"}</span>
          </p>
          <h2 className="text-xl font-semibold text-purple-200 mb-2">💰 Punkte</h2>
          <p className="text-green-300 text-lg font-bold">{points}</p>
        </div>

        {/* Scrolls */}
        <div className="bg-[#2e204a] p-5 rounded-xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold text-purple-200 mb-2">📜 Gekaufte Schriftrollen</h2>
          {scrolls.length > 0 ? (
            <ul className="list-disc list-inside text-purple-100 space-y-1">
              {scrolls.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          ) : (
            <p className="text-purple-400">Keine Schriftrollen erworben</p>
          )}
        </div>

        {/* Missionen */}
        <div className="md:col-span-2 bg-[#2e204a] p-5 rounded-xl border border-purple-700 shadow-md">
          <h2 className="text-xl font-semibold text-purple-200 mb-2">✅ Abgeschlossene Missionen</h2>
          {completedMissions.length > 0 ? (
            <ul className="list-disc list-inside text-purple-100 space-y-1">
              {completedMissions.map((m) => (
                <li key={m}>Mission {m}</li>
              ))}
            </ul>
          ) : (
            <p className="text-purple-400">Noch keine Missionen abgeschlossen</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
