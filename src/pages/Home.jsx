import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const promotions = [
  {
    icon: "✨",
    badge: "Limited Time",
    title: "20% Off Hair Coloring",
    text: "Transform your look with 20% off all premium balayage and full-head coloring this week.",
    discount: "SAVE 20%",
  },
  {
    icon: "👰",
    badge: "Special Package",
    title: "Free Bridal Consultation",
    text: "Book any deluxe bridal package and receive a complimentary trial & skin analysis.",
    discount: "FREE TRIAL",
  },
  {
    icon: "🧴",
    badge: "Trending Spa",
    title: "Keratin & Spa Combo",
    text: "Revitalize damaged hair with deep nourishment and smoothing treatment at 15% off.",
    discount: "SPECIAL COMBO",
  },
  {
    icon: "💇",
    badge: "Weekday Glam",
    title: "Weekday Blowout & Styling",
    text: "Get party-ready with our signature blow-dry and styling package every Mon-Thu.",
    discount: "FLAT 15% OFF",
  },
];

const services = [
  {
    id: "styling",
    title: "Hair Styling & Cuts",
    tagline: "Precision cuts, blowout & red-carpet styling",
    price: "From $35",
    icon: "💇‍♀️",
    link: "/hair-styling",
    popular: true,
  },
  {
    id: "coloring",
    title: "Luxury Hair Coloring",
    tagline: "Balayage, ombre, highlights & root touch-ups",
    price: "From $65",
    icon: "🎨",
    link: "/hair-coloring",
    popular: true,
  },
  {
    id: "treatment",
    title: "Scalp & Hair Treatment",
    tagline: "Organic spa, keratin infusion & deep hydration",
    price: "From $50",
    icon: "🧴",
    link: "/hair-treatment",
    popular: false,
  },
  {
    id: "bridal",
    title: "Bridal & Event Makeup",
    tagline: "HD bridal makeup, saree draping & hair setting",
    price: "From $120",
    icon: "👰‍♀️",
    link: "/bridal-makeup",
    popular: true,
  },
];

const systemFeatures = [
  {
    icon: "📅",
    title: "Online Booking",
    role: "Clients & Staff",
    description: "Book appointments instantly with your favorite stylist and date slot.",
    link: "/booking",
  },
  {
    icon: "🖥️",
    title: "Front Desk Kiosk",
    role: "Front Desk Staff",
    description: "Rapid client check-in, queue management, and service routing.",
    link: "/check-in",
  },
  {
    icon: "👥",
    title: "Customer Records",
    role: "Salon Staff",
    description: "Track customer history, preferences, hair allergies & past services.",
    link: "/customers",
  },
  {
    icon: "📦",
    title: "Inventory Tracking",
    role: "Store Manager",
    description: "Monitor real-time salon stock levels, color dyes & hair products.",
    link: "/login",
  },
  {
    icon: "📊",
    title: "Business Analytics",
    role: "Management",
    description: "Revenue insights, peak booking hours, and stylist performance metrics.",
    link: "/login",
  },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "8,500+", label: "Happy Clients" },
  { value: "15+", label: "Master Stylists" },
  { value: "4.9 ★", label: "Client Rating" },
];

