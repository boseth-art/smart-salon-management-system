import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search as SearchIcon,
  Clock,
  Scissors,
  Palette,
  Droplets,
  Heart,
} from "lucide-react";

const serviceIconMap = {
  "Hair Styling": Scissors,
  "Hair Coloring": Palette,
  "Hair Treatment": Droplets,
  "Bridal Makeup": Heart,
};

const services = [
  {
    id: 1,
    service: "Hair Styling",
    category: "Basic Hair Cut",
    price: "Rs. 2,000",
    duration: "30 mins",
    description: "Simple haircut and finishing for daily styling.",
    page: "/hair-styling",
  },
  {
    id: 2,
    service: "Hair Styling",
    category: "Layer Cut",
    price: "Rs. 3,500",
    duration: "45 mins",
    description: "Modern layered haircut with professional finishing.",
    page: "/hair-styling",
  },
  {
    id: 3,
    service: "Hair Styling",
    category: "Blow Dry",
    price: "Rs. 2,500",
    duration: "30 mins",
    description: "Smooth blow dry styling for a clean salon finish.",
    page: "/hair-styling",
  },
  {
    id: 4,
    service: "Hair Styling",
    category: "Party Hair Style",
    price: "Rs. 6,000",
    duration: "1 hr",
    description: "Special hairstyle for parties, functions and events.",
    page: "/hair-styling",
  },
  {
    id: 5,
    service: "Hair Coloring",
    category: "Root Touch-up",
    price: "Rs. 4,500",
    duration: "1 hr",
    description: "Color touch-up service for hair roots.",
    page: "/hair-coloring",
  },
  {
    id: 6,
    service: "Hair Coloring",
    category: "Full Hair Color",
    price: "Rs. 8,500",
    duration: "2 hrs",
    description: "Complete hair coloring service with professional products.",
    page: "/hair-coloring",
  },
  {
    id: 7,
    service: "Hair Coloring",
    category: "Hair Highlights",
    price: "Rs. 10,000",
    duration: "2.5 hrs",
    description: "Stylish highlights to improve hair appearance.",
    page: "/hair-coloring",
  },
  {
    id: 8,
    service: "Hair Coloring",
    category: "Balayage Color",
    price: "Rs. 18,000",
    duration: "3 hrs",
    description: "Premium balayage color service for a modern look.",
    page: "/hair-coloring",
  },
  {
    id: 9,
    service: "Hair Treatment",
    category: "Hair Spa Treatment",
    price: "Rs. 8,500",
    duration: "1.5 hrs",
    description: "Relaxing hair spa treatment for smooth and healthy hair.",
    page: "/hair-treatment",
  },
  {
    id: 10,
    service: "Hair Treatment",
    category: "Keratin Treatment",
    price: "Rs. 18,000",
    duration: "3 hrs",
    description: "Keratin treatment for smooth and frizz-free hair.",
    page: "/hair-treatment",
  },
  {
    id: 11,
    service: "Hair Treatment",
    category: "Protein Treatment",
    price: "Rs. 12,000",
    duration: "2 hrs",
    description: "Hair strengthening treatment for damaged hair.",
    page: "/hair-treatment",
  },
  {
    id: 12,
    service: "Hair Treatment",
    category: "Scalp Treatment",
    price: "Rs. 7,500",
    duration: "1 hr",
    description: "Treatment for scalp care and healthy hair growth.",
    page: "/hair-treatment",
  },
  {
    id: 13,
    service: "Bridal Makeup",
    category: "Simple Bridal Makeup",
    price: "Rs. 18,000",
    duration: "2 hrs",
    description: "Simple bridal makeup with basic hair setting.",
    page: "/bridal-makeup",
  },
  {
    id: 14,
    service: "Bridal Makeup",
    category: "Traditional Bridal Makeup",
    price: "Rs. 25,000",
    duration: "3 hrs",
    description: "Traditional bridal makeup with hair styling.",
    page: "/bridal-makeup",
  },
  {
    id: 15,
    service: "Bridal Makeup",
    category: "Kandyan Bridal Makeup",
    price: "Rs. 35,000",
    duration: "4 hrs",
    description: "Kandyan bridal dressing, makeup and hair arrangement.",
    page: "/bridal-makeup",
  },
  {
    id: 16,
    service: "Bridal Makeup",
    category: "Full Bridal Package",
    price: "Rs. 55,000",
    duration: "5 hrs",
    description: "Complete bridal package with makeup, hair and dressing.",
    page: "/bridal-makeup",
  },
];

