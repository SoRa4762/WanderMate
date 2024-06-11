import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Sale from "./components/Sale";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Destination from "./components/Destination";
import NotFound from "./components/NotFound";
import Tours from "./components/Tours";
import TermsConditions from "./components/TermsConditions";
import TravelPackages from "./components/TravelPackages";
import Layout from "./dashboard/Layout";
import Dashboard from "./dashboard/Dashboard";
import Hotels from "./components/Hotels";

function App() {
  return (
    <>
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
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/admin" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="tours" element={<Tours />} /> */}
            {/* <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<Users />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="settings" element={<Settings />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
