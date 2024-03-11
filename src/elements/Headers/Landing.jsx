import headerImage from "../../assets/headerImg2.jpg";
import Navigation from "../Navigation/Navigation";

const LandingHeader = () => {
  return (
    <>
      <div className="h-[10vh] w-full flex justify-between items-center">
        <div className="w-1/3 sm:flex hidden">
          <h1
            className="pl-4 md:pl-8 text-yellow-500 font-bold text-2xl lg:text-4xl"
            style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Explore.
          </h1>
        </div>
        <Navigation />
        <div className="h-36 md:h-52 lg:h-64 w-[42%] sm:w-1/3">
          <img
            className="h-full w-full object-cover object-center overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 0 50%)",
            }}
            src={headerImage}
            alt="Header Image"
          />
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
