import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
>>>>>>> f5ddfe4 (Primer version)
import ThemeToggle from "../components/ThemeToggle";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inicio de sesión:", { email, password });
=======
  const { login, loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  const handleGuest = () => {
    loginAsGuest();
    navigate("/");
>>>>>>> f5ddfe4 (Primer version)
  };

  return (
    <main className="auth-page">
      {/* Barra superior con badge de la app y el switch de modo oscuro/claro */}
      <header className="auth-top-bar">
        <div className="auth-brand-badge">
          <span className="brand-dot"></span>
          <span>Bienestar Digital</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Tarjeta de Inicio de Sesión */}
      <section className="auth-card">
        <div className="auth-card-header">
          <div className="auth-logo">
            <svg
              className="auth-logo-leaf"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            <span>Desconecta</span>
          </div>
        </div>

        <h1>Bienvenido de nuevo</h1>
        <p>Inicia sesión para continuar con tus retos de desconexión.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className="auth-input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            Iniciar sesión
          </button>
<<<<<<< HEAD
=======

          <button
            type="button"
            className="auth-submit-btn"
            style={{
              marginTop: "10px",
              background: "transparent",
              border: "1px solid var(--border-card)",
              color: "var(--text-title)",
              boxShadow: "none"
            }}
            onClick={handleGuest}
          >
            Explorar como Invitado
          </button>
>>>>>>> f5ddfe4 (Primer version)
        </form>

        <p className="auth-footer">
          ¿No tienes una cuenta?{" "}
          <Link to="/registro">Regístrate aquí</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;
