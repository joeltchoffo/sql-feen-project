import { useGame } from "../context/GameContext";
import { useNavigate } from "react-router-dom";

export default function LevelSelectPage() {
  const { mode } = useGame();
  const navigate = useNavigate();

  const handleMissionClick = (level, mission) => {
    // Später an MissionPage weiterleiten mit ID
    navigate(`/mission/${level}/${mission}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Kapitel 1: Die verschwundenen Feen</h1>
      <p className="mb-6 text-gray-700">
        In diesem Kapitel wirst du deine ersten SQL-Zauber lernen, um die Feen zu befreien!
      </p>

      <h2 className="text-xl font-semibold mb-2">Missionen</h2>
      <div className="space-y-3">
        <button
          onClick={() => handleMissionClick(1, 1)}
          className="w-full p-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Aufgabe 1: SELECT-Grundlagen
        </button>
        <button
          onClick={() => handleMissionClick(1, 2)}
          className="w-full p-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Aufgabe 2: WHERE-Bedingungen
        </button>
      </div>
    </div>
  );
}
