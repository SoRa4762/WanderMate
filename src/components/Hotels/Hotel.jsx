import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchHotel,
  fetchReviews,
  // submitReview
} from "../../api";
import NavigationOverall from "../../elements/Navigation/NavigationOverall";
import FFAll from "../../elements/Footers/FFAll";
import { hotelDetails } from "../../helper/data";
import Map from "../Map/Map";
import StarRating from "../../elements/StarRating";

const Hotel = () => {
  const userId = sessionStorage.getItem("userId");
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({
    userId,
    id,
    newReview: "",
    newRating: 0,
  });

  useEffect(() => {
    const getHotel = async () => {
      const data = await fetchHotel(id);
      setHotel(data);
    };

    const getReviews = async () => {
      const data = await fetchReviews(id);
      setReviews(data);
    };

    getHotel();
    getReviews();
  }, [id]);

  const handleStarClick = (index) => {
    setReviewData((prevData) => ({
      ...prevData,
      newRating: index + 1,
    }));
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (reviewData.newReview.trim() === "" || reviewData.newRating === 0) {
      alert("Please provide a review and a rating.");
      return;
    }

    try {
      // await submitReview(reviewData);
      await console.log(reviewData);
      // await setReviews(reviewData);
      setReviews([...reviews, reviewData]);
      setReviewData((prevData) => ({
        ...prevData,
        newReview: "",
        newRating: "",
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
              <div className="h-full w-full shadow-lg mb-8" id="reviews">
                <h2 className="text-2xl font-bold p-4">Reviews</h2>
                {!reviews ? (
                  <p className="font-bold text-xl p-4">No Reviews Yet</p>
                ) : (
                  reviews.map((review, index) => (
                    <div
                      key={index}
                      className="h-20vh w-full flex flex-col p-8 gap-2"
                    >
                      <div className="h-full w-full flex items-center gap-4">
                        <img
                          src={review.userImage}
                          alt={review.user}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <p className="font-bold text-xl">{review.user}</p>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="font-medium text-md">{review.comment}</p>
                      <p className="font-bold text-md">{review.date}</p>
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
                <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
                <form onSubmit={handleReviewSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Your Review
                    </label>
                    <textarea
                      value={reviewData.newReview}
                      onChange={(e) =>
                        setReviewData({
                          ...reviewData,
                          newReview: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Your Rating
                    </label>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          onClick={() => handleStarClick(index)}
                          className={`h-8 w-8 cursor-pointer ${
                            index < reviewData.newRating
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
                    className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md"
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
