import { useState } from "react";
// import { homeItems } from "../helper/data";
import "animate.css";

const MyCarousel = ({ data }) => {
  const [itemId, setItemId] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [animate, setAnimate] = useState(false);
  const handleItemId = (id) => {
    setItemId(id);
  };

  const handleAnimate = () => {
    setExpanded(!expanded);
    setAnimate(!animate);
    // setTimeout(() => {
    //   setAnimate(false);
    // }, 500);
  };

  //   setTimeout(() => {
  //     setItemId()
  //   }, 5000);

  return (
    <>
      <div className="h-full w-full">
        {/* images */}
        {data
          .filter((item) => item.id === itemId)
          .map((item) => (
            <>
              <div
                className="h-[75vh] w-full mt-8 shadow-xl relative"
                key={item.id}
              >
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={item.img}
                  alt={item.title}
                />
                <p className="absolute top-[2%] lg:top-[3%] right-[2%] lg:right-[1%] py-4 lg:py-6 px-2 bg-blue-gray-50 backdrop-blur-sm rounded-xl font-bold lg:text-3xl cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-300">
                  Explore <span className="text-orange-600">{item.title}</span>
                </p>
              </div>
            </>
          ))}

        {/* buttons */}
        <div className="h-full w-full flex justify-center items-center gap-2 md:gap-4 py-8">
          {data.map((item) => (
            <>
              <div
                className={`md:h-4 md:w-4 md:border-[3px] h-2 w-2 border border-orange-600 rounded-full cursor-pointer indent-[-99999px] ${
                  itemId == item.id ? "bg-orange-600" : "bg-white"
                }`}
                onClick={() => handleItemId(item.id)}
              >
                {item.id}
              </div>
            </>
          ))}
        </div>

        {/* desc */}
        <div className={`h-full w-full p-8 mt-4 shadow-2xl`}>
          {data
            .filter((item) => item.id === itemId)
            .map((item) => (
              <p
                className={`text-center overflow-hidden animate__animated ${
                  expanded ? "line-clamp-none" : "line-clamp-4"
                }
                ${animate ? "animate__fadeInDown" : "animate__fadeInUp"}`}
                // style={{ WebkitLineClamp: expanded ? "unset" : 3 }}
                key={item.id}
              >
                {item.desc}
              </p>
            ))}
          <div className="flex h-full w-full justify-end">
            <button
              className=" font-semibold hover:text-blue-600"
              onClick={handleAnimate}
            >
              {expanded ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCarousel;
