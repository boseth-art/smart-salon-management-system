import { Link } from "react-router-dom";
import { Palette, Paintbrush, Highlighter, Droplets, ArrowLeft, Clock, Lightbulb } from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80";

const coloringServices = [
  { name: "Full Hair Color", price: "Rs. 8,500", duration: "2 hrs", image: "/hair/Full-Hair-Color.jfif" },
  { name: "Root Touch-up", price: "Rs. 4,500", duration: "1 hr", image: "/hair/Root-Touch-up.jfif" },
  { name: "Hair Highlights", price: "Rs. 10,000", duration: "2.5 hrs", image: "/hair/Hair-Highlights.jfif" },
  { name: "Balayage Color", price: "Rs. 18,000", duration: "3 hrs", image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80" },
  { name: "Ombre Color", price: "Rs. 16,000", duration: "3 hrs", image: "/hair/Ombre-Color.jfif" },
  { name: "Global Hair Color", price: "Rs. 12,000", duration: "2 hrs", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
  { name: "Fashion Color", price: "Rs. 15,000", duration: "3 hrs", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
  { name: "Grey Coverage", price: "Rs. 6,500", duration: "1.5 hrs", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
  { name: "Toner / Gloss Color", price: "Rs. 5,500", duration: "1 hr", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" },
  { name: "Color Correction", price: "Rs. 20,000", duration: "4+ hrs", image: "/hair/Color-Correction.jfif" },
];

const categoryIcons = [Palette, Paintbrush, Highlighter, Droplets];

function bookingLink(category, price) {
  return `/booking?service=${encodeURIComponent("Hair Coloring")}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}`;
}

export default function HairColoring() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero */}
      <section className="text-center py-16 px-5 bg-gradient-to-br from-bg to-primary-light/30 rounded-2xl border border-border mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-xs font-bold tracking-wider uppercase mb-4">
          Hair Coloring
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Hair Coloring Services
        </h1>
        <p className="text-text-muted text-base max-w-[560px] mx-auto mb-8 leading-relaxed">
          From subtle root touch-ups to bold fashion colors — our specialists deliver salon-quality results that last.
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">10+</strong>
            <span className="text-xs text-text-muted font-semibold">Color Services</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">720+</strong>
            <span className="text-xs text-text-muted font-semibold">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">Premium</strong>
            <span className="text-xs text-text-muted font-semibold">Products Used</span>
          </div>
        </div>
      </section>

      {/* Tip Banner */}
      <div className="flex items-start gap-3.5 p-5 px-6 bg-primary-light/20 border border-primary/20 rounded-xl mb-12">
        <Lightbulb className="w-5.5 h-5.5 text-primary-dark shrink-0 mt-0.5" />
        <p className="m-0 text-sm text-text leading-relaxed">
          <strong className="text-primary-dark">Pro Tip:</strong> We recommend a consultation before your first color appointment.
          Ask for Nethmi — our resident color specialist!
        </p>
      </div>

      {/* Service Grid */}
      <section>
        <div className="text-center mb-9">
          <h2 className="text-3xl font-extrabold mb-2">All Color Treatments</h2>
          <p className="text-text-muted m-0">Choose from our full range of professional coloring services.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
          {coloringServices.map((item, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                className="rounded-2xl overflow-hidden border border-border bg-bg-alt"
                key={item.name}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-50 object-cover block"
                  onError={(e) => { e.currentTarget.src = fallbackImage; }}
                />
                <div className="p-4.5">
                  <h3 className="text-base font-bold mb-2">{item.name}</h3>
                  <div className="flex items-center gap-1.5 mb-3">
                    <Clock className="w-3.5 h-3.5 text-text-muted" />
                    <span className="text-xs text-text-muted font-semibold">{item.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-extrabold text-primary-dark">{item.price}</span>
                    <Link
                      to={bookingLink(item.name, item.price)}
                      className="bg-primary hover:bg-primary-dark text-text-dark text-xs font-bold px-4 py-2 rounded-lg transition-colors duration-200 shadow-none"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="text-center mt-16 mb-16">
        <Link
          to="/service-menu"
          className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl text-text font-semibold text-sm hover:bg-primary-light hover:text-primary-dark hover:border-bg-dark transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Service Menu
        </Link>
      </div>
    </div>
  );
}
