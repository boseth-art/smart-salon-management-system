import { Routes, Route } from "react-router-dom";
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

import Login from "./Login.jsx";

// Pages that use DashboardLayout (no Navbar/Footer)
const DASHBOARD_PATHS = ["/dashboard", "/customers", "/check-in"];

function isDashboardPath(path) {
  return DASHBOARD_PATHS.some((p) => path.startsWith(p));
}

export default function App() {
  const path = window.location.pathname;
  const showPublicLayout = !isDashboardPath(path);

  return (
    <>
      {showPublicLayout && <Navbar />}

      <Routes>
        {/* Public Pages */}
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

        {/* Staff Login */}
        <Route path="/login" element={<Login />} />

        {/* Staff Dashboard (role-protected) */}
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

        {/* 404 */}
        <Route
          path="*"
          element={
            <div style={{ padding: "80px", textAlign: "center" }}>
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>404</div>
              <p style={{ color: "var(--color-text-muted)" }}>Page Not Found</p>
            </div>
          }
        />
      </Routes>

      {showPublicLayout && <Footer />}
      <CookieConsent />
    </>
  );
}