import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { authToken, logout } = useContext(AuthContext);

  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">🧚 SQL-Feen</div>
      <div className="space-x-4">
        {!authToken ? (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Registrieren</Link>
          </>
        ) : (
          <>
            <Link to="/play" className="hover:underline">Spielen</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/progress" className="hover:underline">Fortschritt</Link>
            <button onClick={logout} className="ml-2 hover:underline">Abmelden</button>
          </>
        )}
      </div>
    </nav>
  );
}
