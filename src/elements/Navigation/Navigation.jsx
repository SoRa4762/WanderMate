import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import "./Navigation.css";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => {
    setOpenNav(!openNav);
    console.log("button pressed!");
  };

  return (
    <>
      <div className="nav-container">
        <GiHamburgerMenu
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
        />

        {/* its proving qutie difficult to accurately animate using framer motion.. okay.. skip for now, lets head other side now */}
        <motion.ul
          initial={{ opacity: 0, x: -300 }}
          animate={{
            opacity: openNav ? 1 : 0,
            x: openNav ? -50 : -300,
            y: openNav && 356,
          }}
          transition={{ duration: 0.7 }}
          style={{ display: openNav ? "flex" : "hidden" }}
          className="nav-container-nav-links"
        >
          <IoClose
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
            }}
            onClick={toggleMenu}
          />
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/tours">Tours</a>
          </li>
          <li>
            <a href="/sale">Sale</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </motion.ul>
      </div>
    </>
  );
};

export default Navigation;
