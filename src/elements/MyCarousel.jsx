import { useState } from "react";
// import { homeItems } from "../helper/data";

const MyCarousel = ({ data }) => {
  const [itemId, setItemId] = useState(1);
  const handleItemId = (id) => {
    setItemId(id);
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
                <p className="absolute top-[2%] lg:top-[3%] right-[2%] lg:right-[1%] py-4 lg:py-6 px-2 bg-blue-gray-50 backdrop-blur-sm rounded-xl font-bold lg:text-3xl">
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
        <div className="h-full w-full p-8 mt-4 shadow-2xl">
          {data
            .filter((item) => item.id === itemId)
            .map((item) => (
              <p className="text-center" key={item.id}>
                {item.desc}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyCarousel;
