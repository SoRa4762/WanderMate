import { useState, useEffect } from "react";
import { fetchUser } from "../../api";
import { useParams } from "react-router-dom";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";
import { fetchHotelBooking, fetchTravelBooking } from "../../api";
import UserBookings from "../../elements/UserBookings";

const UserProfile = () => {
  const hotelUrl = "/hotel";
  const travelUrl = "/travel";
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [hotelBooking, setHotelBooking] = useState([]);
  const [travelBooking, setTravelBooking] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser(userId);
      setUser(userData);
      console.log(userData);
    };

    const getHotelBooking = async () => {
      const data = await fetchHotelBooking();
      setHotelBooking(data);
      console.log(data);
    };

    const getTravelBooking = async () => {
      const data = await fetchTravelBooking();
      setTravelBooking(data);
      console.log(data);
    };

    getUser();
    getHotelBooking();
    getTravelBooking();
  }, [userId]);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

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
                  className="absolute left-8 top-56 lg:left-28 xl:left-32 h-24 w-24 md:h-48 md:w-48 rounded-full object-cover cursor-pointer border-2 border-white"
                  src={user.image}
                  alt={user.name}
                />

                <button
                  onClick={toggleModal}
                  className="absolute top-[345px] right-8 lg:right-28 xl:right-32 text-sm md:text-base text-normal text-black border-black border-2 rounded-3xl px-6 py-1 md:px-12 md:py-2 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            {/* user details */}
            <div className="h-full pt-24 pb-10 flex flex-col">
              <h1 className="font-bold text-xl">{user.name}</h1>
              <p className="text-gray-500 text-sm">{user.userHandle}</p>
              <p className="text-[0.95rem]">{user.bio}</p>
            </div>

            {/* user hotels booking */}
            <h2 className="font-semibold text-sm md:text-xl lg:2xl">
              Hotel Bookings
            </h2>
            <div>
              <UserBookings data={hotelBooking} url={hotelUrl} />
            </div>

            {/* user travel packages booking */}
            <h2 className="font-semibold text-sm md:text-xl lg:2xl mt-8">
              Travel Packages Bookings
            </h2>
            <div>
              <UserBookings data={travelBooking} url={travelUrl} />
            </div>

            {/* edit user details */}
            {openModal && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col gap-4 justify-center items-center">
                <div className="p-8 flex flex-col gap-4 bg-black rounded-xl">
                  <input
                    className="h-10 md:h-14 pl-4 w-50% border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                  />
                  <input
                    className="h-10 md:h-14 pl-4 w-50% border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="text"
                    placeholder="Bio"
                    name="bio"
                    id="bio"
                  />

                  <div className="flex gap-4">
                    <button
                      onClick={toggleModal}
                      className="right-8 lg:right-28 xl:right-32 text-sm md:text-base text-normal text-black border-black border-2 rounded-3xl px-6 py-1 md:px-12 md:py-2 bg-white hover:bg-gray-300 transition-all ease-in-out duration-300"
                    >
                      Save
                    </button>
                    <button
                      onClick={toggleModal}
                      className="right-8 lg:right-28 xl:right-32 text-sm md:text-base text-normal border-black border-2 rounded-3xl px-6 py-1 md:px-12 md:py-2 bg-gray-700 hover:bg-gray-500 text-white transition-all ease-in-out duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
