import { useState } from "react";
import NavigationOverall from "../elements/Navigation/NavigationOverall";
import { homeItems } from "../helper/data";

const Home = () => {
  const [itemId, setItemId] = useState(1);
  const handleItemId = (id) => {
    setItemId(id);
  };

  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <NavigationOverall />

        {/* carousel */}
        <div className="h-full w-full">
          {/* images */}
          {homeItems
            .filter((item) => item.id === itemId)
            .map((item) => (
              <>
                <div className="h-[75vh] w-full mt-8 shadow-xl" key={item.id}>
                  <img
                    className="h-full w-full object-cover rounded-lg relative"
                    src={item.img}
                    alt={item.title}
                  />
                  <p className="absolute top-[5.5rem] right-[2.5rem] sm:right-14 md:right-[4.5rem] lg:top-[6.5rem] lg:right-24 py-4 lg:py-6 px-2 bg-blue-gray-50 backdrop-blur-sm rounded-xl font-bold lg:text-3xl">
                    Explore{" "}
                    <span className="text-orange-500">{item.title}</span>
                  </p>
                </div>
              </>
            ))}

          {/* buttons */}
          <div className="h-full w-full flex justify-center items-center gap-2 md:gap-4 py-8">
            {homeItems.map((item) => (
              <>
                <div
                  className={`md:h-4 md:w-4 md:border-[3px] h-2 w-2 border border-orange-500 rounded-full cursor-pointer indent-[-99999px] ${
                    itemId == item.id ? "bg-orange-500" : "bg-white"
                  }`}
                  onClick={() => handleItemId(item.id)}
                >
                  {item.id}
                </div>
              </>
            ))}
          </div>

          {/* desc */}
          <div className="h-full w-full p-8 mt-4 shadow-2xl">
            {homeItems
              .filter((item) => item.id === itemId)
              .map((item) => (
                <p className="text-center" key={item.id}>
                  {item.desc}
                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
