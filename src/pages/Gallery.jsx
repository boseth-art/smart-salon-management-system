import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    category: "Interior",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Salon Interior",
  },
  {
    id: 2,
    category: "Hair Styling",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    alt: "Professional Hair Styling",
  },
  {
    id: 3,
    category: "Hair Coloring",
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80",
    alt: "Premium Hair Coloring",
  },
  {
    id: 4,
    category: "Interior",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    alt: "Salon Styling Stations",
  },
  {
    id: 5,
    category: "Bridal Makeup",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    alt: "Bridal Transformation",
  },
  {
    id: 6,
    category: "Hair Styling",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    alt: "Elegant Hair Updo",
  },
  {
    id: 7,
    category: "Interior",
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    alt: "Salon Tools and Products",
  },
  {
    id: 8,
    category: "Bridal Makeup",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    alt: "Professional Beauty Makeup",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Interior", "Hair Styling", "Hair Coloring", "Bridal Makeup"];

  const filteredImages = galleryImages.filter((img) => {
    if (activeCategory === "All") return true;
    return img.category === activeCategory;
  });

  return (
    <div className="page-container" style={styles.page}>
      <section style={styles.header}>
        <span className="badge">Portfolio</span>
        <h1 style={styles.title}>Salon Gallery</h1>
        <p style={styles.subtitle}>
          Take a glimpse into our luxurious space, stunning bridal transformations, 
          and signature hair styling moments crafted by our experts.
        </p>
      </section>

      <section style={styles.filterSection}>
        <div style={styles.filterGroup}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={activeCategory === cat ? styles.activeFilterBtn : styles.filterBtn}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section style={styles.galleryGrid}>
        {filteredImages.map((img) => (
          <div key={img.id} className="gallery-card">
            <div style={styles.imageWrapper}>
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">{img.category}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {filteredImages.length === 0 && (
        <div style={styles.noResult}>
          <p>No images found in this category.</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "80vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "800",
    margin: "0 0 16px",
    letterSpacing: "-0.5px",
    color: "var(--color-text)",
  },
  subtitle: {
    color: "var(--color-text-muted)",
    fontSize: "16px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  filterSection: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
  },
  filterGroup: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "#FFF",
    padding: "8px",
    borderRadius: "var(--radius-pill)",
    boxShadow: "var(--shadow-sm)",
    border: "1px solid var(--color-border)",
  },
  filterBtn: {
    padding: "10px 24px",
    background: "transparent",
    border: "none",
    color: "var(--color-text-muted)",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "var(--radius-pill)",
  },
  activeFilterBtn: {
    padding: "10px 24px",
    background: "var(--color-bg-dark)",
    border: "none",
    color: "#FFF",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "var(--radius-pill)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  imageCard: {
    borderRadius: "var(--radius-lg)",
    overflow: "hidden",
    boxShadow: "var(--shadow-sm)",
    background: "#FFF",
    position: "relative",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    paddingTop: "100%", // 1:1 Aspect Ratio (Square)
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
    display: "flex",
    alignItems: "flex-end",
    padding: "20px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  overlayText: {
    color: "var(--color-primary-light)",
    fontWeight: "700",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    transform: "translateY(10px)",
    transition: "transform 0.3s ease",
  },
  noResult: {
    textAlign: "center",
    padding: "40px",
    color: "var(--color-text-muted)",
  }
};