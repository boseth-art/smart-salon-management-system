import { Link } from "react-router-dom";
import { Scissors, Wind, Sparkles, Gem, ArrowLeft } from "lucide-react";

const fallbackImage =
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80";

const hairServices = [
  {
    title: "Hair Cuts",
    icon: Scissors,
    description: "Modern and classic hair cuts for every style and personality.",
    items: [
      { name: "Basic Hair Cut", price: "Rs. 2,500", image: "/hair/Basic-Hair-Cut.jfif" },
      { name: "Layer Cut", price: "Rs. 3,500", image: "/hair/Layer-Cut.jfif" },
      { name: "Feather Cut", price: "Rs. 4,000", image: "/hair/Feather-Cut.jfif" },
      { name: "Step Cut", price: "Rs. 4,500", image: "/hair/Step-Cut.jfif" },
      { name: "U Cut", price: "Rs. 3,000", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" },
      { name: "V Cut", price: "Rs. 3,200", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
      { name: "Bob Cut", price: "Rs. 5,000", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80" },
      { name: "Pixie Cut", price: "Rs. 5,500", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80" },
      { name: "Wolf Cut", price: "Rs. 6,000", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" },
      { name: "Butterfly Cut", price: "Rs. 6,500", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" },
      { name: "Curtain Bangs", price: "Rs. 3,800", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
      { name: "Fringe Cut", price: "Rs. 2,500", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" },
      { name: "Kids Hair Cut", price: "Rs. 1,800", image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80" },
      { name: "Premium Restyle", price: "Rs. 8,500", image: "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    title: "Blow Dry",
    icon: Wind,
    description: "Smooth and professional blow dry services for every hair length.",
    items: [
      { name: "Short Hair Blow Dry", price: "Rs. 1,500", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80" },
      { name: "Medium Hair Blow Dry", price: "Rs. 2,500", image: "https://images.unsplash.com/photo-1522336284037-91f7da073525?auto=format&fit=crop&w=800&q=80" },
      { name: "Long Hair Blow Dry", price: "Rs. 3,500", image: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=800&q=80" },
      { name: "Volume Blow Dry", price: "Rs. 4,000", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
      { name: "Premium Blow Dry", price: "Rs. 5,000", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    title: "Styling",
    icon: Sparkles,
    description: "Salon styling for casual, party and event occasions.",
    items: [
      { name: "Casual Styling", price: "Rs. 3,000", image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80" },
      { name: "Party Styling", price: "Rs. 5,500", image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=80" },
      { name: "Curl Styling", price: "Rs. 4,500", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
      { name: "Straight Styling", price: "Rs. 4,000", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80" },
      { name: "Bridal Hair Styling", price: "Rs. 12,000", image: "https://images.unsplash.com/photo-1523438097201-512ae7d59c97?auto=format&fit=crop&w=800&q=80" },
      { name: "Premium Event Styling", price: "Rs. 15,000", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    title: "Finishing",
    icon: Gem,
    description: "Final touch-ups and long-lasting salon finish.",
    items: [
      { name: "Hair Setting", price: "Rs. 1,500", image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80" },
      { name: "Shine Finish", price: "Rs. 1,200", image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=800&q=80" },
      { name: "Final Touch-up", price: "Rs. 1,000", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80" },
      { name: "Long-lasting Spray", price: "Rs. 1,800", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
      { name: "Premium Gloss Finish", price: "Rs. 3,000", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" },
    ],
  },
];

function bookingLink(service, category, price) {
  return `/booking?service=${encodeURIComponent(service)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}`;
}

export default function HairStyling() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero */}
      <section className="text-center py-16 px-5 bg-gradient-to-br from-bg to-primary-light/30 rounded-2xl border border-border mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-xs font-bold tracking-wider uppercase mb-4">
          Hair Styling
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Hair Styling Services
        </h1>
        <p className="text-text-muted text-base max-w-[550px] mx-auto mb-8 leading-relaxed">
          Precision cuts, silky blow-drys, party styles & finishing touches — crafted by our master stylists.
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">14+</strong>
            <span className="text-xs text-text-muted font-semibold">Cuts Available</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">5★</strong>
            <span className="text-xs text-text-muted font-semibold">Rated Service</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <strong className="text-2xl font-extrabold text-primary-dark">850+</strong>
            <span className="text-xs text-text-muted font-semibold">Happy Clients</span>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {hairServices.map((service) => {
        const Icon = service.icon;
        return (
          <section className="mb-16" key={service.title}>
            <div className="border-b-2 border-border pb-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="bg-bg border border-border rounded-xl w-14 h-14 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-primary-dark" />
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-1">{service.title}</h2>
                  <p className="text-text-muted text-sm m-0">{service.description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
              {service.items.map((item) => (
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
                    <h3 className="text-base font-bold mb-3">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-[15px] font-extrabold text-primary-dark">{item.price}</span>
                      <Link
                        to={bookingLink(service.title, item.name, item.price)}
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
        );
      })}

      <div className="text-center mt-10 mb-16">
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
