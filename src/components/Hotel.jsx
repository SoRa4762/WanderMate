import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHotel } from "../api";
import NavigationOverall from "../elements/Navigation/NavigationOverall";
import FFAll from "../elements/Footers/FFAll";
import { hotelDetails } from "../helper/data";

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
              <div className="h-16 flex gap-4 items-center flex-wrap">
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
              <div className="h-full w-1/2 flex flex-col" id="about">
                <p className="font-bold lg:text-4xl">{hotel.rating}</p>
                <p>{hotel.desc}</p>
              </div>
              {/* details section - location */}
              <div className="h-full w-full " id="location">
                <p className="text-4xl">Google API coming soon</p>
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
