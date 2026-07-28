import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { User, Phone, Calendar, Clock } from "lucide-react";

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
    <div className="page-container">
      <div className="text-center mb-[50px]">
        <span className="badge">Reservations</span>
        <h1 className="text-[36px] tracking-tight mb-3 font-extrabold">
          Book Your Experience
        </h1>
        <p className="text-text-muted text-base max-w-[500px] mx-auto">
          Secure your appointment with our master stylists and therapists.
        </p>
      </div>

      <div className="flex flex-col gap-[50px] items-center">
        <div className="w-full max-w-[700px]">
          <div className="glass-panel p-10">
            {(formData.service || formData.category || formData.price) && (
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 mb-[30px]">
                <h4 className="m-0 mb-3 text-sm uppercase tracking-widest text-primary-dark font-semibold">
                  Selected Service
                </h4>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
                  <div>
                    <small className="text-text-muted">Category</small>
                    <p className="font-semibold">{formData.service || "N/A"}</p>
                  </div>
                  <div>
                    <small className="text-text-muted">Treatment</small>
                    <p className="font-semibold">
                      {formData.category || "N/A"}
                    </p>
                  </div>
                  <div>
                    <small className="text-text-muted">Price</small>
                    <p className="font-extrabold text-primary-dark">
                      {formData.price || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleBooking} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                  />
                  <input
                    type="text"
                    name="customerName"
                    placeholder="e.g. Jane Doe"
                    value={formData.customerName}
                    onChange={handleChange}
                    className={`w-full py-3.5 pl-10 pr-4 rounded-xl border bg-stone-50 text-[15px] outline-none transition-all duration-200 ${
                      errors.customerName
                        ? "border-error bg-error-bg"
                        : "border-border"
                    }`}
                  />
                </div>
                {errors.customerName && (
                  <span className="text-error text-xs font-semibold">
                    {errors.customerName}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-text">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="10 digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full py-3.5 pl-10 pr-4 rounded-xl border bg-stone-50 text-[15px] outline-none transition-all duration-200 ${
                      errors.phone
                        ? "border-error bg-error-bg"
                        : "border-border"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <span className="text-error text-xs font-semibold">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-text">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full py-3.5 px-4 rounded-xl border bg-stone-50 text-[15px] outline-none transition-all duration-200 ${
                      errors.service
                        ? "border-error bg-error-bg"
                        : "border-border"
                    }`}
                  >
                    <option value="">Select Option</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                    <option value="Hair Treatment">Hair Treatment</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                  </select>
                  {errors.service && (
                    <span className="text-error text-xs font-semibold">
                      {errors.service}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-text">
                    Preferred Stylist
                  </label>
                  <select
                    name="stylist"
                    value={formData.stylist}
                    onChange={handleChange}
                    className="w-full py-3.5 px-4 rounded-xl border border-border bg-stone-50 text-[15px] outline-none transition-all duration-200"
                  >
                    <option value="">Any Available</option>
                    <option value="Imasha">Imasha</option>
                    <option value="Nethmi">Nethmi</option>
                    <option value="Kavindi">Kavindi</option>
                    <option value="Ayesha">Ayesha</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-text">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                    />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full py-3.5 pl-10 pr-4 rounded-xl border bg-stone-50 text-[15px] outline-none transition-all duration-200 ${
                        errors.date
                          ? "border-error bg-error-bg"
                          : "border-border"
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <span className="text-error text-xs font-semibold">
                      {errors.date}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-text">
                    Time
                  </label>
                  <div className="relative">
                    <Clock
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full py-3.5 pl-10 pr-4 rounded-xl border bg-stone-50 text-[15px] outline-none transition-all duration-200 ${
                        errors.time
                          ? "border-error bg-error-bg"
                          : "border-border"
                      }`}
                    />
                  </div>
                  {errors.time && (
                    <span className="text-error text-xs font-semibold">
                      {errors.time}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary mt-4 w-full py-4"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>

        {bookings.length > 0 && (
          <div className="w-full max-w-[1000px]">
            <div className="mb-6">
              <h2 className="text-2xl mb-1 font-bold">Your Bookings</h2>
              <p className="text-text-muted m-0 text-sm">
                Track your upcoming and past appointments.
              </p>
            </div>

            <div className="bg-bg-alt rounded-2xl border border-border shadow-sm overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-bg text-text-muted font-semibold text-xs uppercase tracking-wider border-b border-border">
                      Details
                    </th>
                    <th className="py-4 px-6 bg-bg text-text-muted font-semibold text-xs uppercase tracking-wider border-b border-border">
                      Stylist
                    </th>
                    <th className="py-4 px-6 bg-bg text-text-muted font-semibold text-xs uppercase tracking-wider border-b border-border">
                      Schedule
                    </th>
                    <th className="py-4 px-6 bg-bg text-text-muted font-semibold text-xs uppercase tracking-wider border-b border-border">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-b border-stone-100"
                    >
                      <td className="py-4 px-6 align-middle">
                        <div className="font-semibold text-[15px] text-text mb-1">
                          {booking.customerName}
                        </div>
                        <div className="text-[13px] text-text-muted">
                          {booking.category || booking.service}
                        </div>
                      </td>
                      <td className="py-4 px-6 align-middle">
                        <div className="font-semibold text-[15px] text-text mb-1">
                          {booking.stylist || "Any"}
                        </div>
                      </td>
                      <td className="py-4 px-6 align-middle">
                        <div className="font-semibold text-[15px] text-text mb-1">
                          {booking.date}
                        </div>
                        <div className="text-[13px] text-text-muted">
                          {booking.time}
                        </div>
                      </td>
                      <td className="py-4 px-6 align-middle">
                        <span
                          className={`inline-block py-1.5 px-3 rounded-full text-xs font-bold ${
                            booking.status === "Arrived / Checked-In"
                              ? "bg-success-bg text-success-text"
                              : "bg-warning-bg text-warning-text"
                          }`}
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
