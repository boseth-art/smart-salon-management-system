import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80";

const hairServices = [
  {
    title: "Hair Cuts",
    icon: "✂️",
    description: "Modern and classic hair cuts for every style and personality.",
    items: [
      { name: "Basic Hair Cut", price: "Rs. 2,500", image: "/hair/Basic-Hair-Cut.jfif" },
      { name: "Layer Cut", price: "Rs. 3,500", image: "/hair/Layer-Cut.jfif" },
      { name: "Feather Cut", price: "Rs. 4,000", image: "/hair/Feather-Cut.jfif" },
      { name: "Step Cut", price: "Rs. 4,500", image: "/hair/Step-Cut.jfif" },
      { name: "U Cut", price: "Rs. 3,000", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" },
      { name: "V Cut", price: "Rs. 3,200", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
      { name: "Bob Cut", price: "Rs. 5,000", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" },
      { name: "Pixie Cut", price: "Rs. 5,500", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80" },
      { name: "Wolf Cut", price: "Rs. 6,000", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" },
      { name: "Butterfly Cut", price: "Rs. 6,500", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" },
      { name: "Curtain Bangs", price: "Rs. 3,800", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
      { name: "Fringe Cut", price: "Rs. 2,500", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
      { name: "Kids Hair Cut", price: "Rs. 1,800", image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80" },
      { name: "Premium Restyle", price: "Rs. 8,500", image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    title: "Blow Dry",
    icon: "💨",
    description: "Smooth and professional blow dry services for every hair length.",
    items: [
      { name: "Short Hair Blow Dry", price: "Rs. 1,500", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80" },
      { name: "Medium Hair Blow Dry", price: "Rs. 2,500", image: "https://images.unsplash.com/photo-1522336284037-91f7da073525?auto=format&fit=crop&w=800&q=80" },
      { name: "Long Hair Blow Dry", price: "Rs. 3,500", image: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=800&q=80" },
      { name: "Volume Blow Dry", price: "Rs. 4,000", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
      { name: "Premium Blow Dry", price: "Rs. 5,000", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    title: "Styling",
    icon: "✨",
    description: "Salon styling for casual, party and event occasions.",
    items: [
      { name: "Casual Styling", price: "Rs. 3,000", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" },
      { name: "Party Styling", price: "Rs. 5,500", image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80" },
      { name: "Curl Styling", price: "Rs. 4,500", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
      { name: "Straight Styling", price: "Rs. 4,000", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80" },
      { name: "Bridal Hair Styling", price: "Rs. 12,000", image: "https://images.unsplash.com/photo-1523438097201-512ae7d59c97?auto=format&fit=crop&w=800&q=80" },
      { name: "Premium Event Styling", price: "Rs. 15,000", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    title: "Finishing",
    icon: "💎",
    description: "Final touch-ups and long-lasting salon finish.",
    items: [
      { name: "Hair Setting", price: "Rs. 1,500", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80" },
      { name: "Shine Finish", price: "Rs. 1,200", image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=800&q=80" },
      { name: "Final Touch-up", price: "Rs. 1,000", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80" },
      { name: "Long-lasting Spray", price: "Rs. 1,800", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
      { name: "Premium Gloss Finish", price: "Rs. 3,000", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
    ],
  },
];

function bookingLink(service, category, price) {
  return `/booking?service=${encodeURIComponent(service)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}`;
}

export default function HairStyling() {
  return (
    <div className="page-container" style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <span className="badge">Hair Styling</span>
        <h1 style={styles.heroTitle}>Hair Styling Services</h1>
        <p style={styles.heroSubtext}>
          Precision cuts, silky blow-drys, party styles & finishing touches — crafted by our master stylists.
        </p>
        <div style={styles.heroStats}>
          <div style={styles.heroStat}><strong>14+</strong><span>Cuts Available</span></div>
          <div style={styles.heroStat}><strong>5★</strong><span>Rated Service</span></div>
          <div style={styles.heroStat}><strong>850+</strong><span>Happy Clients</span></div>
        </div>
      </section>

      {/* Service Sections */}
      {hairServices.map((service) => (
        <section style={styles.serviceSection} key={service.title}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleGroup}>
              <span style={styles.sectionIcon}>{service.icon}</span>
              <div>
                <h2 style={styles.sectionTitle}>{service.title}</h2>
                <p style={styles.sectionDesc}>{service.description}</p>
              </div>
            </div>
          </div>

          <div style={styles.itemGrid}>
            {service.items.map((item) => (
              <div style={styles.itemCard} key={item.name} className="gallery-card">
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.itemImg}
                  onError={(e) => { e.currentTarget.src = fallbackImage; }}
                />
                <div style={styles.itemBody}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <div style={styles.itemFooter}>
                    <span style={styles.price}>{item.price}</span>
                    <Link
                      to={bookingLink(service.title, item.name, item.price)}
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
      ))}

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
    marginBottom: "60px",
    border: "1px solid var(--color-border)",
  },
  heroTitle: { fontSize: "40px", fontWeight: "800", margin: "0 0 16px", letterSpacing: "-0.5px" },
  heroSubtext: { color: "var(--color-text-muted)", fontSize: "16px", maxWidth: "550px", margin: "0 auto 30px" },
  heroStats: { display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" },
  heroStat: { display: "flex", flexDirection: "column", gap: "4px", alignItems: "center", "& strong": { fontSize: "24px", fontWeight: "800", color: "var(--color-primary-dark)" }, "& span": { fontSize: "13px", color: "var(--color-text-muted)", fontWeight: "600" } },
  serviceSection: { marginBottom: "60px" },
  sectionHeader: { borderBottom: "2px solid var(--color-border)", paddingBottom: "16px", marginBottom: "30px" },
  sectionTitleGroup: { display: "flex", alignItems: "center", gap: "16px" },
  sectionIcon: { fontSize: "32px", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "12px", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" },
  sectionTitle: { margin: "0 0 4px", fontSize: "26px", fontWeight: "800" },
  sectionDesc: { margin: 0, color: "var(--color-text-muted)", fontSize: "14px" },
  itemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "24px",
  },
  itemCard: { borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--color-border)", background: "#FFF" },
  itemImg: { width: "100%", height: "200px", objectFit: "cover", display: "block" },
  itemBody: { padding: "18px" },
  itemName: { margin: "0 0 12px", fontSize: "16px", fontWeight: "700" },
  itemFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  price: { fontSize: "15px", fontWeight: "800", color: "var(--color-primary-dark)" },
  bookBtn: { padding: "8px 16px", fontSize: "13px", boxShadow: "none" },
  backWrapper: { textAlign: "center", marginTop: "40px" },
};