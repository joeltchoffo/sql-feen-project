import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../api/auth";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await loginUser(username, password);
    login(data.access); // AuthContext
  } catch (error) {
    alert("Login fehlgeschlagen!");
  }
};

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Benutzername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-indigo-600 text-white p-2 w-full rounded">
          Einloggen
        </button>
      </form>
    </div>
  );
}
