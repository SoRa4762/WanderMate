import { useState, useEffect } from "react";
import { fetchHotel } from "../api";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchHotel(id);
      setUser(userData);
    };

    getUser();
  }, [id]);

  return (
    <>
      {!user ? (
        <div>Loading...</div>
      ) : (
        <div className="min-h-screen w-full flex flex-col bg-blue-gray-700">
          {/* profile and cover image */}
          <div className="relative h-80 w-full">
            <img
              className="h-80 w-full object-cover"
              src={user.img}
              alt={user.name}
            />
            <div className="h-full w-full">
              <img
                className="absolute left-8 top-56 lg:left-28 xl:left-32 h-44 w-44 rounded-full object-cover"
                src={user.img}
                alt={user.name}
              />

              <button className="absolute top-[345px] right-8 lg:right-28 xl:right-32 bg-transparent text-normal text-white border-white border-2 rounded-3xl px-12 py-2 hover:bg-white hover:text-black transition-all ease-in-out duration-300">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
