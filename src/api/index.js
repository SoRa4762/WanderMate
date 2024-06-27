import axios from "axios";
const baseUrl = "http://localhost:5218";
const jsonUrl = "http://localhost:3000";
const token = sessionStorage.getItem("token");

// hotel apis
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

export const bookHotel = async (hotelName) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/hotelbooking?name=${hotelName}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (err) {
    console.log("Error trying to book hotel: ", err);
  }
};

export const fetchHotelBooking = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/hotelbooking`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch hotel booking: ", err);
  }
};

export const fetchHotelReviews = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/hotelreviews`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch hotel reviews: ", err);
  }
};

export const fetchHotelReview = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/api/hotelreviews/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch hotel reviews: ", err);
  }
};

export const postHotelReview = async (id, data) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/hotelreviews/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the headers
        },
      }
    );
    return response;
  } catch (err) {
    console.log("Error trying to post hotel review: ", err);
  }
};

// travel package apis
export const fetchTravelPackages = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/destination`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch travel packages data: ", error);
  }
};

export const bookTravelPackage = async (packageName) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/destinationbooking?name=${packageName}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to book travel package: ", err);
  }
};

export const fetchTravelBooking = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/destinationbooking`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch travel booking: ", err);
  }
};

export const fetchTravelPackage = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/api/destination/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch travel package data: ", error);
  }
};

export const fetchTravelPackageReviews = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/destinationreviews`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token in the headers
      },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch travel package reviews: ", err);
  }
};

export const fetchTravelPackageReview = async (id) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/destinationreviews/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the headers
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch travel package reviews: ", err);
  }
};

export const postTravelPackageReview = async (id, data) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/destinationreviews/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the headers
        },
      }
    );
    return response;
  } catch (err) {
    console.log("Error trying to post travel package review: ", err);
  }
};

// destination apis
export const fetchTopDestinations = async () => {
  try {
    const response = await axios.get(`${jsonUrl}/topDestinations`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch top destinations: ", error);
  }
};

// things to do apis
export const fetchThingsToDo = async () => {
  try {
    const response = await axios.get(`${jsonUrl}/thingsToDo`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error trying to fetch things to do: ", error);
  }
};

// user apis
export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`${jsonUrl}/users/${userId}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log("Error trying to fetch user data: ", err);
  }
};
