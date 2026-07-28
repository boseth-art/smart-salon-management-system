import { Link } from "react-router-dom";
import { Heart, Sparkles, Crown, Gift, CircleDot, Star, Scissors, Shirt, Gem, CheckCircle, ArrowLeft } from "lucide-react";

const bridalServices = [
  {
    icon: Heart,
    name: "Simple Bridal Makeup",
    price: "Rs. 18,000",
    duration: "2 hours",
    features: ["Natural makeup", "Basic hair setting", "Simple dressing"],
  },
  {
    icon: Sparkles,
    name: "Traditional Bridal Makeup",
    price: "Rs. 25,000",
    duration: "3 hours",
    features: ["Traditional makeup", "Hair styling", "Jewellery setting"],
  },
  {
    icon: Crown,
    name: "Kandyan Bridal Makeup",
    price: "Rs. 35,000",
    duration: "4 hours",
    features: ["Kandyan dressing", "Full bridal makeup", "Hair arrangement"],
  },
  {
    icon: Star,
    name: "Western Bridal Makeup",
    price: "Rs. 30,000",
    duration: "3 hours",
    features: ["Western makeup look", "Soft glam finish", "Hair styling"],
  },
  {
    icon: CircleDot,
    name: "Engagement Makeup",
    price: "Rs. 20,000",
    duration: "2.5 hours",
    features: ["Engagement makeup", "Hair styling", "Dress support"],
  },
  {
    icon: Gift,
    name: "Reception Makeup",
    price: "Rs. 22,000",
    duration: "2.5 hours",
    features: ["Reception look", "Evening makeup", "Hair touch-up"],
  },
  {
    icon: Scissors,
    name: "Bridal Hair Styling",
    price: "Rs. 12,000",
    duration: "1.5 hours",
    features: ["Bridal bun", "Curl styling", "Hair accessories support"],
  },
  {
    icon: Shirt,
    name: "Bridal Dressing",
    price: "Rs. 15,000",
    duration: "2 hours",
    features: ["Dress arrangement", "Saree support", "Final finishing"],
  },
  {
    icon: Gem,
    name: "Bridal Saree Draping",
    price: "Rs. 8,000",
    duration: "1 hour",
    features: ["Saree draping", "Pleating", "Pinning and finishing"],
  },
  {
    icon: Gem,
    name: "Full Bridal Package",
    price: "Rs. 55,000",
    duration: "5 hours",
    features: ["Makeup", "Hair styling", "Dressing", "Final touch-up"],
  },
  {
    icon: Crown,
    name: "Premium Bridal Package",
    price: "Rs. 75,000",
    duration: "6 hours",
    features: ["Premium makeup", "Premium hair styling", "Full dressing"],
  },
  {
    icon: Gift,
    name: "Home Visit Bridal Service",
    price: "Rs. 90,000",
    duration: "Flexible",
    features: ["Home visit", "Full bridal service", "Travel included"],
  },
];

function bookingLink(category, price) {
  return `/booking?service=${encodeURIComponent("Bridal Makeup")}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}`;
}

export default function BridalMakeup() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero */}
      <section className="text-center py-16 px-5 bg-gradient-to-br from-bg to-primary-light/30 rounded-2xl border border-border mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-xs font-bold tracking-wider uppercase mb-4">
          Bridal Makeup
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Bridal Makeup Services
        </h1>
        <p className="text-text-muted text-base max-w-[560px] mx-auto leading-relaxed">
          Professional bridal makeup, dressing, hair styling and complete bridal packages for your special day.
        </p>
      </section>

      {/* Stats */}
      <section className="flex justify-center gap-5 flex-wrap mb-14">
        <div className="w-56 p-5 rounded-2xl bg-bg-dark text-white text-center">
          <h2 className="text-3xl font-extrabold m-0 mb-1">12+</h2>
          <p className="m-0 text-sm text-white/70">Bridal Packages</p>
        </div>
        <div className="w-56 p-5 rounded-2xl bg-bg-dark text-white text-center">
          <h2 className="text-3xl font-extrabold m-0 mb-1">Premium</h2>
          <p className="m-0 text-sm text-white/70">Makeup Quality</p>
        </div>
        <div className="w-56 p-5 rounded-2xl bg-bg-dark text-white text-center">
          <h2 className="text-3xl font-extrabold m-0 mb-1">Home Visit</h2>
          <p className="m-0 text-sm text-white/70">Available</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-14">
        <h2 className="text-3xl font-extrabold text-center mb-8">Choose Your Bridal Package</h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 max-w-6xl mx-auto">
          {bridalServices.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="p-6 border border-border rounded-2xl bg-bg-alt shadow-sm"
                key={item.name}
              >
                <div className="w-[70px] h-[70px] mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-dark" />
                </div>

                <h3 className="text-lg font-bold text-center mb-3">{item.name}</h3>

                <p className="text-xl font-bold text-primary-dark text-center m-0">{item.price}</p>
                <p className="text-sm text-text-muted font-semibold text-center mt-1 mb-0">Duration: {item.duration}</p>

                <ul className="list-none p-0 mt-5 mb-0 space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={bookingLink(item.name, item.price)}
                  className="block text-center mt-5 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors duration-200"
                >
                  Book Now
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Note */}
      <section className="max-w-3xl mx-auto p-8 bg-primary-light/20 rounded-2xl border border-primary/20 mb-10 text-center">
        <h2 className="text-2xl font-extrabold mb-3">Why Choose Orchid Salon?</h2>
        <p className="text-text-muted leading-relaxed m-0">
          Orchid Salon provides organized bridal services with appointment
          booking, service category selection, price display and staff scheduling
          support through the Smart Salon Management System.
        </p>
      </section>

      <div className="text-center mb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text font-bold hover:text-primary-dark transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
