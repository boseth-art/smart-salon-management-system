import { useState } from "react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    icon: "👔",
    name: "Mr. Sanjaya Perera",
    role: "Chairman",
    specialty: "Management",
    experience: "10 Years",
    rating: "5.0",
    completedServices: "Business Leadership",
    skills: ["Salon Development", "Business Planning", "Customer Service"],
    review:
      "The chairman provides strong leadership and helps maintain high service quality at Orchid Salon.",
    bookable: false,
  },
  {
    id: 2,
    icon: "👩‍💼",
    name: "Mrs. Tharushi Fernando",
    role: "Salon Manager",
    specialty: "Management",
    experience: "8 Years",
    rating: "4.9",
    completedServices: "Daily Operations",
    skills: ["Staff Management", "Appointment Handling", "Customer Care"],
    review:
      "The manager is friendly and well organized. She makes sure appointments and staff schedules run smoothly.",
    bookable: false,
  },
  {
    id: 3,
    icon: "💇‍♀️",
    name: "Imasha Perera",
    role: "Senior Hair Stylist",
    specialty: "Hair Styling",
    experience: "5 Years",
    rating: "4.9",
    completedServices: "850+",
    skills: ["Layer Cut", "Blow Dry", "Party Hair Style"],
    review:
      "Imasha is very professional and gives perfect haircuts. I always choose her for styling.",
    bookable: true,
  },
  {
    id: 4,
    icon: "🎨",
    name: "Nethmi Silva",
    role: "Hair Color Specialist",
    specialty: "Hair Coloring",
    experience: "4 Years",
    rating: "4.8",
    completedServices: "720+",
    skills: ["Root Touch-up", "Full Hair Color", "Balayage"],
    review:
      "Nethmi did my hair color beautifully. The color looked natural and professional.",
    bookable: true,
  },
  {
    id: 5,
    icon: "🧴",
    name: "Kavindi Fernando",
    role: "Hair Treatment Specialist",
    specialty: "Hair Treatment",
    experience: "6 Years",
    rating: "4.9",
    completedServices: "900+",
    skills: ["Keratin Treatment", "Hair Spa", "Protein Treatment"],
    review:
      "Kavindi explained the treatment clearly and my hair felt very smooth after the session.",
    bookable: true,
  },
  {
    id: 6,
    icon: "👰",
    name: "Ayesha Kumari",
    role: "Bridal Makeup Artist",
    specialty: "Bridal Makeup",
    experience: "7 Years",
    rating: "5.0",
    completedServices: "500+",
    skills: ["Kandyan Bridal", "Traditional Bridal", "Reception Makeup"],
    review:
      "Ayesha made my bridal look beautiful. She was calm, friendly and very talented.",
    bookable: true,
  },
  {
    id: 7,
    icon: "✨",
    name: "Sanduni Jayasinghe",
    role: "Makeup & Styling Artist",
    specialty: "Bridal Makeup",
    experience: "3 Years",
    rating: "4.7",
    completedServices: "420+",
    skills: ["Simple Makeup", "Hair Setting", "Party Makeup"],
    review:
      "Sanduni created a soft and elegant look for my event. I loved the final result.",
    bookable: true,
  },
  {
    id: 8,
    icon: "💆‍♀️",
    name: "Dilini Rathnayake",
    role: "Salon Care Assistant",
    specialty: "Hair Treatment",
    experience: "2 Years",
    rating: "4.6",
    completedServices: "350+",
    skills: ["Hair Wash", "Scalp Massage", "Deep Conditioning"],
    review:
      "Dilini was kind and careful. The treatment session was relaxing and well managed.",
    bookable: true,
  },
];

function stylistBookingLink(member) {
  return `/booking?stylist=${encodeURIComponent(
    member.name
  )}&service=${encodeURIComponent(member.specialty)}`;
}

