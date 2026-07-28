import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CookieConsent from "./components/CookieConsent.jsx";

import Home from "./pages/Home.jsx";
import Booking from "./pages/Booking.jsx";
import CheckIn from "./pages/CheckIn.jsx";
import ServiceMenu from "./pages/ServiceMenu.jsx";
import TeamPortfolio from "./pages/TeamPortfolio.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import HairStyling from "./pages/HairStyling.jsx";
import HairColoring from "./pages/HairColoring.jsx";
import HairTreatment from "./pages/HairTreatment.jsx";
import BridalMakeup from "./pages/BridalMakeup.jsx";

import CustomerRecords from "./pages/CustomerRecords.jsx";

import Blog from "./pages/Blog.jsx";
import Gallery from "./pages/Gallery.jsx";
import Search from "./pages/Search.jsx";
import SalonProfile from "./pages/SalonProfile.jsx";
import NotFound from "./pages/NotFound.jsx";

import Login from "./Login.jsx";

const DASHBOARD_PATHS = ["/dashboard", "/customers", "/check-in"];

function isDashboardPath(pathname) {
  return DASHBOARD_PATHS.some((p) => pathname.startsWith(p));
}

export default function App() {
  const location = useLocation();
  const showPublicLayout = !isDashboardPath(location.pathname);

  return (
    <>
      {showPublicLayout && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/service-menu" element={<ServiceMenu />} />
          <Route path="/team" element={<TeamPortfolio />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hair-styling" element={<HairStyling />} />
          <Route path="/hair-coloring" element={<HairColoring />} />
          <Route path="/hair-treatment" element={<HairTreatment />} />
          <Route path="/bridal-makeup" element={<BridalMakeup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/salon/:id" element={<SalonProfile />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredPermission="dashboard">
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customers"
            element={
              <ProtectedRoute requiredPermission="customers">
                <CustomerRecords />
              </ProtectedRoute>
            }
          />

          <Route
            path="/check-in"
            element={
              <ProtectedRoute requiredPermission="check-in">
                <CheckIn />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      {showPublicLayout && <Footer />}
      <CookieConsent />
    </>
  );
}
