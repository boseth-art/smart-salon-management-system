import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout.jsx";
import { Users, Plus, Search, X, Phone, Mail, Scissors, Calendar, FileText } from "lucide-react";

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

  const stats = [
    { label: "Total Customers", value: customers.length, icon: Users },
    { label: "This Month", value: customers.filter((c) => c.date?.startsWith("2026-07")).length, icon: Calendar },
    { label: "Services", value: new Set(customers.map((c) => c.service)).size, icon: Scissors },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-extrabold m-0 mb-1">Customer Records</h1>
          <p className="text-text-muted m-0 text-sm">Manage customer details, service history, and appointments.</p>
        </div>
        <button
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-bold text-sm shadow-lg shadow-primary/25 cursor-pointer border-none hover:-translate-y-0.5 transition-all"
          onClick={() => setShowForm((p) => !p)}
        >
          {showForm ? <><X className="w-4 h-4" /> Cancel</> : <><Plus className="w-4 h-4" /> Add Customer</>}
        </button>
      </div>

      {/* Success */}
      {successMsg && (
        <div className="p-3.5 bg-success-bg border border-success-border rounded-xl text-success-text font-bold mb-5 animate-fade-in flex items-center gap-2">
          ✓ {successMsg}
        </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white border border-border rounded-[14px] p-5 text-center shadow-sm">
              <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-[28px] font-extrabold text-text">{s.value}</div>
              <div className="text-xs text-text-muted font-semibold uppercase mt-1">{s.label}</div>
            </div>
          );
        })}
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white border border-border rounded-2xl p-7 mb-6 shadow-sm animate-fade-in">
          <h2 className="m-0 mb-6 text-lg font-extrabold">New Customer Record</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Customer Name *" error={errors.name}>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Full name"
                  className={`w-full py-2.5 px-3.5 border-[1.5px] rounded-[10px] text-sm font-sans outline-none bg-bg-alt box-border ${errors.name ? "border-error bg-error-bg" : "border-border"}`} />
              </Field>
              <Field label="Phone Number *" error={errors.phone}>
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="10 digit mobile"
                  className={`w-full py-2.5 px-3.5 border-[1.5px] rounded-[10px] text-sm font-sans outline-none bg-bg-alt box-border ${errors.phone ? "border-error bg-error-bg" : "border-border"}`} />
              </Field>
              <Field label="Email Address" error={errors.email}>
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Optional"
                  className={`w-full py-2.5 px-3.5 border-[1.5px] rounded-[10px] text-sm font-sans outline-none bg-bg-alt box-border ${errors.email ? "border-error bg-error-bg" : "border-border"}`} />
              </Field>
              <Field label="Service *" error={errors.service}>
                <select name="service" value={formData.service} onChange={handleChange}
                  className={`w-full py-2.5 px-3.5 border-[1.5px] rounded-[10px] text-sm font-sans outline-none bg-bg-alt box-border ${errors.service ? "border-error bg-error-bg" : "border-border"}`}>
                  <option value="">Select Service</option>
                  <option>Hair Styling</option>
                  <option>Hair Coloring</option>
                  <option>Hair Treatment</option>
                  <option>Bridal Makeup</option>
                </select>
              </Field>
              <Field label="Stylist">
                <select name="stylist" value={formData.stylist} onChange={handleChange}
                  className="w-full py-2.5 px-3.5 border-[1.5px] border-border rounded-[10px] text-sm font-sans outline-none bg-bg-alt box-border">
                  <option value="">Select Stylist</option>
                  <option>Imasha</option>
                  <option>Nethmi</option>
                  <option>Kavindi</option>
                  <option>Ayesha</option>
                </select>
              </Field>
              <Field label="Appointment Date">
                <input name="date" type="date" value={formData.date} onChange={handleChange}
                  className="w-full py-2.5 px-3.5 border-[1.5px] border-border rounded-[10px] text-sm font-sans outline-none bg-bg-alt box-border" />
              </Field>
            </div>
            <Field label="Special Notes">
              <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Allergy notes, preferences..."
                className="w-full py-2.5 px-3.5 border-[1.5px] border-border rounded-[10px] text-sm font-sans outline-none bg-bg-alt min-h-[80px] resize-vertical box-border" />
            </Field>
            <button type="submit" className="self-start px-7 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-bold text-sm shadow-lg shadow-primary/25 cursor-pointer border-none hover:-translate-y-0.5 transition-all">
              Save Customer Record
            </button>
          </form>
        </div>
      )}

      {/* Search & Table */}
      <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center px-6 py-5 border-b border-border flex-wrap gap-3">
          <h2 className="m-0 text-base font-extrabold">All Customers ({filtered.length})</h2>
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-text-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search name, phone, service..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="py-2.5 px-3 pl-9 border border-border rounded-[10px] text-sm font-sans outline-none w-60 bg-bg-alt"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {["Name", "Phone", "Email", "Service", "Stylist", "Date", "Notes"].map((h) => (
                  <th key={h} className="px-5 py-3.5 bg-bg text-text-muted text-xs font-bold uppercase tracking-wider border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b border-[#F5F5F4] hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-5 py-3.5 text-sm"><strong className="font-bold">{c.name}</strong></td>
                  <td className="px-5 py-3.5 text-sm">{c.phone}</td>
                  <td className="px-5 py-3.5 text-sm">{c.email || "—"}</td>
                  <td className="px-5 py-3.5 text-sm">
                    <span className="bg-primary/10 text-primary-dark font-bold px-2.5 py-1 rounded-full text-xs">{c.service}</span>
                  </td>
                  <td className="px-5 py-3.5 text-sm">{c.stylist || "—"}</td>
                  <td className="px-5 py-3.5 text-sm">{c.date || "—"}</td>
                  <td className="px-5 py-3.5 text-sm text-text-muted text-[13px]">{c.notes || "—"}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-5 py-8 text-center text-text-muted">No records found.</td></tr>
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
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-text">{label}</label>
      {children}
      {error && <span className="text-error text-xs font-semibold">{error}</span>}
    </div>
  );
}
