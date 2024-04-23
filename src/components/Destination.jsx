import { hotels, travelPackages, topDestinations } from "../helper/data";
import NavigationOverall from "../elements/Navigation/NavigationOverall";
import FFAll from "../elements/Footers/FFAll";
import Cards from "../elements/Cards";
import TopHotels from "../assets/bg2.jpg";
import TopTravelPackage from "../assets/bg5.jpg";
import TopDestination from "../assets/bg.jpg";
import bgImg from "../assets/headerImg9.jpg";
import { IoSearch } from "react-icons/io5";

const Destination = () => {
  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <NavigationOverall />

        {/* search section */}
        <div
          className="h-[40vh] relative sm:h-[55vh] md:h-[70vh] lg:h-[75vh] mt-8 w-full transition-all duration-300 ease-in-out rounded-lg"
          style={{
            background: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[12%] w-[39%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white flex justify-center items-center gap-2 p-4 rounded-lg">
            <input
              className="h-[88%] w-[88%] border-none outline-none"
              placeholder="Search Your Places, Destination..."
              type="text"
            />
            <div className="h-11 w-11 flex items-center justify-center bg-blue-600 rounded-full">
              <IoSearch size={22} color="white" />
            </div>
          </div>
        </div>

        <div className="h-full w-full flex flex-col">
          {/* destinations */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={TopDestination}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl cursor-pointer">
                Top Destinations
              </h1>
            </div>
            {/* cards */}
            <Cards data={topDestinations} />
          </div>

          {/* hotels */}
          <div className="h-full w-full flex flex-col pt-4 xl:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={TopHotels}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl cursor-pointer">
                Top Hotels
              </h1>
            </div>
            {/* cards */}
            <Cards data={hotels} />
          </div>

          {/* top travel packages */}
          <div className="h-full w-full flex flex-col xl:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={TopTravelPackage}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl cursor-pointer">
                Top Travel Packages
              </h1>
            </div>
            {/* cards */}
            <Cards data={travelPackages} />
          </div>
          <FFAll />
        </div>
      </div>
    </>
  );
};

export default Destination;
