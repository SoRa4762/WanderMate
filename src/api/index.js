import axios from "axios";
const baseUrl = "http://localhost:5218";

export const fetchHotels = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/hotels`);
    //tested loading UI functionality for slower APIs
    // setTimeout(() => setHotels(response.data), 1000);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch hotels: ", error);
  }
};

export const fetchHotel = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/api/hotels/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch hotel data: ", error);
  }
};

export const fetchTravelPackages = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/travelPackages`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch travel packages data: ", error);
  }
};

export const fetchTopDestinations = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/topDestinations`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch top destinations: ", error);
  }
};

export const fetchThingsToDo = async () => {
  try {
    const response = await axios.get("http://localhost:3000/thingsToDo");
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch things to do: ", error);
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${userId}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch user data: ", err);
  }
};

export const fetchReviews = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/api/reviews`, {
      params: {
        id: id,
      },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch reviews: ", err);
  }
};
