import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout.jsx";

const INITIAL_CUSTOMERS = [
  { id: 1, name: "Nimali Perera", phone: "0771234567", email: "nimali@gmail.com", service: "Hair Styling", stylist: "Imasha", date: "2026-07-10", notes: "Layer cut customer" },
  { id: 2, name: "Kavindi Silva", phone: "0719876543", email: "kavindi@gmail.com", service: "Hair Coloring", stylist: "Nethmi", date: "2026-07-09", notes: "Root touch-up service" },
];

function validate(data) {
  const errs = {};
  if (!data.name.trim()) errs.name = "Customer name is required.";
  if (!data.phone.trim()) errs.phone = "Phone number is required.";
  else if (!/^[0-9]{10}$/.test(data.phone.trim())) errs.phone = "Phone must be exactly 10 digits.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email address.";
  if (!data.service) errs.service = "Please select a service.";
  return errs;
}

export default function CustomerRecords() {
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", stylist: "", date: "", notes: "" });
  const [errors, setErrors] = useState({});
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    const newCustomer = { id: Date.now(), ...formData };
    setCustomers([newCustomer, ...customers]);
    setSuccessMsg("Customer record added successfully!");
    setTimeout(() => setSuccessMsg(""), 3000);
    setFormData({ name: "", phone: "", email: "", service: "", stylist: "", date: "", notes: "" });
    setErrors({});
    setShowForm(false);
  }

  const filtered = customers.filter((c) => {
    const s = searchText.toLowerCase();
    return c.name.toLowerCase().includes(s) || c.phone.includes(s) || c.service.toLowerCase().includes(s) || (c.stylist || "").toLowerCase().includes(s);
  });

  return (
    <DashboardLayout>
      {/* Header */}
      <div style={styles.pageHeader}>
        <div>
          <h1 style={styles.pageTitle}>Customer Records</h1>
          <p style={styles.pageSub}>Manage customer details, service history, and appointments.</p>
        </div>
        <button className="btn-primary" style={styles.addBtn} onClick={() => setShowForm((p) => !p)}>
          {showForm ? "✕ Cancel" : "+ Add Customer"}
        </button>
      </div>

      {/* Success */}
      {successMsg && (
        <div style={styles.successBanner} className="animate-fade-in">✅ {successMsg}</div>
      )}

      {/* Stats Row */}
      <div style={styles.statsRow}>
        {[
          { label: "Total Customers", value: customers.length, icon: "👥" },
          { label: "This Month", value: customers.filter((c) => c.date?.startsWith("2026-07")).length, icon: "📅" },
          { label: "Services", value: new Set(customers.map((c) => c.service)).size, icon: "💇" },
        ].map((s) => (
          <div key={s.label} style={styles.statCard}>
            <span style={styles.statIcon}>{s.icon}</span>
            <div style={styles.statValue}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Add Form */}
      {showForm && (
        <div style={styles.formCard} className="animate-fade-in">
          <h2 style={styles.formTitle}>New Customer Record</h2>
          <form onSubmit={handleSubmit} style={styles.form} noValidate>
            <div style={styles.formGrid}>
              <Field label="Customer Name *" error={errors.name}>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Full name" style={{ ...inputSt, ...(errors.name ? inputErrSt : {}) }} />
              </Field>
              <Field label="Phone Number *" error={errors.phone}>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="10 digit mobile" style={{ ...inputSt, ...(errors.phone ? inputErrSt : {}) }} />
              </Field>
              <Field label="Email Address" error={errors.email}>
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Optional" style={{ ...inputSt, ...(errors.email ? inputErrSt : {}) }} />
              </Field>
              <Field label="Service *" error={errors.service}>
                <select name="service" value={formData.service} onChange={handleChange} style={{ ...inputSt, ...(errors.service ? inputErrSt : {}) }}>
                  <option value="">Select Service</option>
                  <option>Hair Styling</option>
                  <option>Hair Coloring</option>
                  <option>Hair Treatment</option>
                  <option>Bridal Makeup</option>
                </select>
              </Field>
              <Field label="Stylist">
                <select name="stylist" value={formData.stylist} onChange={handleChange} style={inputSt}>
                  <option value="">Select Stylist</option>
                  <option>Imasha</option>
                  <option>Nethmi</option>
                  <option>Kavindi</option>
                  <option>Ayesha</option>
                </select>
              </Field>
              <Field label="Appointment Date">
                <input name="date" type="date" value={formData.date} onChange={handleChange} style={inputSt} />
              </Field>
            </div>
            <Field label="Special Notes">
              <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Allergy notes, preferences..." style={{ ...inputSt, minHeight: "80px", resize: "vertical" }} />
            </Field>
            <button type="submit" className="btn-primary" style={styles.submitBtn}>Save Customer Record</button>
          </form>
        </div>
      )}

      {/* Search & Table */}
      <div style={styles.tableCard}>
        <div style={styles.tableHeader}>
          <h2 style={styles.tableTitle}>All Customers ({filtered.length})</h2>
          <div style={styles.searchWrapper}>
            <span style={styles.searchIconEl}>🔍</span>
            <input
              type="text"
              placeholder="Search name, phone, service..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                {["Name", "Phone", "Email", "Service", "Stylist", "Date", "Notes"].map((h) => (
                  <th key={h} style={styles.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} style={styles.tr}>
                  <td style={styles.td}><strong style={styles.tdPrimary}>{c.name}</strong></td>
                  <td style={styles.td}>{c.phone}</td>
                  <td style={styles.td}>{c.email || "—"}</td>
                  <td style={styles.td}><span style={styles.serviceBadge}>{c.service}</span></td>
                  <td style={styles.td}>{c.stylist || "—"}</td>
                  <td style={styles.td}>{c.date || "—"}</td>
                  <td style={styles.td}><span style={styles.noteText}>{c.notes || "—"}</span></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} style={{ ...styles.td, textAlign: "center", color: "var(--color-text-muted)", padding: "32px" }}>No records found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--color-text)" }}>{label}</label>
      {children}
      {error && <span style={{ color: "#EF4444", fontSize: "12px", fontWeight: "600" }}>{error}</span>}
    </div>
  );
}

