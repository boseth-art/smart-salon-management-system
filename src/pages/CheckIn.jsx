import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout.jsx";
import { ScanLine, Phone, Search, CheckCircle, Clock, AlertTriangle, Info } from "lucide-react";

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
  const [message, setMessage] = useState(null);
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
    await new Promise((r) => setTimeout(r, 500));
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
    setMessage({ type: "success", text: "Check-in successful! Your stylist has been notified. Please take a seat." });
  }

  const msgStyles = {
    success: "bg-success-bg border-success-border text-success-text",
    error: "bg-error-bg border-error-border text-error-text",
    info: "bg-info-bg border-info-border text-info-text",
  };

  const msgIcons = {
    success: <CheckCircle className="w-4 h-4 flex-shrink-0" />,
    error: <AlertTriangle className="w-4 h-4 flex-shrink-0" />,
    info: <Info className="w-4 h-4 flex-shrink-0" />,
  };

  const stats = [
    { label: "Total Bookings", value: bookings.length, icon: Clock },
    { label: "Checked In Today", value: bookings.filter((b) => b.status === "Arrived / Checked-In").length, icon: CheckCircle },
    { label: "Pending", value: bookings.filter((b) => b.status !== "Arrived / Checked-In").length, icon: Clock },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-extrabold m-0 mb-1">Self Check-In Kiosk</h1>
          <p className="text-text-muted m-0 text-sm">Customers enter their phone number to find and confirm their appointment.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-success-bg border border-success-border rounded-full">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-[13px] font-bold text-success-text">Kiosk Live</span>
        </div>
      </div>

      {/* Stats */}
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

      {/* Kiosk Panel */}
      <div className="bg-white/85 backdrop-blur-xl border border-white/50 rounded-2xl p-8 mb-8 shadow-md">
        <div className="flex gap-4 items-start mb-7">
          <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
            <ScanLine className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="m-0 mb-1.5 text-xl font-extrabold">Enter Your Phone Number</h2>
            <p className="m-0 text-sm text-text-muted">Use the phone number you provided when booking your appointment.</p>
          </div>
        </div>

        <form onSubmit={handleSearch} noValidate>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-stretch flex-wrap">
              <div className="relative flex items-center flex-1 min-w-[200px]">
                <Phone className="absolute left-3.5 w-5 h-5 text-text-muted pointer-events-none" />
                <input
                  type="tel"
                  placeholder="e.g. 0771234567"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); if (phoneError) setPhoneError(""); }}
                  className={`w-full py-4 pl-12 pr-4 border-[1.5px] rounded-[14px] text-lg font-sans outline-none bg-[#FAFAF9] tracking-wider box-border ${
                    phoneError ? "border-error bg-error-bg" : "border-border"
                  }`}
                  maxLength={10}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-bold text-[15px] shadow-lg shadow-primary/25 cursor-pointer border-none whitespace-nowrap disabled:opacity-70 hover:-translate-y-0.5 transition-all"
              >
                {loading ? "Searching..." : "Find Appointment →"}
              </button>
            </div>
            {phoneError && <span className="text-error text-[13px] font-semibold flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5" /> {phoneError}</span>}
          </div>
        </form>

        {/* Message */}
        {message && (
          <div className={`mt-5 p-4 rounded-xl border font-semibold text-[15px] flex items-center gap-2.5 animate-fade-in ${msgStyles[message.type]}`}>
            {msgIcons[message.type]} {message.text}
          </div>
        )}
      </div>

      {/* Results */}
      {matched.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-extrabold m-0 mb-4">Your Appointments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {matched.map((b) => {
              const isCheckedIn = b.status === "Arrived / Checked-In";
              return (
                <div
                  key={b.id}
                  className={`bg-white border rounded-2xl p-6 shadow-sm animate-fade-in ${
                    isCheckedIn ? "border-success-border bg-success-bg/30" : "border-border"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                    <h3 className="m-0 text-lg font-extrabold">{b.customerName}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${isCheckedIn ? "bg-success-bg text-success-text" : "bg-warning-bg text-warning-text"}`}>
                      {isCheckedIn ? "✓ Checked In" : "⏳ Pending"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { label: "Service", value: b.category || b.service },
                      { label: "Stylist", value: b.stylist || "Any available" },
                      { label: "Date", value: b.date },
                      { label: "Time", value: b.time },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex flex-col gap-0.5">
                        <span className="text-[11px] text-text-muted uppercase font-semibold">{label}</span>
                        <span className="text-sm font-bold">{value}</span>
                      </div>
                    ))}
                    {b.price && (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[11px] text-text-muted uppercase font-semibold">Price</span>
                        <span className="text-sm font-extrabold text-primary-dark">{b.price}</span>
                      </div>
                    )}
                  </div>
                  {!isCheckedIn ? (
                    <button
                      className="w-full py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 cursor-pointer border-none hover:-translate-y-0.5 transition-all"
                      onClick={() => handleCheckIn(b.id)}
                    >
                      Confirm Check-In ✓
                    </button>
                  ) : (
                    <div className="p-3.5 bg-success-bg rounded-xl text-sm font-semibold text-success-text text-center">
                      Your stylist has been notified. Please take a seat.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="bg-white border border-border rounded-2xl p-8 shadow-sm">
        <h2 className="text-xl font-extrabold m-0 mb-6 text-center">How Check-In Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { step: "1", icon: Phone, title: "Enter Phone", desc: "Type the 10-digit number you used when booking." },
            { step: "2", icon: Search, title: "Find Appointment", desc: "We look up your booking details instantly." },
            { step: "3", icon: CheckCircle, title: "Confirm Arrival", desc: "Click Check-In and your stylist is notified." },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="text-center p-5">
                <div className="w-8 h-8 rounded-full bg-primary text-white font-extrabold text-sm flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="m-0 mb-2 text-base font-extrabold">{s.title}</h3>
                <p className="m-0 text-sm text-text-muted">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </DashboardLayout>
  );
}
