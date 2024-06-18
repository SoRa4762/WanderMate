import axios from "axios";
const baseUrl = "http://localhost:3000";

export const fetchHotels = async () => {
  try {
    const response = await axios.get(`${baseUrl}/hotels`);
    //tested loading UI functionality for slower APIs
    // setTimeout(() => setHotels(response.data), 1000);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch hotels: ", error);
  }
};

export const fetchHotel = async (hotelId) => {
  try {
    const response = await axios.get(`${baseUrl}/hotels/${hotelId}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch hotel data: ", error);
  }
};

export const fetchTravelPackages = async () => {
  try {
    const response = await axios.get(`${baseUrl}/travelPackages`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch travel packages data: ", error);
  }
};

export const fetchTopDestinations = async () => {
  try {
    const response = await axios.get(`${baseUrl}/topDestinations`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch top destinations: ", error);
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userId}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch user data: ", err);
  }
};

export const fetchReviews = async (hotelId) => {
  try {
    const response = await axios.get(`${baseUrl}/reviews`, {
      params: {
        hotelId: hotelId,
      },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch reviews: ", err);
  }
};
