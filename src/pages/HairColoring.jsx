import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80";

const coloringServices = [
  {
    name: "Full Hair Color",
    price: "Rs. 8,500",
    image: "/hair/Full-Hair-Color.jfif",
  },
  {
    name: "Root Touch-up",
    price: "Rs. 4,500",
    image: "/hair/Root-Touch-up.jfif",
  },
  {
    name: "Hair Highlights",
    price: "Rs. 10,000",
    image: "/hair/Hair-Highlights.jfif",
  },
  {
    name: "Balayage Color",
    price: "Rs. 18,000",
    image: "/coloring/balayage-color.jpg",
  },
  {
    name: "Ombre Color",
    price: "Rs. 16,000",
    image: "/hair/Ombre-Color.jfif",
  },
  {
    name: "Global Hair Color",
    price: "Rs. 12,000",
    image: "/coloring/global-hair-color.jpg",
  },
  {
    name: "Fashion Color",
    price: "Rs. 15,000",
    image: "/coloring/fashion-color.jpg",
  },
  {
    name: "Grey Coverage",
    price: "Rs. 6,500",
    image: "/coloring/grey-coverage.jpg",
  },
  {
    name: "Toner / Gloss Color",
    price: "Rs. 5,500",
    image: "/coloring/toner-gloss-color.jpg",
  },
  {
    name: "Color Correction",
    price: "Rs. 20,000",
    image: "/hair/Color-Correction.jfif",
  },
];

function bookingLink(category, price) {
  return `/booking?service=${encodeURIComponent(
    "Hair Coloring"
  )}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(
    price
  )}`;
}

export default function HairColoring() {
  return (
    <div style={styles.page}>
      <h1>Hair Coloring Services</h1>
      <p>
        Choose from professional salon hair coloring services with categories and
        prices.
      </p>

      <section style={styles.serviceSection}>
        <h2>Hair Coloring Categories</h2>
        <p>Coloring, highlights, balayage, ombre, root touch-up and more.</p>

        <div style={styles.itemGrid}>
          {coloringServices.map((item) => (
            <div style={styles.itemCard} key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.itemImg}
                onError={(event) => {
                  event.currentTarget.src = fallbackImage;
                }}
              />

              <div style={styles.itemBody}>
                <h3>{item.name}</h3>
                <p style={styles.price}>{item.price}</p>

                <Link
                  to={bookingLink(item.name, item.price)}
                  style={styles.bookBtn}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
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
    textAlign: "center",
    background: "white",
    minHeight: "80vh",
  },

  serviceSection: {
    marginTop: "50px",
  },

  itemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "30px auto 0",
  },

  itemCard: {
    border: "1px solid #ddd",
    borderRadius: "14px",
    overflow: "hidden",
    background: "white",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },

  itemImg: {
    width: "100%",
    height: "210px",
    objectFit: "cover",
    display: "block",
  },

  itemBody: {
    padding: "18px",
  },

  price: {
    color: "#8b5a2b",
    fontWeight: "bold",
    fontSize: "18px",
  },

  bookBtn: {
    display: "inline-block",
    marginTop: "8px",
    padding: "10px 18px",
    background: "#c59d5f",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },

  backBtn: {
    display: "inline-block",
    marginTop: "50px",
    color: "#111",
    textDecoration: "none",
    fontWeight: "bold",
  },
};