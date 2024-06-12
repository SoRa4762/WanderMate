import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHotel } from "../api";
import NavigationOverall from "../elements/Navigation/NavigationOverall";
import FFAll from "../elements/Footers/FFAll";

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
              <div className="h-full w-[60%]">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src="https://res.cloudinary.com/soragatrasambandha/image/upload/f_auto,q_auto/v1/WanderMate/tv5jbv6wn68crhqdjm1b"
                  alt=""
                />
              </div>
              {/* 4 images: slice 4 images and map them */}
              <div className="flex h-full w-[40%]">
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
          </div>
        )}
        <FFAll />
      </div>
    </>
  );
};

export default Hotel;