function bookingLink(item) {
  return `/booking?service=${encodeURIComponent(
    item.service
  )}&category=${encodeURIComponent(item.category)}&price=${encodeURIComponent(
    item.price
  )}`;
}

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [selectedService, setSelectedService] = useState("All");

  const serviceTypes = [
    "All",
    "Hair Styling",
    "Hair Coloring",
    "Hair Treatment",
    "Bridal Makeup",
  ];

  const filteredServices = services.filter((item) => {
    const search = searchText.toLowerCase();

    const matchesSearch =
      item.service.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search) ||
      item.price.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search);

    const matchesService =
      selectedService === "All" || item.service === selectedService;

    return matchesSearch && matchesService;
  });

  return (
    <div className="page-container min-h-[80vh]">
      <section className="text-center pt-[60px] pb-10 px-5">
        <span className="badge">Explore</span>
        <h1 className="text-[42px] font-extrabold text-text mb-4 tracking-tight">
          Search Services
        </h1>
        <p className="text-base text-text-muted max-w-[600px] mx-auto">
          Quickly find and book exactly what you are looking for by treatment
          name, keyword, or category.
        </p>
      </section>

      <section className="max-w-[800px] mx-auto mb-10">
        <div className="relative flex items-center shadow-sm rounded-full bg-bg-alt border border-border">
          <SearchIcon
            size={18}
            className="absolute left-5 text-text-muted pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search for haircut, coloring, keratin, bridal..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full py-4 pr-5 pl-[50px] border-none rounded-full text-base bg-transparent outline-none"
          />
        </div>

        <div className="flex gap-2.5 justify-center flex-wrap mt-6">
          {serviceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedService(type)}
              className={`px-5 py-2 rounded-full cursor-pointer font-semibold text-sm border ${
                selectedService === type
                  ? "bg-text text-text-light border-text"
                  : "bg-bg-alt text-text border-border"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto mb-6 flex justify-between items-end border-b border-border pb-4">
        <h2 className="m-0 text-2xl font-bold">Search Results</h2>
        <p className="m-0 text-text-muted font-semibold">
          {filteredServices.length}{" "}
          {filteredServices.length === 1 ? "service" : "services"} found
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto mb-[50px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {filteredServices.map((item) => {
          const IconComponent = serviceIconMap[item.service] || Scissors;
          return (
            <div
              className="p-6 border border-border rounded-[--radius-lg] bg-bg-alt shadow-sm flex flex-col transition-all duration-300 hover:shadow-md"
              key={item.id}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center">
                  <IconComponent size={24} className="text-text-muted" />
                </div>
                <p className="m-0 text-[13px] text-text-muted uppercase font-bold tracking-wider">
                  {item.service}
                </p>
              </div>

              <h3 className="m-0 mb-2 text-xl font-bold">{item.category}</h3>
              <p className="text-text-muted text-sm grow m-0 mb-5">
                {item.description}
              </p>

              <div className="flex justify-between p-4 bg-bg rounded-xl border border-border mb-5">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-muted uppercase font-semibold">
                    Price
                  </span>
                  <span className="text-sm font-extrabold text-primary-dark">
                    {item.price}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-text-muted uppercase font-semibold">
                    Duration
                  </span>
                  <span className="text-sm font-semibold text-text flex items-center gap-1.5">
                    <Clock size={14} />
                    {item.duration}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={item.page}
                  className="btn-outline py-2.5 text-[13px] text-center"
                >
                  Details
                </Link>
                <Link
                  to={bookingLink(item)}
                  className="btn-primary py-2.5 text-[13px] shadow-none text-center"
                >
                  Book
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {filteredServices.length === 0 && (
        <section className="text-center py-[60px] px-5 bg-bg-alt rounded-[--radius-lg] border border-dashed border-border max-w-[600px] mx-auto">
          <h2 className="text-[22px] m-0 mb-2.5">No Services Found</h2>
          <p className="text-text-muted m-0">
            We couldn't find anything matching &quot;{searchText}&quot;. Try
            another keyword.
          </p>
        </section>
      )}
    </div>
  );
}
