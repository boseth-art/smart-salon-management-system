import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: "💇",
    service: "Hair Styling",
    category: "Basic Hair Cut",
    price: "Rs. 2,000",
    duration: "30 mins",
    description: "Simple haircut and finishing for daily styling.",
    page: "/hair-styling",
  },
  {
    id: 2,
    icon: "💇",
    service: "Hair Styling",
    category: "Layer Cut",
    price: "Rs. 3,500",
    duration: "45 mins",
    description: "Modern layered haircut with professional finishing.",
    page: "/hair-styling",
  },
  {
    id: 3,
    icon: "💇",
    service: "Hair Styling",
    category: "Blow Dry",
    price: "Rs. 2,500",
    duration: "30 mins",
    description: "Smooth blow dry styling for a clean salon finish.",
    page: "/hair-styling",
  },
  {
    id: 4,
    icon: "💇",
    service: "Hair Styling",
    category: "Party Hair Style",
    price: "Rs. 6,000",
    duration: "1 hr",
    description: "Special hairstyle for parties, functions and events.",
    page: "/hair-styling",
  },
  {
    id: 5,
    icon: "🎨",
    service: "Hair Coloring",
    category: "Root Touch-up",
    price: "Rs. 4,500",
    duration: "1 hr",
    description: "Color touch-up service for hair roots.",
    page: "/hair-coloring",
  },
  {
    id: 6,
    icon: "🎨",
    service: "Hair Coloring",
    category: "Full Hair Color",
    price: "Rs. 8,500",
    duration: "2 hrs",
    description: "Complete hair coloring service with professional products.",
    page: "/hair-coloring",
  },
  {
    id: 7,
    icon: "🎨",
    service: "Hair Coloring",
    category: "Hair Highlights",
    price: "Rs. 10,000",
    duration: "2.5 hrs",
    description: "Stylish highlights to improve hair appearance.",
    page: "/hair-coloring",
  },
  {
    id: 8,
    icon: "🎨",
    service: "Hair Coloring",
    category: "Balayage Color",
    price: "Rs. 18,000",
    duration: "3 hrs",
    description: "Premium balayage color service for a modern look.",
    page: "/hair-coloring",
  },
  {
    id: 9,
    icon: "🧴",
    service: "Hair Treatment",
    category: "Hair Spa Treatment",
    price: "Rs. 8,500",
    duration: "1.5 hrs",
    description: "Relaxing hair spa treatment for smooth and healthy hair.",
    page: "/hair-treatment",
  },
  {
    id: 10,
    icon: "🧴",
    service: "Hair Treatment",
    category: "Keratin Treatment",
    price: "Rs. 18,000",
    duration: "3 hrs",
    description: "Keratin treatment for smooth and frizz-free hair.",
    page: "/hair-treatment",
  },
  {
    id: 11,
    icon: "🧴",
    service: "Hair Treatment",
    category: "Protein Treatment",
    price: "Rs. 12,000",
    duration: "2 hrs",
    description: "Hair strengthening treatment for damaged hair.",
    page: "/hair-treatment",
  },
  {
    id: 12,
    icon: "🧴",
    service: "Hair Treatment",
    category: "Scalp Treatment",
    price: "Rs. 7,500",
    duration: "1 hr",
    description: "Treatment for scalp care and healthy hair growth.",
    page: "/hair-treatment",
  },
  {
    id: 13,
    icon: "👰",
    service: "Bridal Makeup",
    category: "Simple Bridal Makeup",
    price: "Rs. 18,000",
    duration: "2 hrs",
    description: "Simple bridal makeup with basic hair setting.",
    page: "/bridal-makeup",
  },
  {
    id: 14,
    icon: "👰",
    service: "Bridal Makeup",
    category: "Traditional Bridal Makeup",
    price: "Rs. 25,000",
    duration: "3 hrs",
    description: "Traditional bridal makeup with hair styling.",
    page: "/bridal-makeup",
  },
  {
    id: 15,
    icon: "👰",
    service: "Bridal Makeup",
    category: "Kandyan Bridal Makeup",
    price: "Rs. 35,000",
    duration: "4 hrs",
    description: "Kandyan bridal dressing, makeup and hair arrangement.",
    page: "/bridal-makeup",
  },
  {
    id: 16,
    icon: "👰",
    service: "Bridal Makeup",
    category: "Full Bridal Package",
    price: "Rs. 55,000",
    duration: "5 hrs",
    description: "Complete bridal package with makeup, hair and dressing.",
    page: "/bridal-makeup",
  },
];

