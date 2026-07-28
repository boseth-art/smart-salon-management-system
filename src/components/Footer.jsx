import { Link } from "react-router-dom";
import { Scissors, MapPin, Phone, Mail, Clock, Globe, AtSign, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white/70 mt-auto">
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <h3 className="m-0 text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Scissors className="w-5 h-5 text-primary" /> Orchid Salon
          </h3>
          <p className="m-0 text-sm leading-relaxed text-white/55 max-w-[280px]">
            Where beauty meets luxury. Sri Lanka's premier destination for hair,
            bridal, and wellness services.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="text-white/50 hover:text-primary transition-colors" aria-label="Facebook">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-primary transition-colors" aria-label="Instagram">
              <AtSign className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/50 hover:text-primary transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider m-0 mb-2">Services</h4>
          <Link to="/hair-styling" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Hair Styling</Link>
          <Link to="/hair-coloring" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Hair Coloring</Link>
          <Link to="/hair-treatment" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Hair Treatment</Link>
          <Link to="/bridal-makeup" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Bridal Makeup</Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider m-0 mb-2">Quick Links</h4>
          <Link to="/" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Home</Link>
          <Link to="/team" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Our Team</Link>
          <Link to="/gallery" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Gallery</Link>
          <Link to="/blog" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Blog</Link>
          <Link to="/booking" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Book Now</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider m-0 mb-2">Contact Us</h4>
          <p className="m-0 text-sm text-white/55 flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> 123 Flower Road, Colombo 7
          </p>
          <p className="m-0 text-sm text-white/55 flex items-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" /> +94 11 234 5678
          </p>
          <p className="m-0 text-sm text-white/55 flex items-center gap-2">
            <Mail className="w-4 h-4 flex-shrink-0" /> hello@orchidsalon.lk
          </p>
          <p className="m-0 text-sm text-white/55 flex items-center gap-2">
            <Clock className="w-4 h-4 flex-shrink-0" /> Mon–Sat: 9AM – 7PM
          </p>
        </div>
      </div>

      <div className="border-t border-white/8 max-w-7xl mx-auto px-10 py-5 flex justify-between items-center flex-wrap gap-3">
        <p className="m-0 text-xs text-white/35">
          © {new Date().getFullYear()} Orchid Salon. All rights reserved.
        </p>
        <p className="m-0 text-xs text-white/35">
          Crafted with care in Sri Lanka
        </p>
      </div>
    </footer>
  );
}
