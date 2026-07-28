import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Scissors,
  Palette,
  Droplets,
  Heart,
  Sparkles,
  User,
  Star,
} from "lucide-react";

const specialtyIcons = {
  Management: User,
  "Hair Styling": Scissors,
  "Hair Coloring": Palette,
  "Hair Treatment": Droplets,
  "Bridal Makeup": Heart,
};

const teamMembers = [
  {
    id: 1,
    icon: User,
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
    icon: User,
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
    icon: Scissors,
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
    icon: Palette,
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
    icon: Droplets,
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
    icon: Heart,
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
    icon: Sparkles,
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
    icon: Droplets,
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
    <div className="page-container min-h-[80vh]">
      <section className="text-center pt-[60px] pb-10 px-5">
        <span className="badge">Our Expertise</span>
        <h1 className="text-[42px] font-extrabold text-text mb-4 tracking-tight">
          Meet the Artists
        </h1>
        <p className="text-base text-text-muted max-w-[600px] mx-auto">
          Discover the passionate professionals behind Orchid Salon. Browse our
          master stylists, color specialists, and dedicated management team.
        </p>
      </section>

      <section className="flex justify-center gap-6 flex-wrap mb-[50px]">
        <div className="bg-bg-dark text-text-light py-6 px-8 rounded-[--radius-lg] text-center min-w-[200px] shadow-md">
          <h2 className="text-[36px] text-primary m-0 mb-2">
            {teamMembers.length}
          </h2>
          <p className="text-sm m-0 text-white/70 font-semibold uppercase tracking-widest">
            Total Experts
          </p>
        </div>
        <div className="bg-bg-dark text-text-light py-6 px-8 rounded-[--radius-lg] text-center min-w-[200px] shadow-md">
          <h2 className="text-[36px] text-primary m-0 mb-2">4+</h2>
          <p className="text-sm m-0 text-white/70 font-semibold uppercase tracking-widest">
            Specialty Areas
          </p>
        </div>
        <div className="bg-bg-dark text-text-light py-6 px-8 rounded-[--radius-lg] text-center min-w-[200px] shadow-md">
          <h2 className="text-[36px] text-primary m-0 mb-2">4.8</h2>
          <p className="text-sm m-0 text-white/70 font-semibold uppercase tracking-widest">
            Average Rating
          </p>
        </div>
      </section>

      <section className="max-w-[800px] mx-auto mb-[50px]">
        <div className="relative flex items-center shadow-sm rounded-full bg-bg-alt border border-border">
          <Search
            size={18}
            className="absolute left-5 text-text-muted pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search by name, role, or skill..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full py-4 pr-5 pl-[50px] border-none rounded-full text-base bg-transparent outline-none"
          />
        </div>

        <div className="flex gap-2.5 justify-center flex-wrap mt-6">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-5 py-2 rounded-full cursor-pointer font-semibold text-sm border ${
                selectedSpecialty === specialty
                  ? "bg-text text-text-light border-text"
                  : "bg-bg-alt text-text border-border"
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-[30px]">
        {filteredTeam.map((member) => {
          const MemberIcon = member.icon;
          return (
            <div
              className={`p-8 rounded-[--radius-lg] flex flex-col ${
                member.specialty === "Management"
                  ? "bg-gradient-to-b from-bg to-bg-alt border border-primary shadow-[0_10px_25px_rgba(212,175,55,0.1)]"
                  : "bg-bg-alt border border-border shadow-sm transition-all duration-300 hover:shadow-md"
              }`}
              key={member.id}
            >
              <div className="flex gap-5 items-center border-b border-border pb-5 mb-5">
                <div className="w-[70px] h-[70px] rounded-full bg-bg flex items-center justify-center border border-border">
                  <MemberIcon size={32} className="text-text-muted" />
                </div>
                <div>
                  <h2 className="m-0 mb-1 text-xl font-extrabold">
                    {member.name}
                  </h2>
                  <p className="m-0 text-primary-dark font-bold text-sm">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-muted uppercase font-semibold">
                    Department
                  </span>
                  <span className="text-sm font-semibold">
                    {member.specialty}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-muted uppercase font-semibold">
                    Experience
                  </span>
                  <span className="text-sm font-semibold">
                    {member.experience}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-muted uppercase font-semibold">
                    Rating
                  </span>
                  <span className="text-sm font-bold text-primary-dark flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    {member.rating}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-[13px] uppercase text-text-muted m-0 mb-3">
                  Expertise
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {member.skills.map((skill) => (
                    <span
                      className="px-3 py-1.5 bg-bg border border-border text-text rounded-full text-xs font-semibold"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="py-4 px-4 bg-primary/5 border-l-[3px] border-primary rounded-r-lg grow mb-6">
                <p className="m-0 text-sm italic text-text-muted leading-relaxed">
                  &quot;{member.review}&quot;
                </p>
              </div>

              <div className="mt-auto pt-5 border-t border-border text-center">
                {member.bookable ? (
                  <Link
                    to={stylistBookingLink(member)}
                    className="btn-primary w-full py-3 text-sm block"
                  >
                    Book {member.name.split(" ")[0]}
                  </Link>
                ) : (
                  <span className="inline-block py-2.5 px-5 bg-bg-dark text-text-light rounded-full text-[13px] font-bold">
                    Management
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {filteredTeam.length === 0 && (
        <section className="text-center py-[60px] px-5 bg-bg-alt rounded-[--radius-lg] border border-dashed border-border max-w-[600px] mx-auto">
          <h2 className="text-[22px] m-0 mb-2.5">No Team Members Found</h2>
          <p className="text-text-muted m-0">
            Please try another search keyword or specialty.
          </p>
        </section>
      )}
    </div>
  );
}