const inputSt = { padding: "11px 14px", border: "1.5px solid var(--color-border)", borderRadius: "10px", fontSize: "14px", fontFamily: "var(--font-sans)", outline: "none", background: "#FAFAF9", width: "100%", boxSizing: "border-box" };
const inputErrSt = { borderColor: "#EF4444", background: "#FEF2F2" };

const styles = {
  pageHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px", flexWrap: "wrap", gap: "16px" },
  pageTitle: { fontSize: "24px", fontWeight: "800", margin: "0 0 4px" },
  pageSub: { color: "var(--color-text-muted)", margin: 0, fontSize: "14px" },
  addBtn: { padding: "12px 24px", fontSize: "14px" },
  successBanner: { padding: "14px 20px", background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "12px", color: "#065F46", fontWeight: "700", marginBottom: "20px" },
  statsRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px", marginBottom: "24px" },
  statCard: { background: "#FFF", border: "1px solid var(--color-border)", borderRadius: "14px", padding: "20px", textAlign: "center", boxShadow: "var(--shadow-sm)" },
  statIcon: { fontSize: "26px", display: "block", marginBottom: "8px" },
  statValue: { fontSize: "28px", fontWeight: "800", color: "var(--color-text)" },
  statLabel: { fontSize: "12px", color: "var(--color-text-muted)", fontWeight: "600", textTransform: "uppercase", marginTop: "4px" },
  formCard: { background: "#FFF", border: "1px solid var(--color-border)", borderRadius: "16px", padding: "28px", marginBottom: "24px", boxShadow: "var(--shadow-sm)" },
  formTitle: { margin: "0 0 24px", fontSize: "18px", fontWeight: "800" },
  form: { display: "flex", flexDirection: "column", gap: "16px" },
  formGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" },
  submitBtn: { alignSelf: "flex-start", padding: "12px 28px" },
  tableCard: { background: "#FFF", border: "1px solid var(--color-border)", borderRadius: "16px", boxShadow: "var(--shadow-sm)", overflow: "hidden" },
  tableHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid var(--color-border)", flexWrap: "wrap", gap: "12px" },
  tableTitle: { margin: 0, fontSize: "16px", fontWeight: "800" },
  searchWrapper: { position: "relative", display: "flex", alignItems: "center" },
  searchIconEl: { position: "absolute", left: "12px", fontSize: "15px", color: "#A8A29E" },
  searchInput: { padding: "10px 12px 10px 36px", border: "1px solid var(--color-border)", borderRadius: "10px", fontSize: "14px", fontFamily: "var(--font-sans)", outline: "none", width: "240px", background: "#FAFAF9" },
  tableWrapper: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", textAlign: "left" },
  th: { padding: "14px 20px", background: "var(--color-bg)", color: "var(--color-text-muted)", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "1px solid var(--color-border)" },
  tr: { borderBottom: "1px solid #F5F5F4", transition: "background 0.15s" },
  td: { padding: "14px 20px", fontSize: "14px", verticalAlign: "middle" },
  tdPrimary: { fontWeight: "700", fontSize: "14px" },
  serviceBadge: { background: "rgba(212,175,55,0.1)", color: "var(--color-primary-dark)", fontWeight: "700", padding: "3px 10px", borderRadius: "var(--radius-pill)", fontSize: "12px" },
  noteText: { color: "var(--color-text-muted)", fontSize: "13px" },
};