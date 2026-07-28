import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Scissors,
  Palette,
  Droplets,
  Heart,
  ArrowRight,
  Users,
  Award,
  CalendarDays,
} from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "8,500+", label: "Happy Clients", icon: Users },
  { value: "15+", label: "Expert Stylists", icon: Scissors },
  { value: "4.9", label: "Average Rating", icon: Star },
];

const services = [
  { name: "Hair Styling", description: "Cuts, blow dry, styling & finishing", icon: Scissors, link: "/hair-styling" },
  { name: "Hair Coloring", description: "Full color, highlights, balayage & more", icon: Palette, link: "/hair-coloring" },
  { name: "Hair Treatment", description: "Keratin, spa, repair & conditioning", icon: Droplets, link: "/hair-treatment" },
  { name: "Bridal Makeup", description: "Complete bridal packages & home visits", icon: Heart, link: "/bridal-makeup" },
];

const teamMembers = [
  {
    name: "Nethmi Perera",
    role: "Color Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    specialties: ["Balayage", "Fashion Color", "Color Correction"],
  },
  {
    name: "Kavindi Silva",
    role: "Hair Treatment Expert",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    specialties: ["Keratin", "Smoothening", "Scalp Care"],
  },
  {
    name: "Dilini Fernando",
    role: "Bridal Makeup Artist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    specialties: ["Kandyan Bridal", "Western Glam", "Saree Draping"],
  },
];

const operatingHours = [
  { day: "Monday", hours: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
  { day: "Friday", hours: "9:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "10:00 AM – 6:00 PM" },
];

const reviews = [
  {
    name: "Amasha Perera",
    rating: 5,
    text: "Absolutely love my balayage! Nethmi understood exactly what I wanted and the result was stunning. The salon atmosphere is so relaxing too.",
    date: "Jun 2026",
  },
  {
    name: "Tharindu Wickramasinghe",
    rating: 5,
    text: "Best bridal service in Colombo. Dilini did my wife's Kandyan makeup and it was flawless. The home visit service was incredibly convenient.",
    date: "May 2026",
  },
  {
    name: "Rashmi Gunasekara",
    rating: 5,
    text: "My keratin treatment with Kavindi was a game-changer. Hair feels silky smooth and the results have lasted months. Highly recommend!",
    date: "Apr 2026",
  },
];

export default function SalonProfile() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-14">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80"
          alt="Orchid Salon"
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-white text-xs font-bold tracking-wider uppercase mb-3 border border-white/20">
            Est. 2016
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white m-0 mb-2">Orchid Salon</h1>
          <p className="text-white/80 text-sm md:text-base m-0">Premium Hair & Beauty Salon — Colombo, Sri Lanka</p>
        </div>
      </section>

      {/* About + Stats */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">About Orchid Salon</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Orchid Salon is a premium hair and beauty destination in the heart of Colombo. With over a decade of
              experience, we specialize in modern and traditional hair styling, coloring, treatments, and complete
              bridal packages.
            </p>
            <p className="text-text-muted leading-relaxed m-0">
              Our team of 15+ expert stylists are trained in the latest techniques and use only premium products
              to deliver exceptional results every time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div className="p-5 bg-bg-dark text-white rounded-2xl text-center" key={s.label}>
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <h3 className="text-2xl font-extrabold m-0 mb-1">{s.value}</h3>
                  <p className="text-white/60 text-xs font-semibold m-0">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-extrabold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                to={s.link}
                className="p-6 bg-bg-alt border border-border rounded-2xl group hover:border-primary hover:shadow-md transition-all duration-200"
                key={s.name}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-primary-dark" />
                </div>
                <h3 className="text-lg font-bold mb-1">{s.name}</h3>
                <p className="text-text-muted text-sm m-0 mb-3">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-primary-dark font-bold text-sm group-hover:gap-2.5 transition-all duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Team Preview */}
      <section className="mb-16">
        <h2 className="text-2xl font-extrabold text-center mb-8">Meet Our Experts</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {teamMembers.map((member) => (
            <div className="bg-bg-alt border border-border rounded-2xl overflow-hidden" key={member.name}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary-dark text-sm font-semibold m-0 mb-3">{member.role}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 bg-primary/10 text-primary-dark text-[11px] font-bold rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Hours + Contact */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Hours */}
        <div className="bg-bg-alt border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <Clock className="w-5 h-5 text-primary-dark" />
            <h2 className="text-xl font-extrabold m-0">Operating Hours</h2>
          </div>
          <div className="space-y-3">
            {operatingHours.map((h) => (
              <div className="flex justify-between items-center py-2 border-b border-border last:border-0" key={h.day}>
                <span className="text-sm font-semibold">{h.day}</span>
                <span className="text-sm text-text-muted">{h.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-bg-alt border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <Phone className="w-5 h-5 text-primary-dark" />
            <h2 className="text-xl font-extrabold m-0">Contact Us</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold m-0">Address</p>
                <p className="text-sm text-text-muted m-0">45 Galle Road, Colombo 03, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold m-0">Phone</p>
                <p className="text-sm text-text-muted m-0">+94 11 234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold m-0">Email</p>
                <p className="text-sm text-text-muted m-0">info@orchidsalon.lk</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarDays className="w-5 h-5 text-primary-dark shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold m-0">Appointments</p>
                <p className="text-sm text-text-muted m-0">Walk-ins welcome, booking recommended</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mb-16">
        <h2 className="text-2xl font-extrabold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {reviews.map((r, i) => (
            <div className="bg-bg-alt border border-border rounded-2xl p-6" key={i}>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-sm text-text leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">{r.name}</span>
                <span className="text-xs text-text-muted">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
