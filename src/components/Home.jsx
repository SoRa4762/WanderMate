import { useState } from "react";
import NavigationOverall from "../elements/Navigation/NavigationOverall";
import { homeItems, hotels } from "../helper/data";
import RandomImage from "../assets/bg4.jpg";
import { CiHeart } from "react-icons/ci";

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
                    Explore{" "}
                    <span className="text-orange-600">{item.title}</span>
                  </p>
                </div>
              </>
            ))}

          {/* buttons */}
          <div className="h-full w-full flex justify-center items-center gap-2 md:gap-4 py-8">
            {homeItems.map((item) => (
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
            {homeItems
              .filter((item) => item.id === itemId)
              .map((item) => (
                <p className="text-center" key={item.id}>
                  {item.desc}
                </p>
              ))}
          </div>
        </div>
        <div className="h-full w-full flex flex-col">
          {/* hotels */}
          <div className="h-full w-full flex flex-col pt-4 px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full"
                src={RandomImage}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl">
                Top Hotels
              </h1>
            </div>
            {/* cards */}
            <div className="h-full w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
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
          <div className="h-full w-full flex flex-col px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full"
                src={RandomImage}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl">
                Top Travel Packages
              </h1>
            </div>
            {/* cards */}
            <div className="h-full w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
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
          <div className="h-full w-full flex flex-col px-10">
            {/* heading */}
            <div className="flex gap-2 items-center pt-8">
              <img
                className="h-8 w-8 rounded-full"
                src={RandomImage}
                alt="randomIcon"
              />
              <h1 className="font-bold text-md sm:text-lg lg:text-xl">
                Things To Do
              </h1>
            </div>
            {/* cards */}
            <div className="h-full w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
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
        </div>
      </div>
    </>
  );
};

export default Home;
