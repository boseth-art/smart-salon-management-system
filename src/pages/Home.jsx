import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Scissors,
  Palette,
  Droplets,
  Heart,
  Calendar,
  Monitor,
  Users,
  Package,
  BarChart3,
  MapPin,
  Phone,
  Clock,
  Leaf,
  Trophy,
  ArrowRight,
  Star
} from "lucide-react";

const promotions = [
  {
    icon: Sparkles,
    badge: "Limited Time",
    title: "20% Off Hair Coloring",
    text: "Transform your look with 20% off all premium balayage and full-head coloring this week.",
    discount: "SAVE 20%",
  },
  {
    icon: Heart,
    badge: "Special Package",
    title: "Free Bridal Consultation",
    text: "Book any deluxe bridal package and receive a complimentary trial & skin analysis.",
    discount: "FREE TRIAL",
  },
  {
    icon: Droplets,
    badge: "Trending Spa",
    title: "Keratin & Spa Combo",
    text: "Revitalize damaged hair with deep nourishment and smoothing treatment at 15% off.",
    discount: "SPECIAL COMBO",
  },
  {
    icon: Scissors,
    badge: "Weekday Glam",
    title: "Weekday Blowout & Styling",
    text: "Get party-ready with our signature blow-dry and styling package every Mon-Thu.",
    discount: "FLAT 15% OFF",
  },
];

const services = [
  {
    id: "styling",
    title: "Hair Styling & Cuts",
    tagline: "Precision cuts, blowout & red-carpet styling",
    price: "From $35",
    icon: Scissors,
    link: "/hair-styling",
    popular: true,
  },
  {
    id: "coloring",
    title: "Luxury Hair Coloring",
    tagline: "Balayage, ombre, highlights & root touch-ups",
    price: "From $65",
    icon: Palette,
    link: "/hair-coloring",
    popular: true,
  },
  {
    id: "treatment",
    title: "Scalp & Hair Treatment",
    tagline: "Organic spa, keratin infusion & deep hydration",
    price: "From $50",
    icon: Droplets,
    link: "/hair-treatment",
    popular: false,
  },
  {
    id: "bridal",
    title: "Bridal & Event Makeup",
    tagline: "HD bridal makeup, saree draping & hair setting",
    price: "From $120",
    icon: Heart,
    link: "/bridal-makeup",
    popular: true,
  },
];

