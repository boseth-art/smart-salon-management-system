import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children, requiredPermission }) {
  const { user, hasPermission } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔒</div>
        <h2 style={{ marginBottom: "8px" }}>Access Restricted</h2>
        <p style={{ color: "var(--color-text-muted)" }}>
          Your role (<strong>{user.role}</strong>) does not have permission to view this page.
        </p>
        <a href="/dashboard" style={{ display: "inline-block", marginTop: "20px", color: "var(--color-primary-dark)", fontWeight: "700" }}>
          ← Back to Dashboard
        </a>
      </div>
    );
  }

  return children;
}