import NavigationOverall from "../elements/Navigation/NavigationOverall";
import { hotels, thingsToDo, homeItems } from "../helper/data";
import TopHotels from "../assets/bg4.jpg";
import TopTravelPackage from "../assets/bg5.jpg";
import ThingsToDo from "../assets/bg.jpg";
import { CiHeart } from "react-icons/ci";
import Carousel from "../elements/MyCarousel";
import FFAll from "../elements/Footers/FFAll";

const Home = () => {
  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <NavigationOverall />
        {/* carousel */}
        <Carousel data={homeItems} />

        <div className="h-full w-full flex flex-col">
          {/* hotels */}
          <div className="h-full w-full flex flex-col pt-4 sm:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full"
                src={TopHotels}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl">
                Top Hotels
              </h1>
            </div>
            {/* cards */}
            <div className="h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {hotels.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="h-[50vh] w-full flex flex-col justify-between bg-red-200 rounded-lg cursor-pointer"
                    style={{
                      background: ` url(${item.img})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="h-8 w-8 m-2 rounded-full bg-white flex justify-center items-center">
                      <CiHeart size={24} />
                    </div>
                    <div className="backdrop-blur-sm rounded-b-lg px-4 py-4 flex justify-between text-white font-bold">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* top travel packages */}
          <div className="h-full w-full flex flex-col sm:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full"
                src={TopTravelPackage}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl">
                Top Travel Packages
              </h1>
            </div>
            {/* cards */}
            <div className="h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {hotels.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="h-[50vh] w-full flex flex-col justify-between bg-red-200 rounded-lg cursor-pointer"
                    style={{
                      background: ` url(${item.img})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="h-8 w-8 m-2 rounded-full bg-white flex justify-center items-center">
                      <CiHeart size={24} />
                    </div>
                    <div className="backdrop-blur-sm rounded-b-lg px-4 py-4 flex justify-between text-white font-bold">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* things to do */}
          <div className="h-full w-full flex flex-col sm:px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full"
                src={ThingsToDo}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl">
                Things To Do
              </h1>
            </div>
            {/* cards */}
            <div className="h-full w-full grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
              {thingsToDo.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="h-[50vh] w-full flex flex-col justify-between bg-red-200 rounded-lg cursor-pointer"
                    style={{
                      background: ` url(${item.img})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="h-8 w-8 m-2 rounded-full bg-white flex justify-center items-center">
                      <CiHeart size={24} />
                    </div>
                    <div className="backdrop-blur-sm rounded-b-lg px-4 py-4 flex justify-between text-white font-bold">
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <FFAll />
        </div>
      </div>
    </>
  );
};

export default Home;
