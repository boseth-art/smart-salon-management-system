import { Link } from "react-router-dom";

const bridalServices = [
  {
    icon: "👰",
    name: "Simple Bridal Makeup",
    price: "Rs. 18,000",
    duration: "2 hours",
    features: ["Natural makeup", "Basic hair setting", "Simple dressing"],
  },
  {
    icon: "💄",
    name: "Traditional Bridal Makeup",
    price: "Rs. 25,000",
    duration: "3 hours",
    features: ["Traditional makeup", "Hair styling", "Jewellery setting"],
  },
  {
    icon: "🌸",
    name: "Kandyan Bridal Makeup",
    price: "Rs. 35,000",
    duration: "4 hours",
    features: ["Kandyan dressing", "Full bridal makeup", "Hair arrangement"],
  },
  {
    icon: "✨",
    name: "Western Bridal Makeup",
    price: "Rs. 30,000",
    duration: "3 hours",
    features: ["Western makeup look", "Soft glam finish", "Hair styling"],
  },
  {
    icon: "💍",
    name: "Engagement Makeup",
    price: "Rs. 20,000",
    duration: "2.5 hours",
    features: ["Engagement makeup", "Hair styling", "Dress support"],
  },
  {
    icon: "🌙",
    name: "Reception Makeup",
    price: "Rs. 22,000",
    duration: "2.5 hours",
    features: ["Reception look", "Evening makeup", "Hair touch-up"],
  },
  {
    icon: "💇",
    name: "Bridal Hair Styling",
    price: "Rs. 12,000",
    duration: "1.5 hours",
    features: ["Bridal bun", "Curl styling", "Hair accessories support"],
  },
  {
    icon: "🥻",
    name: "Bridal Dressing",
    price: "Rs. 15,000",
    duration: "2 hours",
    features: ["Dress arrangement", "Saree support", "Final finishing"],
  },
  {
    icon: "👗",
    name: "Bridal Saree Draping",
    price: "Rs. 8,000",
    duration: "1 hour",
    features: ["Saree draping", "Pleating", "Pinning and finishing"],
  },
  {
    icon: "💎",
    name: "Full Bridal Package",
    price: "Rs. 55,000",
    duration: "5 hours",
    features: ["Makeup", "Hair styling", "Dressing", "Final touch-up"],
  },
  {
    icon: "👑",
    name: "Premium Bridal Package",
    price: "Rs. 75,000",
    duration: "6 hours",
    features: ["Premium makeup", "Premium hair styling", "Full dressing"],
  },
  {
    icon: "🚗",
    name: "Home Visit Bridal Service",
    price: "Rs. 90,000",
    duration: "Flexible",
    features: ["Home visit", "Full bridal service", "Travel included"],
  },
];

function bookingLink(category, price) {
  return `/booking?service=${encodeURIComponent(
    "Bridal Makeup"
  )}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(
    price
  )}`;
}

export default function BridalMakeup() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1>Bridal Makeup Services</h1>
        <p>
          Professional bridal makeup, dressing, hair styling and complete bridal
          packages for your special day.
        </p>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <h2>12+</h2>
          <p>Bridal Packages</p>
        </div>

        <div style={styles.statCard}>
          <h2>Premium</h2>
          <p>Makeup Quality</p>
        </div>

        <div style={styles.statCard}>
          <h2>Home Visit</h2>
          <p>Available</p>
        </div>
      </section>

      <section style={styles.serviceSection}>
        <h2>Choose Your Bridal Package</h2>

        <div style={styles.itemGrid}>
          {bridalServices.map((item) => (
            <div style={styles.itemCard} key={item.name}>
              <div style={styles.iconBox}>{item.icon}</div>

              <h3>{item.name}</h3>

              <p style={styles.price}>{item.price}</p>
              <p style={styles.duration}>Duration: {item.duration}</p>

              <ul style={styles.featureList}>
                {item.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <Link
                to={bookingLink(item.name, item.price)}
                style={styles.bookBtn}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.noteBox}>
        <h2>Why Choose Orchid Salon?</h2>
        <p>
          Orchid Salon provides organized bridal services with appointment
          booking, service category selection, price display and staff scheduling
          support through the Smart Salon Management System.
        </p>
      </section>

      <Link to="/" style={styles.backBtn}>
        Back to Home
      </Link>
    </div>
  );
}

const styles = {
  page: {
    padding: "50px",
    background: "white",
    minHeight: "80vh",
    textAlign: "center",
  },

  hero: {
    maxWidth: "850px",
    margin: "0 auto",
    padding: "40px",
    background: "#f8f4f0",
    borderRadius: "18px",
    border: "1px solid #ddd",
  },

  statsSection: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "35px",
  },

  statCard: {
    width: "220px",
    padding: "20px",
    borderRadius: "14px",
    background: "#111",
    color: "white",
  },

  serviceSection: {
    marginTop: "55px",
  },

  itemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "30px auto 0",
  },

  itemCard: {
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "16px",
    background: "white",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },

  iconBox: {
    width: "70px",
    height: "70px",
    margin: "0 auto 15px",
    borderRadius: "50%",
    background: "#f8f4f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
  },

  price: {
    color: "#8b5a2b",
    fontWeight: "bold",
    fontSize: "20px",
  },

  duration: {
    color: "#555",
    fontWeight: "bold",
  },

  featureList: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0",
    textAlign: "left",
    lineHeight: "1.8",
  },

  bookBtn: {
    display: "inline-block",
    marginTop: "10px",
    padding: "11px 20px",
    background: "#c59d5f",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  noteBox: {
    maxWidth: "850px",
    margin: "55px auto 0",
    padding: "30px",
    background: "#f8f4f0",
    borderRadius: "16px",
    border: "1px solid #ddd",
  },

  backBtn: {
    display: "inline-block",
    marginTop: "40px",
    color: "#111",
    textDecoration: "none",
    fontWeight: "bold",
  },
};