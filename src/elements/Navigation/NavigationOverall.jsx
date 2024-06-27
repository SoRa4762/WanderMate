import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import userProfile from "../../assets/userProfile.jpg";
import { navOverall } from "../../helper/data";
import { useNavigate } from "react-router-dom";

const NavigationOverall = () => {
  const navigate = useNavigate();
  const { userAuth, setUserAuth } = useContext(UserContext);
  const [showLogout, setShowLogout] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleLogout = () => {
    setUserAuth({
      userId: "",
      username: "",
      profilePicture: "",
    }); // Clear the user authentication context
    sessionStorage.removeItem("token"); // Remove user authentication from session storage
    sessionStorage.removeItem("username");
    navigate("/signin");
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
    // alert("hey! hey hey! Baby san!!!");
  };

  return (
    <>
      <div className="h-[7vh] w-full flex justify-between items-center font-bold lg:text-xl pt-2">
        {/* menu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 flex md:hidden cursor-pointer"
          onClick={toggleSideMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {/* side menu */}
        {showSideMenu && (
          <div className="fixed right-0 top-0 h-screen w-[80%] bg-white shadow-lg rounded-lg z-10">
            {navOverall.map((nav, index) => (
              <li
                key={index}
                className="list-none block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                <a href={nav.link}>{nav.linkTitle}</a>
              </li>
            ))}
          </div>
        )}

        <a href="/home" className="hidden md:flex text-blue-600">
          WanderMate
        </a>
        <div className="hidden md:flex md:gap-4 lg:gap-8 items-center">
          {navOverall.map((nav, index) => (
            <li
              key={index}
              className="list-none cursor-pointer lg:text-xl hover:border-b-4 hover:border-b-blue-600"
            >
              <a href={nav.link}>{nav.linkTitle}</a>
            </li>
          ))}
        </div>

        {/* user profile */}
        <div className="relative">
          <div
            onClick={toggleLogout}
            className="h-full flex items-center gap-2 cursor-pointer"
          >
            <p>{userAuth.username}</p>
            <img
              className="h-12 w-12 rounded-full"
              src={userProfile}
              alt="userProfile"
            />
          </div>

          {/* logout menu  */}
          {showLogout && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-10">
              <a
                href="/user/1"
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Profile
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavigationOverall;
