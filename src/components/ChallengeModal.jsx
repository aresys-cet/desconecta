import React from "react";
import { CATEGORIES } from "../data/activities";
import AppIcon from "./AppIcon";
import {
  Dices,
  Clock,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
  RotateCcw
} from "lucide-react";

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
    icon: "Sprout"
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
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Dices size={16} /> Reto Asignado por la Ruleta
            </span>
          </div>
          <div className="challenge-icon-huge">
            <AppIcon name={activity.icon} size={56} color={cat.color} />
          </div>
          <h2 className="challenge-modal-title">{activity.title}</h2>

          <div className="challenge-meta-row">
            <span
              className="challenge-cat-badge"
              style={{ backgroundColor: cat.bg || "rgba(45, 106, 79, 0.1)", color: cat.color }}
            >
              <AppIcon name={cat.icon} size={15} style={{ marginRight: "6px" }} /> {cat.name}
            </span>
            <span className="challenge-meta-pill">
              <Clock size={14} style={{ marginRight: "5px", verticalAlign: "middle" }} />
              {activity.duration} minutos
            </span>
            <span className="challenge-meta-pill xp-pill">
              <Sparkles size={14} style={{ marginRight: "5px", verticalAlign: "middle" }} />
              +{activity.xp} XP
            </span>
            <span className="challenge-meta-pill">
              <Target size={14} style={{ marginRight: "5px", verticalAlign: "middle" }} />
              {activity.difficulty}
            </span>
          </div>
        </div>

        <div className="challenge-modal-body">
          <p className="challenge-summary">{activity.summary}</p>

          {activity.benefit && (
            <div className="challenge-benefit-card">
              <span className="benefit-icon">
                <Lightbulb size={20} color="#f4a261" />
              </span>
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
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Rocket size={18} /> ¡Aceptar Reto e Iniciar Desconexión!
            </span>
          </button>
          <button
            type="button"
            className="btn-reroll-challenge"
            onClick={onClose}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <RotateCcw size={16} /> Girar de nuevo
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
