import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    category: "Interior",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    alt: "Modern Salon Interior",
  },
  {
    id: 2,
    category: "Hair Styling",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
    alt: "Professional Hair Styling",
  },
  {
    id: 3,
    category: "Hair Coloring",
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80",
    alt: "Premium Hair Coloring",
  },
  {
    id: 4,
    category: "Interior",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    alt: "Salon Styling Stations",
  },
  {
    id: 5,
    category: "Bridal Makeup",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    alt: "Bridal Transformation",
  },
  {
    id: 6,
    category: "Hair Styling",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    alt: "Elegant Hair Updo",
  },
  {
    id: 7,
    category: "Interior",
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    alt: "Salon Tools and Products",
  },
  {
    id: 8,
    category: "Bridal Makeup",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    alt: "Professional Beauty Makeup",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Interior",
    "Hair Styling",
    "Hair Coloring",
    "Bridal Makeup",
  ];

  const filteredImages = galleryImages.filter((img) => {
    if (activeCategory === "All") return true;
    return img.category === activeCategory;
  });

  return (
    <div className="page-container min-h-[80vh]">
      <section className="text-center mb-10">
        <span className="badge">Portfolio</span>
        <h1 className="text-[42px] font-extrabold m-0 mb-4 tracking-tight text-text">
          Salon Gallery
        </h1>
        <p className="text-text-muted text-base max-w-[600px] mx-auto">
          Take a glimpse into our luxurious space, stunning bridal
          transformations, and signature hair styling moments crafted by our
          experts.
        </p>
      </section>

      <section className="flex justify-center mb-[50px]">
        <div className="flex gap-3 flex-wrap justify-center bg-bg-alt p-2 rounded-full shadow-sm border border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer border-none ${
                activeCategory === cat
                  ? "bg-bg-dark text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                  : "bg-transparent text-text-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 max-w-[1200px] mx-auto">
        {filteredImages.map((img) => (
          <div key={img.id} className="gallery-card">
            <div className="relative w-full pt-[100%] overflow-hidden rounded-[--radius-lg]">
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-400"
              />
              <div className="gallery-overlay">
                <span className="gallery-overlay-text">{img.category}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {filteredImages.length === 0 && (
        <div className="text-center py-10 text-text-muted">
          <p>No images found in this category.</p>
        </div>
      )}
    </div>
  );
}
