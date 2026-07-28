import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout.jsx";

const STORAGE_KEY = "salonBookings";

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch { return []; }
}

export default function CheckIn() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [bookings, setBookings] = useState(getBookings);
  const [matched, setMatched] = useState([]);
  const [message, setMessage] = useState(null); // { type: 'success'|'error'|'info', text }
  const [loading, setLoading] = useState(false);

  function validatePhone(val) {
    if (!val.trim()) return "Please enter your phone number.";
    if (!/^[0-9]{10}$/.test(val.trim())) return "Phone must be exactly 10 digits (e.g. 0771234567).";
    return "";
  }

  async function handleSearch(e) {
    e.preventDefault();
    const err = validatePhone(phone);
    if (err) { setPhoneError(err); setMatched([]); setMessage(null); return; }
    setPhoneError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500)); // UX delay
    setLoading(false);
    const results = bookings.filter((b) => b.phone === phone.trim());
    if (results.length === 0) {
      setMessage({ type: "error", text: "No appointment found for this phone number. Please check and try again." });
      setMatched([]);
    } else {
      setMessage({ type: "info", text: `Found ${results.length} appointment(s). Select one to check in.` });
      setMatched(results);
    }
  }

  function handleCheckIn(id) {
    const updated = bookings.map((b) => b.id === id ? { ...b, status: "Arrived / Checked-In" } : b);
    setBookings(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setMatched(updated.filter((b) => b.phone === phone.trim()));
    setMessage({ type: "success", text: "✅ Check-in successful! Your stylist has been notified. Please take a seat." });
  }

  const msgColors = {
    success: { bg: "#ECFDF5", border: "#A7F3D0", color: "#065F46" },
    error:   { bg: "#FEF2F2", border: "#FECACA", color: "#B91C1C" },
    info:    { bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8" },
  };

  return (
    <DashboardLayout>
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>Self Check-In Kiosk</h1>
          <p style={styles.pageSub}>Customers enter their phone number to find and confirm their appointment.</p>
        </div>
        <div style={styles.liveIndicator}>
          <span style={styles.liveDot} />
          <span style={styles.liveText}>Kiosk Live</span>
        </div>
      </div>

      {/* Stats */}
      <div style={styles.statsRow}>
        {[
          { label: "Total Bookings", value: bookings.length, icon: "📅" },
          { label: "Checked In Today", value: bookings.filter((b) => b.status === "Arrived / Checked-In").length, icon: "✅" },
          { label: "Pending", value: bookings.filter((b) => b.status !== "Arrived / Checked-In").length, icon: "⏳" },
        ].map((s) => (
          <div key={s.label} style={styles.statCard}>
            <span style={styles.statIcon}>{s.icon}</span>
            <div style={styles.statValue}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Kiosk Panel */}
      <div style={styles.kioskCard} className="glass-panel">
        <div style={styles.kioskHeader}>
          <span style={styles.kioskIcon}>📱</span>
          <div>
            <h2 style={styles.kioskTitle}>Enter Your Phone Number</h2>
            <p style={styles.kioskSub}>Use the phone number you provided when booking your appointment.</p>
          </div>
        </div>

        <form onSubmit={handleSearch} style={styles.form} noValidate>
          <div style={styles.inputGroup}>
            <div style={styles.inputRow}>
              <div style={styles.inputWrapper}>
                <span style={styles.inputIcon}>📞</span>
                <input
                  type="tel"
                  placeholder="e.g. 0771234567"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); if (phoneError) setPhoneError(""); }}
                  style={{ ...styles.input, ...(phoneError ? styles.inputErr : {}) }}
                  maxLength={10}
                />
              </div>
              <button type="submit" className="btn-primary" style={styles.searchBtn} disabled={loading}>
                {loading ? "Searching..." : "Find Appointment →"}
              </button>
            </div>
            {phoneError && <span style={styles.fieldError}>⚠️ {phoneError}</span>}
          </div>
        </form>

        {/* Message */}
        {message && (
          <div style={{ ...styles.messageBanner, ...msgColors[message.type] }} className="animate-fade-in">
            {message.text}
          </div>
        )}
      </div>

      {/* Results */}
      {matched.length > 0 && (
        <section style={styles.resultsSection}>
          <h2 style={styles.resultsTitle}>Your Appointments</h2>
          <div style={styles.cardGrid}>
            {matched.map((b) => {
              const isCheckedIn = b.status === "Arrived / Checked-In";
              return (
                <div key={b.id} style={{ ...styles.appointmentCard, ...(isCheckedIn ? styles.checkedInCard : {}) }} className="animate-fade-in">
                  <div style={styles.aptHeader}>
                    <h3 style={styles.aptName}>{b.customerName}</h3>
                    <span style={isCheckedIn ? styles.pillSuccess : styles.pillPending}>
                      {isCheckedIn ? "✅ Checked In" : "⏳ Pending"}
                    </span>
                  </div>
                  <div style={styles.aptDetails}>
                    <div style={styles.aptDetail}><span style={styles.aptDetailLabel}>Service</span><span style={styles.aptDetailVal}>{b.category || b.service}</span></div>
                    <div style={styles.aptDetail}><span style={styles.aptDetailLabel}>Stylist</span><span style={styles.aptDetailVal}>{b.stylist || "Any available"}</span></div>
                    <div style={styles.aptDetail}><span style={styles.aptDetailLabel}>Date</span><span style={styles.aptDetailVal}>{b.date}</span></div>
                    <div style={styles.aptDetail}><span style={styles.aptDetailLabel}>Time</span><span style={styles.aptDetailVal}>{b.time}</span></div>
                    {b.price && <div style={styles.aptDetail}><span style={styles.aptDetailLabel}>Price</span><span style={{ ...styles.aptDetailVal, color: "var(--color-primary-dark)", fontWeight: "800" }}>{b.price}</span></div>}
                  </div>
                  {!isCheckedIn && (
                    <button className="btn-primary" style={styles.checkInBtn} onClick={() => handleCheckIn(b.id)}>
                      Confirm Check-In ✓
                    </button>
                  )}
                  {isCheckedIn && (
                    <div style={styles.checkedBanner}>
                      Your stylist has been notified. Please take a seat. 🪑
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* How it works */}
      <section style={styles.howSection}>
        <h2 style={styles.howTitle}>How Check-In Works</h2>
        <div style={styles.howGrid}>
          {[
            { step: "1", icon: "📱", title: "Enter Phone", desc: "Type the 10-digit number you used when booking." },
            { step: "2", icon: "🔍", title: "Find Appointment", desc: "We look up your booking details instantly." },
            { step: "3", icon: "✅", title: "Confirm Arrival", desc: "Click Check-In and your stylist is notified." },
          ].map((s) => (
            <div key={s.step} style={styles.howCard}>
              <div style={styles.howStepBadge}>{s.step}</div>
              <div style={styles.howIcon}>{s.icon}</div>
              <h3 style={styles.howCardTitle}>{s.title}</h3>
              <p style={styles.howCardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}

const styles = {
  pageHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px", flexWrap: "wrap", gap: "16px" },
  pageTitle: { fontSize: "24px", fontWeight: "800", margin: "0 0 4px" },
  pageSub: { color: "var(--color-text-muted)", margin: 0, fontSize: "14px" },
  liveIndicator: { display: "flex", alignItems: "center", gap: "8px", padding: "8px 16px", background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "var(--radius-pill)" },
  liveDot: { width: "8px", height: "8px", borderRadius: "50%", background: "#059669", animation: "pulse 1.5s ease infinite" },
  liveText: { fontSize: "13px", fontWeight: "700", color: "#065F46" },
  statsRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "24px" },
  statCard: { background: "#FFF", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "20px", textAlign: "center", boxShadow: "var(--shadow-sm)" },
  statIcon: { fontSize: "26px", display: "block", marginBottom: "8px" },
  statValue: { fontSize: "28px", fontWeight: "800", color: "var(--color-text)" },
  statLabel: { fontSize: "12px", color: "var(--color-text-muted)", fontWeight: "600", textTransform: "uppercase", marginTop: "4px" },
  kioskCard: { padding: "32px", marginBottom: "32px" },
  kioskHeader: { display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "28px" },
  kioskIcon: { fontSize: "36px", flexShrink: 0 },
  kioskTitle: { margin: "0 0 6px", fontSize: "20px", fontWeight: "800" },
  kioskSub: { margin: 0, color: "var(--color-text-muted)", fontSize: "14px" },
  form: {},
  inputGroup: { display: "flex", flexDirection: "column", gap: "8px" },
  inputRow: { display: "flex", gap: "12px", alignItems: "stretch", flexWrap: "wrap" },
  inputWrapper: { position: "relative", display: "flex", alignItems: "center", flex: 1, minWidth: "200px" },
  inputIcon: { position: "absolute", left: "14px", fontSize: "18px", pointerEvents: "none" },
  input: { width: "100%", padding: "16px 16px 16px 48px", border: "1.5px solid var(--color-border)", borderRadius: "14px", fontSize: "18px", fontFamily: "var(--font-sans)", outline: "none", background: "#FAFAF9", letterSpacing: "2px", boxSizing: "border-box" },
  inputErr: { borderColor: "#EF4444", background: "#FEF2F2" },
  fieldError: { color: "#EF4444", fontSize: "13px", fontWeight: "600" },
  searchBtn: { padding: "16px 28px", fontSize: "15px", whiteSpace: "nowrap" },
  messageBanner: { marginTop: "20px", padding: "16px 20px", borderRadius: "12px", border: "1px solid", fontSize: "15px", fontWeight: "600" },
  resultsSection: { marginBottom: "32px" },
  resultsTitle: { fontSize: "20px", fontWeight: "800", margin: "0 0 16px" },
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" },
  appointmentCard: { background: "#FFF", border: "1px solid var(--color-border)", borderRadius: "20px", padding: "24px", boxShadow: "var(--shadow-sm)" },
  checkedInCard: { border: "1px solid #A7F3D0", background: "#F0FDF4" },
  aptHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "8px" },
  aptName: { margin: 0, fontSize: "18px", fontWeight: "800" },
  pillSuccess: { background: "#ECFDF5", color: "#065F46", padding: "4px 12px", borderRadius: "var(--radius-pill)", fontSize: "12px", fontWeight: "700" },
  pillPending: { background: "#FEF3C7", color: "#92400E", padding: "4px 12px", borderRadius: "var(--radius-pill)", fontSize: "12px", fontWeight: "700" },
  aptDetails: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" },
  aptDetail: { display: "flex", flexDirection: "column", gap: "2px" },
  aptDetailLabel: { fontSize: "11px", color: "var(--color-text-muted)", textTransform: "uppercase", fontWeight: "600" },
  aptDetailVal: { fontSize: "14px", fontWeight: "700" },
  checkInBtn: { width: "100%", padding: "14px" },
  checkedBanner: { padding: "14px", background: "#ECFDF5", borderRadius: "10px", fontSize: "14px", fontWeight: "600", color: "#065F46", textAlign: "center" },
  howSection: { background: "#FFF", border: "1px solid var(--color-border)", borderRadius: "20px", padding: "32px", boxShadow: "var(--shadow-sm)" },
  howTitle: { fontSize: "20px", fontWeight: "800", margin: "0 0 24px", textAlign: "center" },
  howGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" },
  howCard: { textAlign: "center", padding: "20px" },
  howStepBadge: { width: "32px", height: "32px", borderRadius: "50%", background: "var(--color-primary)", color: "#FFF", fontWeight: "800", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" },
  howIcon: { fontSize: "32px", marginBottom: "12px" },
  howCardTitle: { margin: "0 0 8px", fontSize: "16px", fontWeight: "800" },
  howCardDesc: { margin: 0, fontSize: "14px", color: "var(--color-text-muted)" },
};