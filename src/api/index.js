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
    console.log("there was an error: ", error);
  }
};

export const fetchHotel = async (hotelId) => {
  try {
    const response = await axios.get(`${baseUrl}/hotels/${hotelId}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("there was an error: ", error);
  }
};

export const fetchTravelPackages = async () => {
  try {
    const response = await axios.get(`${baseUrl}/travelPackages`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("there was an error: ", error);
  }
};

export const fetchTopDestinations = async () => {
  try {
    const response = await axios.get(`${baseUrl}/topDestinations`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("there was an error: ", error);
  }
};
