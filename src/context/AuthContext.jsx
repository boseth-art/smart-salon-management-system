import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

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

export function AuthProvider({ children }) {
  const savedUser = JSON.parse(localStorage.getItem("salonUser"));

  const [user, setUser] = useState(savedUser || null);

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

    localStorage.setItem("salonUser", JSON.stringify(foundUser));
    setUser(foundUser);

    return {
      success: true,
      message: "Login successful",
    };
  }

  function logout() {
    localStorage.removeItem("salonUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}