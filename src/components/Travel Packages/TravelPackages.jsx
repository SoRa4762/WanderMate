import { useState, useEffect } from "react";
import FFAll from "../../elements/Footers/FFAll";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";
import { fetchTravelPackages } from "../../api";
import HCard from "../../elements/HCard";

const TravelPackages = () => {
  const [hotels, setHotels] = useState();
  const url = "package";

  useEffect(() => {
    const getHotels = async () => {
      const data = await fetchTravelPackages();
      setHotels(data);
    };

    getHotels();
  }, []);
  return (
    <>
      <div className="px-2 sm:px-4 md:px-8 lg:px-20">
        <NavigationOverall />
        {/* listing hotels */}
        <HCard data={hotels} url={url} />
        <FFAll />
      </div>
    </>
  );
};

export default TravelPackages;
