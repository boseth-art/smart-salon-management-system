import { Link } from "react-router-dom";
import { Droplets, Shield, FlaskConical, Leaf, ArrowLeft, Clock, CheckCircle } from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80";

const treatmentServices = [
  { name: "Keratin Treatment", price: "Rs. 18,000", duration: "3 hrs", tag: "Best Seller", image: "/hair/Keratin-Treatment.jfif" },
  { name: "Protein Treatment", price: "Rs. 12,000", duration: "2 hrs", tag: "", image: "/hair/Protein-Treatment.jfif" },
  { name: "Hair Spa Treatment", price: "Rs. 8,500", duration: "1.5 hrs", tag: "", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80" },
  { name: "Scalp Treatment", price: "Rs. 7,500", duration: "1 hr", tag: "", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
  { name: "Anti-Dandruff Treatment", price: "Rs. 6,500", duration: "1 hr", tag: "", image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=800&q=80" },
  { name: "Hair Fall Control", price: "Rs. 9,500", duration: "1.5 hrs", tag: "", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" },
  { name: "Deep Conditioning", price: "Rs. 5,500", duration: "1 hr", tag: "", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
  { name: "Smoothening Treatment", price: "Rs. 20,000", duration: "3.5 hrs", tag: "Popular", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
  { name: "Rebonding Treatment", price: "Rs. 22,000", duration: "4 hrs", tag: "", image: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=800&q=80" },
  { name: "Olaplex Repair", price: "Rs. 15,000", duration: "2 hrs", tag: "Premium", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" },
  { name: "Hot Oil Treatment", price: "Rs. 4,500", duration: "45 mins", tag: "", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
  { name: "Premium Repair Package", price: "Rs. 28,000", duration: "5 hrs", tag: "Luxury", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
];

const benefits = [
  { icon: Leaf, title: "Natural Products", desc: "We use only premium, gentle products on your hair." },
  { icon: FlaskConical, title: "Expert Analysis", desc: "Each treatment starts with a free hair health analysis." },
  { icon: CheckCircle, title: "Long-lasting Results", desc: "Treatments are designed to last months, not days." },
];

function bookingLink(category, price) {
  return `/booking?service=${encodeURIComponent("Hair Treatment")}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}`;
}

export default function HairTreatment() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero */}
      <section className="text-center py-16 px-5 bg-gradient-to-br from-bg to-primary-light/30 rounded-2xl border border-border mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-xs font-bold tracking-wider uppercase mb-4">
          Hair Treatment
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Hair Treatment Services
        </h1>
        <p className="text-text-muted text-base max-w-[560px] mx-auto mb-8 leading-relaxed">
          Restore, repair, and transform your hair. Our expert therapists use only premium products for lasting results.
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">12+</strong>
            <span className="text-xs text-text-muted font-semibold">Treatments</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">900+</strong>
            <span className="text-xs text-text-muted font-semibold">Sessions Done</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">Kavindi</strong>
            <span className="text-xs text-text-muted font-semibold">Lead Specialist</span>
          </div>
        </div>
      </section>

      {/* Benefits Row */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 mb-12">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              className="flex gap-4 items-start p-5 px-6 bg-bg-alt border border-border rounded-xl"
              key={b.title}
            >
              <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary-dark" />
              </span>
              <div>
                <strong className="block text-[15px] mb-1">{b.title}</strong>
                <p className="m-0 text-xs text-text-muted leading-relaxed">{b.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Grid */}
      <section>
        <div className="text-center mb-9">
          <h2 className="text-3xl font-extrabold mb-2">All Hair Treatments</h2>
          <p className="text-text-muted m-0">From routine care to intensive repair — find your perfect treatment.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
          {treatmentServices.map((item) => (
            <div
              className="rounded-2xl overflow-hidden border border-border bg-bg-alt"
              key={item.name}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-50 object-cover block"
                  onError={(e) => { e.currentTarget.src = fallbackImage; }}
                />
                {item.tag && (
                  <span className="absolute top-3 left-3 bg-primary text-text-dark text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                )}
              </div>
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
          ))}
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
