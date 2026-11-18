import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { ACTIVITIES, ACHIEVEMENTS } from "../data/activities";
import { useAuth } from "./AuthContext";
import { sound } from "../utils/audio";
import { launchConfetti } from "../utils/confetti";

const ActivityContext = createContext();

const GUEST_STORAGE_KEY = "desconecta_activity_guest_v2";

function getStorageKeyForUser(user) {
  if (user && user.email) {
    return `desconecta_activity_user_${user.email.trim().toLowerCase()}`;
  }
  return GUEST_STORAGE_KEY;
}

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const INITIAL_STATE = {
  assignedActivity: null,
  assignedStatus: "none", // 'none' | 'pending' | 'in_progress' | 'completed'
  timerRemaining: 0,
  timerTotal: 0,
  history: [],
  stats: {
    completedActivities: 0,
    totalMinutesOffline: 0,
    streak: 0,
    lastStreakDate: null,
    xp: 0,
    totalSpins: 0
  },
  unlockedAchievements: [],
  soundEnabled: true
};

function loadStateForUser(user) {
  const key = getStorageKeyForUser(user);
  try {
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      const loadedStats = {
        ...INITIAL_STATE.stats,
        ...(parsed.stats || {})
      };
      return {
        ...INITIAL_STATE,
        ...parsed,
        stats: loadedStats,
        _storageKey: key
      };
    }
  } catch (e) {
    console.error("Error loading activity state", e);
  }

  return {
    ...INITIAL_STATE,
    stats: {
      ...INITIAL_STATE.stats,
      streak: user?.streak ?? 0,
      lastStreakDate: user?.lastStreakDate ?? null
    },
    _storageKey: key
  };
}

export function ActivityProvider({ children }) {
  const { user, updateProfile } = useAuth();
  const currentStorageKey = getStorageKeyForUser(user);

  const [data, setData] = useState(() => loadStateForUser(user));
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef(null);

  // Cambiar datos al iniciar/cerrar sesión o cambiar de cuenta registrada
  if (data._storageKey !== currentStorageKey) {
    setIsTimerRunning(false);
    setData(loadStateForUser(user));
  }

  // Sync with sound manager
  useEffect(() => {
    sound.setMuted(!data.soundEnabled);
  }, [data.soundEnabled]);

  // Persist to localStorage per user account
  useEffect(() => {
    if (data._storageKey !== currentStorageKey) return;
    try {
      localStorage.setItem(currentStorageKey, JSON.stringify(data));
    } catch (e) {
      console.error("Error saving activity state", e);
    }
  }, [data, currentStorageKey]);

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

      const todayStr = getLocalDateString();
      const lastDate = prev.stats.lastStreakDate || null;
      let newStreak = prev.stats.streak || 0;
      let newLastStreakDate = lastDate;

      // Solo aumentar la racha si hay cuenta activa y aún no se ha hecho hoy (máximo 1 por día)
      if (user) {
        if (lastDate !== todayStr) {
          if (!lastDate) {
            newStreak = (prev.stats.streak || 0) + 1;
          } else {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = getLocalDateString(yesterday);
            newStreak = lastDate === yesterdayStr ? (prev.stats.streak || 0) + 1 : 1;
          }
          newLastStreakDate = todayStr;
        }
      }

      // Calcular categorías únicas
      const uniqueCats = new Set([...prev.history.map((h) => h.category), act.category]).size;

      const updatedStats = {
        ...prev.stats,
        completedActivities: newCompleted,
        totalMinutesOffline: newMinutes,
        xp: newXp,
        streak: newStreak,
        lastStreakDate: newLastStreakDate,
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

  // Sincronizar la racha en el perfil del usuario registrado en localStorage
  useEffect(() => {
    if (
      user &&
      data._storageKey === currentStorageKey &&
      (user.streak !== data.stats.streak || user.lastStreakDate !== data.stats.lastStreakDate)
    ) {
      updateProfile({
        streak: data.stats.streak || 0,
        lastStreakDate: data.stats.lastStreakDate || null
      });
    }
  }, [user, data._storageKey, currentStorageKey, data.stats.streak, data.stats.lastStreakDate, updateProfile]);

  const resetUserData = () => {
    setIsTimerRunning(false);
    const freshState = {
      ...INITIAL_STATE,
      stats: { ...INITIAL_STATE.stats, streak: 0, lastStreakDate: null },
      _storageKey: currentStorageKey
    };
    setData(freshState);
    localStorage.setItem(currentStorageKey, JSON.stringify(freshState));
    if (user) {
      updateProfile({ streak: 0, lastStreakDate: null });
    }
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
        toggleSound,
        resetUserData
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