function bookingLink(item) {
  return `/booking?service=${encodeURIComponent(
    item.service
  )}&category=${encodeURIComponent(item.category)}&price=${encodeURIComponent(
    item.price
  )}`;
}

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [selectedService, setSelectedService] = useState("All");

  const serviceTypes = [
    "All",
    "Hair Styling",
    "Hair Coloring",
    "Hair Treatment",
    "Bridal Makeup",
  ];

  const filteredServices = services.filter((item) => {
    const search = searchText.toLowerCase();

    const matchesSearch =
      item.service.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.price.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search);

    const matchesService =
      selectedService === "All" || item.service === selectedService;

    return matchesSearch && matchesService;
  });

  return (
    <div className="page-container" style={styles.page}>
      <section style={styles.hero}>
        <span className="badge">Explore</span>
        <h1 style={styles.heroTitle}>Search Services</h1>
        <p style={styles.heroSubtext}>
          Quickly find and book exactly what you are looking for by treatment name, keyword, or category.
        </p>
      </section>

      <section style={styles.searchSection}>
        <div style={styles.searchContainer}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search for haircut, coloring, keratin, bridal..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.filterButtons}>
          {serviceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedService(type)}
              style={
                selectedService === type
                  ? styles.activeFilterButton
                  : styles.filterButton
              }
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <section style={styles.resultInfo}>
        <h2 style={styles.resultTitle}>Search Results</h2>
        <p style={styles.resultCount}>{filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} found</p>
      </section>

      <section style={styles.grid}>
        {filteredServices.map((item) => (
          <div style={styles.card} key={item.id}>
            <div style={styles.cardTop}>
              <div style={styles.icon}>{item.icon}</div>
              <p style={styles.serviceCategory}>{item.service}</p>
            </div>

            <h3 style={styles.serviceTitle}>{item.category}</h3>
            <p style={styles.description}>{item.description}</p>

            <div style={styles.detailsBox}>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Price</span>
                <span style={styles.detailValueGold}>{item.price}</span>
              </div>
              <div style={styles.detailItem}>
                <span style={styles.detailLabel}>Duration</span>
                <span style={styles.detailValue}>{item.duration}</span>
              </div>
            </div>

            <div style={styles.buttonGroup}>
              <Link to={item.page} className="btn-outline" style={styles.viewBtn}>
                Details
              </Link>
              <Link to={bookingLink(item)} className="btn-primary" style={styles.bookBtn}>
                Book
              </Link>
            </div>
          </div>
        ))}
      </section>

      {filteredServices.length === 0 && (
        <section style={styles.noResult}>
          <h2 style={styles.noResultTitle}>No Services Found</h2>
          <p style={styles.noResultText}>We couldn't find anything matching "{searchText}". Try another keyword.</p>
        </section>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "80vh",
  },
  hero: {
    textAlign: "center",
    padding: "60px 20px 40px",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: "800",
    color: "var(--color-text)",
    margin: "0 0 16px",
    letterSpacing: "-0.5px",
  },
  heroSubtext: {
    fontSize: "16px",
    color: "var(--color-text-muted)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  searchSection: {
    maxWidth: "800px",
    margin: "0 auto 40px",
  },
  searchContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    boxShadow: "var(--shadow-sm)",
    borderRadius: "var(--radius-pill)",
    background: "#FFF",
    border: "1px solid var(--color-border)",
  },
  searchIcon: {
    position: "absolute",
    left: "20px",
    fontSize: "18px",
    color: "#A8A29E",
  },
  searchInput: {
    width: "100%",
    padding: "16px 20px 16px 50px",
    border: "none",
    borderRadius: "var(--radius-pill)",
    fontSize: "16px",
    fontFamily: "var(--font-sans)",
    outline: "none",
    background: "transparent",
  },
  filterButtons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  filterButton: {
    padding: "8px 20px",
    background: "white",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-pill)",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },
  activeFilterButton: {
    padding: "8px 20px",
    background: "var(--color-text)",
    color: "white",
    border: "1px solid var(--color-text)",
    borderRadius: "var(--radius-pill)",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },
  resultInfo: {
    maxWidth: "1200px",
    margin: "0 auto 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottom: "1px solid var(--color-border)",
    paddingBottom: "16px",
  },
  resultTitle: {
    margin: 0,
    fontSize: "24px",
  },
  resultCount: {
    margin: 0,
    color: "var(--color-text-muted)",
    fontWeight: "600",
  },
  grid: {
    maxWidth: "1200px",
    margin: "0 auto 50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    padding: "24px",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    background: "#FFFFFF",
    boxShadow: "var(--shadow-sm)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  cardTop: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  icon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
  },
  serviceCategory: {
    margin: 0,
    fontSize: "13px",
    color: "var(--color-text-muted)",
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },
  serviceTitle: {
    margin: "0 0 8px",
    fontSize: "20px",
  },
  description: {
    color: "var(--color-text-muted)",
    fontSize: "14px",
    flexGrow: 1,
    margin: "0 0 20px",
  },
  detailsBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    background: "var(--color-bg)",
    borderRadius: "12px",
    border: "1px solid var(--color-border)",
    marginBottom: "20px",
  },
  detailItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  detailLabel: {
    fontSize: "12px",
    color: "var(--color-text-muted)",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  detailValue: {
    fontSize: "14px",
    fontWeight: "600",
    color: "var(--color-text)",
  },
  detailValueGold: {
    fontSize: "14px",
    fontWeight: "800",
    color: "var(--color-primary-dark)",
  },
  buttonGroup: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  viewBtn: {
    padding: "10px",
    fontSize: "13px",
  },
  bookBtn: {
    padding: "10px",
    fontSize: "13px",
    boxShadow: "none",
  },
  noResult: {
    textAlign: "center",
    padding: "60px 20px",
    background: "#FFFFFF",
    borderRadius: "var(--radius-lg)",
    border: "1px dashed var(--color-border)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  noResultTitle: {
    fontSize: "22px",
    margin: "0 0 10px",
  },
  noResultText: {
    color: "var(--color-text-muted)",
    margin: 0,
  }
};