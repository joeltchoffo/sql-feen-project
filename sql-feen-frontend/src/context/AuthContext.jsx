import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("token", token);
    // Optional: decode JWT to get user info
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("token");
    setUser(null);
  };

  const contextData = { authToken, login, logout, user };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
