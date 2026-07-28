import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";

const featuredPost = {
  id: 1,
  image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  category: "Trends",
  title: "Top Hair Trends to Try in 2026",
  excerpt:
    "From lived-in layers to bold copper tones, these are the looks dominating salons this year. Discover which trend suits your face shape and lifestyle.",
  date: "Jul 15, 2026",
  author: "Nethmi Perera",
};

const blogPosts = [
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
    category: "Hair Tips",
    title: "How to Maintain Color-Treated Hair at Home",
    excerpt: "Simple routines and product swaps that keep your color vibrant between salon visits.",
    date: "Jul 10, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    category: "Skincare",
    title: "The Ultimate Pre-Bridal Skincare Routine",
    excerpt: "Start 3 months before your wedding for flawless, camera-ready skin on your big day.",
    date: "Jul 5, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    category: "Bridal",
    title: "Kandyan vs Western Bridal Makeup: A Complete Guide",
    excerpt: "Two iconic styles compared — find the look that matches your wedding vision.",
    date: "Jun 28, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80",
    category: "Hair Tips",
    title: "Choosing the Right Hair Cut for Your Face Shape",
    excerpt: "A stylist's guide to finding the most flattering cut for round, oval, heart, and square faces.",
    date: "Jun 20, 2026",
    readTime: "3 min read",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    category: "Wellness",
    title: "Hair Spa Benefits: Why Your Hair Needs One Monthly",
    excerpt: "Deep conditioning, scalp health, and stress relief — the triple benefit of regular hair spas.",
    date: "Jun 15, 2026",
    readTime: "4 min read",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
    category: "Trends",
    title: "Butterfly Cut: The Most Requested Style This Season",
    excerpt: "Why everyone is asking for this layered, face-framing cut — and how to style it daily.",
    date: "Jun 8, 2026",
    readTime: "3 min read",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80",
    category: "Skincare",
    title: "Summer Skincare Essentials for a Glowing Complexion",
    excerpt: "Lightweight moisturizers, SPF tips, and hydrating masks to beat the heat.",
    date: "Jun 1, 2026",
    readTime: "5 min read",
  },
];

const categoryColors = {
  "Hair Tips": "bg-primary/10 text-primary-dark",
  Skincare: "bg-success/10 text-success",
  Bridal: "bg-purple-100 text-purple-700",
  Trends: "bg-blue-100 text-blue-700",
  Wellness: "bg-emerald-100 text-emerald-700",
};

export default function Blog() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero */}
      <section className="text-center py-16 px-5 bg-gradient-to-br from-bg to-primary-light/30 rounded-2xl border border-border mb-14">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-xs font-bold tracking-wider uppercase mb-4">
          Beauty Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Tips, Trends & Inspiration
        </h1>
        <p className="text-text-muted text-base max-w-[560px] mx-auto leading-relaxed">
          Expert advice on hair care, skincare, bridal beauty and the latest trends — straight from our salon professionals.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mb-14">
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border bg-bg-alt">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-64 md:h-full object-cover"
          />
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold uppercase tracking-wider mb-4">
              {featuredPost.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
              {featuredPost.title}
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-5">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-text-muted font-semibold mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {featuredPost.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {featuredPost.author}
              </span>
            </div>
            <Link
              to={`/blog/${featuredPost.id}`}
              className="inline-flex items-center gap-2 text-primary-dark font-bold text-sm hover:gap-3 transition-all duration-200"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section>
        <h2 className="text-2xl font-extrabold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {blogPosts.map((post) => (
            <article
              className="rounded-2xl overflow-hidden border border-border bg-bg-alt group"
              key={post.id}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 leading-snug">{post.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-text-muted font-semibold mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1.5 text-primary-dark font-bold text-sm hover:gap-2.5 transition-all duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
