import NavigationOverall from "../elements/Navigation/NavigationOverall";
import { hotels, travelPackages, thingsToDo, homeItems } from "../helper/data";
import TopHotels from "../assets/bg2.jpg";
import TopTravelPackage from "../assets/bg5.jpg";
import ThingsToDo from "../assets/bg.jpg";
import Carousel from "../elements/MyCarousel";
import FFAll from "../elements/Footers/FFAll";
import Cards from "../elements/Cards";

const Home = () => {
  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <NavigationOverall />
        {/* carousel */}
        <Carousel data={homeItems} />

        <div className="h-full w-full flex flex-col">
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

          {/* things to do */}
          <div className="h-full w-full flex flex-col xl:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full cursor-pointer"
                src={ThingsToDo}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl cursor-pointer">
                Things To Do
              </h1>
            </div>
            {/* cards */}
            <Cards data={thingsToDo} />
          </div>

          <FFAll />
        </div>
      </div>
    </>
  );
};

export default Home;
