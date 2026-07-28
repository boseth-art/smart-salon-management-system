import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, ROLES } from "../context/AuthContext.jsx";

const NAV_ITEMS = [
  { path: "/dashboard", label: "Overview", icon: "📊", permission: "dashboard" },
  { path: "/dashboard/bookings", label: "Bookings", icon: "📅", permission: "bookings" },
  { path: "/customers", label: "Customers", icon: "👥", permission: "customers" },
  { path: "/check-in", label: "Kiosk Check-In", icon: "✅", permission: "check-in" },
  { path: "/dashboard/reports", label: "Reports", icon: "📈", permission: "reports" },
  { path: "/dashboard/settings", label: "Settings", icon: "⚙️", permission: "settings" },
];

export default function DashboardLayout({ children }) {
  const { user, logout, hasPermission, timeRemaining } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const roleConfig = ROLES[user?.role] || {};

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div style={styles.shell}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarTop}>
          <Link to="/" style={styles.brand}>
            <span style={styles.brandIcon}>💇‍♀️</span>
            <div>
              <div style={styles.brandName}>Orchid Salon</div>
              <div style={styles.brandSub}>Dashboard</div>
            </div>
          </Link>

          {/* User Card */}
          <div style={styles.userCard}>
            <div style={styles.userAvatar}>{roleConfig.icon}</div>
            <div style={styles.userInfo}>
              <div style={styles.userName}>{user?.name}</div>
              <span style={{ ...styles.userRoleBadge, background: roleConfig.bg, color: roleConfig.color }}>
                {user?.role}
              </span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={styles.nav}>
          {NAV_ITEMS.filter((item) => hasPermission(item.permission)).map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                style={active ? styles.navItemActive : styles.navItem}
              >
                <span style={styles.navIcon}>{item.icon}</span>
                <span>{item.label}</span>
                {active && <span style={styles.activePip} />}
              </Link>
            );
          })}
        </nav>

        {/* Session timer */}
        <div style={styles.sessionInfo}>
          <div style={styles.sessionLabel}>⏱ Session expires in</div>
          <div style={styles.sessionTime}>{timeRemaining} min</div>
        </div>

        <button onClick={handleLogout} style={styles.logoutBtn}>
          🚪 Sign Out
        </button>
      </aside>

      {/* Main content */}
      <div style={styles.mainWrapper}>
        {/* Top Bar */}
        <header style={styles.topBar}>
          <div style={styles.topBarLeft}>
            <h2 style={styles.pageTitle}>
              {NAV_ITEMS.find((i) => i.path === location.pathname)?.label || "Dashboard"}
            </h2>
          </div>
          <div style={styles.topBarRight}>
            <Link to="/" style={styles.viewSiteBtn}>🌐 View Site</Link>
            <div style={styles.topUserBadge}>
              <span>{roleConfig.icon}</span>
              <span style={{ fontSize: "13px", fontWeight: "700" }}>{user?.name}</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={styles.content} className="animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}

const styles = {
  shell: {
    display: "flex",
    minHeight: "100vh",
    background: "#F4F4F7",
  },
  sidebar: {
    width: "260px",
    flexShrink: 0,
    background: "var(--color-bg-dark)",
    display: "flex",
    flexDirection: "column",
    padding: "0 0 24px",
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
  },
  sidebarTop: {
    padding: "24px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    marginBottom: "12px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    marginBottom: "20px",
  },
  brandIcon: { fontSize: "28px" },
  brandName: { color: "#FFF", fontWeight: "800", fontSize: "16px", letterSpacing: "-0.3px" },
  brandSub: { color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: "600", textTransform: "uppercase" },
  userCard: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 14px",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.07)",
  },
  userAvatar: { fontSize: "24px", flexShrink: 0 },
  userInfo: { display: "flex", flexDirection: "column", gap: "4px", minWidth: 0 },
  userName: { color: "#FFF", fontWeight: "700", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  userRoleBadge: {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "700",
    width: "fit-content",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "0 12px",
    flex: 1,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "11px 14px",
    color: "rgba(255,255,255,0.5)",
    textDecoration: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.2s ease",
    position: "relative",
  },
  navItemActive: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "11px 14px",
    color: "#FFF",
    textDecoration: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "700",
    background: "rgba(212,175,55,0.15)",
    border: "1px solid rgba(212,175,55,0.2)",
    position: "relative",
  },
  navIcon: { fontSize: "17px", flexShrink: 0 },
  activePip: {
    marginLeft: "auto",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "var(--color-primary)",
  },
  sessionInfo: {
    margin: "16px 12px 8px",
    padding: "12px 14px",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.05)",
  },
  sessionLabel: { fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" },
  sessionTime: { fontSize: "20px", fontWeight: "800", color: "var(--color-primary)" },
  logoutBtn: {
    margin: "0 12px",
    padding: "11px",
    background: "rgba(239,68,68,0.1)",
    color: "#F87171",
    border: "1px solid rgba(239,68,68,0.2)",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "14px",
    fontFamily: "var(--font-sans)",
    transition: "all 0.2s",
  },
  mainWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  topBar: {
    background: "#FFF",
    padding: "16px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid var(--color-border)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "var(--shadow-sm)",
  },
  topBarLeft: {},
  pageTitle: { margin: 0, fontSize: "20px", fontWeight: "800" },
  topBarRight: { display: "flex", alignItems: "center", gap: "16px" },
  viewSiteBtn: {
    padding: "8px 16px",
    background: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-pill)",
    fontSize: "13px",
    fontWeight: "600",
    color: "var(--color-text-muted)",
    textDecoration: "none",
  },
  topUserBadge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 14px",
    background: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-pill)",
  },
  content: {
    flex: 1,
    padding: "32px",
    overflowY: "auto",
  },
};
