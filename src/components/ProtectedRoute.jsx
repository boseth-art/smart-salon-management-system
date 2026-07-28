import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function ProtectedRoute({ children, requiredPermission }) {
  const { user, hasPermission } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <ShieldAlert className="w-16 h-16 text-error mb-4" strokeWidth={1.5} />
        <h2 className="text-2xl font-extrabold mb-2">Access Restricted</h2>
        <p className="text-text-muted mb-1">
          Your role (<strong className="text-text">{user.role}</strong>) does not have permission to view this page.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-bold text-sm shadow-lg shadow-primary/25 no-underline hover:-translate-y-0.5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>
    );
  }

  return children;
}
