import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80";

const hairServices = [
  {
    title: "Hair Cuts",
    description: "Modern and classic hair cuts for different styles.",
    items: [
      {
        name: "Basic Hair Cut",
        price: "Rs. 2,500",
        image:
          "/hair/Basic-Hair-Cut.jfif",
      },
      {
        name: "Layer Cut",
        price: "Rs. 3,500",
        image:
          "/hair/Layer-Cut.jfif",
      },
      {
        name: "Feather Cut",
        price: "Rs. 4,000",
        image:
          "/hair/Feather-Cut.jfif",
      },
      {
        name: "Step Cut",
        price: "Rs. 4,500",
        image:
          "/hair/Step-Cut.jfif",
      },
      {
        name: "U Cut",
        price: "Rs. 3,000",
        image:
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "V Cut",
        price: "Rs. 3,200",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Bob Cut",
        price: "Rs. 5,000",
        image:
          "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Pixie Cut",
        price: "Rs. 5,500",
        image:
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Wolf Cut",
        price: "Rs. 6,000",
        image:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Butterfly Cut",
        price: "Rs. 6,500",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Curtain Bangs Cut",
        price: "Rs. 3,800",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Fringe / Bangs Cut",
        price: "Rs. 2,500",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Kids Hair Cut",
        price: "Rs. 1,800",
        image:
          "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Premium Restyle Cut",
        price: "Rs. 8,500",
        image:
          "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    title: "Blow Dry",
    description: "Smooth and professional blow dry services.",
    items: [
      {
        name: "Short Hair Blow Dry",
        price: "Rs. 1,500",
        image:
          "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Medium Hair Blow Dry",
        price: "Rs. 2,500",
        image:
          "https://images.unsplash.com/photo-1522336284037-91f7da073525?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Long Hair Blow Dry",
        price: "Rs. 3,500",
        image:
          "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Volume Blow Dry",
        price: "Rs. 4,000",
        image:
          "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Premium Blow Dry",
        price: "Rs. 5,000",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    title: "Styling",
    description: "Salon styling for casual, party and event looks.",
    items: [
      {
        name: "Casual Styling",
        price: "Rs. 3,000",
        image:
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Party Styling",
        price: "Rs. 5,500",
        image:
          "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Curl Styling",
        price: "Rs. 4,500",
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Straight Styling",
        price: "Rs. 4,000",
        image:
          "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Bridal Hair Styling",
        price: "Rs. 12,000",
        image:
          "https://images.unsplash.com/photo-1523438097201-512ae7d59c97?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Premium Event Styling",
        price: "Rs. 15,000",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    title: "Finishing",
    description: "Final touch-ups and long-lasting salon finish.",
    items: [
      {
        name: "Hair Setting",
        price: "Rs. 1,500",
        image:
          "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Shine Finish",
        price: "Rs. 1,200",
        image:
          "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Final Touch-up",
        price: "Rs. 1,000",
        image:
          "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Long-lasting Spray Finish",
        price: "Rs. 1,800",
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Premium Gloss Finish",
        price: "Rs. 3,000",
        image:
          "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

function bookingLink(service, category, price) {
  return `/booking?service=${encodeURIComponent(
    service
  )}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(
    price
  )}`;
}

export default function HairStyling() {
  return (
    <div style={styles.page}>
      <h1>Hair Styling Services</h1>
      <p>
        Hair cuts, blow dry, styling and finishing with photos, categories and
        prices.
      </p>

      {hairServices.map((service) => (
        <section style={styles.serviceSection} key={service.title}>
          <div style={styles.sectionHeader}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>

          <div style={styles.itemGrid}>
            {service.items.map((item) => (
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
                    to={bookingLink(service.title, item.name, item.price)}
                    style={styles.bookBtn}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

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
    marginTop: "60px",
  },

  sectionHeader: {
    marginBottom: "25px",
  },

  itemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
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