import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { Scissors, Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/service-menu", label: "Menu" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass shadow-2xl shadow-black/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center gap-5">
        <Link to="/" className="no-underline group">
          <h2 className="m-0 text-xl font-extrabold text-text-dark flex items-center gap-2 tracking-tight group-hover:text-primary-light transition-colors">
            <Scissors className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
            Orchid Salon
          </h2>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative font-semibold text-sm transition-colors duration-200 ${
                pathname === to ? "text-text-dark" : "text-text-muted hover:text-primary-dark"
              }`}
            >
              {label}
              {pathname === to && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}

          {user ? (
            <>
              <div className="w-px h-6 bg-border" />
              <Link
                to="/customers"
                className={`font-semibold text-sm ${
                  pathname === "/customers" ? "text-primary" : "text-text-muted hover:text-primary-dark"
                }`}
              >
                Customers
              </Link>
              <Link
                to="/check-in"
                className={`font-semibold text-sm ${
                  pathname === "/check-in" ? "text-primary" : "text-text-muted hover:text-primary-dark"
                }`}
              >
                Kiosk
              </Link>
              <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-xs font-bold text-primary border border-primary/30 uppercase">
                {user.role}
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-transparent text-text-dark border border-border rounded-full font-semibold text-xs cursor-pointer hover:bg-white/50 hover:border-primary/30 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-semibold text-sm text-text-muted hover:text-primary-dark transition-colors"
              >
                Staff Login
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-bold text-sm shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:shadow-primary/40 transition-all duration-200"
              >
                Book Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-text-dark bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border mt-3"
          >
            <div className="flex flex-col gap-4 p-6">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-semibold text-lg ${
                    pathname === to ? "text-primary" : "text-text-dark"
                  }`}
                >
                  {label}
                </Link>
              ))}
              {user ? (
                <>
                  <div className="w-full h-px bg-border my-2" />
                  <Link to="/customers" onClick={() => setMobileOpen(false)} className="font-semibold text-lg text-text-muted">
                    Customers
                  </Link>
                  <Link to="/check-in" onClick={() => setMobileOpen(false)} className="font-semibold text-lg text-text-muted">
                    Kiosk
                  </Link>
                  <button onClick={() => { logout(); setMobileOpen(false); }} className="flex items-center gap-2 px-4 py-3 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl font-bold text-sm cursor-pointer w-fit mt-2">
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </>
              ) : (
                <>
                  <div className="w-full h-px bg-border my-2" />
                  <Link to="/login" onClick={() => setMobileOpen(false)} className="font-semibold text-lg text-text-muted">
                    Staff Login
                  </Link>
                  <Link
                    to="/booking"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-bg-darker rounded-full font-bold text-base mt-2 shadow-lg shadow-primary/25"
                  >
                    Book Now
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
