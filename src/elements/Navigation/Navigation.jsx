import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavCont } from "../../helper/data";

import "./Navigation.css";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => {
    setOpenNav(!openNav);
    console.log("button pressed!");
  };

  return (
    <>
      {/* nav for phone */}
      <div className="flex sm:hidden h-full w-full items-center">
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
        {/* <motion.ul
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
          
        </motion.ul> */}
      </div>

      {/* nav for others */}
      <div className="hidden sm:flex h-full w-full items-center justify-center gap-9 lg:gap-14">
        {NavCont.map((nav, i) => (
          <>
            <li
              key={i}
              className="list-none text-base text-white md:text-lg lg:text-xl hover:border-b-2 hover:border-b-red-500"
            >
              <a href={nav.link}>{nav.navTitle}</a>
            </li>
          </>
        ))}
      </div>
    </>
  );
};

export default Navigation;
