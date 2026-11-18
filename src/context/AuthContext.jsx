import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const STORAGE_KEY = "desconecta_auth_user";
const USERS_STORAGE_KEY = "desconecta_registered_users";

function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveRegisteredUser(userObj) {
  if (!userObj || !userObj.email) return;
  try {
    const users = getRegisteredUsers();
    const key = userObj.email.trim().toLowerCase();
    users[key] = userObj;
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (e) {
    console.error("Error guardando usuario registrado en localStorage", e);
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;
      const parsed = JSON.parse(stored);
      // Limpiar cuenta de invitado por defecto si existía en localStorage previo
      if (parsed && (parsed.id === "guest-01" || parsed.isGuest)) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      if (parsed && parsed.email) {
        const registered = getRegisteredUsers();
        const emailKey = parsed.email.trim().toLowerCase();
        if (registered[emailKey]) {
          return { ...registered[emailKey], ...parsed };
        }
      }
      return parsed;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        saveRegisteredUser(user);
      } catch (e) {
        console.error("Error guardando usuario en localStorage", e);
      }
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = (email, _password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const registeredUsers = getRegisteredUsers();
    const existing = registeredUsers[normalizedEmail];

    if (existing) {
      setUser(existing);
      return existing;
    }

    const namePart = normalizedEmail.split("@")[0];
    const capitalized = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    const newUser = {
      id: "user-" + Date.now(),
      name: capitalized,
      email: normalizedEmail,
      avatar: "🌱",
      bio: "Reduciendo el tiempo en pantallas, un día a la vez.",
      targetMinutes: 60,
      streak: 0,
      lastStreakDate: null,
      joinedAt: new Date().toISOString()
    };

    saveRegisteredUser(newUser);
    setUser(newUser);
    return newUser;
  };

  const register = (name, email, _password) => {
    const normalizedEmail = email.trim().toLowerCase();
    const registeredUsers = getRegisteredUsers();
    const existing = registeredUsers[normalizedEmail];

    const newUser = existing
      ? { ...existing, name: name.trim() || existing.name }
      : {
          id: "user-" + Date.now(),
          name: name.trim(),
          email: normalizedEmail,
          avatar: "✨",
          bio: "Nuevo miembro comprometido con su bienestar digital.",
          targetMinutes: 45,
          streak: 0,
          lastStreakDate: null,
          joinedAt: new Date().toISOString()
        };

    saveRegisteredUser(newUser);
    setUser(newUser);
    return newUser;
  };

  const loginAsGuest = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    return null;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        loginAsGuest,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
}
