import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80";

const treatmentServices = [
  {
    name: "Keratin Treatment",
    price: "Rs. 18,000",
    image: "/hair/Keratin-Treatment.jfif",
  },
  {
    name: "Protein Treatment",
    price: "Rs. 12,000",
    image: "/hair/Protein-Treatment.jfif",
  },
  {
    name: "Hair Spa Treatment",
    price: "Rs. 8,500",
    image: "/treatment/hair-spa-treatment.jpg",
  },
  {
    name: "Scalp Treatment",
    price: "Rs. 7,500",
    image: "/treatment/scalp-treatment.jpg",
  },
  {
    name: "Anti-Dandruff Treatment",
    price: "Rs. 6,500",
    image: "/treatment/anti-dandruff-treatment.jpg",
  },
  {
    name: "Hair Fall Control Treatment",
    price: "Rs. 9,500",
    image: "/treatment/hair-fall-control-treatment.jpg",
  },
  {
    name: "Deep Conditioning Treatment",
    price: "Rs. 5,500",
    image: "/treatment/deep-conditioning-treatment.jpg",
  },
  {
    name: "Smoothening Treatment",
    price: "Rs. 20,000",
    image: "/treatment/smoothening-treatment.jpg",
  },
  {
    name: "Rebonding Treatment",
    price: "Rs. 22,000",
    image: "/treatment/rebonding-treatment.jpg",
  },
  {
    name: "Olaplex Repair Treatment",
    price: "Rs. 15,000",
    image: "/treatment/olaplex-repair-treatment.jpg",
  },
  {
    name: "Hot Oil Treatment",
    price: "Rs. 4,500",
    image: "/treatment/hot-oil-treatment.jpg",
  },
  {
    name: "Premium Hair Repair Package",
    price: "Rs. 28,000",
    image: "/treatment/premium-hair-repair-package.jpg",
  },
];

function bookingLink(category, price) {
  return `/booking?service=${encodeURIComponent(
    "Hair Treatment"
  )}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(
    price
  )}`;
}

export default function HairTreatment() {
  return (
    <div style={styles.page}>
      <h1>Hair Treatment Services</h1>
      <p>
        Choose professional salon hair treatments for repair, smoothness, scalp
        care and healthy hair.
      </p>

      <section style={styles.serviceSection}>
        <h2>Hair Treatment Categories</h2>
        <p>
          Keratin, protein treatment, hair spa, scalp care, rebonding and premium
          repair packages.
        </p>

        <div style={styles.itemGrid}>
          {treatmentServices.map((item) => (
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