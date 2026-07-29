import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Role permissions map (Updated for Light & Girlish Theme)
export const ROLES = {
  Administrator: {
    label: "Administrator",
    color: "#F472B6", // Rose Pink
    bg: "rgba(244, 114, 182, 0.15)",
    icon: "👑",
    permissions: ["dashboard", "customers", "check-in", "bookings", "reports", "settings"],
  },
  "Salon Manager": {
    label: "Salon Manager",
    color: "#D97706", // Soft Amber/Gold
    bg: "rgba(217, 119, 6, 0.15)",
    icon: "💼",
    permissions: ["dashboard", "customers", "check-in", "bookings", "reports"],
  },
  Receptionist: {
    label: "Receptionist",
    color: "#059669", // Emerald
    bg: "rgba(5, 150, 105, 0.15)",
    icon: "🎯",
    permissions: ["dashboard", "check-in", "bookings"],
  },
};

const users = [
  {
    username: "admin",
    password: "admin123",
    role: "Administrator",
  },
  {
    username: "manager",
    password: "manager123",
    role: "Salon Manager",
  },
  {
    username: "reception",
    password: "reception123",
    role: "Receptionist",
  },
];

const SESSION_DURATION = 8 * 60 * 60 * 1000; // 8 hours

function getSession() {
  const sessionData = localStorage.getItem("salonSession");
  if (!sessionData) return null;
  try {
    const session = JSON.parse(sessionData);
    if (new Date().getTime() > session.expiresAt) {
      localStorage.removeItem("salonSession");
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

function saveSession(user) {
  const session = {
    user,
    expiresAt: new Date().getTime() + SESSION_DURATION,
  };
  localStorage.setItem("salonSession", JSON.stringify(session));
  return session;
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(getSession());
  const user = session?.user || null;

  function login(username, password) {
    const foundUser = users.find(
      (item) => item.username === username && item.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid username or password",
      };
    }

    const safeUser = { ...foundUser };
    delete safeUser.password;
    const newSession = saveSession(safeUser);
    setSession(newSession);

    return {
      success: true,
      message: "Login successful",
    };
  }

  function logout() {
    localStorage.removeItem("salonSession");
    setSession(null);
  }

  function hasPermission(permission) {
    if (!user) return false;
    const roleConfig = ROLES[user.role];
    return roleConfig?.permissions.includes(permission) ?? false;
  }

  // Compute timeRemaining safely (for current render only)
  const timeRemaining = session
    ? Math.max(0, Math.floor((session.expiresAt - new Date().getTime()) / 60000))
    : 0;

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission, timeRemaining, session }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}