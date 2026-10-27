import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useActivities } from "../context/ActivityContext";
import { useTheme } from "../context/ThemeContext";
import AppIcon from "../components/AppIcon";
import { User, RotateCcw, LogOut } from "lucide-react";

const AVATAR_OPTIONS = [
  "leaf",
  "heart",
  "palette",
  "trees",
  "coffee",
  "bike",
  "sparkles",
  "sun",
  "flower2",
  "bookopen"
];

export default function Profile() {
  const { user, updateProfile, logout } = useAuth();
  const { stats, level, soundEnabled, toggleSound } = useActivities();
  const { theme, toggleTheme } = useTheme();

  const [name, setName] = useState(user?.name || "Explorador Zen");
  const [email, setEmail] = useState(user?.email || "zen@desconecta.app");
  const [bio, setBio] = useState(
    user?.bio || "Cultivando momentos de presencia y desconexión digital."
  );
  const [targetMinutes, setTargetMinutes] = useState(user?.targetMinutes || 60);
  const [avatar, setAvatar] = useState(user?.avatar || "leaf");
  const [savedAlert, setSavedAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({
      name,
      email,
      bio,
      targetMinutes: Number(targetMinutes),
      avatar
    });
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 3000);
  };

  const handleResetData = () => {
    if (window.confirm("¿Seguro que deseas restablecer tus estadísticas y retos al inicio?")) {
      localStorage.removeItem("desconecta_activity_data_v1");
      window.location.reload();
    }
  };

  return (
    <div className="profile-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="page-hero-badge">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <User size={16} color="var(--brand-color)" /> Configuración Personal
          </span>
        </div>
        <h1 className="page-hero-title">Mi Perfil Zen</h1>
        <p className="page-hero-subtitle">
          Personaliza tu avatar, establece tus metas diarias de desconexión y administra tus preferencias.
        </p>
      </section>

      {savedAlert && (
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto 24px",
            padding: "12px 20px",
            backgroundColor: "rgba(82, 183, 136, 0.2)",
            border: "1px solid var(--brand-color)",
            borderRadius: "14px",
            color: "var(--brand-color)",
            textAlign: "center",
            fontWeight: "600"
          }}
        >
          ✓ ¡Tus cambios han sido guardados con éxito!
        </div>
      )}

      <div className="profile-grid">
        {/* Sidebar Info Card */}
        <aside className="profile-card-sidebar">
          <div
            className="profile-avatar-giant"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(45, 106, 79, 0.12)",
              borderRadius: "50%",
              width: "110px",
              height: "110px",
              margin: "0 auto 16px"
            }}
          >
            <AppIcon name={avatar} size={54} color="var(--brand-color)" />
          </div>
          <h2 className="profile-name-title">{name}</h2>
          <p className="profile-email-sub">{email}</p>
          <p className="profile-bio-text">{bio}</p>

          <div className="profile-mini-stats">
            <div className="profile-stat-col">
              <span className="profile-stat-number">{stats.streak || 0}d</span>
              <span className="profile-stat-tag">Racha</span>
            </div>
            <div className="profile-stat-col">
              <span className="profile-stat-number">{level}</span>
              <span className="profile-stat-tag">Nivel</span>
            </div>
            <div className="profile-stat-col">
              <span className="profile-stat-number">
                {stats.completedActivities || 0}
              </span>
              <span className="profile-stat-tag">Retos</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              type="button"
              className="btn-reroll-challenge"
              onClick={handleResetData}
            >
              <RotateCcw size={15} style={{ marginRight: "6px", verticalAlign: "middle" }} />
              Restablecer datos de prueba
            </button>
            <button
              type="button"
              className="mobile-logout-btn"
              onClick={logout}
            >
              <LogOut size={16} style={{ marginRight: "6px", verticalAlign: "middle" }} />
              Cerrar Sesión
            </button>
          </div>
        </aside>

        {/* Edit Form */}
        <main className="profile-main-form">
          <h3 className="catalog-title" style={{ marginBottom: "20px" }}>
            Editar Información & Metas
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Choose Avatar */}
            <div className="form-group-custom">
              <label>Selecciona tu avatar zen:</label>
              <div className="avatar-selector-row">
                {AVATAR_OPTIONS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`avatar-choice-btn ${avatar === item ? "selected" : ""}`}
                    onClick={() => setAvatar(item)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "48px",
                      height: "48px"
                    }}
                  >
                    <AppIcon name={item} size={24} />
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group-custom">
              <label htmlFor="nameInput">Nombre o alias:</label>
              <input
                id="nameInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group-custom">
              <label htmlFor="emailInput">Correo electrónico:</label>
              <input
                id="emailInput"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group-custom">
              <label htmlFor="bioInput">Frase o intención personal:</label>
              <textarea
                id="bioInput"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
              />
            </div>

            <div className="form-group-custom">
              <label htmlFor="targetInput">
                Meta diaria de desconexión (minutos):
              </label>
              <input
                id="targetInput"
                type="number"
                min={10}
                max={300}
                step={5}
                value={targetMinutes}
                onChange={(e) => setTargetMinutes(e.target.value)}
              />
            </div>

            {/* Quick Preferences Toggles */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                margin: "24px 0",
                padding: "16px",
                background: "var(--input-bg)",
                borderRadius: "14px",
                border: "1px solid var(--border-card)"
              }}
            >
              <div>
                <strong>Sonido de ruleta y campana:</strong>
                <p style={{ margin: "4px 0 8px", fontSize: "0.85rem", color: "var(--text-body)" }}>
                  {soundEnabled ? "Activado (reproduce clics y campana)" : "Silenciado"}
                </p>
                <button
                  type="button"
                  className="activity-pick-btn"
                  onClick={toggleSound}
                >
                  {soundEnabled ? "Silenciar sonidos" : "Activar sonidos"}
                </button>
              </div>

              <div>
                <strong>Tema visual:</strong>
                <p style={{ margin: "4px 0 8px", fontSize: "0.85rem", color: "var(--text-body)" }}>
                  Actualmente en modo {theme === "dark" ? "oscuro (noche zen)" : "claro (naturaleza)"}.
                </p>
                <button
                  type="button"
                  className="activity-pick-btn"
                  onClick={toggleTheme}
                >
                  Cambiar a {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
                </button>
              </div>
            </div>

            <button type="submit" className="profile-save-btn">
              Guardar Cambios
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
