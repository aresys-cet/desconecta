import React, { useState, useEffect } from "react";

const MINDFULNESS_TIPS = [
  "Deja tu teléfono boca abajo o en otra habitación.",
  "Respira profundo por la nariz y siente el aire fresco.",
  "La prisa digital no es real; este momento presente sí lo es.",
  "Observa los detalles a tu alrededor que la pantalla oculta.",
  "Tus ojos y tu mente te agradecen este descanso.",
  "No necesitas revisar notificaciones en este instante.",
  "Disfruta la tranquilidad de no estar disponible para nadie por un rato."
];

export default function Timer({
  totalSeconds = 1200,
  remainingSeconds = 1200,
  isRunning = false,
  onStart,
  onPause,
  onReset,
  onComplete
}) {
  const [tipIndex, setTipIndex] = useState(0);

  // Rotate tips periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % MINDFULNESS_TIPS.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // SVG circular progress calculation
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const progressRatio = totalSeconds > 0 ? remainingSeconds / totalSeconds : 0;
  const strokeDashoffset = circumference - progressRatio * circumference;

  return (
    <div className="zen-timer-card">
      <div className="zen-timer-header">
        <span className="zen-timer-badge">
          <span className="zen-pulse-indicator"></span>
          {isRunning ? "Desconexión Activa" : "Temporizador en Pausa"}
        </span>
        <span className="zen-timer-target">
          Objetivo: {Math.round(totalSeconds / 60)} min
        </span>
      </div>

      {/* Circular Progress Ring */}
      <div className="timer-circle-wrap">
        <svg className="timer-svg" viewBox="0 0 240 240" width="230" height="230">
          {/* Background track circle */}
          <circle
            cx="120"
            cy="120"
            r={radius}
            className="timer-track"
            strokeWidth="12"
            fill="none"
          />
          {/* Animated progress circle */}
          <circle
            cx="120"
            cy="120"
            r={radius}
            className={`timer-progress ${isRunning ? "active" : ""}`}
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 120 120)"
          />
        </svg>

        {/* Center Time Display */}
        <div className="timer-display-content">
          <div className="timer-digits">{formattedTime}</div>
          <div className="timer-label">
            {remainingSeconds === 0 ? "¡Tiempo cumplido!" : "tiempo restante"}
          </div>
        </div>
      </div>

      {/* Mindfulness Tip banner */}
      <div className="timer-tip-box">
        <span className="timer-tip-icon">✨</span>
        <p className="timer-tip-text">{MINDFULNESS_TIPS[tipIndex]}</p>
      </div>

      {/* Control Buttons */}
      <div className="timer-controls">
        {!isRunning ? (
          <button
            type="button"
            className="timer-btn timer-btn-primary"
            onClick={onStart}
            aria-label="Comenzar desconexión"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>{remainingSeconds < totalSeconds ? "Continuar" : "Iniciar Tiempo"}</span>
          </button>
        ) : (
          <button
            type="button"
            className="timer-btn timer-btn-pause"
            onClick={onPause}
            aria-label="Pausar desconexión"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
            <span>Pausar</span>
          </button>
        )}

        <button
          type="button"
          className="timer-btn timer-btn-secondary"
          onClick={onReset}
          title="Reiniciar contador"
          aria-label="Reiniciar contador"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
          <span>Reiniciar</span>
        </button>

        <button
          type="button"
          className="timer-btn timer-btn-success"
          onClick={onComplete}
          title="Completar y registrar actividad"
        >
          <span>✓ Completar Reto</span>
        </button>
      </div>
    </div>
  );
}
