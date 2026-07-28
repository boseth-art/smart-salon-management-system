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
        duration: "30 mins",
        description: "Simple haircut and finishing for everyday style.",
      },
      {
        name: "Layer Cut",
        price: "Rs. 3,500",
        duration: "45 mins",
        description: "Modern layered haircut with professional finishing.",
      },
      {
        name: "Blow Dry",
        price: "Rs. 2,500",
        duration: "30 mins",
        description: "Smooth blow dry styling for a polished salon look.",
      },
      {
        name: "Party Hair Style",
        price: "Rs. 6,000",
        duration: "1 hr",
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
        duration: "1 hr",
        description: "Color touch-up service for hair roots.",
      },
      {
        name: "Full Hair Color",
        price: "Rs. 8,500",
        duration: "2 hrs",
        description: "Complete hair coloring service using quality products.",
      },
      {
        name: "Hair Highlights",
        price: "Rs. 10,000",
        duration: "2.5 hrs",
        description: "Stylish highlights to enhance your hair appearance.",
      },
      {
        name: "Balayage Color",
        price: "Rs. 18,000",
        duration: "3 hrs",
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
        duration: "1.5 hrs",
        description: "Relaxing hair spa treatment for smooth and healthy hair.",
      },
      {
        name: "Keratin Treatment",
        price: "Rs. 18,000",
        duration: "3 hrs",
        description: "Keratin treatment for smooth and frizz-free hair.",
      },
      {
        name: "Protein Treatment",
        price: "Rs. 12,000",
        duration: "2 hrs",
        description: "Strengthening treatment for weak and damaged hair.",
      },
      {
        name: "Scalp Treatment",
        price: "Rs. 7,500",
        duration: "1 hr",
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
        duration: "2 hrs",
        description: "Simple bridal makeup with basic hair setting.",
      },
      {
        name: "Traditional Bridal Makeup",
        price: "Rs. 25,000",
        duration: "3 hrs",
        description: "Traditional bridal makeup with hair styling.",
      },
      {
        name: "Kandyan Bridal Makeup",
        price: "Rs. 35,000",
        duration: "4 hrs",
        description: "Kandyan bridal dressing, makeup and hair arrangement.",
      },
      {
        name: "Full Bridal Package",
        price: "Rs. 55,000",
        duration: "5 hrs",
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
    <div className="page-container" style={styles.page}>
      <section style={styles.hero}>
        <span className="badge">Service Menu</span>
        <h1 style={styles.heroTitle}>Premium Salon Services</h1>
        <p style={styles.heroSubtext}>
          Explore our curated collection of luxury hair, beauty, and bridal services. 
          Find your perfect treatment and book instantly.
        </p>
      </section>

      <section style={styles.searchSection}>
        <div style={styles.searchContainer}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search by treatment, keyword, or price..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            style={styles.searchInput}
          />
        </div>

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
              <div style={styles.categoryTitleBox}>
                <span style={styles.categoryIcon}>{categoryItem.icon}</span>
                <div>
                  <h2 style={styles.categoryTitle}>{categoryItem.category}</h2>
                  <p style={styles.categorySub}>Signature {categoryItem.category.toLowerCase()} treatments</p>
                </div>
              </div>

              <Link to={categoryItem.page} className="btn-outline" style={styles.viewCategoryBtn}>
                View Category details
              </Link>
            </div>

            <div style={styles.serviceGrid}>
              {categoryItem.services.map((service) => (
                <div style={styles.serviceCard} key={service.name}>
                  <div style={styles.serviceHeader}>
                    <h3 style={styles.serviceName}>{service.name}</h3>
                    <span style={styles.servicePrice}>{service.price}</span>
                  </div>

                  <p style={styles.description}>{service.description}</p>

                  <div style={styles.serviceFooter}>
                    <span style={styles.duration}>
                      ⏱ {service.duration}
                    </span>
                    <Link
                      to={bookingLink(categoryItem.category, service)}
                      className="btn-primary"
                      style={styles.bookBtn}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {filteredMenu.length === 0 && (
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
    padding: "60px 20px",
    background: "linear-gradient(to bottom, #FDFBF7, #FFFFFF)",
    borderRadius: "var(--radius-lg)",
    marginBottom: "40px",
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
    margin: "0 auto 50px",
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
  menuSection: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  categoryBox: {
    marginBottom: "50px",
  },
  categoryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottom: "2px solid var(--color-border)",
    paddingBottom: "16px",
    marginBottom: "30px",
    flexWrap: "wrap",
    gap: "20px",
  },
  categoryTitleBox: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  categoryIcon: {
    fontSize: "36px",
    background: "var(--color-bg)",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "16px",
    border: "1px solid var(--color-border)",
  },
  categoryTitle: {
    margin: "0 0 4px",
    fontSize: "28px",
    fontWeight: "800",
  },
  categorySub: {
    margin: 0,
    color: "var(--color-text-muted)",
    fontSize: "14px",
  },
  viewCategoryBtn: {
    padding: "8px 20px",
    fontSize: "13px",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },
  serviceCard: {
    padding: "28px",
    border: "1px solid var(--color-border)",
    borderRadius: "20px",
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  serviceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "12px",
  },
  serviceName: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "700",
  },
  servicePrice: {
    fontSize: "16px",
    fontWeight: "800",
    color: "var(--color-primary)",
  },
  description: {
    color: "var(--color-text-muted)",
    fontSize: "14px",
    flexGrow: 1,
    margin: "0 0 24px",
  },
  serviceFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #F5F5F4",
    paddingTop: "16px",
  },
  duration: {
    fontSize: "13px",
    color: "#A8A29E",
    fontWeight: "600",
  },
  bookBtn: {
    padding: "8px 20px",
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