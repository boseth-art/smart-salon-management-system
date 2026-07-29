import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, Scissors, Palette, Droplets, Heart } from "lucide-react";

const serviceMenu = [
  {
    id: 1,
    category: "Hair Styling",
    icon: Scissors,
    page: "/hair-styling",
    services: [
      {
        name: "Basic Hair Cut",
        price: "Rs. 2,000",
        duration: "30 mins",
        description: "Simple haircut and finishing for everyday style.",
      },
      {
        name: "Layer Cut",
        price: "Rs. 3,500",
        duration: "45 mins",
        description: "Modern layered haircut with professional finishing.",
      },
      {
        name: "Blow Dry",
        price: "Rs. 2,500",
        duration: "30 mins",
        description: "Smooth blow dry styling for a polished salon look.",
      },
      {
        name: "Party Hair Style",
        price: "Rs. 6,000",
        duration: "1 hr",
        description: "Special hairstyle for parties, functions and events.",
      },
    ],
  },
  {
    id: 2,
    category: "Hair Coloring",
    icon: Palette,
    page: "/hair-coloring",
    services: [
      {
        name: "Root Touch-up",
        price: "Rs. 4,500",
        duration: "1 hr",
        description: "Color touch-up service for hair roots.",
      },
      {
        name: "Full Hair Color",
        price: "Rs. 8,500",
        duration: "2 hrs",
        description: "Complete hair coloring service using quality products.",
      },
      {
        name: "Hair Highlights",
        price: "Rs. 10,000",
        duration: "2.5 hrs",
        description: "Stylish highlights to enhance your hair appearance.",
      },
      {
        name: "Balayage Color",
        price: "Rs. 18,000",
        duration: "3 hrs",
        description: "Premium balayage color service for a modern look.",
      },
    ],
  },
  {
    id: 3,
    category: "Hair Treatment",
    icon: Droplets,
    page: "/hair-treatment",
    services: [
      {
        name: "Hair Spa Treatment",
        price: "Rs. 8,500",
        duration: "1.5 hrs",
        description: "Relaxing hair spa treatment for smooth and healthy hair.",
      },
      {
        name: "Keratin Treatment",
        price: "Rs. 18,000",
        duration: "3 hrs",
        description: "Keratin treatment for smooth and frizz-free hair.",
      },
      {
        name: "Protein Treatment",
        price: "Rs. 12,000",
        duration: "2 hrs",
        description: "Strengthening treatment for weak and damaged hair.",
      },
      {
        name: "Scalp Treatment",
        price: "Rs. 7,500",
        duration: "1 hr",
        description: "Treatment for scalp care and healthy hair growth.",
      },
    ],
  },
  {
    id: 4,
    category: "Bridal Makeup",
    icon: Heart,
    page: "/bridal-makeup",
    services: [
      {
        name: "Simple Bridal Makeup",
        price: "Rs. 18,000",
        duration: "2 hrs",
        description: "Simple bridal makeup with basic hair setting.",
      },
      {
        name: "Traditional Bridal Makeup",
        price: "Rs. 25,000",
        duration: "3 hrs",
        description: "Traditional bridal makeup with hair styling.",
      },
      {
        name: "Kandyan Bridal Makeup",
        price: "Rs. 35,000",
        duration: "4 hrs",
        description: "Kandyan bridal dressing, makeup and hair arrangement.",
      },
      {
        name: "Full Bridal Package",
        price: "Rs. 55,000",
        duration: "5 hrs",
        description: "Complete bridal package with makeup, hair and dressing.",
      },
    ],
  },
];

function bookingLink(category, service) {
  return `/booking?service=${encodeURIComponent(
    category
  )}&category=${encodeURIComponent(service.name)}&price=${encodeURIComponent(
    service.price
  )}`;
}

export default function ServiceMenu() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Hair Styling",
    "Hair Coloring",
    "Hair Treatment",
    "Bridal Makeup",
  ];

  const filteredMenu = serviceMenu
    .filter((categoryItem) => {
      return (
        selectedCategory === "All" ||
        categoryItem.category === selectedCategory
      );
    })
    .map((categoryItem) => {
      const filteredServices = categoryItem.services.filter((service) => {
        const search = searchText.toLowerCase();

        return (
          service.name.toLowerCase().includes(search) ||
          service.price.toLowerCase().includes(search) ||
          service.duration.toLowerCase().includes(search) ||
          service.description.toLowerCase().includes(search) ||
          categoryItem.category.toLowerCase().includes(search)
        );
      });

      return {
        ...categoryItem,
        services: filteredServices,
      };
    })
    .filter((categoryItem) => categoryItem.services.length > 0);

  return (
    <div className="page-container min-h-[80vh]">
      <section className="text-center py-[60px] px-5 bg-gradient-to-b from-bg to-bg-alt rounded-[--radius-lg] mb-10">
        <span className="badge">Service Menu</span>
        <h1 className="text-[42px] font-extrabold text-text mb-4 tracking-tight">
          Premium Salon Services
        </h1>
        <p className="text-base text-text-muted max-w-[600px] mx-auto">
          Explore our curated collection of luxury hair, beauty, and bridal
          services. Find your perfect treatment and book instantly.
        </p>
      </section>

      <section className="max-w-[800px] mx-auto mb-[50px]">
        <div className="relative flex items-center shadow-sm rounded-full bg-bg-alt border border-border">
          <Search
            size={18}
            className="absolute left-5 text-text-muted pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search by treatment, keyword, or price..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full py-4 pr-5 pl-[50px] border-none rounded-full text-base bg-transparent outline-none"
          />
        </div>

        <div className="flex gap-2.5 justify-center flex-wrap mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full cursor-pointer font-semibold text-sm border ${
                selectedCategory === category
                  ? "bg-text-dark text-white border-text-dark"
                  : "bg-bg-alt text-text border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1100px] mx-auto">
        {filteredMenu.map((categoryItem) => {
          const IconComponent = categoryItem.icon;
          return (
            <div className="mb-[50px]" key={categoryItem.id}>
              <div className="flex justify-between items-end border-b-2 border-border pb-4 mb-[30px] flex-wrap gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] flex items-center justify-center rounded-2xl bg-bg border border-border">
                    <IconComponent size={32} className="text-text-muted" />
                  </div>
                  <div>
                    <h2 className="m-0 mb-1 text-[28px] font-extrabold">
                      {categoryItem.category}
                    </h2>
                    <p className="m-0 text-text-muted text-sm">
                      Signature {categoryItem.category.toLowerCase()} treatments
                    </p>
                  </div>
                </div>

                <Link
                  to={categoryItem.page}
                  className="btn-outline px-5 py-2 text-[13px]"
                >
                  View Category details
                </Link>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
                {categoryItem.services.map((service) => (
                  <div
                    className="p-7 border border-border rounded-[20px] bg-bg-alt flex flex-col transition-all duration-300 hover:shadow-md"
                    key={service.name}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="m-0 text-lg font-bold">{service.name}</h3>
                      <span className="text-base font-extrabold text-primary">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-text-muted text-sm grow m-0 mb-6">
                      {service.description}
                    </p>

                    <div className="flex justify-between items-center border-t border-stone-100 pt-4">
                      <span className="text-[13px] text-text-muted font-semibold flex items-center gap-1.5">
                        <Clock size={14} />
                        {service.duration}
                      </span>
                      <Link
                        to={bookingLink(categoryItem.category, service)}
                        className="btn-primary px-5 py-2 text-[13px] shadow-none"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {filteredMenu.length === 0 && (
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
