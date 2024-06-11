import axios from "axios";

const baseUrl = "http://localhost:3000";

export const fetchHotels = async () => {
  const response = await axios.get(`${baseUrl}/hotels`);
  //tested loading UI functionality for slower APIs
  // setTimeout(() => setHotels(response.data), 1000);
  const data = await response.data;
  return data;
  //   console.log("this is hotel fetch hotel: ", response.data);
};

export const fetchTravelPackages = async () => {
  const response = await axios.get(`${baseUrl}/travelPackages`);
  const data = await response.data;
  return data;
};

export const fetchTopDestinations = async () => {
  const response = await axios.get(`${baseUrl}/topDestinations`);
  const data = await response.data;
  return data;
};
