import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const promotions = [
  {
    icon: "✨",
    title: "20% Off Hair Coloring",
    text: "Get 20% discount on selected hair coloring services this week.",
  },
  {
    icon: "👰",
    title: "Free Bridal Consultation",
    text: "Book a premium bridal package and receive a free consultation.",
  },
  {
    icon: "🧴",
    title: "Hair Spa Combo Offer",
    text: "Enjoy hair spa treatment with deep conditioning at a special price.",
  },
  {
    icon: "💇",
    title: "Weekday Styling Offer",
    text: "Special weekday discount for blow-dry and party hair styling.",
  },
];

export default function Home() {
  const [currentPromotion, setCurrentPromotion] = useState(0);

  useEffect(() => {
    const promotionTimer = setInterval(() => {
      setCurrentPromotion((previousPromotion) =>
        previousPromotion === promotions.length - 1 ? 0 : previousPromotion + 1
      );
    }, 3000);

    return () => clearInterval(promotionTimer);
  }, []);

  return (
    <div>
      {/* ================= MAIN INTRODUCTION / HERO SECTION ================= */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>

        <div style={styles.heroContainer}>
          <div style={styles.heroText}>
            <span style={styles.brandBadge}>Welcome to Orchid Salon</span>

            <h1>Beauty, Style & Smart Salon Care</h1>

            <p>
              Experience professional salon services with easy appointment
              booking, quality beauty care, skilled stylists and a modern salon
              environment.
            </p>

            <div style={styles.promoBox}>
              <h3>Current Promotions</h3>

              <div style={styles.promotionSlide}>
                <div style={styles.promotionIcon}>
                  {promotions[currentPromotion].icon}
                </div>

                <div>
                  <h2 style={styles.promotionTitle}>
                    {promotions[currentPromotion].title}
                  </h2>

                  <p style={styles.promotionText}>
                    {promotions[currentPromotion].text}
                  </p>
                </div>
              </div>

              <div style={styles.dots}>
                {promotions.map((promotion, index) => (
                  <button
                    key={promotion.title}
                    onClick={() => setCurrentPromotion(index)}
                    style={
                      currentPromotion === index
                        ? styles.activeDot
                        : styles.dot
                    }
                  ></button>
                ))}
              </div>
            </div>

            <div style={styles.heroButtons}>
              <Link to="/booking" style={styles.bookNowBtn}>
                Book Now
              </Link>

              <Link to="/service-menu" style={styles.secondaryBtn}>
                View Services
              </Link>
            </div>
          </div>

          <div style={styles.heroImageCard}>
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
              alt="Orchid Salon interior"
              style={styles.heroImage}
            />

            <div style={styles.imageInfoBox}>
              <h3>Modern Salon Interior</h3>
              <p>
                Comfortable, clean and stylish salon space for beauty treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={styles.section}>
        <h2>Salon Services</h2>
        <p style={styles.sectionText}>
          Choose from our professional salon service categories.
        </p>

        <div style={styles.grid}>
          <Link to="/hair-styling" style={styles.cardLink}>
            <div style={styles.card}>
              <h3>💇 Hair Styling</h3>
              <p>Haircuts, blow-dry, styling and finishing.</p>
            </div>
          </Link>

          <Link to="/hair-coloring" style={styles.cardLink}>
            <div style={styles.card}>
              <h3>🎨 Hair Coloring</h3>
              <p>Coloring, highlights and root touch-ups.</p>
            </div>
          </Link>

          <Link to="/hair-treatment" style={styles.cardLink}>
            <div style={styles.card}>
              <h3>🧴 Hair Treatment</h3>
              <p>Hair spa, keratin treatment and scalp care.</p>
            </div>
          </Link>

          <Link to="/bridal-makeup" style={styles.cardLink}>
            <div style={styles.card}>
              <h3>👰 Bridal Makeup</h3>
              <p>Bridal dressing, makeup and special event styling.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= SYSTEM FEATURES ================= */}
      <section style={styles.managementSection}>
        <h2>System Features</h2>
        <p style={styles.sectionText}>
          Smart features used to manage salon operations efficiently.
        </p>

        <div style={styles.grid}>
          <Link to="/booking" style={styles.cardLink}>
            <div style={styles.featureCard}>
              <h3>📅 Appointment Booking</h3>
              <p>
                Customers can book salon services and staff can manage schedules.
              </p>
            </div>
          </Link>

          <Link to="/login" style={styles.cardLink}>
            <div style={styles.featureCard}>
              <h3>🖥️ Front Desk Check-In Kiosk</h3>
              <p>
                Staff-only module used at the salon front desk to check in
                arriving clients.
              </p>
            </div>
          </Link>

          <Link to="/login" style={styles.cardLink}>
            <div style={styles.featureCard}>
              <h3>👥 Customer Records</h3>
              <p>
                Staff-only page for managing customer details and service
                history.
              </p>
            </div>
          </Link>

          <Link to="/login" style={styles.cardLink}>
            <div style={styles.featureCard}>
              <h3>📦 Inventory Tracking</h3>
              <p>
                Staff-only page for monitoring salon products and stock levels.
              </p>
            </div>
          </Link>

          <Link to="/login" style={styles.cardLink}>
            <div style={styles.featureCard}>
              <h3>📊 Reports</h3>
              <p>
                Manager-only page for sales, bookings, staff and business
                reports.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ================= ABOUT SALON ================= */}
      <section style={styles.about}>
        <div style={styles.aboutBox}>
          <span style={styles.aboutBadge}>About Us</span>

          <h2>About Orchid Salon</h2>

          <p>
            Orchid Salon is a modern beauty salon offering professional hair
            styling, hair coloring, hair treatments and bridal makeup services.
            Our experienced team is dedicated to providing high-quality beauty
            care in a comfortable and friendly environment.
          </p>

          <p>
            We focus on making every client feel confident, beautiful and
            satisfied with a personalized salon experience.
          </p>

          <div style={styles.aboutHighlights}>
            <div style={styles.highlightCard}>
              <h3>💇 Professional Stylists</h3>
              <p>Experienced staff for hair, beauty and bridal services.</p>
            </div>

            <div style={styles.highlightCard}>
              <h3>✨ Quality Service</h3>
              <p>Personalized beauty care for every customer.</p>
            </div>

            <div style={styles.highlightCard}>
              <h3>🌸 Comfortable Salon</h3>
              <p>Relaxing and friendly environment for all clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section style={styles.location}>
        <h2>Our Location</h2>

        <div style={styles.locationBox}>
          <h3>Orchid Salon</h3>
          <p>📍 123 Beauty Street, Colombo, Sri Lanka</p>
          <p>📞 +94 77 123 4567</p>
          <p>📧 info@orchidsalon.com</p>
          <p>Opening Hours: 9.00 AM - 7.00 PM</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={styles.footer}>
        <div>
          <h3>💇 Orchid Salon</h3>
          <p>Professional beauty care and smart salon booking system</p>
        </div>

        <div>
          <h4>Customer Links</h4>

          <p>
            <Link to="/" style={styles.footerLink}>
              Home
            </Link>
          </p>

          <p>
            <Link to="/service-menu" style={styles.footerLink}>
              Service Menu
            </Link>
          </p>

          <p>
            <Link to="/team" style={styles.footerLink}>
              Team
            </Link>
          </p>

          <p>
            <Link to="/search" style={styles.footerLink}>
              Search
            </Link>
          </p>

          <p>
            <Link to="/gallery" style={styles.footerLink}>
              Gallery
            </Link>
          </p>

          <p>
            <Link to="/booking" style={styles.footerLink}>
              Booking
            </Link>
          </p>
        </div>

        <div>
          <h4>Staff Links</h4>

          <p>
            <Link to="/login" style={styles.footerLink}>
              Staff Login
            </Link>
          </p>

          <p>
            <Link to="/customers" style={styles.footerLink}>
              Customer Records
            </Link>
          </p>

          <p>
            <Link to="/check-in" style={styles.footerLink}>
              Front Desk Kiosk
            </Link>
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>📞 +94 77 123 4567</p>
          <p>📧 info@orchidsalon.com</p>
          <p>📍 Colombo, Sri Lanka</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  hero: {
    minHeight: "90vh",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "70px 50px",
    color: "white",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.78), rgba(0,0,0,0.45), rgba(0,0,0,0.2))",
  },

  heroContainer: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "45px",
    flexWrap: "wrap",
  },

  heroText: {
    flex: "1.2",
    minWidth: "320px",
  },

  brandBadge: {
    display: "inline-block",
    padding: "9px 16px",
    background: "#c59d5f",
    color: "white",
    borderRadius: "25px",
    fontWeight: "bold",
    marginBottom: "15px",
  },

  promoBox: {
    marginTop: "25px",
    padding: "22px",
    maxWidth: "560px",
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "14px",
    backdropFilter: "blur(4px)",
    minHeight: "190px",
  },

  promotionSlide: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
    marginTop: "15px",
  },

  promotionIcon: {
    width: "65px",
    height: "65px",
    borderRadius: "50%",
    background: "#c59d5f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    flexShrink: 0,
  },

  promotionTitle: {
    margin: "0 0 8px",
    fontSize: "24px",
  },

  promotionText: {
    margin: 0,
    lineHeight: "1.6",
  },

  dots: {
    display: "flex",
    gap: "8px",
    marginTop: "18px",
  },

  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "none",
    background: "rgba(255,255,255,0.45)",
    cursor: "pointer",
  },

  activeDot: {
    width: "28px",
    height: "10px",
    borderRadius: "20px",
    border: "none",
    background: "#c59d5f",
    cursor: "pointer",
  },

  heroButtons: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginTop: "25px",
  },

  bookNowBtn: {
    padding: "14px 28px",
    background: "#c59d5f",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  secondaryBtn: {
    padding: "14px 28px",
    background: "white",
    color: "#111",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  heroImageCard: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "430px",
    background: "white",
    color: "#111",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
  },

  heroImage: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
  },

  imageInfoBox: {
    padding: "20px",
    textAlign: "center",
  },

  section: {
    padding: "60px 50px",
    textAlign: "center",
  },

  sectionText: {
    color: "#555",
    marginBottom: "25px",
  },

  managementSection: {
    padding: "60px 50px",
    textAlign: "center",
    background: "#f8f4f0",
  },

  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
    flexWrap: "wrap",
  },

  cardLink: {
    textDecoration: "none",
    color: "black",
  },

  card: {
    padding: "20px",
    border: "1px solid #ddd",
    width: "230px",
    minHeight: "150px",
    borderRadius: "10px",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    cursor: "pointer",
  },

  featureCard: {
    padding: "20px",
    border: "1px solid #ddd",
    width: "250px",
    minHeight: "150px",
    borderRadius: "10px",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    cursor: "pointer",
  },

  about: {
    padding: "75px 50px",
    background: "#111",
    color: "white",
    textAlign: "center",
  },

  aboutBox: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  aboutBadge: {
    display: "inline-block",
    padding: "8px 16px",
    background: "#c59d5f",
    color: "white",
    borderRadius: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  },

  aboutHighlights: {
    marginTop: "35px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },

  highlightCard: {
    padding: "25px",
    background: "white",
    color: "#111",
    borderRadius: "16px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
  },

  location: {
    padding: "50px",
    textAlign: "center",
  },

  locationBox: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "30px",
    background: "#f8f4f0",
    borderRadius: "12px",
    border: "1px solid #ddd",
  },

  footer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    background: "#111",
    color: "white",
    marginTop: "30px",
    flexWrap: "wrap",
    gap: "30px",
  },

  footerLink: {
    color: "white",
    textDecoration: "none",
  },
};