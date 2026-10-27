import React from "react";
import { CATEGORIES } from "../data/activities";

export default function ChallengeModal({
  activity,
  isOpen,
  onClose,
  onAccept
}) {
  if (!isOpen || !activity) return null;

  const cat = CATEGORIES[activity.category?.toUpperCase()] || {
    name: "General",
    color: "#2d6a4f",
    icon: "🌱"
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="challenge-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <div className="challenge-modal-glow"></div>

        <div className="challenge-modal-header">
          <div className="challenge-spin-tag">
            <span>🎡 Reto Asignado por la Ruleta</span>
          </div>
          <div className="challenge-icon-huge">{activity.icon}</div>
          <h2 className="challenge-modal-title">{activity.title}</h2>

          <div className="challenge-meta-row">
            <span
              className="challenge-cat-badge"
              style={{ backgroundColor: cat.bg || "rgba(45, 106, 79, 0.1)", color: cat.color }}
            >
              {cat.icon} {cat.name}
            </span>
            <span className="challenge-meta-pill">
              ⏱️ {activity.duration} minutos
            </span>
            <span className="challenge-meta-pill xp-pill">
              ⭐ +{activity.xp} XP
            </span>
            <span className="challenge-meta-pill">
              🎯 {activity.difficulty}
            </span>
          </div>
        </div>

        <div className="challenge-modal-body">
          <p className="challenge-summary">{activity.summary}</p>

          {activity.benefit && (
            <div className="challenge-benefit-card">
              <span className="benefit-icon">💡</span>
              <div>
                <strong>Beneficio mental:</strong>
                <p>{activity.benefit}</p>
              </div>
            </div>
          )}

          {activity.instructions && (
            <div className="challenge-instructions-list">
              <h4>Pasos para desconectar:</h4>
              <ol>
                {activity.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div className="challenge-modal-actions">
          <button
            type="button"
            className="btn-accept-challenge"
            onClick={onAccept}
          >
            <span>🚀 ¡Aceptar Reto e Iniciar Desconexión!</span>
          </button>
          <button
            type="button"
            className="btn-reroll-challenge"
            onClick={onClose}
          >
            Girar de nuevo
          </button>
        </div>
      </div>
    </div>
  );
}
