import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, ROLES } from "../context/AuthContext.jsx";
import {
  Scissors,
  LayoutDashboard,
  Calendar,
  Users,
  ScanLine,
  BarChart3,
  Settings,
  LogOut,
  Globe,
  Menu,
  X,
  Clock,
} from "lucide-react";

const NAV_ITEMS = [
  { path: "/dashboard", label: "Overview", icon: LayoutDashboard, permission: "dashboard" },
  { path: "/dashboard/bookings", label: "Bookings", icon: Calendar, permission: "bookings" },
  { path: "/customers", label: "Customers", icon: Users, permission: "customers" },
  { path: "/check-in", label: "Kiosk Check-In", icon: ScanLine, permission: "check-in" },
  { path: "/dashboard/reports", label: "Reports", icon: BarChart3, permission: "reports" },
  { path: "/dashboard/settings", label: "Settings", icon: Settings, permission: "settings" },
];

export default function DashboardLayout({ children }) {
  const { user, logout, hasPermission, timeRemaining } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const roleConfig = ROLES[user?.role] || {};
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const currentLabel = NAV_ITEMS.find((i) => i.path === location.pathname)?.label || "Dashboard";

  return (
    <div className="flex min-h-screen bg-bg-alt">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 w-[260px] flex-shrink-0 bg-primary-light flex flex-col h-screen overflow-y-auto transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-5 border-b border-white/6 mb-3">
          <Link to="/" className="flex items-center gap-2.5 no-underline mb-5">
            <Scissors className="w-7 h-7 text-primary" />
            <div>
              <div className="text-text-dark font-extrabold text-base tracking-tight">Orchid Salon</div>
              <div className="text-text-muted text-[11px] font-semibold uppercase">Dashboard</div>
            </div>
          </Link>

          {/* User Card */}
          <div className="flex items-center gap-3 p-3 bg-white/4 rounded-xl border border-white/7">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="text-text-dark font-bold text-sm truncate">{user?.name}</div>
              <span
                className="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold w-fit"
                style={{ background: roleConfig.bg, color: roleConfig.color }}
              >
                {user?.role}
              </span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 px-3 flex-1">
          {NAV_ITEMS.filter((item) => hasPermission(item.permission)).map((item) => {
            const active = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 no-underline rounded-[10px] text-sm font-semibold transition-all duration-200 relative ${
                  active
                    ? "text-text-dark bg-primary/15 border border-primary/20 font-bold"
                    : "text-text-muted hover:bg-white/60 hover:text-text-muted"
                }`}
              >
                <Icon className="w-[18px] h-[18px] flex-shrink-0" />
                <span>{item.label}</span>
                {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>

        {/* Session timer */}
        <div className="mx-3 my-4 p-3.5 bg-white/3 rounded-[10px] border border-white/5">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-3 h-3 text-text-muted" />
            <span className="text-[11px] text-text-muted font-semibold uppercase tracking-wider">Session expires in</span>
          </div>
          <div className="text-xl font-extrabold text-primary">{timeRemaining} min</div>
        </div>

        <button
          onClick={handleLogout}
          className="mx-3 mb-5 py-2.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-[10px] cursor-pointer font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-500/20 transition-all"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Top Bar */}
        <header className="bg-white px-8 py-4 flex justify-between items-center border-b border-border sticky top-0 z-[100] shadow-sm">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 bg-transparent border-none cursor-pointer text-text"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h2 className="m-0 text-lg font-extrabold">{currentLabel}</h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 bg-bg border border-border rounded-full text-xs font-semibold text-text-muted no-underline hover:bg-border/50 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" /> View Site
            </Link>
            <div className="flex items-center gap-2 px-3.5 py-2 bg-bg border border-border rounded-full">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[11px] font-bold">
                {user?.name?.charAt(0) || "U"}
              </div>
              <span className="text-[13px] font-bold">{user?.name}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
