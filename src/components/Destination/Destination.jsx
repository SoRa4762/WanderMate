import { useEffect, useState } from "react";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";
import {
  hotels,
  travelPackages,
  thingsToDo,
  destination,
} from "../../helper/data";
import TopHotels from "../../assets/bg2.jpg";
import TopTravelPackage from "../../assets/bg5.jpg";
import ThingsToDo from "../../assets/bg.jpg";
import Carousel from "../../elements/MyCarousel";
import FFAll from "../../elements/Footers/FFAll";
import Cards from "../../elements/Cards";
import {
  fetchHotels,
  fetchThingsToDo,
  fetchTopDestinations,
  fetchTravelPackages,
} from "../../api";

const Destination = () => {
  const [hotels, setHotels] = useState();
  const [travelPackages, setTravelPackages] = useState();
  const [topDestinations, setTopDestinations] = useState();
  const [thingsToDo, setThingsToDo] = useState();

  //url for cards
  const hotelUrl = "/hotel";
  // const destinationUrl = "/destination";
  const packageUrl = "/package";
  const thingsToDoUrl = "/thingsToDo";

  useEffect(() => {
    const getHotels = async () => {
      const data = await fetchHotels();
      setHotels(data.slice(0, 4));
    };

    const getTravelPackages = async () => {
      const data = await fetchTravelPackages();
      setTravelPackages(data.slice(0, 4));
    };

    const getTopDestinations = async () => {
      const data = await fetchTopDestinations();
      setTopDestinations(data.slice(0, 4));
    };

    const getThingsToDo = async () => {
      const data = await fetchThingsToDo();
      setThingsToDo(data.slice(0, 4));
    };

    getHotels();
    getTravelPackages();
    getTopDestinations();
    getThingsToDo();
  }, []);
  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <NavigationOverall />
        {/* carousel */}
        <Carousel data={destination} />

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
            <Cards data={hotels} url={hotelUrl} />
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
            <Cards data={travelPackages} url={packageUrl} />
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
            <Cards data={thingsToDo} url={thingsToDoUrl} />
          </div>

          <FFAll />
        </div>
      </div>
    </>
  );
};

export default Destination;