export default function Home() {
  const [currentPromotion, setCurrentPromotion] = useState(0);

  useEffect(() => {
    const promotionTimer = setInterval(() => {
      setCurrentPromotion((prev) => (prev === promotions.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(promotionTimer);
  }, []);

  return (
    <div style={styles.container}>
      {/* ================= HERO SECTION ================= */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <div style={styles.heroContent}>
          <div style={styles.heroTextCol}>
            <div style={styles.badgeWrapper}>
              <span style={styles.brandBadge}>✨ Orchid Luxury Smart Salon</span>
              <span style={styles.ratingBadge}>★ 4.9 Premium Rated</span>
            </div>

            <h1 style={styles.heroTitle}>
              Elevate Your Natural <span style={styles.goldText}>Beauty & Style</span>
            </h1>

            <p style={styles.heroSubtext}>
              Step into a world of personalized hair care, master styling, and effortless
              smart appointment management tailored to your lifestyle.
            </p>

            {/* Dynamic Glassmorphism Promo Box */}
            <div style={styles.glassPromoBox}>
              <div style={styles.promoHeader}>
                <span style={styles.promoBadge}>{promotions[currentPromotion].badge}</span>
                <span style={styles.discountTag}>{promotions[currentPromotion].discount}</span>
              </div>

              <div style={styles.promoBody}>
                <div style={styles.promoIconContainer}>
                  {promotions[currentPromotion].icon}
                </div>
                <div>
                  <h3 style={styles.promoTitle}>{promotions[currentPromotion].title}</h3>
                  <p style={styles.promoText}>{promotions[currentPromotion].text}</p>
                </div>
              </div>

              <div style={styles.dotsNav}>
                {promotions.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => setCurrentPromotion(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={idx === currentPromotion ? styles.activeDot : styles.dot}
                  />
                ))}
              </div>
            </div>

            <div style={styles.heroButtons}>
              <Link to="/booking" style={styles.primaryBtn}>
                <span>Book Appointment</span> ➔
              </Link>
              <Link to="/service-menu" style={styles.secondaryBtn}>
                Explore Menu
              </Link>
            </div>
          </div>

          {/* Hero Feature Card */}
          <div style={styles.heroCardCol}>
            <div style={styles.cardGlassWrapper}>
              <div style={styles.imageContainer}>
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Orchid Salon Sanctuary"
                  style={styles.heroImage}
                />
                <div style={styles.imageBadge}>Modern Sanctuary</div>
              </div>

              <div style={styles.cardContent}>
                <h3 style={styles.cardHeading}>Luxury Atmosphere</h3>
                <p style={styles.cardDesc}>
                  Equipped with ergonomic wash chairs, premium organic formulas, and private bridal dressing suites.
                </p>
                <div style={styles.cardStatsRow}>
                  <div>
                    <strong style={styles.goldText}>100%</strong>
                    <span style={styles.smallStatLabel}>Organic Care</span>
                  </div>
                  <div>
                    <strong style={styles.goldText}>VIP</strong>
                    <span style={styles.smallStatLabel}>Private Rooms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section style={styles.statsBar}>
        <div style={styles.statsGrid}>
          {stats.map((item, index) => (
            <div key={index} style={styles.statItem}>
              <h2 style={styles.statValue}>{item.value}</h2>
              <p style={styles.statLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionCategory}>Exclusive Services</span>
          <h2 style={styles.sectionTitle}>Tailored Beauty Experiences</h2>
          <p style={styles.sectionSubtitle}>
            Crafted by certified hair artisans using industry-leading cruelty-free products.
          </p>
        </div>

        <div style={styles.servicesGrid}>
          {services.map((svc) => (
            <Link key={svc.id} to={svc.link} style={styles.serviceCardLink}>
              <div style={styles.serviceCard}>
                {svc.popular && <span style={styles.popularTag}>Popular</span>}
                <div style={styles.serviceIconContainer}>{svc.icon}</div>
                <h3 style={styles.serviceCardTitle}>{svc.title}</h3>
                <p style={styles.serviceCardTagline}>{svc.tagline}</p>
                <div style={styles.serviceFooter}>
                  <span style={styles.servicePrice}>{svc.price}</span>
                  <span style={styles.arrowIcon}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={styles.centerBtnRow}>
          <Link to="/service-menu" style={styles.outlineBtn}>
            View Full Service & Price Menu
          </Link>
        </div>
      </section>

      {/* ================= SMART SYSTEM FEATURES ================= */}
      <section style={styles.featuresSection}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionCategoryDark}>Smart Salon Platform</span>
          <h2 style={styles.sectionTitleDark}>Next-Gen Salon Management</h2>
          <p style={styles.sectionSubtitleDark}>
            Seamless digital experience connecting clients, stylists, and salon administration.
          </p>
        </div>

        <div style={styles.featuresGrid}>
          {systemFeatures.map((feat, i) => (
            <Link key={i} to={feat.link} style={styles.featureCardLink}>
              <div style={styles.featureCard}>
                <div style={styles.featureIconBox}>{feat.icon}</div>
                <span style={styles.rolePill}>{feat.role}</span>
                <h3 style={styles.featureTitle}>{feat.title}</h3>
                <p style={styles.featureDesc}>{feat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= ABOUT SALON ================= */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <div style={styles.aboutTextCol}>
            <span style={styles.sectionCategory}>About Orchid Salon</span>
            <h2 style={styles.aboutHeading}>Where Artistry Meets Comfort</h2>
            <p style={styles.aboutParagraph}>
              Founded with a passion for excellence, Orchid Salon brings together master hair artists, 
              aesthetic beauty specialists, and cutting-edge salon tech. We specialize in precision hair design, 
              personalized skin therapies, and high-fashion bridal makeovers.
            </p>
            <p style={styles.aboutParagraph}>
              Our commitment to sustainability means we exclusively use non-toxic, vegan hair treatments 
              that keep your hair naturally radiant and healthy.
            </p>

            <div style={styles.aboutHighlightsGrid}>
              <div style={styles.highlightCard}>
                <div style={styles.highlightIcon}>🌿</div>
                <div>
                  <h4 style={styles.highlightTitle}>100% Eco Formulations</h4>
                  <p style={styles.highlightText}>Sulfate-free, vegan & cruelty-free hair care products.</p>
                </div>
              </div>
              <div style={styles.highlightCard}>
                <div style={styles.highlightIcon}>🏆</div>
                <div>
                  <h4 style={styles.highlightTitle}>Award-Winning Team</h4>
                  <p style={styles.highlightText}>Top certified hair colorists & bridal stylists.</p>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.aboutImageCol}>
            <div style={styles.aboutImageFrame}>
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Stylist work"
                style={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION & CONTACT ================= */}
      <section style={styles.locationSection}>
        <div style={styles.locationCard}>
          <div style={styles.locationInfo}>
            <span style={styles.goldBadge}>Visit Our Studio</span>
            <h2 style={styles.locationTitle}>Orchid Salon & Day Spa</h2>
            <p style={styles.locationSub}>We look forward to welcoming you into our sanctuary.</p>

            <div style={styles.contactDetailsList}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <div>
                  <strong>Location</strong>
                  <p>123 Beauty Street, Colombo 03, Sri Lanka</p>
                </div>
              </div>

              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p>+94 77 123 4567 | +94 11 987 6543</p>
                </div>
              </div>

              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>⏰</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>Monday - Sunday: 9:00 AM - 7:30 PM</p>
                </div>
              </div>
            </div>

            <div style={styles.locationButtons}>
              <Link to="/booking" style={styles.primaryBtn}>
                Reserve Appointment Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerBrandCol}>
            <h3 style={styles.footerLogo}>💇‍♀️ Orchid Salon</h3>
            <p style={styles.footerTagline}>
              Redefining beauty care through craftsmanship and modern smart technology.
            </p>
            <p style={styles.copyright}>© {new Date().getFullYear()} Orchid Salon. All Rights Reserved.</p>
          </div>

          <div style={styles.footerCol}>
            <h4 style={styles.footerHeader}>Quick Navigation</h4>
            <Link to="/" style={styles.footerLink}>Home</Link>
            <Link to="/service-menu" style={styles.footerLink}>Service Menu</Link>
            <Link to="/team" style={styles.footerLink}>Team Portfolio</Link>
            <Link to="/search" style={styles.footerLink}>Search Services</Link>
            <Link to="/gallery" style={styles.footerLink}>Gallery</Link>
          </div>

          <div style={styles.footerCol}>
            <h4 style={styles.footerHeader}>Staff Portal</h4>
            <Link to="/login" style={styles.footerLink}>Staff Login</Link>
            <Link to="/check-in" style={styles.footerLink}>Front Desk Kiosk</Link>
            <Link to="/customers" style={styles.footerLink}>Client Records</Link>
          </div>

          <div style={styles.footerCol}>
            <h4 style={styles.footerHeader}>Contact Info</h4>
            <p style={styles.footerText}>📞 +94 77 123 4567</p>
            <p style={styles.footerText}>📧 hello@orchidsalon.com</p>
            <p style={styles.footerText}>📍 Colombo, Sri Lanka</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    color: "#2C2A29",
    backgroundColor: "#FDFBF7",
    overflowX: "hidden",
  },
  hero: {
    minHeight: "92vh",
    backgroundImage: "url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "60px 40px",
    color: "#FFFFFF",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(15,15,20,0.92) 0%, rgba(20,20,30,0.75) 50%, rgba(15,15,20,0.85) 100%)",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "50px",
    alignItems: "center",
    width: "100%",
  },
  heroTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  badgeWrapper: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  brandBadge: {
    display: "inline-block",
    padding: "8px 18px",
    background: "linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)",
    color: "#FFFFFF",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "14px",
    letterSpacing: "0.5px",
    boxShadow: "0 4px 15px rgba(212,175,55,0.3)",
  },
  ratingBadge: {
    display: "inline-block",
    padding: "8px 16px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    color: "#F3E5AB",
    borderRadius: "30px",
    fontSize: "13px",
    fontWeight: "600",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  heroTitle: {
    fontSize: "48px",
    lineHeight: "1.15",
    fontWeight: "800",
    color: "#FFFFFF",
    margin: 0,
  },
  goldText: {
    background: "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #C59D5F 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSubtext: {
    fontSize: "17px",
    lineHeight: "1.6",
    color: "#E2E8F0",
    margin: 0,
    maxWidth: "580px",
  },
  glassPromoBox: {
    padding: "24px",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "20px",
    backdropFilter: "blur(16px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  promoHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  promoBadge: {
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    padding: "4px 12px",
    background: "rgba(212, 175, 55, 0.25)",
    color: "#F3E5AB",
    borderRadius: "12px",
    border: "1px solid rgba(212, 175, 55, 0.4)",
  },
  discountTag: {
    fontSize: "13px",
    fontWeight: "800",
    color: "#D4AF37",
    letterSpacing: "0.5px",
  },
  promoBody: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  promoIconContainer: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #D4AF37 0%, #8C6211 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    flexShrink: 0,
    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)",
  },
  promoTitle: {
    margin: "0 0 4px",
    fontSize: "20px",
    fontWeight: "700",
    color: "#FFFFFF",
  },
  promoText: {
    margin: 0,
    fontSize: "14px",
    color: "#CBD5E1",
    lineHeight: "1.5",
  },
  dotsNav: {
    display: "flex",
    gap: "8px",
    marginTop: "4px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(255, 255, 255, 0.3)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  activeDot: {
    width: "30px",
    height: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#D4AF37",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  heroButtons: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "10px",
  },
  primaryBtn: {
    padding: "16px 32px",
    background: "linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)",
    color: "#FFFFFF",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "16px",
    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)",
    transition: "transform 0.2s ease, boxShadow 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },
  secondaryBtn: {
    padding: "16px 32px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(10px)",
    color: "#FFFFFF",
    textDecoration: "none",
    borderRadius: "30px",
    fontWeight: "600",
    fontSize: "16px",
    border: "1px solid rgba(255,255,255,0.3)",
    transition: "all 0.2s ease",
  },
  heroCardCol: {
    display: "flex",
    justifyContent: "center",
  },
  cardGlassWrapper: {
    width: "100%",
    maxWidth: "420px",
    background: "#FFFFFF",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.4)",
  },
  imageContainer: {
    position: "relative",
    height: "260px",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imageBadge: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "rgba(15, 15, 20, 0.8)",
    backdropFilter: "blur(8px)",
    color: "#D4AF37",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
  },
  cardContent: {
    padding: "24px",
    color: "#1F2937",
  },
  cardHeading: {
    margin: "0 0 8px",
    fontSize: "22px",
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#6B7280",
    lineHeight: "1.5",
    margin: "0 0 16px",
  },
  cardStatsRow: {
    display: "flex",
    gap: "24px",
    paddingTop: "16px",
    borderTop: "1px solid #F3F4F6",
  },
  smallStatLabel: {
    display: "block",
    fontSize: "12px",
    color: "#9CA3AF",
  },
  statsBar: {
    backgroundColor: "#16161E",
    padding: "36px 40px",
    color: "#FFFFFF",
  },
  statsGrid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    textAlign: "center",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  statValue: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#D4AF37",
    margin: 0,
  },
  statLabel: {
    fontSize: "14px",
    color: "#94A3B8",
    margin: 0,
    fontWeight: "500",
  },
  section: {
    padding: "80px 40px",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "50px",
  },
  sectionCategory: {
    fontSize: "13px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#D4AF37",
    display: "block",
    marginBottom: "8px",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1E1B18",
    margin: "0 0 12px",
  },
  sectionSubtitle: {
    fontSize: "16px",
    color: "#78716C",
    maxWidth: "600px",
    margin: "0 auto",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
    gap: "28px",
  },
  serviceCardLink: {
    textDecoration: "none",
  },
  serviceCard: {
    position: "relative",
    background: "#FFFFFF",
    borderRadius: "20px",
    padding: "32px 24px",
    border: "1px solid #E7E5E4",
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    height: "100%",
    boxSizing: "border-box",
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
  },
  popularTag: {
    position: "absolute",
    top: "16px",
    right: "16px",
    background: "#FEF3C7",
    color: "#92400E",
    fontSize: "11px",
    fontWeight: "800",
    padding: "4px 10px",
    borderRadius: "12px",
    textTransform: "uppercase",
  },
  serviceIconContainer: {
    fontSize: "40px",
    marginBottom: "4px",
  },
  serviceCardTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#1C1917",
    margin: 0,
  },
  serviceCardTagline: {
    fontSize: "14px",
    color: "#78716C",
    lineHeight: "1.5",
    margin: 0,
    flexGrow: 1,
  },
  serviceFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "16px",
    borderTop: "1px solid #F5F5F4",
  },
  servicePrice: {
    fontSize: "16px",
    fontWeight: "800",
    color: "#D4AF37",
  },
  arrowIcon: {
    fontSize: "18px",
    color: "#1C1917",
    fontWeight: "700",
  },
  centerBtnRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: "48px",
  },
  outlineBtn: {
    padding: "14px 32px",
    border: "2px solid #D4AF37",
    color: "#D4AF37",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "15px",
    transition: "all 0.2s ease",
  },
  featuresSection: {
    background: "#16161E",
    padding: "80px 40px",
  },
  sectionCategoryDark: {
    fontSize: "13px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#D4AF37",
    display: "block",
    marginBottom: "8px",
  },
  sectionTitleDark: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#FFFFFF",
    margin: "0 0 12px",
  },
  sectionSubtitleDark: {
    fontSize: "16px",
    color: "#94A3B8",
    maxWidth: "600px",
    margin: "0 auto",
  },
  featuresGrid: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
  },
  featureCardLink: {
    textDecoration: "none",
  },
  featureCard: {
    background: "#20202B",
    borderRadius: "20px",
    padding: "28px 24px",
    border: "1px solid rgba(255,255,255,0.08)",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  featureIconBox: {
    fontSize: "32px",
  },
  rolePill: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#D4AF37",
    background: "rgba(212, 175, 55, 0.15)",
    padding: "4px 10px",
    borderRadius: "8px",
    width: "fit-content",
  },
  featureTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#FFFFFF",
    margin: 0,
  },
  featureDesc: {
    fontSize: "14px",
    color: "#94A3B8",
    lineHeight: "1.5",
    margin: 0,
  },
  aboutSection: {
    padding: "90px 40px",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  aboutContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "60px",
    alignItems: "center",
  },
  aboutTextCol: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  aboutHeading: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1C1917",
    margin: 0,
  },
  aboutParagraph: {
    fontSize: "16px",
    color: "#57534E",
    lineHeight: "1.7",
    margin: 0,
  },
  aboutHighlightsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
    marginTop: "16px",
  },
  highlightCard: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    padding: "16px 20px",
    background: "#FFFFFF",
    borderRadius: "16px",
    border: "1px solid #E7E5E4",
  },
  highlightIcon: {
    fontSize: "28px",
  },
  highlightTitle: {
    margin: "0 0 2px",
    fontSize: "16px",
    fontWeight: "700",
    color: "#1C1917",
  },
  highlightText: {
    margin: 0,
    fontSize: "13px",
    color: "#78716C",
  },
  aboutImageCol: {
    display: "flex",
    justifyContent: "center",
  },
  aboutImageFrame: {
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    border: "4px solid #FFFFFF",
    maxHeight: "450px",
  },
  aboutImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  locationSection: {
    padding: "60px 40px 90px",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  locationCard: {
    background: "linear-gradient(135deg, #1C1917 0%, #0C0A09 100%)",
    borderRadius: "28px",
    padding: "50px 40px",
    color: "#FFFFFF",
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
  },
  locationInfo: {
    maxWidth: "750px",
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  goldBadge: {
    fontSize: "12px",
    fontWeight: "800",
    color: "#D4AF37",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  locationTitle: {
    fontSize: "36px",
    fontWeight: "800",
    margin: 0,
  },
  locationSub: {
    color: "#A8A29E",
    fontSize: "16px",
    margin: 0,
  },
  contactDetailsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    width: "100%",
    marginTop: "20px",
    textAlign: "left",
  },
  contactItem: {
    display: "flex",
    gap: "14px",
    background: "rgba(255,255,255,0.05)",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  contactIcon: {
    fontSize: "24px",
  },
  locationButtons: {
    marginTop: "24px",
  },
  footer: {
    background: "#09090D",
    color: "#FFFFFF",
    padding: "60px 40px 30px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
  footerContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
  },
  footerBrandCol: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  footerLogo: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#D4AF37",
    margin: 0,
  },
  footerTagline: {
    fontSize: "14px",
    color: "#94A3B8",
    lineHeight: "1.6",
    margin: 0,
  },
  copyright: {
    fontSize: "12px",
    color: "#64748B",
    marginTop: "auto",
  },
  footerCol: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  footerHeader: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#FFFFFF",
    margin: "0 0 8px",
  },
  footerLink: {
    color: "#94A3B8",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.2s ease",
  },
  footerText: {
    color: "#94A3B8",
    fontSize: "14px",
    margin: 0,
  },
};