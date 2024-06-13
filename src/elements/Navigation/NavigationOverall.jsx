import userProfile from "../../assets/userProfile.jpg";
import { navOverall } from "../../helper/data";

const NavigationOverall = () => {
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
          className="w-6 h-6 flex md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <h1 className="hidden md:flex text-blue-600">WanderMate</h1>
        <div className="hidden md:flex md:gap-4 lg:gap-8 items-center">
          {navOverall.map((nav, index) => (
            <>
              <li
                key={index}
                className="list-none cursor-pointer lg:text-xl hover:border-b-4 hover:border-b-blue-600"
              >
                <a href={nav.link}>{nav.linkTitle}</a>
              </li>
            </>
          ))}
        </div>

        {/* user profile */}
        <a
          href="/user/1"
          className="h-full flex items-center gap-2 cursor-pointer"
        >
          <p>Username</p>
          <img
            className="h-12 w-full rounded-full"
            src={userProfile}
            alt="userProfile"
          />
        </a>
      </div>
    </>
  );
};

export default NavigationOverall;
