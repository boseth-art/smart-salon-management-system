import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logoLink}>
        <h2 style={styles.logo}>
          <span style={styles.logoIcon}>💇‍♀️</span> Orchid Salon
        </h2>
      </Link>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/service-menu" style={styles.link}>
          Menu
        </Link>
        <Link to="/team" style={styles.link}>
          Team
        </Link>
        <Link to="/gallery" style={styles.link}>
          Gallery
        </Link>
        <Link to="/blog" style={styles.link}>
          Blog
        </Link>

        {user ? (
          <>
            <div style={styles.divider}></div>
            <Link to="/customers" style={styles.staffLink}>
              Customers
            </Link>
            <Link to="/check-in" style={styles.staffLink}>
              Kiosk
            </Link>
            <div style={styles.userBadge}>
              <span style={styles.userRole}>{user.role}</span>
            </div>
            <button onClick={logout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.staffLink}>
              Staff Login
            </Link>
            <Link to="/booking" className="btn-primary" style={styles.bookingBtn}>
              Book Now
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    padding: "16px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
  },
  logoLink: {
    textDecoration: "none",
  },
  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "800",
    color: "var(--color-text)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    letterSpacing: "-0.5px",
  },
  logoIcon: {
    fontSize: "26px",
  },
  links: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  link: {
    color: "var(--color-text)",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
    transition: "color 0.2s ease",
  },
  divider: {
    width: "1px",
    height: "24px",
    background: "var(--color-border)",
  },
  staffLink: {
    color: "var(--color-text-muted)",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
  },
  userBadge: {
    background: "var(--color-primary-light)",
    padding: "4px 12px",
    borderRadius: "20px",
  },
  userRole: {
    color: "var(--color-primary-dark)",
    fontWeight: "700",
    fontSize: "12px",
    textTransform: "uppercase",
  },
  logoutBtn: {
    padding: "8px 16px",
    background: "transparent",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-pill)",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "13px",
  },
  bookingBtn: {
    padding: "10px 24px",
    fontSize: "14px",
    marginLeft: "10px",
  }
};