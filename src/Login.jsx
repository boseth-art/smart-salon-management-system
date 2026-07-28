import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, ROLES } from "./context/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function validate(data) {
    const errs = {};
    if (!data.username.trim()) errs.username = "Username is required.";
    else if (data.username.trim().length < 3) errs.username = "Username must be at least 3 characters.";
    if (!data.password) errs.password = "Password is required.";
    else if (data.password.length < 6) errs.password = "Password must be at least 6 characters.";
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear individual error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      triggerShake();
      return;
    }

    setLoading(true);
    // Simulate slight async delay for UX
    await new Promise((r) => setTimeout(r, 600));

    const result = login(formData.username, formData.password);
    setLoading(false);

    if (!result.success) {
      setServerError(result.message);
      triggerShake();
      return;
    }

    navigate("/dashboard");
  }

  function triggerShake() {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  }

  return (
    <div style={styles.page}>
      {/* Background decoration */}
      <div style={styles.bgCircle1} />
      <div style={styles.bgCircle2} />

      <div style={{ ...styles.card, animation: "slideUp 0.5s ease forwards" }}
        className={shake ? "shake-error" : ""}
      >
        {/* Header */}
        <div style={styles.cardHeader}>
          <div style={styles.logoMark}>💇‍♀️</div>
          <h1 style={styles.title}>Staff Portal</h1>
          <p style={styles.subtitle}>Sign in to access the Orchid Salon dashboard</p>
        </div>

        {/* Server Error */}
        {serverError && (
          <div style={styles.errorBanner} className="animate-fade-in">
            <span>⚠️</span> {serverError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form} noValidate>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <div style={styles.inputWrapper}>
              <span style={styles.inputIcon}>👤</span>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.username ? styles.inputErr : {}),
                }}
                autoComplete="username"
              />
            </div>
            {errors.username && <span style={styles.fieldError}>{errors.username}</span>}
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <span style={styles.inputIcon}>🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  paddingRight: "48px",
                  ...(errors.password ? styles.inputErr : {}),
                }}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                style={styles.eyeBtn}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && <span style={styles.fieldError}>{errors.password}</span>}
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ ...styles.submitBtn, opacity: loading ? 0.7 : 1 }}
            disabled={loading}
          >
            {loading ? (
              <span style={styles.loadingDots}>
                <span />
                <span />
                <span />
              </span>
            ) : (
              "Sign In to Dashboard →"
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div style={styles.demoBox}>
          <p style={styles.demoTitle}>🔑 Demo Credentials</p>
          <div style={styles.demoGrid}>
            {Object.entries(ROLES).map(([role, cfg]) => {
              const creds = { Administrator: "admin / admin123", "Salon Manager": "manager / manager123", Receptionist: "reception / reception123" };
              return (
                <div key={role} style={{ ...styles.demoCard, borderColor: cfg.color, background: cfg.bg }}>
                  <span style={{ fontSize: "18px" }}>{cfg.icon}</span>
                  <div>
                    <strong style={{ fontSize: "12px", color: cfg.color, display: "block" }}>{role}</strong>
                    <span style={styles.demoCredText}>{creds[role]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Link to="/" style={styles.backLink}>← Back to Website</Link>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #09090D 0%, #16161E 50%, #1a1a2e 100%)",
    padding: "40px 20px",
    position: "relative",
    overflow: "hidden",
  },
  bgCircle1: {
    position: "absolute", top: "-100px", right: "-100px",
    width: "400px", height: "400px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  bgCircle2: {
    position: "absolute", bottom: "-150px", left: "-100px",
    width: "500px", height: "500px", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  card: {
    width: "100%",
    maxWidth: "460px",
    background: "rgba(255,255,255,0.97)",
    borderRadius: "24px",
    padding: "44px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
    position: "relative",
    zIndex: 1,
  },
  cardHeader: { textAlign: "center", marginBottom: "32px" },
  logoMark: {
    fontSize: "42px",
    display: "block",
    marginBottom: "16px",
    animation: "pulse 2s ease infinite",
  },
  title: { fontSize: "28px", fontWeight: "800", margin: "0 0 8px", letterSpacing: "-0.5px", color: "var(--color-text)" },
  subtitle: { margin: 0, fontSize: "14px", color: "var(--color-text-muted)" },
  errorBanner: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 18px",
    background: "#FEF2F2",
    border: "1px solid #FECACA",
    borderRadius: "12px",
    color: "#B91C1C",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  form: { display: "flex", flexDirection: "column", gap: "20px" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "8px" },
  label: { fontSize: "14px", fontWeight: "600", color: "var(--color-text)" },
  inputWrapper: { position: "relative", display: "flex", alignItems: "center" },
  inputIcon: { position: "absolute", left: "14px", fontSize: "16px", pointerEvents: "none" },
  input: {
    width: "100%",
    padding: "14px 16px 14px 44px",
    border: "1.5px solid var(--color-border)",
    borderRadius: "12px",
    fontSize: "15px",
    fontFamily: "var(--font-sans)",
    outline: "none",
    background: "#FAFAF9",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  },
  inputErr: {
    borderColor: "#EF4444",
    background: "#FEF2F2",
  },
  eyeBtn: {
    position: "absolute", right: "14px",
    background: "none", border: "none",
    cursor: "pointer", fontSize: "16px", padding: 0,
  },
  fieldError: { color: "#EF4444", fontSize: "12px", fontWeight: "600" },
  submitBtn: {
    width: "100%",
    padding: "16px",
    fontSize: "15px",
    marginTop: "4px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  loadingDots: {
    display: "inline-flex", gap: "6px", alignItems: "center",
  },
  demoBox: {
    marginTop: "28px",
    padding: "20px",
    background: "var(--color-bg)",
    borderRadius: "14px",
    border: "1px solid var(--color-border)",
  },
  demoTitle: { margin: "0 0 14px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--color-text-muted)" },
  demoGrid: { display: "flex", flexDirection: "column", gap: "10px" },
  demoCard: {
    display: "flex", alignItems: "center", gap: "12px",
    padding: "10px 14px", borderRadius: "10px",
    border: "1px solid",
  },
  demoCredText: { fontSize: "12px", fontFamily: "monospace", color: "var(--color-text)", fontWeight: "600" },
  backLink: { display: "block", textAlign: "center", marginTop: "20px", fontSize: "13px", color: "var(--color-text-muted)", fontWeight: "600" },
};