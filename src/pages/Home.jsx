import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useActivities } from "../context/ActivityContext";
import { CATEGORIES } from "../data/activities";

export default function Home() {
  const { user } = useAuth();
  const { stats, level, assignedActivity, assignedStatus, timerRemaining } = useActivities();

  const minutesRemaining = Math.ceil(timerRemaining / 60);
  const hasActiveChallenge = assignedActivity && assignedStatus !== "none";

  return (
    <div className="home-page">
      {/* Active Challenge Alert Banner */}
      {hasActiveChallenge && (
        <div className="home-active-banner">
          <div className="home-active-banner-content">
            <span className="banner-icon">🎯</span>
            <div className="banner-text">
              <strong>Reto activo: {assignedActivity.title}</strong>
              <p>
                {assignedStatus === "in_progress"
                  ? `Temporizador en marcha (${minutesRemaining} min restantes)`
                  : "¡Tu actividad está lista para comenzar!"}
              </p>
            </div>
          </div>
          <Link to="/actividades" className="home-active-banner-btn">
            Continuar reto →
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-badge">
          <span>🌿 {user?.name ? `¡Hola, ${user.name.split(" ")[0]}! Bienestar Digital` : "Bienestar & Salud Digital"}</span>
        </div>
        <h1 className="page-hero-title">
          Reconecta con el mundo real,
          <br />
          <span style={{ color: "var(--brand-color)" }}>un reto a la vez</span>
        </h1>
        <p className="page-hero-subtitle">
          Reduce la fatiga por pantallas, supera la adicción al scroll infinito y redescubre 
          el placer de las actividades analógicas mediante nuestra ruleta interactiva.
        </p>

        <div className="home-hero-actions">
          <Link to="/actividades" className="hero-cta-btn primary-cta">
            <span>🎡 Girar la Ruleta de Retos</span>
          </Link>
          <Link to="/progreso" className="hero-cta-btn secondary-cta">
            <span>📊 Ver Mi Progreso</span>
          </Link>
        </div>
      </section>

      {/* Today's KPI Summary */}
      <section className="stats-kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon-box">🔥</div>
          <div className="kpi-info">
            <span className="kpi-value">{stats.streak || 0} días</span>
            <span className="kpi-label">Racha de desconexión</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-box">⏳</div>
          <div className="kpi-info">
            <span className="kpi-value">{stats.totalMinutesOffline || 0} min</span>
            <span className="kpi-label">Tiempo libre de pantallas</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-box">✅</div>
          <div className="kpi-info">
            <span className="kpi-value">{stats.completedActivities || 0}</span>
            <span className="kpi-label">Retos analógicos cumplidos</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-box">⭐</div>
          <div className="kpi-info">
            <span className="kpi-value">Nivel {level}</span>
            <span className="kpi-label">{stats.xp || 0} XP acumulados</span>
          </div>
        </div>
      </section>

      {/* How it Works / 3 Steps */}
      <section className="how-it-works-section">
        <div className="section-title-wrap" style={{ textAlign: "center" }}>
          <h2 className="section-heading">¿Cómo funciona Desconecta?</h2>
          <p className="section-subheading">
            Un método simple, gamificado y efectivo para recuperar tu presencia.
          </p>
        </div>

        <div className="steps-cards-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">🎡</div>
            <h3 className="step-title">Gira la Ruleta</h3>
            <p className="step-desc">
              Deja que el azar decida tu próxima pausa consciente entre decenas de actividades saludables.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">📵</div>
            <h3 className="step-title">Desconéctate y Cumple</h3>
            <p className="step-desc">
              Guarda tus dispositivos, activa el temporizador zen y sumérgete al 100% en la experiencia.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">🏆</div>
            <h3 className="step-title">Crece y Gana Insignias</h3>
            <p className="step-desc">
              Registra tu reflexión, gana puntos de experiencia, desbloquea logros y extiende tu racha.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Digital Wellbeing Insight */}
      <section className="daily-insight-card">
        <div className="daily-insight-icon">💡</div>
        <div className="daily-insight-content">
          <span className="daily-insight-tag">Consejo de Bienestar de Hoy</span>
          <h3 className="daily-insight-title">La regla de los 20 segundos</h3>
          <p className="daily-insight-text">
            Si sientes el impulso inconsciente de desbloquear tu teléfono para ver redes sociales, 
            haz una pausa de 20 segundos respirando profundo. El 80% de las veces, el deseo impulsivo 
            desaparece al tomar conciencia de él.
          </p>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="home-categories-section">
        <div className="section-title-wrap">
          <h2 className="section-heading">Áreas de Bienestar</h2>
          <p className="section-subheading">
            Cada giro te ayuda a balancear distintos aspectos de tu vida.
          </p>
        </div>

        <div className="home-categories-grid">
          {Object.values(CATEGORIES).map((cat) => (
            <Link
              key={cat.id}
              to="/actividades"
              className="home-cat-card"
              style={{ borderLeftColor: cat.color }}
            >
              <span className="home-cat-icon">{cat.icon}</span>
              <div>
                <h4 className="home-cat-name">{cat.name}</h4>
                <span className="home-cat-link">Ver retos →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
