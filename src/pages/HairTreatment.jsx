import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80";

const treatmentServices = [
  { name: "Keratin Treatment", price: "Rs. 18,000", duration: "3 hrs", tag: "Best Seller", image: "/hair/Keratin-Treatment.jfif" },
  { name: "Protein Treatment", price: "Rs. 12,000", duration: "2 hrs", tag: "", image: "/hair/Protein-Treatment.jfif" },
  { name: "Hair Spa Treatment", price: "Rs. 8,500", duration: "1.5 hrs", tag: "", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80" },
  { name: "Scalp Treatment", price: "Rs. 7,500", duration: "1 hr", tag: "", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
  { name: "Anti-Dandruff Treatment", price: "Rs. 6,500", duration: "1 hr", tag: "", image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=800&q=80" },
  { name: "Hair Fall Control", price: "Rs. 9,500", duration: "1.5 hrs", tag: "", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" },
  { name: "Deep Conditioning", price: "Rs. 5,500", duration: "1 hr", tag: "", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
  { name: "Smoothening Treatment", price: "Rs. 20,000", duration: "3.5 hrs", tag: "Popular", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
  { name: "Rebonding Treatment", price: "Rs. 22,000", duration: "4 hrs", tag: "", image: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=800&q=80" },
  { name: "Olaplex Repair", price: "Rs. 15,000", duration: "2 hrs", tag: "Premium", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" },
  { name: "Hot Oil Treatment", price: "Rs. 4,500", duration: "45 mins", tag: "", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
  { name: "Premium Repair Package", price: "Rs. 28,000", duration: "5 hrs", tag: "Luxury", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
];

function bookingLink(category, price) {
  return `/booking?service=${encodeURIComponent("Hair Treatment")}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}`;
}

export default function HairTreatment() {
  return (
    <div className="page-container" style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <span className="badge">Hair Treatment</span>
        <h1 style={styles.heroTitle}>Hair Treatment Services</h1>
        <p style={styles.heroSubtext}>
          Restore, repair, and transform your hair. Our expert therapists use only premium products for lasting results.
        </p>
        <div style={styles.heroStats}>
          <div style={styles.heroStat}><strong>12+</strong><span>Treatments</span></div>
          <div style={styles.heroStat}><strong>900+</strong><span>Sessions Done</span></div>
          <div style={styles.heroStat}><strong>Kavindi</strong><span>Lead Specialist</span></div>
        </div>
      </section>

      {/* Why Treatment Banner */}
      <div style={styles.benefitsRow}>
        {[
          { icon: "🌿", title: "Natural Products", desc: "We use only premium, gentle products on your hair." },
          { icon: "🔬", title: "Expert Analysis", desc: "Each treatment starts with a free hair health analysis." },
          { icon: "✅", title: "Long-lasting Results", desc: "Treatments are designed to last months, not days." },
        ].map((b) => (
          <div style={styles.benefitCard} key={b.title}>
            <span style={styles.benefitIcon}>{b.icon}</span>
            <div>
              <strong style={styles.benefitTitle}>{b.title}</strong>
              <p style={styles.benefitDesc}>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Service Grid */}
      <section>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>All Hair Treatments</h2>
          <p style={styles.sectionDesc}>From routine care to intensive repair — find your perfect treatment.</p>
        </div>

        <div style={styles.itemGrid}>
          {treatmentServices.map((item) => (
            <div style={styles.itemCard} key={item.name} className="gallery-card">
              <div style={styles.imgWrapper}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.itemImg}
                  onError={(e) => { e.currentTarget.src = fallbackImage; }}
                />
                {item.tag && <span style={styles.itemTag}>{item.tag}</span>}
              </div>
              <div style={styles.itemBody}>
                <h3 style={styles.itemName}>{item.name}</h3>
                <span style={styles.duration}>⏱ {item.duration}</span>
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
  benefitsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    marginBottom: "50px",
  },
  benefitCard: {
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
    padding: "20px 24px",
    background: "#FFF",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
  },
  benefitIcon: { fontSize: "28px", flexShrink: 0 },
  benefitTitle: { display: "block", fontSize: "15px", marginBottom: "4px" },
  benefitDesc: { margin: 0, fontSize: "13px", color: "var(--color-text-muted)" },
  sectionHeader: { textAlign: "center", marginBottom: "36px" },
  sectionTitle: { fontSize: "28px", fontWeight: "800", margin: "0 0 8px" },
  sectionDesc: { color: "var(--color-text-muted)", margin: 0 },
  itemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "24px",
  },
  itemCard: { borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--color-border)", background: "#FFF" },
  imgWrapper: { position: "relative" },
  itemImg: { width: "100%", height: "200px", objectFit: "cover", display: "block" },
  itemTag: {
    position: "absolute", top: "12px", left: "12px",
    background: "var(--color-primary)", color: "white",
    fontSize: "11px", fontWeight: "700", padding: "4px 10px",
    borderRadius: "var(--radius-pill)", textTransform: "uppercase", letterSpacing: "0.5px",
  },
  itemBody: { padding: "18px" },
  itemName: { margin: "0 0 8px", fontSize: "16px", fontWeight: "700" },
  duration: { display: "block", fontSize: "12px", color: "var(--color-text-muted)", fontWeight: "600", marginBottom: "12px" },
  itemFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: "15px", fontWeight: "800", color: "var(--color-primary-dark)" },
  bookBtn: { padding: "8px 16px", fontSize: "13px", boxShadow: "none" },
  backWrapper: { textAlign: "center", marginTop: "60px" },
};