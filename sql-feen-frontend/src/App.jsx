import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { GameProvider } from "./context/GameContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ModeSelectPage from "./pages/ModeSelectPage";
import LevelSelectPage from "./pages/LevelSelectPage";
import MissionPage from "./pages/MissionPage";
import ShopPage from "./pages/ShopPage";
import ProgressPage from "./pages/ProgressPage";
import NavBar from "./components/NavBar";



export default function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/play" element={<ModeSelectPage />} />
            <Route path="/levels" element={<LevelSelectPage />} />
            <Route path="/mission/:level/:mission" element={<MissionPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/progress" element={<ProgressPage />} />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </GameProvider>
    </AuthProvider>
  );
}
