import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand */}
        <div style={styles.brand}>
          <h3 style={styles.logo}>💇‍♀️ Orchid Salon</h3>
          <p style={styles.tagline}>
            Where beauty meets luxury. Sri Lanka's premier destination for hair,
            bridal, and wellness services.
          </p>
          <div style={styles.socials}>
            <a href="#" style={styles.socialIcon} aria-label="Facebook">📘</a>
            <a href="#" style={styles.socialIcon} aria-label="Instagram">📸</a>
            <a href="#" style={styles.socialIcon} aria-label="WhatsApp">💬</a>
          </div>
        </div>

        {/* Services */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Services</h4>
          <Link to="/hair-styling" style={styles.footerLink}>Hair Styling</Link>
          <Link to="/hair-coloring" style={styles.footerLink}>Hair Coloring</Link>
          <Link to="/hair-treatment" style={styles.footerLink}>Hair Treatment</Link>
          <Link to="/bridal-makeup" style={styles.footerLink}>Bridal Makeup</Link>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Quick Links</h4>
          <Link to="/" style={styles.footerLink}>Home</Link>
          <Link to="/team" style={styles.footerLink}>Our Team</Link>
          <Link to="/gallery" style={styles.footerLink}>Gallery</Link>
          <Link to="/blog" style={styles.footerLink}>Blog</Link>
          <Link to="/booking" style={styles.footerLink}>Book Now</Link>
        </div>

        {/* Contact */}
        <div style={styles.column}>
          <h4 style={styles.columnTitle}>Contact Us</h4>
          <p style={styles.contactItem}>📍 123 Flower Road, Colombo 7</p>
          <p style={styles.contactItem}>📞 +94 11 234 5678</p>
          <p style={styles.contactItem}>✉️ hello@orchidsalon.lk</p>
          <p style={styles.contactItem}>🕐 Mon–Sat: 9AM – 7PM</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Orchid Salon. All rights reserved.
        </p>
        <p style={styles.madeWith}>
          Crafted with ❤️ in Sri Lanka
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "var(--color-bg-dark)",
    color: "rgba(255,255,255,0.7)",
    marginTop: "auto",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "60px 40px",
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
    gap: "50px",
    flexWrap: "wrap",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: "-0.5px",
  },
  tagline: {
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.7",
    color: "rgba(255,255,255,0.55)",
    maxWidth: "280px",
  },
  socials: {
    display: "flex",
    gap: "12px",
    marginTop: "8px",
  },
  socialIcon: {
    fontSize: "22px",
    textDecoration: "none",
    transition: "transform 0.2s ease",
    cursor: "pointer",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  columnTitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: "15px",
    margin: "0 0 8px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  footerLink: {
    color: "rgba(255,255,255,0.55)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "color 0.2s",
  },
  contactItem: {
    margin: 0,
    fontSize: "14px",
    color: "rgba(255,255,255,0.55)",
    lineHeight: "1.6",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    padding: "20px 40px",
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
    width: "100%",
  },
  copyright: {
    margin: 0,
    fontSize: "13px",
    color: "rgba(255,255,255,0.35)",
  },
  madeWith: {
    margin: 0,
    fontSize: "13px",
    color: "rgba(255,255,255,0.35)",
  },
};
