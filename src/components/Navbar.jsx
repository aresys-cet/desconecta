import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useActivities } from "../context/ActivityContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { stats, level, soundEnabled, toggleSound, assignedActivity, assignedStatus } = useActivities();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const hasActiveChallenge = assignedActivity && assignedStatus !== "none";

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="navbar-logo-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <span className="navbar-brand-name">
            Desconecta<span className="brand-dot">.</span>
          </span>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="navbar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">🏡</span> Inicio
          </NavLink>

          <NavLink
            to="/actividades"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">🎡</span> Ruleta & Retos
            {hasActiveChallenge && <span className="nav-pulse-dot" title="Reto activo"></span>}
          </NavLink>

          <NavLink
            to="/progreso"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">📊</span> Progreso
          </NavLink>

          <NavLink
            to="/perfil"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={closeMenu}
          >
            <span className="nav-icon">👤</span> Perfil
          </NavLink>
        </nav>

        {/* Right Action Widgets */}
        <div className="navbar-actions">
          {/* Streak indicator */}
          <div className="navbar-streak-pill" title={`Racha actual: ${stats.streak || 0} días consecutivos`}>
            <span className="streak-flame">🔥</span>
            <span className="streak-count">{stats.streak || 0}d</span>
          </div>

          {/* User Level badge */}
          <div className="navbar-level-pill" title={`Nivel ${level} (${stats.xp || 0} XP)`}>
            <span className="level-star">⭐</span>
            <span className="level-num">Nvl {level}</span>
          </div>

          {/* Audio toggle */}
          <button
            type="button"
            className="sound-toggle-btn"
            onClick={toggleSound}
            aria-label={soundEnabled ? "Desactivar sonidos" : "Activar sonidos"}
            title={soundEnabled ? "Sonido activado" : "Sonido desactivado"}
          >
            {soundEnabled ? "🔊" : "🔇"}
          </button>

          {/* Dark/Light mode */}
          <ThemeToggle showLabel={false} />

          {/* User or Login */}
          {isAuthenticated ? (
            <div className="navbar-user-wrap">
              <Link to="/perfil" className="navbar-user-btn" title="Ver mi perfil">
                <span className="navbar-avatar">{user.avatar || "🌱"}</span>
                <span className="navbar-username">{user.name.split(" ")[0]}</span>
              </Link>
              <button
                type="button"
                className="navbar-logout-btn"
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </button>
            </div>
          ) : (
            <Link to="/login" className="navbar-login-btn">
              Iniciar Sesión
            </Link>
          )}

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú principal"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? "open-1" : ""}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? "open-2" : ""}`}></span>
            <span className={`hamburger-bar ${mobileMenuOpen ? "open-3" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">🏡</span> Inicio
            </NavLink>
            <NavLink
              to="/actividades"
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">🎡</span> Ruleta & Retos
              {hasActiveChallenge && <span className="nav-badge-pill">En curso</span>}
            </NavLink>
            <NavLink
              to="/progreso"
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">📊</span> Mi Progreso
            </NavLink>
            <NavLink
              to="/perfil"
              className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">👤</span> Mi Perfil
            </NavLink>
            {isAuthenticated ? (
              <button type="button" className="mobile-logout-btn" onClick={handleLogout}>
                Cerrar Sesión
              </button>
            ) : (
              <Link to="/login" className="mobile-nav-link" onClick={closeMenu}>
                Iniciar Sesión
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
