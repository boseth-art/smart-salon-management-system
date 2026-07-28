import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Role permissions map
export const ROLES = {
  Administrator: {
    label: "Administrator",
    color: "#7C3AED",
    bg: "rgba(124, 58, 237, 0.1)",
    icon: "👑",
    permissions: ["dashboard", "customers", "check-in", "bookings", "reports", "settings"],
  },
  "Salon Manager": {
    label: "Salon Manager",
    color: "#D4AF37",
    bg: "rgba(212, 175, 55, 0.1)",
    icon: "💼",
    permissions: ["dashboard", "customers", "check-in", "bookings", "reports"],
  },
  Receptionist: {
    label: "Receptionist",
    color: "#059669",
    bg: "rgba(5, 150, 105, 0.1)",
    icon: "🎯",
    permissions: ["dashboard", "check-in", "bookings"],
  },
};

const users = [
  { id: 1, username: "admin", password: "admin123", role: "Administrator", name: "Admin User" },
  { id: 2, username: "manager", password: "manager123", role: "Salon Manager", name: "Tharushi Fernando" },
  { id: 3, username: "reception", password: "reception123", role: "Receptionist", name: "Kavindi Perera" },
];

// Session duration: 8 hours
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000;
const SESSION_KEY = "salonSession";

function getSessionFromStorage() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    const now = Date.now();
    if (now > session.expiresAt) {
      localStorage.removeItem(SESSION_KEY);
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
    createdAt: Date.now(),
    expiresAt: Date.now() + SESSION_DURATION_MS,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  // Also set a cookie for cross-tab awareness (expires in 8h)
  const expires = new Date(session.expiresAt).toUTCString();
  document.cookie = `salonAuth=1; expires=${expires}; path=/; SameSite=Strict`;
  return session;
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
  // Clear cookie
  document.cookie = "salonAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => getSessionFromStorage());
  const user = session?.user || null;

  // Auto-expire: check every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const current = getSessionFromStorage();
      if (!current && session) {
        setSession(null);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [session]);

  function login(username, password) {
    if (!username.trim()) return { success: false, message: "Username is required." };
    if (!password.trim()) return { success: false, message: "Password is required." };

    const foundUser = users.find(
      (u) => u.username === username.trim() && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Invalid username or password. Please try again." };
    }

    const { password: _, ...safeUser } = foundUser;
    const newSession = saveSession(safeUser);
    setSession(newSession);

    return { success: true, user: safeUser };
  }

  function logout() {
    clearSession();
    setSession(null);
  }

  function hasPermission(permission) {
    if (!user) return false;
    const roleConfig = ROLES[user.role];
    return roleConfig?.permissions.includes(permission) ?? false;
  }

  const timeRemaining = session
    ? Math.max(0, Math.floor((session.expiresAt - Date.now()) / 60000))
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