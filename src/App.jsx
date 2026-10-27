<<<<<<< HEAD
=======
import React from "react";
>>>>>>> f5ddfe4 (Primer version)
import {
  BrowserRouter,
  Routes,
  Route,
<<<<<<< HEAD
  Navigate
} from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
=======
  Navigate,
  Outlet
} from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { ActivityProvider } from "./context/ActivityContext";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";

import "./styles/auth.css";
import "./styles/layout.css";
import "./styles/activities.css";
import "./styles/progress.css";
import "./index.css";

const CURRENT_YEAR = new Date().getFullYear();

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p className="footer-quote">
          "El verdadero valor de tu tiempo no se mide en likes, sino en momentos vividos."
        </p>
        <p className="footer-copy">
          © {CURRENT_YEAR} Desconecta — Espacio de Bienestar Digital & Vida Real
        </p>
      </footer>
    </div>
  );
}
>>>>>>> f5ddfe4 (Primer version)

function App() {
  return (
    <ThemeProvider>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />

          <Route path="/login" element={<Login />} />

          <Route path="/registro" element={<Register />} />

          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
=======
      <AuthProvider>
        <ActivityProvider>
          <BrowserRouter>
            <Routes>
              {/* Standalone Auth Pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />

              {/* Main Application with Navbar and Footer */}
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/actividades" element={<Activities />} />
                <Route path="/progreso" element={<Progress />} />
                <Route path="/perfil" element={<Profile />} />
                {/* Legacy / Alias routes */}
                <Route path="/logros" element={<Navigate to="/progreso" replace />} />
                <Route path="/achievements" element={<Navigate to="/progreso" replace />} />
                <Route path="/Achivements" element={<Navigate to="/progreso" replace />} />
              </Route>

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </ActivityProvider>
      </AuthProvider>
>>>>>>> f5ddfe4 (Primer version)
    </ThemeProvider>
  );
}

export default App;
