import { useState, useEffect } from "react";
import FFAll from "../../elements/Footers/FFAll";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";
import { fetchHotels } from "../../api";
import HCard from "../../elements/HCard";

const TravelPackages = () => {
  const [hotels, setHotels] = useState();

  useEffect(() => {
    const getHotels = async () => {
      const data = await fetchHotels();
      setHotels(data);
    };

    getHotels();
  });
  return (
    <>
      <div className="px-2 sm:px-4 md:px-8 lg:px-20">
        <NavigationOverall />
        {/* listing hotels */}
        <HCard data={hotels} />
        <FFAll />
      </div>
    </>
  );
};

export default TravelPackages;