const systemFeatures = [
  {
    icon: Calendar,
    title: "Online Booking",
    role: "Clients & Staff",
    description: "Book appointments instantly with your favorite stylist and date slot.",
    link: "/booking",
  },
  {
    icon: Monitor,
    title: "Front Desk Kiosk",
    role: "Front Desk Staff",
    description: "Rapid client check-in, queue management, and service routing.",
    link: "/check-in",
  },
  {
    icon: Users,
    title: "Customer Records",
    role: "Salon Staff",
    description: "Track customer history, preferences, hair allergies & past services.",
    link: "/customers",
  },
  {
    icon: Package,
    title: "Inventory Tracking",
    role: "Store Manager",
    description: "Monitor real-time salon stock levels, color dyes & hair products.",
    link: "/login",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    role: "Management",
    description: "Revenue insights, peak booking hours, and stylist performance metrics.",
    link: "/login",
  },
];

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "8,500+", label: "Happy Clients" },
  { value: "15+", label: "Master Stylists" },
  { value: "4.9 ★", label: "Client Rating" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Home() {
  const [currentPromotion, setCurrentPromotion] = useState(0);

  useEffect(() => {
    const promotionTimer = setInterval(() => {
      setCurrentPromotion((prev) => (prev === promotions.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(promotionTimer);
  }, []);

  const PromoIcon = promotions[currentPromotion].icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="font-sans text-text bg-bg overflow-x-hidden"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-fixed bg-center relative flex items-center px-6 py-24 lg:px-10 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050507]/95 via-[#0A0A0C]/85 to-[#000000]/90 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full mt-10">
          {/* Hero Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUpItem} className="flex flex-wrap gap-3 items-center">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary-dark to-primary text-bg-darker rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/20">
                <Sparkles className="w-4 h-4 inline mr-1 -mt-0.5" />
                Orchid Luxury Smart Salon
              </span>
              <span className="inline-flex items-center gap-1 px-4 py-2 glass text-primary-light rounded-full text-xs font-semibold">
                <Star className="w-3 h-3 fill-primary-light" /> 4.9 Premium Rated
              </span>
            </motion.div>

            <motion.h1 variants={fadeUpItem} className="text-5xl md:text-6xl lg:text-[64px] leading-[1.1] font-extrabold text-white m-0 tracking-tight">
              Elevate Your Natural{" "}
              <span className="block mt-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent">
                Beauty & Style
              </span>
            </motion.h1>

            <motion.p variants={fadeUpItem} className="text-lg lg:text-xl leading-relaxed text-slate-300 m-0 max-w-[580px] font-medium">
              Step into a world of personalized hair care, master styling, and effortless
              smart appointment management tailored to your lifestyle.
            </motion.p>

            {/* Dynamic Glassmorphism Promo Box */}
            <motion.div variants={fadeUpItem} className="mt-4 p-6 glass-card rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase px-3 py-1 bg-primary/20 text-primary-light rounded-xl border border-primary/30">
                    {promotions[currentPromotion].badge}
                  </span>
                  <span className="text-sm font-extrabold text-primary tracking-wide">
                    {promotions[currentPromotion].discount}
                  </span>
                </div>

                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 animate-float">
                    <PromoIcon className="w-8 h-8 text-bg-darker" />
                  </div>
                  <div>
                    <h3 className="m-0 text-xl font-bold text-white mb-1">{promotions[currentPromotion].title}</h3>
                    <p className="m-0 text-sm text-slate-400 leading-snug">{promotions[currentPromotion].text}</p>
                  </div>
                </div>

                <div className="flex gap-2 mt-2">
                  {promotions.map((p, idx) => (
                    <button
                      key={p.title}
                      onClick={() => setCurrentPromotion(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${
                        idx === currentPromotion ? "w-10 bg-primary" : "w-3 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUpItem} className="flex gap-5 flex-wrap mt-6">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-bg-darker rounded-full font-bold text-base shadow-xl shadow-primary/20 inline-flex items-center gap-2 hover:scale-105 hover:shadow-primary/40 transition-all duration-300"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/service-menu"
                className="px-8 py-4 glass text-white rounded-full font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Explore Menu
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-transparent blur-2xl rounded-full opacity-50 animate-pulse" />
            <div className="w-full max-w-md glass-card rounded-3xl overflow-hidden relative z-10 border border-white/10">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                  alt="Orchid Salon Sanctuary"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 glass text-primary-light px-4 py-2 rounded-full text-xs font-bold border border-white/10">
                  Modern Sanctuary
                </div>
              </div>
              <div className="p-8 bg-bg-alt/50 backdrop-blur-md">
                <h3 className="m-0 mb-3 text-2xl font-bold text-white">Luxury Atmosphere</h3>
                <p className="text-sm text-slate-400 leading-relaxed m-0 mb-6">
                  Equipped with ergonomic wash chairs, premium organic formulas, and private bridal dressing suites.
                </p>
                <div className="flex gap-8 pt-5 border-t border-white/10">
                  <div>
                    <strong className="text-xl bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                      100%
                    </strong>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider mt-1">Organic Care</span>
                  </div>
                  <div>
                    <strong className="text-xl bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                      VIP
                    </strong>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider mt-1">Private Rooms</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="bg-bg-dark py-12 px-6 lg:px-10 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-2"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary m-0">{item.value}</h2>
              <p className="text-sm text-slate-400 m-0 font-semibold uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute top-40 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-extrabold uppercase tracking-[2px] text-primary block mb-3">
            Exclusive Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white m-0 mb-5">
            Tailored Beauty Experiences
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto m-0">
            Crafted by certified hair artisans using industry-leading cruelty-free products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, i) => {
            const SvcIcon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={svc.link} className="no-underline group block h-full">
                  <div className="relative glass-card rounded-2xl p-8 flex flex-col gap-4 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
                    
                    {svc.popular && (
                      <span className="absolute top-4 right-4 bg-primary/20 text-primary-light text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider border border-primary/30 z-10">
                        Popular
                      </span>
                    )}
                    <div className="mb-2 relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors duration-300">
                        <SvcIcon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white m-0 relative z-10">{svc.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed m-0 flex-1 relative z-10">{svc.tagline}</p>
                    <div className="flex justify-between items-center pt-5 border-t border-white/10 relative z-10">
                      <span className="text-lg font-extrabold text-primary">{svc.price}</span>
                      <ArrowRight className="w-5 h-5 text-white font-bold group-hover:translate-x-2 group-hover:text-primary transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/service-menu"
            className="px-10 py-4 border border-primary/50 text-primary rounded-full font-bold text-sm hover:bg-primary hover:text-bg-darker transition-all duration-300 tracking-wide uppercase shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            View Full Service & Price Menu
          </Link>
        </motion.div>
      </section>

      {/* ================= SMART SYSTEM FEATURES ================= */}
      <section className="bg-bg-darker py-24 px-6 lg:px-10 relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <span className="text-xs font-extrabold uppercase tracking-[2px] text-primary block mb-3">
            Smart Salon Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white m-0 mb-5">
            Next-Gen Management
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto m-0">
            Seamless digital experience connecting clients, stylists, and salon administration.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {systemFeatures.map((feat, i) => {
            const FeatIcon = feat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={feat.link} className="no-underline group block h-full">
                  <div className="glass bg-[#131317]/50 rounded-2xl p-8 border border-white/5 h-full flex flex-col gap-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/30 group-hover:bg-[#1A1A20]/80">
                    <FeatIcon className="w-9 h-9 text-primary mb-2" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg w-fit uppercase tracking-wider border border-primary/20">
                      {feat.role}
                    </span>
                    <h3 className="text-xl font-bold text-white m-0">{feat.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed m-0">{feat.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= ABOUT SALON ================= */}
      <section className="py-32 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-extrabold uppercase tracking-[2px] text-primary block">
              About Orchid Salon
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white m-0 leading-tight">
              Where Artistry <br/>
              <span className="text-slate-500">Meets Comfort</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed m-0 font-medium">
              Founded with a passion for excellence, Orchid Salon brings together master hair artists,
              aesthetic beauty specialists, and cutting-edge salon tech.
            </p>
            <p className="text-base text-slate-500 leading-relaxed m-0">
              Our commitment to sustainability means we exclusively use non-toxic, vegan hair treatments
              that keep your hair naturally radiant and healthy while protecting the environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              <div className="flex gap-4 items-start p-6 glass-card rounded-2xl">
                <Leaf className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="m-0 mb-2 text-lg font-bold text-white">Eco Formulations</h4>
                  <p className="m-0 text-sm text-slate-400 leading-relaxed">Sulfate-free, vegan & cruelty-free products.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 glass-card rounded-2xl">
                <Trophy className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h4 className="m-0 mb-2 text-lg font-bold text-white">Award-Winning</h4>
                  <p className="m-0 text-sm text-slate-400 leading-relaxed">Top certified hair colorists & bridal stylists.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative z-10 w-full max-w-lg aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                alt="Stylist work"
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= LOCATION & CONTACT ================= */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 lg:px-10 pb-32 max-w-7xl mx-auto"
      >
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-bg-darker/95 via-bg-darker/90 to-primary-dark/40 backdrop-blur-sm" />
          
          <div className="relative z-10 px-6 py-20 md:px-16 md:py-24 text-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
              <span className="text-xs font-extrabold text-primary uppercase tracking-[2px] bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Visit Our Studio
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold m-0 tracking-tight">Orchid Salon & Day Spa</h2>
              <p className="text-lg text-slate-300 m-0 max-w-2xl font-medium">We look forward to welcoming you into our sanctuary of beauty and relaxation.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 text-left">
                <div className="flex flex-col gap-4 glass-card p-8 rounded-3xl group hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="text-lg block mb-2">Location</strong>
                    <p className="m-0 text-sm text-slate-400 leading-relaxed">123 Beauty Street,<br/>Colombo 03, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 glass-card p-8 rounded-3xl group hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="text-lg block mb-2">Contact</strong>
                    <p className="m-0 text-sm text-slate-400 leading-relaxed">+94 77 123 4567<br/>+94 11 987 6543</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 glass-card p-8 rounded-3xl group hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <strong className="text-lg block mb-2">Hours</strong>
                    <p className="m-0 text-sm text-slate-400 leading-relaxed">Monday - Sunday<br/>9:00 AM - 7:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link
                  to="/booking"
                  className="px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-bg-darker rounded-full font-bold text-lg shadow-[0_0_40px_rgba(212,175,55,0.3)] inline-flex items-center gap-3 hover:scale-105 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300"
                >
                  Reserve Appointment Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