export default function TeamPortfolio() {
  const [searchText, setSearchText] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = [
    "All",
    "Management",
    "Hair Styling",
    "Hair Coloring",
    "Hair Treatment",
    "Bridal Makeup",
  ];

  const filteredTeam = teamMembers.filter((member) => {
    const search = searchText.toLowerCase();

    const matchesSearch =
      member.name.toLowerCase().includes(search) ||
      member.role.toLowerCase().includes(search) ||
      member.specialty.toLowerCase().includes(search) ||
      member.skills.join(" ").toLowerCase().includes(search);

    const matchesSpecialty =
      selectedSpecialty === "All" || member.specialty === selectedSpecialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="page-container" style={styles.page}>
      <section style={styles.hero}>
        <span className="badge">Our Expertise</span>
        <h1 style={styles.heroTitle}>Meet the Artists</h1>
        <p style={styles.heroSubtext}>
          Discover the passionate professionals behind Orchid Salon. Browse our master stylists, color specialists, and dedicated management team.
        </p>
      </section>

      <section style={styles.summarySection}>
        <div style={styles.summaryCard}>
          <h2 style={styles.summaryValue}>{teamMembers.length}</h2>
          <p style={styles.summaryLabel}>Total Experts</p>
        </div>
        <div style={styles.summaryCard}>
          <h2 style={styles.summaryValue}>4+</h2>
          <p style={styles.summaryLabel}>Specialty Areas</p>
        </div>
        <div style={styles.summaryCard}>
          <h2 style={styles.summaryValue}>4.8</h2>
          <p style={styles.summaryLabel}>Average Rating</p>
        </div>
      </section>

      <section style={styles.searchSection}>
        <div style={styles.searchContainer}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search by name, role, or skill..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.filterButtons}>
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              style={
                selectedSpecialty === specialty
                  ? styles.activeFilterButton
                  : styles.filterButton
              }
            >
              {specialty}
            </button>
          ))}
        </div>
      </section>

      <section style={styles.teamGrid}>
        {filteredTeam.map((member) => (
          <div
            style={
              member.specialty === "Management"
                ? styles.managementCard
                : styles.profileCard
            }
            key={member.id}
          >
            <div style={styles.profileTop}>
              <div style={styles.avatar}>{member.icon}</div>
              <div>
                <h2 style={styles.name}>{member.name}</h2>
                <p style={styles.role}>{member.role}</p>
              </div>
            </div>

            <div style={styles.infoGrid}>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Department</span>
                <span style={styles.infoValue}>{member.specialty}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Experience</span>
                <span style={styles.infoValue}>{member.experience}</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoLabel}>Rating</span>
                <span style={styles.infoValueGold}>★ {member.rating}</span>
              </div>
            </div>

            <div style={styles.skillsBox}>
              <h3 style={styles.sectionHeader}>Expertise</h3>
              <div style={styles.skillList}>
                {member.skills.map((skill) => (
                  <span style={styles.skillTag} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.reviewBox}>
              <p style={styles.reviewText}>"{member.review}"</p>
            </div>

            <div style={styles.cardFooter}>
              {member.bookable ? (
                <Link to={stylistBookingLink(member)} className="btn-primary" style={styles.bookBtn}>
                  Book {member.name.split(" ")[0]}
                </Link>
              ) : (
                <span style={styles.managementBadge}>Management</span>
              )}
            </div>
          </div>
        ))}
      </section>

      {filteredTeam.length === 0 && (
        <section style={styles.noResult}>
          <h2 style={styles.noResultTitle}>No Team Members Found</h2>
          <p style={styles.noResultText}>Please try another search keyword or specialty.</p>
        </section>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "80vh",
  },
  hero: {
    textAlign: "center",
    padding: "60px 20px 40px",
  },
  heroTitle: {
    fontSize: "42px",
    fontWeight: "800",
    color: "var(--color-text)",
    margin: "0 0 16px",
    letterSpacing: "-0.5px",
  },
  heroSubtext: {
    fontSize: "16px",
    color: "var(--color-text-muted)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  summarySection: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap",
    marginBottom: "50px",
  },
  summaryCard: {
    background: "var(--color-bg-dark)",
    color: "var(--color-text-light)",
    padding: "24px 32px",
    borderRadius: "var(--radius-lg)",
    textAlign: "center",
    minWidth: "200px",
    boxShadow: "var(--shadow-md)",
  },
  summaryValue: {
    fontSize: "36px",
    color: "var(--color-primary)",
    margin: "0 0 8px",
  },
  summaryLabel: {
    fontSize: "14px",
    margin: 0,
    color: "rgba(255,255,255,0.7)",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  searchSection: {
    maxWidth: "800px",
    margin: "0 auto 50px",
  },
  searchContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    boxShadow: "var(--shadow-sm)",
    borderRadius: "var(--radius-pill)",
    background: "#FFF",
    border: "1px solid var(--color-border)",
  },
  searchIcon: {
    position: "absolute",
    left: "20px",
    fontSize: "18px",
    color: "#A8A29E",
  },
  searchInput: {
    width: "100%",
    padding: "16px 20px 16px 50px",
    border: "none",
    borderRadius: "var(--radius-pill)",
    fontSize: "16px",
    fontFamily: "var(--font-sans)",
    outline: "none",
    background: "transparent",
  },
  filterButtons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "24px",
  },
  filterButton: {
    padding: "8px 20px",
    background: "white",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-pill)",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },
  activeFilterButton: {
    padding: "8px 20px",
    background: "var(--color-text)",
    color: "white",
    border: "1px solid var(--color-text)",
    borderRadius: "var(--radius-pill)",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "30px",
  },
  profileCard: {
    background: "#FFFFFF",
    padding: "32px",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-sm)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  managementCard: {
    background: "linear-gradient(to bottom, #FDFBF7, #FFFFFF)",
    padding: "32px",
    border: "1px solid var(--color-primary)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "0 10px 25px rgba(212, 175, 55, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  profileTop: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    borderBottom: "1px solid var(--color-border)",
    paddingBottom: "20px",
    marginBottom: "20px",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "var(--color-bg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    border: "1px solid var(--color-border)",
  },
  name: {
    margin: "0 0 4px",
    fontSize: "20px",
    fontWeight: "800",
  },
  role: {
    margin: 0,
    color: "var(--color-primary-dark)",
    fontWeight: "700",
    fontSize: "14px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "24px",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  infoLabel: {
    fontSize: "12px",
    color: "var(--color-text-muted)",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  infoValue: {
    fontSize: "14px",
    fontWeight: "600",
  },
  infoValueGold: {
    fontSize: "14px",
    fontWeight: "700",
    color: "var(--color-primary-dark)",
  },
  skillsBox: {
    marginBottom: "24px",
  },
  sectionHeader: {
    fontSize: "13px",
    textTransform: "uppercase",
    color: "var(--color-text-muted)",
    margin: "0 0 12px",
  },
  skillList: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  skillTag: {
    padding: "6px 12px",
    background: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text)",
    borderRadius: "var(--radius-pill)",
    fontSize: "12px",
    fontWeight: "600",
  },
  reviewBox: {
    padding: "16px",
    background: "rgba(212, 175, 55, 0.05)",
    borderLeft: "3px solid var(--color-primary)",
    borderRadius: "0 8px 8px 0",
    flexGrow: 1,
    marginBottom: "24px",
  },
  reviewText: {
    margin: 0,
    fontSize: "14px",
    fontStyle: "italic",
    color: "var(--color-text-muted)",
    lineHeight: "1.6",
  },
  cardFooter: {
    marginTop: "auto",
    paddingTop: "20px",
    borderTop: "1px solid var(--color-border)",
    textAlign: "center",
  },
  bookBtn: {
    width: "100%",
    padding: "12px",
    fontSize: "14px",
  },
  managementBadge: {
    display: "inline-block",
    padding: "10px 20px",
    background: "var(--color-bg-dark)",
    color: "var(--color-text-light)",
    borderRadius: "var(--radius-pill)",
    fontSize: "13px",
    fontWeight: "700",
  },
  noResult: {
    textAlign: "center",
    padding: "60px 20px",
    background: "#FFFFFF",
    borderRadius: "var(--radius-lg)",
    border: "1px dashed var(--color-border)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  noResultTitle: {
    fontSize: "22px",
    margin: "0 0 10px",
  },
  noResultText: {
    color: "var(--color-text-muted)",
    margin: 0,
  }
};