import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80";

const coloringServices = [
  { name: "Full Hair Color", price: "Rs. 8,500", duration: "2 hrs", image: "/hair/Full-Hair-Color.jfif" },
  { name: "Root Touch-up", price: "Rs. 4,500", duration: "1 hr", image: "/hair/Root-Touch-up.jfif" },
  { name: "Hair Highlights", price: "Rs. 10,000", duration: "2.5 hrs", image: "/hair/Hair-Highlights.jfif" },
  { name: "Balayage Color", price: "Rs. 18,000", duration: "3 hrs", image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80" },
  { name: "Ombre Color", price: "Rs. 16,000", duration: "3 hrs", image: "/hair/Ombre-Color.jfif" },
  { name: "Global Hair Color", price: "Rs. 12,000", duration: "2 hrs", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
  { name: "Fashion Color", price: "Rs. 15,000", duration: "3 hrs", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
  { name: "Grey Coverage", price: "Rs. 6,500", duration: "1.5 hrs", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
  { name: "Toner / Gloss Color", price: "Rs. 5,500", duration: "1 hr", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" },
  { name: "Color Correction", price: "Rs. 20,000", duration: "4+ hrs", image: "/hair/Color-Correction.jfif" },
];

function bookingLink(category, price) {
  return `/booking?service=${encodeURIComponent("Hair Coloring")}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}`;
}

export default function HairColoring() {
  return (
    <div className="page-container" style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <span className="badge">Hair Coloring</span>
        <h1 style={styles.heroTitle}>Hair Coloring Services</h1>
        <p style={styles.heroSubtext}>
          From subtle root touch-ups to bold fashion colors — our specialists deliver salon-quality results that last.
        </p>
        <div style={styles.heroStats}>
          <div style={styles.heroStat}><strong>10+</strong><span>Color Services</span></div>
          <div style={styles.heroStat}><strong>720+</strong><span>Happy Clients</span></div>
          <div style={styles.heroStat}><strong>Premium</strong><span>Products Used</span></div>
        </div>
      </section>

      {/* Tip Banner */}
      <div style={styles.tipBanner}>
        <span style={styles.tipIcon}>💡</span>
        <p style={styles.tipText}>
          <strong>Pro Tip:</strong> We recommend a consultation before your first color appointment. 
          Ask for Nethmi — our resident color specialist!
        </p>
      </div>

      {/* Service Grid */}
      <section>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>All Color Treatments</h2>
          <p style={styles.sectionDesc}>Choose from our full range of professional coloring services.</p>
        </div>

        <div style={styles.itemGrid}>
          {coloringServices.map((item) => (
            <div style={styles.itemCard} key={item.name} className="gallery-card">
              <img
                src={item.image}
                alt={item.name}
                style={styles.itemImg}
                onError={(e) => { e.currentTarget.src = fallbackImage; }}
              />
              <div style={styles.itemBody}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <div style={styles.itemMeta}>
                  <span style={styles.duration}>⏱ {item.duration}</span>
                </div>
                <div style={styles.itemFooter}>
                  <span style={styles.price}>{item.price}</span>
                  <Link
                    to={bookingLink(item.name, item.price)}
                    className="btn-primary"
                    style={styles.bookBtn}
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={styles.backWrapper}>
        <Link to="/service-menu" className="btn-outline">← Back to Service Menu</Link>
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "80vh" },
  hero: {
    textAlign: "center",
    padding: "60px 20px 50px",
    background: "linear-gradient(135deg, #FDFBF7 0%, #FFF9EE 100%)",
    borderRadius: "var(--radius-lg)",
    marginBottom: "40px",
    border: "1px solid var(--color-border)",
  },
  heroTitle: { fontSize: "40px", fontWeight: "800", margin: "0 0 16px", letterSpacing: "-0.5px" },
  heroSubtext: { color: "var(--color-text-muted)", fontSize: "16px", maxWidth: "560px", margin: "0 auto 30px" },
  heroStats: { display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" },
  heroStat: { display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" },
  tipBanner: {
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    padding: "20px 24px",
    background: "rgba(212, 175, 55, 0.08)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "var(--radius-md)",
    marginBottom: "50px",
  },
  tipIcon: { fontSize: "22px", flexShrink: 0 },
  tipText: { margin: 0, fontSize: "14px", color: "var(--color-text)", lineHeight: "1.6" },
  sectionHeader: { textAlign: "center", marginBottom: "36px" },
  sectionTitle: { fontSize: "28px", fontWeight: "800", margin: "0 0 8px" },
  sectionDesc: { color: "var(--color-text-muted)", margin: 0 },
  itemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "24px",
  },
  itemCard: { borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--color-border)", background: "#FFF" },
  itemImg: { width: "100%", height: "200px", objectFit: "cover", display: "block" },
  itemBody: { padding: "18px" },
  itemName: { margin: "0 0 8px", fontSize: "16px", fontWeight: "700" },
  itemMeta: { marginBottom: "12px" },
  duration: { fontSize: "12px", color: "var(--color-text-muted)", fontWeight: "600" },
  itemFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: "15px", fontWeight: "800", color: "var(--color-primary-dark)" },
  bookBtn: { padding: "8px 16px", fontSize: "13px", boxShadow: "none" },
  backWrapper: { textAlign: "center", marginTop: "60px" },
};