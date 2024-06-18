import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHotel } from "../../api";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";
import FFAll from "../../elements/Footers/FFAll";
import { hotelDetails } from "../../helper/data";
import Map from "../Map/Map";

const Hotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const getHotel = async () => {
      const data = await fetchHotel(id);
      setHotel(data);
    };

    getHotel();
  }, [id]);

  //loading animation alternative
  //   if (!hotel) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20">
        <NavigationOverall />
        {!hotel ? (
          <div>Loading</div>
        ) : (
          <div className="h-full w-full">
            {/* 5 images section */}
            <div className="h-[40vh] relative sm:h-[55vh] md:h-[70vh] lg:h-[75vh] flex gap-4 mt-8 w-full transition-all duration-300 ease-in-out rounded-lg">
              {/* 1 image: slice one image */}
              <div className="h-full w-full lg:w-[60%] shadow-xl">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src="https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/tv5jbv6wn68crhqdjm1b"
                  alt=""
                />
              </div>
              {/* 4 images: slice 4 images and map them */}
              <div className="hidden lg:flex h-full w-[40%] shadow-xl">
                <div className="lg:grid h-full w-full grid-cols-2 gap-2">
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src="https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/tv5jbv6wn68crhqdjm1b"
                    alt=""
                  />
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src="https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/tv5jbv6wn68crhqdjm1b"
                    alt=""
                  />
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src="https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/tv5jbv6wn68crhqdjm1b"
                    alt=""
                  />
                  <img
                    className="h-full w-full object-cover rounded-lg"
                    src="https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/tv5jbv6wn68crhqdjm1b"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* details section */}
            <div className="h-full w-full">
              {/* details section - nav */}
              <div className="h-16 flex gap-4 px-4 items-center flex-wrap">
                {hotelDetails.map((item) => (
                  <>
                    <li
                      className="list-none cursor-pointer font-normal hover:border-b-4 border-blue-500"
                      key={item.id}
                    >
                      <a href={item.to}>{item.name}</a>
                    </li>
                  </>
                ))}
              </div>

              {/* details section - about */}
              <div
                className="h-full w-full p-4 flex flex-col sm:flex-row shadow-md rounded-lg"
                id="about"
              >
                <div className="flex sm:flex-[2] flex-col">
                  <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                    {hotel.rating}
                  </p>
                  <p>{hotel.desc}</p>
                </div>
                <div className="flex sm:flex-1 flex-col justify-center items-center">
                  <button className="py-1 px-8 mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
              {/* details section - location */}
              <div className="h-[60vh] w-full my-8 rounded-md" id="location">
                <Map />
              </div>
              {/* details section - reviews */}
              <div className="h-full w-full " id="reviews">
                <p>FYP comment section copy paste? sure!</p>
              </div>
            </div>
          </div>
        )}
        <FFAll />
      </div>
    </>
  );
};

export default Hotel;
