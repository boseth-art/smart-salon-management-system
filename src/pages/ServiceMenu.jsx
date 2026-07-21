import { useState } from "react";
import { Link } from "react-router-dom";

const serviceMenu = [
  {
    id: 1,
    category: "Hair Styling",
    icon: "💇",
    page: "/hair-styling",
    services: [
      {
        name: "Basic Hair Cut",
        price: "Rs. 2,000",
        duration: "30 minutes",
        description: "Simple haircut and finishing for everyday style.",
      },
      {
        name: "Layer Cut",
        price: "Rs. 3,500",
        duration: "45 minutes",
        description: "Modern layered haircut with professional finishing.",
      },
      {
        name: "Blow Dry",
        price: "Rs. 2,500",
        duration: "30 minutes",
        description: "Smooth blow dry styling for a polished salon look.",
      },
      {
        name: "Party Hair Style",
        price: "Rs. 6,000",
        duration: "1 hour",
        description: "Special hairstyle for parties, functions and events.",
      },
    ],
  },
  {
    id: 2,
    category: "Hair Coloring",
    icon: "🎨",
    page: "/hair-coloring",
    services: [
      {
        name: "Root Touch-up",
        price: "Rs. 4,500",
        duration: "1 hour",
        description: "Color touch-up service for hair roots.",
      },
      {
        name: "Full Hair Color",
        price: "Rs. 8,500",
        duration: "2 hours",
        description: "Complete hair coloring service using quality products.",
      },
      {
        name: "Hair Highlights",
        price: "Rs. 10,000",
        duration: "2.5 hours",
        description: "Stylish highlights to enhance your hair appearance.",
      },
      {
        name: "Balayage Color",
        price: "Rs. 18,000",
        duration: "3 hours",
        description: "Premium balayage color service for a modern look.",
      },
    ],
  },
  {
    id: 3,
    category: "Hair Treatment",
    icon: "🧴",
    page: "/hair-treatment",
    services: [
      {
        name: "Hair Spa Treatment",
        price: "Rs. 8,500",
        duration: "1.5 hours",
        description: "Relaxing hair spa treatment for smooth and healthy hair.",
      },
      {
        name: "Keratin Treatment",
        price: "Rs. 18,000",
        duration: "3 hours",
        description: "Keratin treatment for smooth and frizz-free hair.",
      },
      {
        name: "Protein Treatment",
        price: "Rs. 12,000",
        duration: "2 hours",
        description: "Strengthening treatment for weak and damaged hair.",
      },
      {
        name: "Scalp Treatment",
        price: "Rs. 7,500",
        duration: "1 hour",
        description: "Treatment for scalp care and healthy hair growth.",
      },
    ],
  },
  {
    id: 4,
    category: "Bridal Makeup",
    icon: "👰",
    page: "/bridal-makeup",
    services: [
      {
        name: "Simple Bridal Makeup",
        price: "Rs. 18,000",
        duration: "2 hours",
        description: "Simple bridal makeup with basic hair setting.",
      },
      {
        name: "Traditional Bridal Makeup",
        price: "Rs. 25,000",
        duration: "3 hours",
        description: "Traditional bridal makeup with hair styling.",
      },
      {
        name: "Kandyan Bridal Makeup",
        price: "Rs. 35,000",
        duration: "4 hours",
        description: "Kandyan bridal dressing, makeup and hair arrangement.",
      },
      {
        name: "Full Bridal Package",
        price: "Rs. 55,000",
        duration: "5 hours",
        description: "Complete bridal package with makeup, hair and dressing.",
      },
    ],
  },
];

function bookingLink(category, service) {
  return `/booking?service=${encodeURIComponent(
    category
  )}&category=${encodeURIComponent(service.name)}&price=${encodeURIComponent(
    service.price
  )}`;
}

export default function ServiceMenu() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Hair Styling",
    "Hair Coloring",
    "Hair Treatment",
    "Bridal Makeup",
  ];

  const filteredMenu = serviceMenu
    .filter((categoryItem) => {
      return (
        selectedCategory === "All" ||
        categoryItem.category === selectedCategory
      );
    })
    .map((categoryItem) => {
      const filteredServices = categoryItem.services.filter((service) => {
        const search = searchText.toLowerCase();

        return (
          service.name.toLowerCase().includes(search) ||
          service.price.toLowerCase().includes(search) ||
          service.duration.toLowerCase().includes(search) ||
          service.description.toLowerCase().includes(search) ||
          categoryItem.category.toLowerCase().includes(search)
        );
      });

      return {
        ...categoryItem,
        services: filteredServices,
      };
    })
    .filter((categoryItem) => categoryItem.services.length > 0);

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <span style={styles.badge}>Orchid Salon</span>

        <h1>Service Menu</h1>

        <p>
          Browse our salon services, prices and duration. Choose a service and
          book your appointment easily.
        </p>
      </section>

      <section style={styles.searchSection}>
        <input
          type="text"
          placeholder="Search service, price, treatment, bridal, haircut..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.filterButtons}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={
                selectedCategory === category
                  ? styles.activeFilterButton
                  : styles.filterButton
              }
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section style={styles.menuSection}>
        {filteredMenu.map((categoryItem) => (
          <div style={styles.categoryBox} key={categoryItem.id}>
            <div style={styles.categoryHeader}>
              <div>
                <h2>
                  {categoryItem.icon} {categoryItem.category}
                </h2>
                <p>
                  View available {categoryItem.category.toLowerCase()} services.
                </p>
              </div>

              <Link to={categoryItem.page} style={styles.viewCategoryBtn}>
                View Category
              </Link>
            </div>

            <div style={styles.serviceGrid}>
              {categoryItem.services.map((service) => (
                <div style={styles.serviceCard} key={service.name}>
                  <h3>{service.name}</h3>

                  <p style={styles.description}>{service.description}</p>

                  <div style={styles.details}>
                    <p>
                      <strong>Price:</strong> {service.price}
                    </p>

                    <p>
                      <strong>Duration:</strong> {service.duration}
                    </p>
                  </div>

                  <Link
                    to={bookingLink(categoryItem.category, service)}
                    style={styles.bookBtn}
                  >
                    Book Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {filteredMenu.length === 0 && (
        <section style={styles.noResult}>
          <h2>No Services Found</h2>
          <p>Please try another search keyword.</p>
        </section>
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
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px",
    background: "#f8f4f0",
    borderRadius: "18px",
    border: "1px solid #ddd",
  },

  badge: {
    display: "inline-block",
    padding: "8px 15px",
    background: "#c59d5f",
    color: "white",
    borderRadius: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
  },

  searchSection: {
    maxWidth: "950px",
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

  menuSection: {
    maxWidth: "1200px",
    margin: "40px auto",
  },

  categoryBox: {
    marginBottom: "45px",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "18px",
    background: "#fff",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    textAlign: "left",
  },

  categoryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    borderBottom: "1px solid #ddd",
    paddingBottom: "18px",
    marginBottom: "25px",
  },

  viewCategoryBtn: {
    padding: "11px 18px",
    background: "#111",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  serviceCard: {
    padding: "22px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    background: "#f8f4f0",
  },

  description: {
    color: "#555",
    minHeight: "50px",
  },

  details: {
    marginTop: "15px",
    padding: "12px",
    background: "white",
    borderRadius: "10px",
  },

  bookBtn: {
    display: "inline-block",
    marginTop: "15px",
    padding: "11px 18px",
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