import { Link } from "react-router-dom";
import { useAuth, ROLES } from "../context/AuthContext.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";

const QUICK_ACTIONS = {
  Administrator: [
    { label: "View Customers", icon: "👥", path: "/customers", color: "#7C3AED" },
    { label: "Kiosk Check-In", icon: "✅", path: "/check-in", color: "#059669" },
    { label: "New Booking", icon: "📅", path: "/booking", color: "#D4AF37" },
    { label: "Service Menu", icon: "💇", path: "/service-menu", color: "#EA580C" },
    { label: "Team Portfolio", icon: "👩‍💼", path: "/team", color: "#0284C7" },
    { label: "Gallery", icon: "🖼️", path: "/gallery", color: "#DB2777" },
  ],
  "Salon Manager": [
    { label: "View Customers", icon: "👥", path: "/customers", color: "#7C3AED" },
    { label: "Kiosk Check-In", icon: "✅", path: "/check-in", color: "#059669" },
    { label: "New Booking", icon: "📅", path: "/booking", color: "#D4AF37" },
    { label: "Team Portfolio", icon: "👩‍💼", path: "/team", color: "#0284C7" },
  ],
  Receptionist: [
    { label: "Kiosk Check-In", icon: "✅", path: "/check-in", color: "#059669" },
    { label: "New Booking", icon: "📅", path: "/booking", color: "#D4AF37" },
  ],
};

const STATS = [
  { label: "Total Bookings", value: "128", icon: "📅", change: "+12 this week", up: true },
  { label: "Customers Today", value: "14", icon: "👥", change: "+3 vs yesterday", up: true },
  { label: "Checked In", value: "9", icon: "✅", change: "5 pending", up: false },
  { label: "Revenue Est.", value: "Rs. 87K", icon: "💰", change: "+18% this month", up: true },
];

export default function Dashboard() {
  const { user, session } = useAuth();
  const roleConfig = ROLES[user?.role] || {};
  const actions = QUICK_ACTIONS[user?.role] || [];

  const sessionStart = session ? new Date(session.createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) : "--";
  const sessionEnd = session ? new Date(session.expiresAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) : "--";

  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <div style={{ ...styles.welcomeBanner, borderColor: roleConfig.color }} className="animate-fade-in">
        <div>
          <p style={styles.welcomeGreeting}>Good {getTimeOfDay()},</p>
          <h1 style={styles.welcomeName}>{user?.name} {roleConfig.icon}</h1>
          <p style={styles.welcomeRole}>
            Signed in as{" "}
            <span style={{ ...styles.rolePill, background: roleConfig.bg, color: roleConfig.color }}>
              {user?.role}
            </span>
          </p>
        </div>
        <div style={styles.sessionBox}>
          <div style={styles.sessionDetail}>
            <span style={styles.sessionDetailLabel}>Session Start</span>
            <span style={styles.sessionDetailVal}>{sessionStart}</span>
          </div>
          <div style={styles.sessionDivider} />
          <div style={styles.sessionDetail}>
            <span style={styles.sessionDetailLabel}>Expires At</span>
            <span style={styles.sessionDetailVal}>{sessionEnd}</span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={styles.statsGrid}>
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{ ...styles.statCard, animationDelay: `${i * 80}ms` }} className="animate-fade-in">
            <div style={styles.statTop}>
              <span style={styles.statIcon}>{stat.icon}</span>
              <span style={{ ...styles.statChange, color: stat.up ? "#059669" : "#DC2626" }}>
                {stat.up ? "▲" : "▼"} {stat.change}
              </span>
            </div>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Quick Actions</h2>
        <p style={styles.sectionSub}>Your accessible modules based on your role permissions.</p>
        <div style={styles.actionsGrid}>
          {actions.map((action, i) => (
            <Link
              key={action.path}
              to={action.path}
              style={{ ...styles.actionCard, animationDelay: `${i * 60}ms`, borderColor: action.color + "33" }}
              className="animate-fade-in"
            >
              <div style={{ ...styles.actionIcon, background: action.color + "18", color: action.color }}>
                {action.icon}
              </div>
              <span style={styles.actionLabel}>{action.label}</span>
              <span style={{ ...styles.actionArrow, color: action.color }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Permissions */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Your Permissions</h2>
        <div style={styles.permissionsGrid}>
          {["dashboard", "customers", "check-in", "bookings", "reports", "settings"].map((perm) => {
            const hasIt = roleConfig.permissions?.includes(perm);
            return (
              <div key={perm} style={{ ...styles.permChip, ...(hasIt ? styles.permGranted : styles.permDenied) }}>
                <span>{hasIt ? "✅" : "🔒"}</span>
                <span style={{ textTransform: "capitalize" }}>{perm}</span>
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

const styles = {
  welcomeBanner: {
    background: "#FFF",
    border: "1px solid",
    borderRadius: "20px",
    padding: "28px 32px",
    marginBottom: "28px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    boxShadow: "var(--shadow-sm)",
  },
  welcomeGreeting: { margin: "0 0 4px", color: "var(--color-text-muted)", fontSize: "14px", fontWeight: "600" },
  welcomeName: { margin: "0 0 10px", fontSize: "28px", fontWeight: "800", letterSpacing: "-0.5px" },
  welcomeRole: { margin: 0, fontSize: "14px", color: "var(--color-text-muted)" },
  rolePill: {
    display: "inline-block",
    padding: "2px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
  },
  sessionBox: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    background: "var(--color-bg)",
    padding: "16px 24px",
    borderRadius: "14px",
    border: "1px solid var(--color-border)",
  },
  sessionDetail: { display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" },
  sessionDetailLabel: { fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", fontWeight: "600" },
  sessionDetailVal: { fontSize: "16px", fontWeight: "800", color: "var(--color-text)" },
  sessionDivider: { width: "1px", height: "36px", background: "var(--color-border)" },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },
  statCard: {
    background: "#FFF",
    border: "1px solid var(--color-border)",
    borderRadius: "16px",
    padding: "22px",
    boxShadow: "var(--shadow-sm)",
  },
  statTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" },
  statIcon: { fontSize: "24px" },
  statChange: { fontSize: "12px", fontWeight: "600" },
  statValue: { fontSize: "32px", fontWeight: "800", color: "var(--color-text)", marginBottom: "4px" },
  statLabel: { fontSize: "13px", color: "var(--color-text-muted)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" },
  section: { marginBottom: "32px" },
  sectionTitle: { fontSize: "18px", fontWeight: "800", margin: "0 0 4px" },
  sectionSub: { color: "var(--color-text-muted)", fontSize: "14px", margin: "0 0 20px" },
  actionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "16px",
  },
  actionCard: {
    background: "#FFF",
    border: "1px solid",
    borderRadius: "16px",
    padding: "20px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: "var(--shadow-sm)",
  },
  actionIcon: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    flexShrink: 0,
  },
  actionLabel: { fontWeight: "700", fontSize: "14px", color: "var(--color-text)", flex: 1 },
  actionArrow: { fontSize: "18px", fontWeight: "800" },
  permissionsGrid: { display: "flex", gap: "10px", flexWrap: "wrap" },
  permChip: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 16px",
    borderRadius: "var(--radius-pill)",
    border: "1px solid",
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  permGranted: { background: "#ECFDF5", color: "#065F46", borderColor: "#A7F3D0" },
  permDenied: { background: "#F9FAFB", color: "#9CA3AF", borderColor: "#E5E7EB" },
};
