import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, ROLES } from "./context/AuthContext.jsx";
import { Scissors, User, Lock, Eye, EyeOff, AlertTriangle, ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-bg-darker via-bg-dark to-[#1a1a2e] px-5 py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-36 -left-24 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div
        className={`w-full max-w-[460px] bg-white/97 rounded-3xl p-11 shadow-[0_30px_80px_rgba(0,0,0,0.4)] relative z-10 ${shake ? "shake-error" : ""}`}
        style={{ animation: "slideUp 0.5s ease forwards" }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-[42px] block mb-4" style={{ animation: "pulse 2s ease infinite" }}>
            <Scissors className="w-11 h-11 text-primary mx-auto" />
          </div>
          <h1 className="text-[28px] font-extrabold m-0 mb-2 tracking-tight text-text">Staff Portal</h1>
          <p className="m-0 text-sm text-text-muted">Sign in to access the Orchid Salon dashboard</p>
        </div>

        {/* Server Error */}
        {serverError && (
          <div className="flex items-center gap-2.5 p-3.5 bg-error-bg border border-error-border rounded-xl text-error-text text-sm font-semibold mb-5 animate-fade-in">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" /> {serverError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text">Username</label>
            <div className="relative flex items-center">
              <User className="absolute left-3.5 w-4 h-4 text-text-muted pointer-events-none" />
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className={`w-full py-3.5 pr-4 pl-11 border-[1.5px] rounded-xl text-[15px] font-sans outline-none bg-[#FAFAF9] transition-all box-border ${
                  errors.username ? "border-error bg-error-bg" : "border-border"
                }`}
                autoComplete="username"
              />
            </div>
            {errors.username && <span className="text-error text-xs font-semibold">{errors.username}</span>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-text">Password</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 w-4 h-4 text-text-muted pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full py-3.5 pr-12 pl-11 border-[1.5px] rounded-xl text-[15px] font-sans outline-none bg-[#FAFAF9] transition-all box-border ${
                  errors.password ? "border-error bg-error-bg" : "border-border"
                }`}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3.5 bg-transparent border-none cursor-pointer p-0 text-text-muted hover:text-text transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <span className="text-error text-xs font-semibold">{errors.password}</span>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 text-[15px] mt-1 font-bold text-white rounded-full border-none cursor-pointer transition-all duration-300 disabled:opacity-70"
            style={{
              background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
              boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)",
            }}
          >
            {loading ? (
              <span className="inline-flex gap-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-white animate-[dotBounce_1.2s_infinite_ease-in-out]" />
                <span className="w-2 h-2 rounded-full bg-white animate-[dotBounce_1.2s_infinite_ease-in-out_0.16s]" />
                <span className="w-2 h-2 rounded-full bg-white animate-[dotBounce_1.2s_infinite_ease-in-out_0.32s]" />
              </span>
            ) : (
              "Sign In to Dashboard"
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-7 p-5 bg-bg rounded-[14px] border border-border">
          <p className="m-0 mb-3.5 text-[13px] font-bold uppercase tracking-wider text-text-muted">Demo Credentials</p>
          <div className="flex flex-col gap-2.5">
            {Object.entries(ROLES).map(([role, cfg]) => {
              const creds = { Administrator: "admin / admin123", "Salon Manager": "manager / manager123", Receptionist: "reception / reception123" };
              return (
                <div
                  key={role}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-[10px] border"
                  style={{ borderColor: cfg.color, background: cfg.bg }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: cfg.color + "20", color: cfg.color }}>
                    {cfg.icon || role.charAt(0)}
                  </div>
                  <div>
                    <strong className="text-xs block" style={{ color: cfg.color }}>{role}</strong>
                    <span className="text-xs font-mono text-text font-semibold">{creds[role]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Link to="/" className="flex items-center justify-center gap-1 mt-5 text-[13px] text-text-muted font-semibold no-underline hover:text-text transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Website
        </Link>
      </div>
    </div>
  );
}
