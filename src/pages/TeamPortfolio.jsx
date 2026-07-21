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
    <div style={styles.page}>
      <section style={styles.hero}>
        <span style={styles.badge}>Orchid Salon Team</span>

        <h1>Stylist & Team Portfolio</h1>

        <p>
          Meet our chairman, salon manager and professional salon team. View
          staff specialties, experience levels, skills and reviews from clients.
        </p>
      </section>

      <section style={styles.searchSection}>
        <input
          type="text"
          placeholder="Search chairman, manager, stylist, specialty, skill or role..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          style={styles.searchInput}
        />

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

      <section style={styles.summarySection}>
        <div style={styles.summaryCard}>
          <h2>{teamMembers.length}</h2>
          <p>Total Team Members</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>2</h2>
          <p>Management Members</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>4+</h2>
          <p>Specialty Areas</p>
        </div>

        <div style={styles.summaryCard}>
          <h2>4.8</h2>
          <p>Average Rating</p>
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
                <h2>{member.name}</h2>
                <p style={styles.role}>{member.role}</p>
              </div>
            </div>

            <div style={styles.infoBox}>
              <p>
                <strong>Department:</strong> {member.specialty}
              </p>

              <p>
                <strong>Experience:</strong> {member.experience}
              </p>

              <p>
                <strong>Work Area:</strong> {member.completedServices}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {member.rating}
              </p>
            </div>

            <div style={styles.skillsBox}>
              <h3>Skills & Responsibilities</h3>

              <div style={styles.skillList}>
                {member.skills.map((skill) => (
                  <span style={styles.skillTag} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div style={styles.reviewBox}>
              <h3>Client / Staff Review</h3>
              <p>"{member.review}"</p>
            </div>

            {member.bookable ? (
              <Link to={stylistBookingLink(member)} style={styles.bookBtn}>
                Book With {member.name.split(" ")[0]}
              </Link>
            ) : (
              <p style={styles.managementText}>Management Profile</p>
            )}
          </div>
        ))}
      </section>

      {filteredTeam.length === 0 && (
        <section style={styles.noResult}>
          <h2>No Team Members Found</h2>
          <p>Please try another search keyword or specialty.</p>
        </section>
      )}
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

  hero: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px",
    background: "#f8f4f0",
    borderRadius: "18px",
    border: "1px solid #ddd",
  },

  badge: {
    display: "inline-block",
    padding: "8px 15px",
    background: "#c59d5f",
    color: "white",
    borderRadius: "20px",
    fontWeight: "bold",
    marginBottom: "12px",
  },

  searchSection: {
    maxWidth: "950px",
    margin: "35px auto",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "14px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },

  searchInput: {
    width: "100%",
    padding: "14px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  filterButtons: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px",
  },

  filterButton: {
    padding: "10px 16px",
    background: "white",
    color: "#111",
    border: "1px solid #ccc",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  activeFilterButton: {
    padding: "10px 16px",
    background: "#111",
    color: "white",
    border: "1px solid #111",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
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

  teamGrid: {
    maxWidth: "1200px",
    margin: "45px auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px",
  },

  profileCard: {
    padding: "28px",
    border: "1px solid #ddd",
    borderRadius: "18px",
    background: "white",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    textAlign: "left",
  },

  managementCard: {
    padding: "28px",
    border: "2px solid #c59d5f",
    borderRadius: "18px",
    background: "#f8f4f0",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    textAlign: "left",
  },

  profileTop: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    paddingBottom: "18px",
    marginBottom: "20px",
  },

  avatar: {
    width: "75px",
    height: "75px",
    borderRadius: "50%",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    flexShrink: 0,
  },

  role: {
    color: "#8b5a2b",
    fontWeight: "bold",
  },

  infoBox: {
    padding: "15px",
    background: "white",
    borderRadius: "12px",
  },

  skillsBox: {
    marginTop: "20px",
  },

  skillList: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px",
  },

  skillTag: {
    padding: "7px 12px",
    background: "#111",
    color: "white",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold",
  },

  reviewBox: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "white",
  },

  bookBtn: {
    display: "inline-block",
    marginTop: "18px",
    padding: "12px 18px",
    background: "#c59d5f",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  managementText: {
    display: "inline-block",
    marginTop: "18px",
    padding: "12px 18px",
    background: "#111",
    color: "white",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  noResult: {
    maxWidth: "650px",
    margin: "40px auto",
    padding: "30px",
    background: "#f8f4f0",
    borderRadius: "14px",
    border: "1px solid #ddd",
  },
};