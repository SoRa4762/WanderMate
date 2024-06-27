import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import About from "./components/About";
import Sale from "./components/Sale";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Destination from "./components/Destination/Destination";
import NotFound from "./components/NotFound";
import TermsConditions from "./components/TermsConditions";
import TravelPackages from "./components/Travel Packages/TravelPackages";
import Hotels from "./components/Hotels/Hotels";
import Hotel from "./components/Hotels/Hotel";
import UserProfile from "./components/User/UserProfile";
import Tours from "./components/Tours";
import Layout from "./components/dashboard/Layout.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import HotelManagement from "./components/dashboard/HotelManagement.jsx";
import Bookings from "./components/dashboard/Bookings.jsx";
import PackageManagement from "./components/dashboard/PackageManagement.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import TravelPackage from "./components/Travel Packages/TravelPackage.jsx";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/travelpackages" element={<TravelPackages />} />
          <Route path="/package/:id" element={<TravelPackage />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manage-hotels" element={<HotelManagement />} />
            <Route path="manage-bookings" element={<Bookings />} />
            <Route path="manage-packages" element={<PackageManagement />} />
            {/* <Route path="users" element={<Users />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="settings" element={<Settings />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
