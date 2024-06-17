import { useState, useEffect } from "react";
import FFAll from "../../elements/Footers/FFAll";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";
import { fetchHotels } from "../../api";
import HCard from "../../elements/HCard";

const Hotels = () => {
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
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <NavigationOverall />
        {/* listing hotels */}
        <HCard data={hotels} />
        <FFAll />
      </div>
    </>
  );
};

export default Hotels;
