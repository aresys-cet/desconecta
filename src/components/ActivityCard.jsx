import React, { useState } from "react";
import { CATEGORIES } from "../data/activities";

export default function ActivityCard({
  activity,
  onSelect,
  isCurrent = false
}) {
  const [expanded, setExpanded] = useState(false);

  const cat = CATEGORIES[activity.category?.toUpperCase()] || {
    name: "General",
    color: "#2d6a4f",
    icon: "🌱",
    bg: "rgba(45, 106, 79, 0.1)"
  };

  return (
    <article className={`activity-card ${isCurrent ? "current-assigned" : ""}`}>
      {isCurrent && (
        <div className="current-badge">
          <span>En curso</span>
        </div>
      )}

      <div className="activity-card-header">
        <span
          className="activity-cat-tag"
          style={{ backgroundColor: cat.bg, color: cat.color }}
        >
          {cat.icon} {cat.name}
        </span>
        <div className="activity-badges">
          <span className="activity-badge-time">⏱️ {activity.duration}m</span>
          <span className="activity-badge-xp">⭐ +{activity.xp}</span>
        </div>
      </div>

      <div className="activity-card-main">
        <div className="activity-card-icon">{activity.icon}</div>
        <h3 className="activity-card-title">{activity.title}</h3>
        <p className="activity-card-desc">{activity.summary}</p>
      </div>

      {expanded && activity.instructions && (
        <div className="activity-card-expanded">
          <p className="activity-benefit-snippet">
            <strong>Beneficio:</strong> {activity.benefit}
          </p>
          <div className="activity-steps">
            <strong>Cómo hacerlo:</strong>
            <ul>
              {activity.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="activity-card-footer">
        <button
          type="button"
          className="activity-details-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Menos detalles ▲" : "Ver pasos ▼"}
        </button>

        {onSelect && (
          <button
            type="button"
            className="activity-pick-btn"
            onClick={() => onSelect(activity)}
          >
            {isCurrent ? "En curso" : "Elegir este Reto"}
          </button>
        )}
      </div>
    </article>
  );
}
