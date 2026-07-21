import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please enter username and password.");
      return;
    }

    const result = login(formData.username, formData.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    alert("Login successful!");
    navigate("/customers");
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1>Staff Login</h1>
        <p>Login to access staff-only system modules.</p>

        {error && <p style={styles.error}>{error}</p>}

        <form style={styles.form} onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.btn}>
            Login
          </button>
        </form>

        <div style={styles.demoBox}>
          <h3>Demo Login Details</h3>
          <p>Admin: admin / admin123</p>
          <p>Manager: manager / manager123</p>
          <p>Receptionist: reception / reception123</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    padding: "50px",
  },

  card: {
    width: "420px",
    padding: "35px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textAlign: "left",
    marginTop: "25px",
  },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  btn: {
    marginTop: "15px",
    padding: "12px",
    background: "#c59d5f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  error: {
    color: "red",
    fontWeight: "bold",
  },

  demoBox: {
    marginTop: "25px",
    padding: "15px",
    background: "#f8f4f0",
    borderRadius: "10px",
    fontSize: "14px",
  },
};