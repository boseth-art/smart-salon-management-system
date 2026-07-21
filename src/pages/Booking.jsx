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
      newErrors.customerName = "Customer name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.date) {
      newErrors.date = "Please select appointment date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select appointment time.";
    }

    const today = new Date().toISOString().split("T")[0];

    if (formData.date && formData.date < today) {
      newErrors.date = "Past dates are not allowed.";
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
      newErrors.time =
        "This stylist already has an appointment at this date and time.";
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

    alert("Appointment booked successfully!");

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
    <div style={styles.page}>
      <h1>Book Appointment</h1>
      <p>Fill the form below to book your salon appointment.</p>

      {(formData.service || formData.category || formData.price) && (
        <div style={styles.selectedBox}>
          <p>
            Service: <strong>{formData.service || "Not selected"}</strong>
          </p>

          <p>
            Category: <strong>{formData.category || "Not selected"}</strong>
          </p>

          <p>
            Price: <strong>{formData.price || "Not selected"}</strong>
          </p>
        </div>
      )}

      <form style={styles.form} onSubmit={handleBooking}>
        <label>Customer Name *</label>
        <input
          type="text"
          name="customerName"
          placeholder="Enter your name"
          value={formData.customerName}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.customerName && (
          <span style={styles.error}>{errors.customerName}</span>
        )}

        <label>Phone Number *</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter 10 digit phone number"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.phone && <span style={styles.error}>{errors.phone}</span>}

        <label>Service *</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Service</option>
          <option value="Hair Styling">Hair Styling</option>
          <option value="Hair Coloring">Hair Coloring</option>
          <option value="Hair Treatment">Hair Treatment</option>
          <option value="Bridal Makeup">Bridal Makeup</option>
        </select>
        {errors.service && <span style={styles.error}>{errors.service}</span>}

        <label>Category</label>
        <input
          type="text"
          name="category"
          placeholder="Selected category"
          value={formData.category}
          onChange={handleChange}
          style={styles.input}
        />

        <label>Price</label>
        <input
          type="text"
          name="price"
          placeholder="Selected price"
          value={formData.price}
          onChange={handleChange}
          style={styles.input}
        />

        <label>Stylist</label>
        <select
          name="stylist"
          value={formData.stylist}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">Select Stylist</option>
          <option value="Imasha">Imasha</option>
          <option value="Nethmi">Nethmi</option>
          <option value="Kavindi">Kavindi</option>
          <option value="Ayesha">Ayesha</option>
        </select>

        <label>Date *</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.date && <span style={styles.error}>{errors.date}</span>}

        <label>Time *</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.time && <span style={styles.error}>{errors.time}</span>}

        <button type="submit" style={styles.btn}>
          Confirm Booking
        </button>
      </form>

      {bookings.length > 0 && (
        <section style={styles.bookingList}>
          <h2>Recent Bookings</h2>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Customer</th>
                  <th style={styles.th}>Phone</th>
                  <th style={styles.th}>Service</th>
                  <th style={styles.th}>Category</th>
                  <th style={styles.th}>Price</th>
                  <th style={styles.th}>Stylist</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Time</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td style={styles.td}>{booking.customerName}</td>
                    <td style={styles.td}>{booking.phone}</td>
                    <td style={styles.td}>{booking.service}</td>
                    <td style={styles.td}>{booking.category || "-"}</td>
                    <td style={styles.td}>{booking.price || "-"}</td>
                    <td style={styles.td}>{booking.stylist || "-"}</td>
                    <td style={styles.td}>{booking.date}</td>
                    <td style={styles.td}>{booking.time}</td>
                    <td style={styles.td}>
                      <span
                        style={
                          booking.status === "Arrived / Checked-In"
                            ? styles.checkedStatus
                            : styles.pendingStatus
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
        </section>
      )}
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

  selectedBox: {
    maxWidth: "550px",
    margin: "20px auto",
    padding: "18px",
    background: "#f8f4f0",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },

  form: {
    maxWidth: "550px",
    margin: "30px auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textAlign: "left",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    background: "white",
  },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
  },

  error: {
    color: "red",
    fontSize: "14px",
    fontWeight: "bold",
  },

  btn: {
    marginTop: "15px",
    padding: "13px",
    background: "#c59d5f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },

  bookingList: {
    marginTop: "50px",
  },

  tableWrapper: {
    overflowX: "auto",
    maxWidth: "1100px",
    margin: "20px auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  th: {
    border: "1px solid #ddd",
    padding: "12px",
    background: "#111",
    color: "white",
  },

  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },

  pendingStatus: {
    color: "#8b5a2b",
    fontWeight: "bold",
  },

  checkedStatus: {
    color: "green",
    fontWeight: "bold",
  },
};