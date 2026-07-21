import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: "💇",
    service: "Hair Styling",
    category: "Basic Hair Cut",
    price: "Rs. 2,000",
    duration: "30 minutes",
    description: "Simple haircut and finishing for daily styling.",
    page: "/hair-styling",
  },
  {
    id: 2,
    icon: "💇",
    service: "Hair Styling",
    category: "Layer Cut",
    price: "Rs. 3,500",
    duration: "45 minutes",
    description: "Modern layered haircut with professional finishing.",
    page: "/hair-styling",
  },
  {
    id: 3,
    icon: "💇",
    service: "Hair Styling",
    category: "Blow Dry",
    price: "Rs. 2,500",
    duration: "30 minutes",
    description: "Smooth blow dry styling for a clean salon finish.",
    page: "/hair-styling",
  },
  {
    id: 4,
    icon: "💇",
    service: "Hair Styling",
    category: "Party Hair Style",
    price: "Rs. 6,000",
    duration: "1 hour",
    description: "Special hairstyle for parties, functions and events.",
    page: "/hair-styling",
  },
  {
    id: 5,
    icon: "🎨",
    service: "Hair Coloring",
    category: "Root Touch-up",
    price: "Rs. 4,500",
    duration: "1 hour",
    description: "Color touch-up service for hair roots.",
    page: "/hair-coloring",
  },
  {
    id: 6,
    icon: "🎨",
    service: "Hair Coloring",
    category: "Full Hair Color",
    price: "Rs. 8,500",
    duration: "2 hours",
    description: "Complete hair coloring service with professional products.",
    page: "/hair-coloring",
  },
  {
    id: 7,
    icon: "🎨",
    service: "Hair Coloring",
    category: "Hair Highlights",
    price: "Rs. 10,000",
    duration: "2.5 hours",
    description: "Stylish highlights to improve hair appearance.",
    page: "/hair-coloring",
  },
  {
    id: 8,
    icon: "🎨",
    service: "Hair Coloring",
    category: "Balayage Color",
    price: "Rs. 18,000",
    duration: "3 hours",
    description: "Premium balayage color service for a modern look.",
    page: "/hair-coloring",
  },
  {
    id: 9,
    icon: "🧴",
    service: "Hair Treatment",
    category: "Hair Spa Treatment",
    price: "Rs. 8,500",
    duration: "1.5 hours",
    description: "Relaxing hair spa treatment for smooth and healthy hair.",
    page: "/hair-treatment",
  },
  {
    id: 10,
    icon: "🧴",
    service: "Hair Treatment",
    category: "Keratin Treatment",
    price: "Rs. 18,000",
    duration: "3 hours",
    description: "Keratin treatment for smooth and frizz-free hair.",
    page: "/hair-treatment",
  },
  {
    id: 11,
    icon: "🧴",
    service: "Hair Treatment",
    category: "Protein Treatment",
    price: "Rs. 12,000",
    duration: "2 hours",
    description: "Hair strengthening treatment for damaged hair.",
    page: "/hair-treatment",
  },
  {
    id: 12,
    icon: "🧴",
    service: "Hair Treatment",
    category: "Scalp Treatment",
    price: "Rs. 7,500",
    duration: "1 hour",
    description: "Treatment for scalp care and healthy hair growth.",
    page: "/hair-treatment",
  },
  {
    id: 13,
    icon: "👰",
    service: "Bridal Makeup",
    category: "Simple Bridal Makeup",
    price: "Rs. 18,000",
    duration: "2 hours",
    description: "Simple bridal makeup with basic hair setting.",
    page: "/bridal-makeup",
  },
  {
    id: 14,
    icon: "👰",
    service: "Bridal Makeup",
    category: "Traditional Bridal Makeup",
    price: "Rs. 25,000",
    duration: "3 hours",
    description: "Traditional bridal makeup with hair styling.",
    page: "/bridal-makeup",
  },
  {
    id: 15,
    icon: "👰",
    service: "Bridal Makeup",
    category: "Kandyan Bridal Makeup",
    price: "Rs. 35,000",
    duration: "4 hours",
    description: "Kandyan bridal dressing, makeup and hair arrangement.",
    page: "/bridal-makeup",
  },
  {
    id: 16,
    icon: "👰",
    service: "Bridal Makeup",
    category: "Full Bridal Package",
    price: "Rs. 55,000",
    duration: "5 hours",
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
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1>Search Salon Services</h1>
        <p>
          Search salon services by name, category, price or description and book
          your appointment easily.
        </p>
      </section>

      <section style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search for haircut, coloring, keratin, bridal..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          style={styles.searchInput}
        />

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
        <h2>Search Results</h2>
        <p>{filteredServices.length} service found</p>
      </section>

      <section style={styles.grid}>
        {filteredServices.map((item) => (
          <div style={styles.card} key={item.id}>
            <div style={styles.icon}>{item.icon}</div>

            <h3>{item.category}</h3>

            <p style={styles.serviceName}>{item.service}</p>

            <p style={styles.description}>{item.description}</p>

            <div style={styles.detailsBox}>
              <p>
                <strong>Price:</strong> {item.price}
              </p>

              <p>
                <strong>Duration:</strong> {item.duration}
              </p>
            </div>

            <div style={styles.buttonGroup}>
              <Link to={item.page} style={styles.viewBtn}>
                View Service
              </Link>

              <Link to={bookingLink(item)} style={styles.bookBtn}>
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </section>

      {filteredServices.length === 0 && (
        <div style={styles.noResult}>
          <h2>No Services Found</h2>
          <p>Try searching with another keyword.</p>
        </div>
      )}
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
    padding: "35px",
    background: "#f8f4f0",
    borderRadius: "16px",
    border: "1px solid #ddd",
  },

  searchBox: {
    maxWidth: "900px",
    margin: "35px auto",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },

  searchInput: {
    width: "100%",
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  filterButtons: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px",
  },

  filterButton: {
    padding: "10px 16px",
    background: "white",
    color: "#111",
    border: "1px solid #ccc",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  activeFilterButton: {
    padding: "10px 16px",
    background: "#111",
    color: "white",
    border: "1px solid #111",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  resultInfo: {
    marginTop: "30px",
  },

  grid: {
    maxWidth: "1200px",
    margin: "30px auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
  },

  card: {
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "16px",
    background: "white",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  icon: {
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

  serviceName: {
    color: "#8b5a2b",
    fontWeight: "bold",
  },

  description: {
    minHeight: "50px",
    color: "#555",
  },

  detailsBox: {
    marginTop: "15px",
    padding: "12px",
    background: "#f8f4f0",
    borderRadius: "10px",
    textAlign: "left",
  },

  buttonGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "18px",
  },

  viewBtn: {
    padding: "10px 14px",
    background: "#111",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  bookBtn: {
    padding: "10px 14px",
    background: "#c59d5f",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  noResult: {
    maxWidth: "650px",
    margin: "40px auto",
    padding: "30px",
    background: "#f8f4f0",
    borderRadius: "14px",
    border: "1px solid #ddd",
  },
};