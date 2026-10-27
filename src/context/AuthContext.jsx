import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const STORAGE_KEY = "desconecta_auth_user";

const DEFAULT_GUEST = {
  id: "guest-01",
  name: "Explorador Zen",
  email: "zen@desconecta.app",
  avatar: "🌿",
  bio: "Cultivando momentos de presencia y desconexión digital.",
  targetMinutes: 60,
  joinedAt: new Date().toISOString()
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_GUEST;
    } catch {
      return DEFAULT_GUEST;
    }
  });

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } catch (e) {
        console.error("Error guardando usuario en localStorage", e);
      }
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = (email, _password) => {
    // Para prototipo, aceptamos cualquier credencial válida o creamos perfil
    const existing = user && user.email === email ? user : null;
    const namePart = email.split("@")[0];
    const capitalized = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    const loggedUser = existing || {
      id: "user-" + Date.now(),
      name: capitalized,
      email: email,
      avatar: "🌱",
      bio: "Reduciendo el tiempo en pantallas, un día a la vez.",
      targetMinutes: 60,
      joinedAt: new Date().toISOString()
    };

    setUser(loggedUser);
    return loggedUser;
  };

  const register = (name, email, _password) => {
    const newUser = {
      id: "user-" + Date.now(),
      name: name.trim(),
      email: email.trim(),
      avatar: "✨",
      bio: "Nuevo miembro comprometido con su bienestar digital.",
      targetMinutes: 45,
      joinedAt: new Date().toISOString()
    };
    setUser(newUser);
    return newUser;
  };

  const loginAsGuest = () => {
    setUser(DEFAULT_GUEST);
    return DEFAULT_GUEST;
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
