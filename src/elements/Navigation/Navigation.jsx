import { useState } from "react";
import { NavCont } from "../../helper/data";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      {/* nav for phone */}
      <div className="flex sm:hidden pl-4 h-full w-full items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 flex md:hidden cursor-pointer text-white"
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {openNav && (
        <div className="fixed top-0 right-0 h-screen w-[80%] bg-white shadow-lg rounded-lg z-10">
          {NavCont.map((nav, i) => (
            <>
              <li
                key={i}
                className="list-none block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                <a href={nav.link}>{nav.navTitle}</a>
              </li>
            </>
          ))}
          <li className="list-none block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
            <a href="/signin">Sign In</a>
          </li>
          <li className="list-none block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
            <a href="/signup">Sign Up</a>
          </li>
        </div>
      )}

      {/* nav for others */}
      <div className="hidden sm:flex h-full w-full items-center justify-center gap-9 lg:gap-14">
        {NavCont.map((nav, i) => (
          <>
            <li
              key={i}
              className="list-none text-base text-white md:text-lg lg:text-xl hover:border-b-4 hover:border-b-yellow-500"
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
