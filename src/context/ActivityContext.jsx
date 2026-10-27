import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { ACTIVITIES, ACHIEVEMENTS } from "../data/activities";
import { sound } from "../utils/audio";
import { launchConfetti } from "../utils/confetti";

const ActivityContext = createContext();

const STORAGE_KEY = "desconecta_activity_data_v1";

const INITIAL_STATE = {
  assignedActivity: null,
  assignedStatus: "none", // 'none' | 'pending' | 'in_progress' | 'completed'
  timerRemaining: 0,
  timerTotal: 0,
  history: [
    {
      id: "hist-0",
      activityId: 1,
      title: "Paseo consciente sin celular",
      category: "naturaleza",
      icon: "🌲",
      duration: 20,
      xp: 60,
      completedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      reflection: "Me sentí mucho más despejado y escuché pájaros que no había notado."
    },
    {
      id: "hist-1",
      activityId: 3,
      title: "Respiración consciente 4-7-8",
      category: "calma",
      icon: "🫁",
      duration: 10,
      xp: 40,
      completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      reflection: "Sentí que bajó mi ritmo cardíaco enseguida."
    }
  ],
  stats: {
    completedActivities: 2,
    totalMinutesOffline: 30,
    streak: 2,
    xp: 150,
    totalSpins: 3
  },
  unlockedAchievements: ["first_spin"],
  soundEnabled: true
};

export function ActivityProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_STATE,
          ...parsed,
          stats: { ...INITIAL_STATE.stats, ...(parsed.stats || {}) }
        };
      }
    } catch (e) {
      console.error("Error loading activity state", e);
    }
    return INITIAL_STATE;
  });

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);

  // Sync with sound manager
  useEffect(() => {
    sound.setMuted(!data.soundEnabled);
  }, [data.soundEnabled]);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Error saving activity state", e);
    }
  }, [data]);

  // Timer interval effect
  useEffect(() => {
    if (isTimerRunning && data.timerRemaining > 0) {
      timerRef.current = setInterval(() => {
        setData((prev) => {
          if (prev.timerRemaining <= 1) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false);
            sound.playZenBell();
            launchConfetti(3000);
            return {
              ...prev,
              timerRemaining: 0,
              assignedStatus: "completed"
            };
          }
          return {
            ...prev,
            timerRemaining: prev.timerRemaining - 1
          };
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, data.timerRemaining]);

  // Verificar y desbloquear logros
  const checkAchievements = (newStats, existingUnlocked) => {
    const newlyUnlocked = [...existingUnlocked];
    ACHIEVEMENTS.forEach((ach) => {
      if (!newlyUnlocked.includes(ach.id) && ach.condition(newStats)) {
        newlyUnlocked.push(ach.id);
        launchConfetti(2000);
        sound.playWinChord();
      }
    });
    return newlyUnlocked;
  };

  // Asignar actividad desde la Ruleta
  const assignFromRoulette = (activity) => {
    const durationSeconds = (activity.duration || 15) * 60;
    sound.playWinChord();
    launchConfetti(3500);

    setData((prev) => {
      const newSpins = (prev.stats.totalSpins || 0) + 1;
      const updatedStats = {
        ...prev.stats,
        totalSpins: newSpins
      };

      const updatedAchievements = checkAchievements(updatedStats, prev.unlockedAchievements);

      return {
        ...prev,
        assignedActivity: activity,
        assignedStatus: "pending",
        timerRemaining: durationSeconds,
        timerTotal: durationSeconds,
        stats: updatedStats,
        unlockedAchievements: updatedAchievements
      };
    });
    setIsTimerRunning(false);
  };

  // Controles de temporizador
  const startTimer = () => {
    setIsTimerRunning(true);
    setData((prev) => ({
      ...prev,
      assignedStatus: "in_progress"
    }));
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setData((prev) => ({
      ...prev,
      timerRemaining: prev.timerTotal,
      assignedStatus: "pending"
    }));
  };

  // Completar reto manualmente o por fin de timer
  const completeActivity = (reflection = "") => {
    if (!data.assignedActivity) return;

    sound.playWinChord();
    launchConfetti(4000);
    setIsTimerRunning(false);

    const act = data.assignedActivity;
    const historyItem = {
      id: "hist-" + Date.now(),
      activityId: act.id,
      title: act.title,
      category: act.category,
      icon: act.icon,
      duration: act.duration,
      xp: act.xp,
      completedAt: new Date().toISOString(),
      reflection: reflection.trim() || "¡Reto completado con éxito! Gran momento de calma."
    };

    setData((prev) => {
      const newCompleted = (prev.stats.completedActivities || 0) + 1;
      const newMinutes = (prev.stats.totalMinutesOffline || 0) + act.duration;
      const newXp = (prev.stats.xp || 0) + act.xp;
      const newStreak = (prev.stats.streak || 1) + 1;

      // Calcular categorías únicas
      const uniqueCats = new Set([...prev.history.map((h) => h.category), act.category]).size;

      const updatedStats = {
        ...prev.stats,
        completedActivities: newCompleted,
        totalMinutesOffline: newMinutes,
        xp: newXp,
        streak: newStreak,
        uniqueCategoriesCount: uniqueCats
      };

      const updatedAchievements = checkAchievements(updatedStats, prev.unlockedAchievements);

      return {
        ...prev,
        assignedStatus: "completed",
        history: [historyItem, ...prev.history],
        stats: updatedStats,
        unlockedAchievements: updatedAchievements
      };
    });
  };

  // Descartar o terminar el reto actual para poder girar otro
  const dismissCurrentActivity = () => {
    setIsTimerRunning(false);
    setData((prev) => ({
      ...prev,
      assignedActivity: null,
      assignedStatus: "none",
      timerRemaining: 0,
      timerTotal: 0
    }));
  };

  const toggleSound = () => {
    setData((prev) => ({
      ...prev,
      soundEnabled: !prev.soundEnabled
    }));
  };

  // Calcular nivel del usuario
  const level = Math.floor((data.stats.xp || 0) / 150) + 1;
  const currentLevelXp = (data.stats.xp || 0) % 150;
  const nextLevelXp = 150;
  const levelProgress = Math.min(100, Math.round((currentLevelXp / nextLevelXp) * 100));

  return (
    <ActivityContext.Provider
      value={{
        activities: ACTIVITIES,
        assignedActivity: data.assignedActivity,
        assignedStatus: data.assignedStatus,
        timerRemaining: data.timerRemaining,
        timerTotal: data.timerTotal,
        isTimerRunning,
        history: data.history,
        stats: data.stats,
        unlockedAchievements: data.unlockedAchievements,
        achievementsList: ACHIEVEMENTS,
        soundEnabled: data.soundEnabled,
        level,
        currentLevelXp,
        nextLevelXp,
        levelProgress,
        assignFromRoulette,
        startTimer,
        pauseTimer,
        resetTimer,
        completeActivity,
        dismissCurrentActivity,
        toggleSound
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivities() {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("useActivities debe usarse dentro de un ActivityProvider");
  }
  return context;
}
