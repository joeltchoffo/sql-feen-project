import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";

export default function ModeSelectPage() {
  const navigate = useNavigate();

const { selectMode } = useGame();

const handleSelectMode = (mode) => {
  selectMode(mode); // speichert Modus im Kontext
  navigate("/levels"); // oder zur Levelauswahl weiterleiten
};

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6">Spielmodus wählen</h1>
      <div className="space-y-4">
        <button
          onClick={() => handleSelectMode("normal")}
          className="bg-blue-600 text-white p-3 w-full rounded hover:bg-blue-700"
        >
          🧙 Normales Spiel
        </button>
        <button
          onClick={() => handleSelectMode("frei")}
          className="bg-purple-600 text-white p-3 w-full rounded hover:bg-purple-700"
        >
          🧚 Freies Spiel
        </button>
      </div>
    </div>
  );
}
