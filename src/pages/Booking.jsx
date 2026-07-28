import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const STORAGE_KEY = "salonBookings";

function getSavedBookings() {
  const savedBookings = localStorage.getItem(STORAGE_KEY);
  return savedBookings ? JSON.parse(savedBookings) : [];
}

export default function Booking() {
  const [searchParams] = useSearchParams();

  const selectedService = searchParams.get("service") || "";
  const selectedCategory = searchParams.get("category") || "";
  const selectedPrice = searchParams.get("price") || "";

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    service: selectedService,
    category: selectedCategory,
    price: selectedPrice,
    stylist: "",
    date: "",
    time: "",
  });

  const [bookings, setBookings] = useState(getSavedBookings);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Must be exactly 10 digits.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date.";
    } else {
      const today = new Date().toISOString().split("T")[0];
      if (formData.date < today) {
        newErrors.date = "Past dates not allowed.";
      }
    }

    if (!formData.time) {
      newErrors.time = "Please select a time.";
    }

    const duplicateBooking = bookings.find((booking) => {
      return (
        booking.date === formData.date &&
        booking.time === formData.time &&
        booking.stylist === formData.stylist &&
        formData.stylist !== ""
      );
    });

    if (duplicateBooking) {
      newErrors.time = "Stylist is booked at this time.";
    }

    return newErrors;
  }

  function handleBooking(event) {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBooking = {
      id: Date.now(),
      ...formData,
      status: "Pending",
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));
    setErrors({});
    
    // Quick custom alert replacement (for simplicity, using standard alert)
    alert("✨ Appointment booked successfully!");

    setFormData({
      customerName: "",
      phone: "",
      service: selectedService,
      category: selectedCategory,
      price: selectedPrice,
      stylist: "",
      date: "",
      time: "",
    });
  }

  return (
    <div className="page-container">
      <div style={styles.header}>
        <span className="badge">Reservations</span>
        <h1 style={styles.title}>Book Your Experience</h1>
        <p style={styles.subtitle}>
          Secure your appointment with our master stylists and therapists.
        </p>
      </div>

      <div style={styles.grid}>
        <div style={styles.formContainer}>
          <div className="glass-panel" style={styles.glassWrapper}>
            {(formData.service || formData.category || formData.price) && (
              <div style={styles.preSelectedBox}>
                <h4 style={styles.preSelectedTitle}>Selected Service</h4>
                <div style={styles.preSelectedDetails}>
                  <div>
                    <small>Category</small>
                    <p>{formData.service || "N/A"}</p>
                  </div>
                  <div>
                    <small>Treatment</small>
                    <p>{formData.category || "N/A"}</p>
                  </div>
                  <div>
                    <small>Price</small>
                    <p style={styles.priceHighlight}>{formData.price || "N/A"}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleBooking} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="customerName"
                  placeholder="e.g. Jane Doe"
                  value={formData.customerName}
                  onChange={handleChange}
                  style={errors.customerName ? {...styles.input, ...styles.inputError} : styles.input}
                />
                {errors.customerName && <span style={styles.errorText}>{errors.customerName}</span>}
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="10 digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={errors.phone ? {...styles.input, ...styles.inputError} : styles.input}
                />
                {errors.phone && <span style={styles.errorText}>{errors.phone}</span>}
              </div>

              <div style={styles.row}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={errors.service ? {...styles.input, ...styles.inputError} : styles.input}
                  >
                    <option value="">Select Option</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                    <option value="Hair Treatment">Hair Treatment</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                  </select>
                  {errors.service && <span style={styles.errorText}>{errors.service}</span>}
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Preferred Stylist</label>
                  <select
                    name="stylist"
                    value={formData.stylist}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="">Any Available</option>
                    <option value="Imasha">Imasha</option>
                    <option value="Nethmi">Nethmi</option>
                    <option value="Kavindi">Kavindi</option>
                    <option value="Ayesha">Ayesha</option>
                  </select>
                </div>
              </div>

              <div style={styles.row}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    style={errors.date ? {...styles.input, ...styles.inputError} : styles.input}
                  />
                  {errors.date && <span style={styles.errorText}>{errors.date}</span>}
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    style={errors.time ? {...styles.input, ...styles.inputError} : styles.input}
                  />
                  {errors.time && <span style={styles.errorText}>{errors.time}</span>}
                </div>
              </div>

              <button type="submit" className="btn-primary" style={styles.submitBtn}>
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>

        {bookings.length > 0 && (
          <div style={styles.historyContainer}>
            <div style={styles.historyHeader}>
              <h2 style={styles.historyTitle}>Your Bookings</h2>
              <p style={styles.historySub}>Track your upcoming and past appointments.</p>
            </div>

            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Details</th>
                    <th style={styles.th}>Stylist</th>
                    <th style={styles.th}>Schedule</th>
                    <th style={styles.th}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} style={styles.tr}>
                      <td style={styles.td}>
                        <div style={styles.tablePrimary}>{booking.customerName}</div>
                        <div style={styles.tableSecondary}>{booking.category || booking.service}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={styles.tablePrimary}>{booking.stylist || "Any"}</div>
                      </td>
                      <td style={styles.td}>
                        <div style={styles.tablePrimary}>{booking.date}</div>
                        <div style={styles.tableSecondary}>{booking.time}</div>
                      </td>
                      <td style={styles.td}>
                        <span
                          style={
                            booking.status === "Arrived / Checked-In"
                              ? styles.statusPillSuccess
                              : styles.statusPillPending
                          }
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  header: {
    textAlign: "center",
    marginBottom: "50px",
  },
  title: {
    fontSize: "36px",
    letterSpacing: "-0.5px",
    marginBottom: "12px",
  },
  subtitle: {
    color: "var(--color-text-muted)",
    fontSize: "16px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    maxWidth: "700px",
  },
  glassWrapper: {
    padding: "40px",
  },
  preSelectedBox: {
    background: "rgba(212, 175, 55, 0.05)",
    border: "1px solid rgba(212, 175, 55, 0.2)",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "30px",
  },
  preSelectedTitle: {
    margin: "0 0 12px",
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "var(--color-primary-dark)",
  },
  preSelectedDetails: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "16px",
  },
  priceHighlight: {
    fontWeight: "800",
    color: "var(--color-primary-dark)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "var(--color-text)",
  },
  input: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid var(--color-border)",
    background: "#FAFAFA",
    fontSize: "15px",
    fontFamily: "var(--font-sans)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  inputError: {
    border: "1px solid #EF4444",
    background: "#FEF2F2",
  },
  errorText: {
    color: "#EF4444",
    fontSize: "12px",
    fontWeight: "600",
  },
  submitBtn: {
    marginTop: "16px",
    width: "100%",
    padding: "16px",
  },
  historyContainer: {
    width: "100%",
    maxWidth: "1000px",
  },
  historyHeader: {
    marginBottom: "24px",
  },
  historyTitle: {
    fontSize: "24px",
    marginBottom: "4px",
  },
  historySub: {
    color: "var(--color-text-muted)",
    margin: 0,
    fontSize: "14px",
  },
  tableWrapper: {
    background: "#FFFFFF",
    borderRadius: "16px",
    border: "1px solid var(--color-border)",
    boxShadow: "var(--shadow-sm)",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  th: {
    padding: "16px 24px",
    background: "var(--color-bg)",
    color: "var(--color-text-muted)",
    fontWeight: "600",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    borderBottom: "1px solid var(--color-border)",
  },
  tr: {
    borderBottom: "1px solid #F5F5F4",
  },
  td: {
    padding: "16px 24px",
    verticalAlign: "middle",
  },
  tablePrimary: {
    fontWeight: "600",
    fontSize: "15px",
    color: "var(--color-text)",
    marginBottom: "4px",
  },
  tableSecondary: {
    fontSize: "13px",
    color: "var(--color-text-muted)",
  },
  statusPillPending: {
    background: "#FEF3C7",
    color: "#92400E",
    padding: "6px 12px",
    borderRadius: "var(--radius-pill)",
    fontSize: "12px",
    fontWeight: "700",
    display: "inline-block",
  },
  statusPillSuccess: {
    background: "#D1FAE5",
    color: "#065F46",
    padding: "6px 12px",
    borderRadius: "var(--radius-pill)",
    fontSize: "12px",
    fontWeight: "700",
    display: "inline-block",
  },
};