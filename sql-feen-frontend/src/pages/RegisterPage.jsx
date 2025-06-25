import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, password);
      alert("Registrierung erfolgreich!");
      navigate("/login");
    } catch (error) {
      console.log("Fehler bei Registrierung:", error.response?.data);
      alert(
        error.response?.data?.error ||
        "Registrierung fehlgeschlagen. Bitte überprüfe deine Eingaben."
      );
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Registrieren</h1>
      <form onSubmit={handleRegister} className="space-y-3">
        <input
          type="text"
          placeholder="Benutzername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-green-600 text-white p-2 w-full rounded">
          Registrieren
        </button>
      </form>
    </div>
  );
}
