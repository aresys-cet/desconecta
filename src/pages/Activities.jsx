import React, { useState, useRef } from "react";
import RouletteWheel from "../components/RouletteWheel";
import ChallengeModal from "../components/ChallengeModal";
import ActivityCard from "../components/ActivityCard";
import Timer from "../components/Timer";
import { useActivities } from "../context/ActivityContext";
import { CATEGORIES } from "../data/activities";

export default function Activities() {
  const {
    activities,
    assignedActivity,
    assignedStatus,
    timerRemaining,
    timerTotal,
    isTimerRunning,
    assignFromRoulette,
    startTimer,
    pauseTimer,
    resetTimer,
    completeActivity,
    dismissCurrentActivity
  } = useActivities();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFromSpin, setSelectedFromSpin] = useState(null);
  const [reflectionText, setReflectionText] = useState("");

  const activeChallengeRef = useRef(null);

  // When roulette finishes spinning
  const handleRouletteSelect = (activity) => {
    setSelectedFromSpin(activity);
    setModalOpen(true);
  };

  // When user accepts challenge from modal
  const handleAcceptChallenge = () => {
    if (selectedFromSpin) {
      assignFromRoulette(selectedFromSpin);
      setModalOpen(false);
      // Scroll to the active challenge
      setTimeout(() => {
        if (activeChallengeRef.current) {
          activeChallengeRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  };

  // When user clicks a card in catalog to assign
  const handleSelectFromCatalog = (activity) => {
    assignFromRoulette(activity);
    setTimeout(() => {
      if (activeChallengeRef.current) {
        activeChallengeRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  // Complete challenge
  const handleCompleteChallenge = () => {
    completeActivity(reflectionText);
    setReflectionText("");
  };

  // Filter catalog
  const filteredActivities = activities.filter((act) => {
    const matchesCat = selectedCategory === "all" || act.category === selectedCategory;
    const matchesQuery =
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.benefit.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const hasAssigned = assignedActivity && assignedStatus !== "none";

  return (
    <div className="activities-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-badge">
          <span>🌿 Bienestar & Presencia</span>
        </div>
        <h1 className="page-hero-title">Ruleta de Desconexión</h1>
        <p className="page-hero-subtitle">
          Gira la ruleta para recibir un reto aleatorio fuera de pantallas. 
          Cumple la actividad, inicia el temporizador y recupera tu enfoque.
        </p>
      </section>

      {/* Category Filter Chips */}
      <div className="categories-filter-wrap">
        <button
          type="button"
          className={`category-chip-btn ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => setSelectedCategory("all")}
        >
          <span>✨</span> Todas las Categorías
        </button>
        {Object.values(CATEGORIES).map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`category-chip-btn ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {/* Roulette Wheel Section */}
      <section className="roulette-section">
        <RouletteWheel
          activities={activities}
          selectedCategory={selectedCategory}
          onSelectActivity={handleRouletteSelect}
        />
      </section>

      {/* Active Assigned Challenge Section */}
      {hasAssigned && (
        <section
          ref={activeChallengeRef}
          className="assigned-challenge-section"
        >
          <div className="assigned-banner-pill">
            <span>🎯 RETO ASIGNADO EN CURSO</span>
          </div>

          <div className="assigned-content-grid">
            {/* Left Column: Challenge info and reflection */}
            <div className="assigned-info-box">
              <div className="assigned-title-row">
                <span className="assigned-activity-icon">{assignedActivity.icon}</span>
                <div>
                  <h2 className="assigned-activity-title">{assignedActivity.title}</h2>
                  <span className="challenge-meta-pill xp-pill">
                    ⭐ +{assignedActivity.xp} XP al completar
                  </span>
                </div>
              </div>

              <p className="assigned-activity-desc">{assignedActivity.summary}</p>

              {assignedActivity.benefit && (
                <div className="challenge-benefit-card">
                  <span className="benefit-icon">🌿</span>
                  <div>
                    <strong>Impacto positivo:</strong>
                    <p>{assignedActivity.benefit}</p>
                  </div>
                </div>
              )}

              {assignedActivity.instructions && (
                <div className="assigned-instructions-box">
                  <h4>Pasos para realizar el reto:</h4>
                  <ol>
                    {assignedActivity.instructions.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Reflection note input */}
              <div className="reflection-box">
                <label htmlFor="reflectionInput">
                  Reflexión / ¿Cómo te sentiste al desconectar? (Opcional):
                </label>
                <textarea
                  id="reflectionInput"
                  placeholder="Ej. Noté lo rápido que suelo revisar el celular sin necesidad..."
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="dismiss-challenge-btn"
                onClick={dismissCurrentActivity}
              >
                ✕ Descartar reto actual y girar de nuevo
              </button>
            </div>

            {/* Right Column: Zen Timer */}
            <div className="assigned-timer-box">
              <Timer
                totalSeconds={timerTotal}
                remainingSeconds={timerRemaining}
                isRunning={isTimerRunning}
                onStart={startTimer}
                onPause={pauseTimer}
                onReset={resetTimer}
                onComplete={handleCompleteChallenge}
              />
            </div>
          </div>
        </section>
      )}

      {/* Activities Catalog Explorer */}
      <section className="activities-catalog-section">
        <div className="catalog-section-header">
          <div>
            <h2 className="catalog-title">Explora Todas las Actividades</h2>
            <p className="catalog-subtitle">
              Descubre {activities.length} retos analógicos diseñados para calmar tu mente y energizar tu día.
            </p>
          </div>
          <input
            type="search"
            className="catalog-search-input"
            placeholder="Buscar por nombre o palabra clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="activities-grid">
          {filteredActivities.map((act) => (
            <ActivityCard
              key={act.id}
              activity={act}
              onSelect={handleSelectFromCatalog}
              isCurrent={assignedActivity?.id === act.id}
            />
          ))}
        </div>
      </section>

      {/* Challenge Modal upon Roulette selection */}
      <ChallengeModal
        activity={selectedFromSpin}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAccept={handleAcceptChallenge}
      />
    </div>
  );
}
