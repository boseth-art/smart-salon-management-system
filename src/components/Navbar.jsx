import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>💇 Smart Salon</h2>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>

        <Link to="/service-menu" style={styles.link}>
          Service Menu
        </Link>

        <Link to="/team" style={styles.link}>
          Team
        </Link>

        <Link to="/search" style={styles.link}>
          Search
        </Link>

        <Link to="/gallery" style={styles.link}>
          Gallery
        </Link>

        <Link to="/blog" style={styles.link}>
          Blog
        </Link>

        <Link to="/booking" style={styles.link}>
          Booking
        </Link>

        {user ? (
          <>
            <Link to="/customers" style={styles.link}>
              Customer Records
            </Link>

            <Link to="/check-in" style={styles.link}>
              Front Desk Kiosk
            </Link>

            <span style={styles.userText}>{user.role}</span>

            <button onClick={logout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={styles.link}>
            Staff Login
          </Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "#111",
    color: "white",
    padding: "25px 35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  logo: {
    margin: 0,
  },

  links: {
    display: "flex",
    gap: "22px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },

  userText: {
    color: "#c59d5f",
    fontWeight: "bold",
  },

  logoutBtn: {
    padding: "8px 14px",
    background: "#c59d5f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};