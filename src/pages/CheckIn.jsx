import { useState } from "react";

const STORAGE_KEY = "salonBookings";

function getBookings() {
  const savedBookings = localStorage.getItem(STORAGE_KEY);
  return savedBookings ? JSON.parse(savedBookings) : [];
}

export default function CheckIn() {
  const [phone, setPhone] = useState("");
  const [bookings, setBookings] = useState(getBookings);
  const [matchedBookings, setMatchedBookings] = useState([]);
  const [message, setMessage] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    if (!phone.trim()) {
      setMessage("Please enter your phone number.");
      setMatchedBookings([]);
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      setMessage("Please enter a valid 10 digit phone number.");
      setMatchedBookings([]);
      return;
    }

    const results = bookings.filter((booking) => booking.phone === phone);

    if (results.length === 0) {
      setMessage("No appointment found for this phone number.");
      setMatchedBookings([]);
      return;
    }

    setMessage("Appointment found. Please check in below.");
    setMatchedBookings(results);
  }

  function handleCheckIn(bookingId) {
    const updatedBookings = bookings.map((booking) => {
      if (booking.id === bookingId) {
        return {
          ...booking,
          status: "Arrived / Checked-In",
        };
      }

      return booking;
    });

    setBookings(updatedBookings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookings));

    const updatedMatchedBookings = updatedBookings.filter(
      (booking) => booking.phone === phone
    );

    setMatchedBookings(updatedMatchedBookings);

    alert("Check-in successful! Your stylist has been notified.");
    setMessage("You are now checked in. Please wait for your stylist.");
  }

  return (
    <div style={styles.page}>
      <section style={styles.heroBox}>
        <h1>Self-Check-In Kiosk</h1>
        <p>
          Arriving customers can check themselves in using their phone number.
          The system updates appointment status and helps staff know the customer
          has arrived.
        </p>
      </section>

      <section style={styles.kioskBox}>
        <h2>Customer Check-In</h2>
        <p>Enter the phone number used for your appointment booking.</p>

        <form style={styles.form} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter 10 digit phone number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.btn}>
            Find Appointment
          </button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </section>

      {matchedBookings.length > 0 && (
        <section style={styles.resultSection}>
          <h2>Your Appointment</h2>

          <div style={styles.cardGrid}>
            {matchedBookings.map((booking) => (
              <div style={styles.appointmentCard} key={booking.id}>
                <h3>{booking.customerName}</h3>

                <p>
                  <strong>Phone:</strong> {booking.phone}
                </p>

                <p>
                  <strong>Service:</strong> {booking.service}
                </p>

                <p>
                  <strong>Category:</strong> {booking.category || "-"}
                </p>

                <p>
                  <strong>Price:</strong> {booking.price || "-"}
                </p>

                <p>
                  <strong>Stylist:</strong> {booking.stylist || "Not assigned"}
                </p>

                <p>
                  <strong>Date:</strong> {booking.date}
                </p>

                <p>
                  <strong>Time:</strong> {booking.time}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span style={styles.status}>{booking.status}</span>
                </p>

                {booking.status !== "Arrived / Checked-In" ? (
                  <button
                    onClick={() => handleCheckIn(booking.id)}
                    style={styles.checkInBtn}
                  >
                    Check In Now
                  </button>
                ) : (
                  <p style={styles.checkedText}>Already Checked In</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={styles.infoBox}>
        <h2>How This Feature Works</h2>
        <p>
          The customer enters their phone number at the salon front desk kiosk.
          If an appointment exists, the customer can check in. After check-in,
          the appointment status changes to{" "}
          <strong>Arrived / Checked-In</strong>.
        </p>
      </section>
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

  heroBox: {
    maxWidth: "850px",
    margin: "0 auto",
    padding: "35px",
    background: "#f8f4f0",
    borderRadius: "16px",
    border: "1px solid #ddd",
  },

  kioskBox: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },

  form: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px",
  },

  input: {
    padding: "13px",
    width: "280px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
  },

  btn: {
    padding: "13px 20px",
    background: "#c59d5f",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  message: {
    marginTop: "20px",
    fontWeight: "bold",
    color: "#8b5a2b",
  },

  resultSection: {
    marginTop: "45px",
  },

  cardGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  appointmentCard: {
    width: "330px",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    textAlign: "left",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },

  status: {
    color: "#8b5a2b",
    fontWeight: "bold",
  },

  checkInBtn: {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    background: "#111",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  checkedText: {
    marginTop: "15px",
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  },

  infoBox: {
    maxWidth: "850px",
    margin: "50px auto 0",
    padding: "30px",
    background: "#f8f4f0",
    borderRadius: "14px",
    border: "1px solid #ddd",
  },
};