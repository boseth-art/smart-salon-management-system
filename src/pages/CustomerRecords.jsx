import { useState } from "react";

export default function CustomerRecords() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Nimali Perera",
      phone: "0771234567",
      email: "nimali@gmail.com",
      service: "Hair Styling",
      stylist: "Imasha",
      date: "2026-07-10",
      notes: "Layer cut customer",
    },
    {
      id: 2,
      name: "Kavindi Silva",
      phone: "0719876543",
      email: "kavindi@gmail.com",
      service: "Hair Coloring",
      stylist: "Nethmi",
      date: "2026-07-09",
      notes: "Root touch-up service",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    stylist: "",
    date: "",
    notes: "",
  });

  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please enter customer name, phone number and service.");
      return;
    }

    const newCustomer = {
      id: Date.now(),
      ...formData,
    };

    setCustomers([newCustomer, ...customers]);

    alert("Customer record added successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      stylist: "",
      date: "",
      notes: "",
    });
  }

  const filteredCustomers = customers.filter((customer) => {
    const search = searchText.toLowerCase();

    return (
      customer.name.toLowerCase().includes(search) ||
      customer.phone.toLowerCase().includes(search) ||
      customer.service.toLowerCase().includes(search) ||
      customer.stylist.toLowerCase().includes(search)
    );
  });

  return (
    <div style={styles.page}>
      <h1>Customer Records</h1>
      <p>
        Store and manage customer details, service history, appointment dates and
        stylist information.
      </p>

      <section style={styles.summarySection}>
        <div style={styles.summaryCard}>
          <h2>{customers.length}</h2>
          <p>Total Customers</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>CRM</h2>
          <p>Customer History</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>Digital</h2>
          <p>No Manual Records</p>
        </div>
      </section>

      <section style={styles.formSection}>
        <h2>Add Customer Record</h2>

        <form style={styles.form} onSubmit={handleSubmit}>
          <label>Customer Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter customer name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Phone Number *</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

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

          <label>Appointment Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Special Notes</label>
          <textarea
            name="notes"
            placeholder="Example: preferred stylist, allergy notes, previous service details"
            value={formData.notes}
            onChange={handleChange}
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.btn}>
            Add Customer Record
          </button>
        </form>
      </section>

      <section style={styles.recordsSection}>
        <h2>Saved Customer Records</h2>

        <input
          type="text"
          placeholder="Search by name, phone, service or stylist..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Service</th>
                <th style={styles.th}>Stylist</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Notes</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td style={styles.td}>{customer.name}</td>
                  <td style={styles.td}>{customer.phone}</td>
                  <td style={styles.td}>{customer.email || "-"}</td>
                  <td style={styles.td}>{customer.service}</td>
                  <td style={styles.td}>{customer.stylist || "-"}</td>
                  <td style={styles.td}>{customer.date || "-"}</td>
                  <td style={styles.td}>{customer.notes || "-"}</td>
                </tr>
              ))}

              {filteredCustomers.length === 0 && (
                <tr>
                  <td style={styles.td} colSpan="7">
                    No customer records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
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

  summarySection: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px",
  },

  summaryCard: {
    width: "220px",
    padding: "22px",
    borderRadius: "14px",
    background: "#111",
    color: "white",
  },

  formSection: {
    marginTop: "50px",
  },

  form: {
    maxWidth: "600px",
    margin: "25px auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textAlign: "left",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    background: "white",
  },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
  },

  textarea: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "15px",
    minHeight: "90px",
    resize: "vertical",
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

  recordsSection: {
    marginTop: "55px",
  },

  searchInput: {
    maxWidth: "600px",
    width: "100%",
    padding: "13px",
    margin: "20px auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "15px",
  },

  tableWrapper: {
    overflowX: "auto",
    maxWidth: "1200px",
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
};