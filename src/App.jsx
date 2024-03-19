import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Sale from "./components/Sale";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Tours from "./components/Tours";
import TermsConditions from "./components/TermsConditions";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
