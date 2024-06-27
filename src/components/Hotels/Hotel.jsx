import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchHotel,
  fetchHotelReviews,
  postHotelReview,
  // submitReview
} from "../../api";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";
import FFAll from "../../elements/Footers/FFAll";
import { hotelDetails } from "../../helper/data";
import Map from "../Map/Map";
import StarRating from "../../elements/StarRating";
import userProfile from "../../assets/userProfile.jpg";

const Hotel = () => {
  // const userId = sessionStorage.getItem("userId");
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({
    reviewText: "",
    rating: 0,
  });

  useEffect(() => {
    const getHotel = async () => {
      const data = await fetchHotel(id);
      await setHotel(data);
    };

    const getReviews = async () => {
      const data = await fetchHotelReviews();
      await setReviews(data);
    };

    getHotel();
    getReviews();
  }, [id]);

  const handleStarClick = (index) => {
    setReviewData((prevData) => ({
      ...prevData,
      rating: index + 1,
    }));
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (reviewData.reviewText.trim() === "" || reviewData.rating === 0) {
      alert("Please provide a review and a rating.");
      return;
    }

    try {
      await postHotelReview(id, reviewData);
      await console.log(reviewData);
      // await setReviews(reviewData);
      setReviews([...reviews, reviewData]);
      setReviewData((prevData) => ({
        ...prevData,
        reviewText: "",
        rating: "",
      }));
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again.");
    }
  };

  return (
    <>
      <div className="px-2 sm:px-4 md:px-8 lg:px-20">
        <NavigationOverall />
        {!hotel ? (
          <div>Loading...</div>
        ) : (
          <div className="h-full w-full">
            {/* 5 images section */}
            <div className="h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-[75vh] flex gap-4 mt-8 w-full transition-all duration-300 ease-in-out rounded-lg">
              {/* 1 image: slice one image */}
              <div className="h-full w-full lg:w-[60%] rounded-lg shadow-xl cursor-pointer">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={hotel.image[0]}
                  alt={hotel.name}
                />
              </div>
              {/* 4 images: slice 4 images and map them */}
              <div className="hidden lg:flex h-full w-[40%] shadow-xl rounded-lg">
                <div className="lg:grid h-full w-full grid-cols-2 grid-rows-2 gap-2">
                  {hotel.image.slice(1, 5).map((img, i) => (
                    <img
                      key={i}
                      className="h-full w-full object-cover rounded-lg cursor-pointer"
                      src={img}
                      alt={hotel.name}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* details section */}
            <div className="h-full w-full">
              {/* details section - nav */}
              <div className="h-16 flex gap-4 px-4 items-center flex-wrap">
                {hotelDetails.map((item) => (
                  <li
                    className="list-none cursor-pointer font-normal hover:border-b-4 border-blue-500"
                    key={item.id}
                  >
                    <a href={item.to}>{item.name}</a>
                  </li>
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
                  <p>{hotel.description}</p>
                </div>
                <div className="flex sm:flex-1 flex-col justify-center items-center">
                  <button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-1 rounded-md font-medium mt-4">
                    Book Now
                  </button>
                </div>
              </div>

              {/* details section - location */}
              <div className="h-[60vh] w-full my-8 rounded-md" id="location">
                <Map />
              </div>

              {/* details section - reviews */}
              <div className="h-full w-full shadow-lg mb-8" id="reviews">
                <h2 className="p-4 font-semibold text-sm md:text-xl lg:2xl">
                  Reviews
                </h2>
                {console.log(reviews)}
                {!reviews ? (
                  <p className="text-xs md:text-base p-4">No Reviews Yet</p>
                ) : (
                  reviews.map((review, index) => (
                    <div
                      key={index}
                      className="h-20vh w-full flex flex-col p-8 gap-2"
                    >
                      <div className="h-full w-full flex items-center gap-4">
                        <img
                          src={
                            review.userImage ? review.userImage : userProfile
                          }
                          alt={review?.createdBy}
                          className="h-8 w-8 md:h-12 md:w-12 rounded-full object-cover"
                        />
                        <p className="font-semibold text-sm md:text-xl lg:2xl">
                          {review.createdBy}
                        </p>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="font-medium text-xs md:text-base">
                        {review.reviewText}
                      </p>
                      <p className="font-bold text-xs md:text-base">
                        {new Date(review.createdOn).toLocaleString()}
                      </p>{" "}
                      <div className="flex justify-center pt-4">
                        <hr className="border-b-1 border-gray-500 w-[80%]" />
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Write a Review Section */}
              <div
                className="h-full w-full shadow-lg p-8 rounded-lg mb-8"
                id="write-review"
              >
                <h2 className="font-semibold text-sm md:text-xl lg:2xl mb-2">
                  Write a Review
                </h2>
                <form onSubmit={handleReviewSubmit}>
                  <div className="mb-4">
                    <label className="block text-xs md:text-base mb-2">
                      Your Review
                    </label>
                    <textarea
                      value={reviewData.reviewText}
                      onChange={(e) =>
                        setReviewData({
                          ...reviewData,
                          reviewText: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs md:text-base mb-2">
                      Your Rating
                    </label>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          onClick={() => handleStarClick(index)}
                          className={`h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 cursor-pointer ${
                            index < reviewData.rating
                              ? "text-yellow-500"
                              : "text-gray-400"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 .288l2.833 8.718h9.167l-7.5 5.45 2.833 8.718-7.5-5.451-7.5 5.451 2.833-8.718-7.5-5.45h9.167z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-1 rounded-md font-medium"
                  >
                    Submit Review
                  </button>
                </form>
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
