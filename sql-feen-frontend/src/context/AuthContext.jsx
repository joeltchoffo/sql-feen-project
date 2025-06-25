import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("token")
  );
  const [user, setUser] = useState(null); // optional für später

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("token", token);
    // setUser(...) ← optional: aus Token ableiten
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("token");
    setUser(null);
  };

  // optional: beim Laden prüfen, ob Token gültig ist
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
