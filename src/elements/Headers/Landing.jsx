import headerImage from "../../assets/img4.jpg";
import Navigation from "../Navigation/Navigation";

const LandingHeader = () => {
  return (
    <>
      <div className="h-[10vh] w-full flex justify-between items-center">
        <h1 className="sm:flex hidden w-1/3 text-yellow-500 font-bold text-2xl lg:text-3xl">
          Explore.
        </h1>
        <Navigation />
        <div className="h-36 md:h-52 w-[42%] sm:w-1/3">
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
