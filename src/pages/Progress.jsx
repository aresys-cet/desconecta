import React from "react";
import { Link } from "react-router-dom";
import { useActivities } from "../context/ActivityContext";
import AppIcon from "../components/AppIcon";
import {
  BarChart3,
  Clock,
  Target,
  Flame,
  Trophy,
  Sparkles,
  Dices
} from "lucide-react";

// Nombres de rangos zen según el nivel
const LEVEL_TITLES = [
  "Semilla Despierta",
  "Brote de Calma",
  "Hoja Consciente",
  "Tallo Firme",
  "Árbol Sereno",
  "Bosque Profundo",
  "Maestro del Tiempo Presente"
];

export default function Progress() {
  const {
    stats,
    level,
    currentLevelXp,
    nextLevelXp,
    levelProgress,
    unlockedAchievements,
    achievementsList,
    history
  } = useActivities();

  const rankTitle = LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];

  // Formateador de fechas en español
  const formatDate = (isoString) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return "Recientemente";
    }
  };

  const unlockedCount = unlockedAchievements.length;
  const totalAchievements = achievementsList.length;

  return (
    <div className="progress-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="page-hero-badge">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <BarChart3 size={16} color="var(--brand-color)" /> Panel de Evolución
          </span>
        </div>
        <h1 className="page-hero-title">Mi Progreso & Retos Cumplidos</h1>
        <p className="page-hero-subtitle">
          Celebra cada minuto invertido en tu vida real. Revisa tus estadísticas,
          insignias desbloqueadas e historial de reflexiones.
        </p>
      </section>

      {/* KPI Stats Grid */}
      <section className="stats-kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon-box">
            <Clock size={24} color="#2a9d8f" />
          </div>
          <div className="kpi-info">
            <span className="kpi-value">{stats.totalMinutesOffline || 0} min</span>
            <span className="kpi-label">Desconexión acumulada</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-box">
            <Target size={24} color="#e76f51" />
          </div>
          <div className="kpi-info">
            <span className="kpi-value">{stats.completedActivities || 0}</span>
            <span className="kpi-label">Retos cumplidos</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-box">
            <Flame size={24} color="#f4a261" />
          </div>
          <div className="kpi-info">
            <span className="kpi-value">{stats.streak || 0} días</span>
            <span className="kpi-label">Racha activa</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-box">
            <Trophy size={24} color="#52b788" />
          </div>
          <div className="kpi-info">
            <span className="kpi-value">
              {unlockedCount} / {totalAchievements}
            </span>
            <span className="kpi-label">Insignias obtenidas</span>
          </div>
        </div>
      </section>

      {/* Level & XP Banner */}
      <section className="level-banner-card">
        <div className="level-banner-header">
          <div className="level-title-wrap">
            <div className="level-badge-large">
              <Sparkles size={28} color="#ffffff" />
            </div>
            <div>
              <h3 className="level-name">
                Nivel {level}: {rankTitle}
              </h3>
              <p className="level-desc">
                {currentLevelXp} / {nextLevelXp} XP para el siguiente nivel
              </p>
            </div>
          </div>
          <div className="level-xp-count">{stats.xp || 0} XP Totales</div>
        </div>

        <div className="level-progress-bar-bg" title={`${levelProgress}% completado`}>
          <div
            className="level-progress-bar-fill"
            style={{ width: `${levelProgress}%` }}
          ></div>
        </div>
      </section>

      {/* Achievements / Insignias Section */}
      <section className="achievements-section">
        <div className="section-title-wrap">
          <h2 className="section-heading">Logros & Insignias</h2>
          <p className="section-subheading">
            Gana experiencia y desbloquea reconocimientos especiales por tu constancia.
          </p>
        </div>

        <div className="achievements-grid">
          {achievementsList.map((ach) => {
            const isUnlocked = unlockedAchievements.includes(ach.id);
            return (
              <div
                key={ach.id}
                className={`achievement-card ${isUnlocked ? "unlocked" : "locked"}`}
              >
                <div className="achievement-icon-wrap">
                  <AppIcon name={ach.icon} size={28} />
                </div>
                <div className="achievement-details">
                  <h4 className="achievement-title">
                    {ach.title}
                    {isUnlocked && <span className="achievement-status-tag">Desbloqueado</span>}
                  </h4>
                  <p className="achievement-desc">{ach.description}</p>
                  <span className="achievement-reward">
                    <Sparkles size={13} style={{ marginRight: "4px", verticalAlign: "middle" }} />
                    +{ach.xpReward} XP
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* History of Completed Activities */}
      <section className="history-section">
        <div className="section-title-wrap">
          <h2 className="section-heading">Historial de Retos Cumplidos</h2>
          <p className="section-subheading">
            Tus momentos de desconexión registrados y tus pensamientos.
          </p>
        </div>

        {history && history.length > 0 ? (
          <div className="history-card-list">
            {history.map((item) => (
              <div key={item.id} className="history-item">
                <div className="history-item-left">
                  <span className="history-item-icon">
                    <AppIcon name={item.icon} size={22} color="var(--brand-color)" />
                  </span>
                  <div>
                    <h4 className="history-item-title">{item.title}</h4>
                    {item.reflection && (
                      <p className="history-item-reflection">"{item.reflection}"</p>
                    )}
                  </div>
                </div>

                <div className="history-item-right">
                  <span className="history-time-badge">
                    <Clock size={13} style={{ marginRight: "4px", verticalAlign: "middle" }} />
                    {item.duration} min
                  </span>
                  <span className="challenge-meta-pill xp-pill">
                    <Sparkles size={13} style={{ marginRight: "4px", verticalAlign: "middle" }} />
                    +{item.xp} XP
                  </span>
                  <span className="history-date">{formatDate(item.completedAt)}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-history-box">
            <div className="empty-icon">
              <Dices size={48} color="var(--brand-color)" />
            </div>
            <h3>Aún no has completado tu primer reto</h3>
            <p>Gira la ruleta en la sección de retos para comenzar tu registro de bienestar.</p>
            <Link
              to="/actividades"
              className="spin-trigger-btn"
              style={{ marginTop: "16px", display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <Dices size={18} /> Girar Ruleta Ahora
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
