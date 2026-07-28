import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6">
        <AlertTriangle className="w-20 h-20 text-primary mx-auto" strokeWidth={1.5} />
      </div>
      <h1 className="text-7xl font-extrabold text-text mb-4">404</h1>
      <h2 className="text-2xl font-bold text-text mb-3">Page Not Found</h2>
      <p className="text-text-muted max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
          boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)",
        }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
