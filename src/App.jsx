import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CookieConsent from "./components/CookieConsent.jsx";

import Home from "./pages/Home.jsx";
import Booking from "./pages/Booking.jsx";
import CheckIn from "./pages/CheckIn.jsx";
import ServiceMenu from "./pages/ServiceMenu.jsx";
import TeamPortfolio from "./pages/TeamPortfolio.jsx";

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

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Customer Pages */}
        <Route path="/service-menu" element={<ServiceMenu />} />
        <Route path="/team" element={<TeamPortfolio />} />
        <Route path="/booking" element={<Booking />} />

        {/* Customer Service Category Pages */}
        <Route path="/hair-styling" element={<HairStyling />} />
        <Route path="/hair-coloring" element={<HairColoring />} />
        <Route path="/hair-treatment" element={<HairTreatment />} />
        <Route path="/bridal-makeup" element={<BridalMakeup />} />

        {/* Staff Login */}
        <Route path="/login" element={<Login />} />

        {/* Staff Protected Pages */}
        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <CustomerRecords />
            </ProtectedRoute>
          }
        />

        <Route
          path="/check-in"
          element={
            <ProtectedRoute>
              <CheckIn />
            </ProtectedRoute>
          }
        />

        {/* Other Existing Pages */}
        <Route path="/search" element={<Search />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/salon/:id" element={<SalonProfile />} />

        <Route
          path="*"
          element={<h1 style={{ padding: "50px" }}>Page Not Found</h1>}
        />
      </Routes>

      <CookieConsent />
    </>
  );
}