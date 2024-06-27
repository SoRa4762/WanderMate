import { useState, useEffect } from "react";
import { fetchUser } from "../../api";
import { useParams } from "react-router-dom";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser(userId);
      setUser(userData);
      console.log(userData);
    };

    getUser();
  }, [userId]);

  return (
    <>
      <div className="px-2 sm:px-4 md:px-8 lg:px-20">
        <NavigationOverall />
        {!user ? (
          <div>Loading...</div>
        ) : (
          <div className="min-h-screen w-full flex flex-col mt-4">
            {/* profile and cover image */}
            <div className="relative h-80 w-full">
              <img
                className="h-80 w-full object-cover rounded-lg cursor-pointer"
                src={user.coverImage}
                alt={user.name}
              />
              <div className="h-full w-full">
                <img
                  className="absolute left-8 top-56 lg:left-28 xl:left-32 h-44 w-44 rounded-full object-cover cursor-pointer border-2 border-white"
                  src={user.image}
                  alt={user.name}
                />

                <button className="absolute top-[345px] right-8 lg:right-28 xl:right-32 bg-transparent text-normal text-black border-black border-2 rounded-3xl px-12 py-2 hover:bg-black hover:text-white transition-all ease-in-out duration-300">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* user details */}
            <div className="h-80 pt-24 flex flex-col">
              <h1 className="font-bold text-xl">{user.name}</h1>
              <p className="text-gray-500 text-sm">{user.userHandle}</p>
              <p className="text-[0.95rem]">{user.bio}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
