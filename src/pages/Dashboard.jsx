import { Link } from "react-router-dom";
import { useAuth, ROLES } from "../context/AuthContext.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import {
  Users,
  ScanLine,
  Calendar,
  Scissors,
  Image,
  BarChart3,
  Settings,
  DollarSign,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Lock,
} from "lucide-react";

const QUICK_ACTIONS = {
  Administrator: [
    { label: "View Customers", icon: Users, path: "/customers", color: "#7C3AED" },
    { label: "Kiosk Check-In", icon: ScanLine, path: "/check-in", color: "#059669" },
    { label: "New Booking", icon: Calendar, path: "/booking", color: "#D4AF37" },
    { label: "Service Menu", icon: Scissors, path: "/service-menu", color: "#EA580C" },
    { label: "Team Portfolio", icon: Users, path: "/team", color: "#0284C7" },
    { label: "Gallery", icon: Image, path: "/gallery", color: "#DB2777" },
  ],
  "Salon Manager": [
    { label: "View Customers", icon: Users, path: "/customers", color: "#7C3AED" },
    { label: "Kiosk Check-In", icon: ScanLine, path: "/check-in", color: "#059669" },
    { label: "New Booking", icon: Calendar, path: "/booking", color: "#D4AF37" },
    { label: "Team Portfolio", icon: Users, path: "/team", color: "#0284C7" },
  ],
  Receptionist: [
    { label: "Kiosk Check-In", icon: ScanLine, path: "/check-in", color: "#059669" },
    { label: "New Booking", icon: Calendar, path: "/booking", color: "#D4AF37" },
  ],
};

const STATS = [
  { label: "Total Bookings", value: "128", icon: Calendar, change: "+12 this week", up: true, color: "#D4AF37" },
  { label: "Customers Today", value: "14", icon: Users, change: "+3 vs yesterday", up: true, color: "#7C3AED" },
  { label: "Checked In", value: "9", icon: CheckCircle, change: "5 pending", up: false, color: "#059669" },
  { label: "Revenue Est.", value: "Rs. 87K", icon: DollarSign, change: "+18% this month", up: true, color: "#EA580C" },
];

export default function Dashboard() {
  const { user, session } = useAuth();
  const roleConfig = ROLES[user?.role] || {};
  const actions = QUICK_ACTIONS[user?.role] || [];

  const sessionStart = session
    ? new Date(session.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    : "--";
  const sessionEnd = session
    ? new Date(session.expiresAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    : "--";

  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <div
        className="bg-white border rounded-2xl p-7 mb-7 flex justify-between items-center flex-wrap gap-5 shadow-sm animate-fade-in"
        style={{ borderColor: roleConfig.color }}
      >
        <div>
          <p className="m-0 mb-1 text-text-muted text-sm font-semibold">
            Good {getTimeOfDay()},
          </p>
          <h1 className="m-0 mb-2.5 text-[28px] font-extrabold tracking-tight">
            {user?.name}
          </h1>
          <p className="m-0 text-sm text-text-muted">
            Signed in as{" "}
            <span
              className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold"
              style={{ background: roleConfig.bg, color: roleConfig.color }}
            >
              {user?.role}
            </span>
          </p>
        </div>
        <div className="flex gap-5 items-center bg-bg px-6 py-4 rounded-[14px] border border-border">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[11px] text-text-muted uppercase font-semibold">Session Start</span>
            <span className="text-base font-extrabold text-text">{sessionStart}</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[11px] text-text-muted uppercase font-semibold">Expires At</span>
            <span className="text-base font-extrabold text-text">{sessionEnd}</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white border border-border rounded-2xl p-5 shadow-sm animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: stat.color + "18" }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <span
                  className="text-xs font-semibold flex items-center gap-1"
                  style={{ color: stat.up ? "#059669" : "#DC2626" }}
                >
                  <TrendingUp className="w-3 h-3" />
                  {stat.change}
                </span>
              </div>
              <div className="text-[32px] font-extrabold text-text mb-1">{stat.value}</div>
              <div className="text-[13px] text-text-muted font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <section className="mb-8">
        <h2 className="text-lg font-extrabold m-0 mb-1">Quick Actions</h2>
        <p className="text-text-muted text-sm m-0 mb-5">Your accessible modules based on your role permissions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.path}
                to={action.path}
                className="bg-white border rounded-2xl p-5 no-underline flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md shadow-sm animate-fade-in"
                style={{ animationDelay: `${i * 60}ms`, borderColor: action.color + "33" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: action.color + "18", color: action.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-text flex-1">{action.label}</span>
                <span className="text-lg font-extrabold" style={{ color: action.color }}>→</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Permissions */}
      <section>
        <h2 className="text-lg font-extrabold m-0 mb-4">Your Permissions</h2>
        <div className="flex gap-2.5 flex-wrap">
          {["dashboard", "customers", "check-in", "bookings", "reports", "settings"].map((perm) => {
            const hasIt = roleConfig.permissions?.includes(perm);
            return (
              <div
                key={perm}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-[13px] font-semibold capitalize ${
                  hasIt
                    ? "bg-success-bg text-success-text border-success-border"
                    : "bg-gray-50 text-gray-400 border-gray-200"
                }`}
              >
                {hasIt ? <ShieldCheck className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                {perm}
              </div>
            );
          })}
        </div>
      </section>
    </DashboardLayout>
  );
}

function getTimeOfDay() {
  const h = new Date().getHours();
  if (h < 12) return "Morning";
  if (h < 17) return "Afternoon";
  return "Evening";
}
