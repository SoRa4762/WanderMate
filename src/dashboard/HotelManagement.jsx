import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { fetchHotels } from "../api";

const HotelManagement = () => {
  const [hotels, setHotels] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentHotel, setCurrentHotel] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getHotels = async () => {
      const response = await fetchHotels();
      setHotels(response);
    };

    getHotels();
  }, []);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...selectedFiles]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const uploadImagesToCloudinary = async () => {
    const cloudinaryUrl =
      "https://api.cloudinary.com/v1_1/soragatrasambandha/image/upload";
    const uploadPreset = "syzx315g";

    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", uploadPreset);

        const response = await axios.post(cloudinaryUrl, formData);
        return response.data.secure_url;
      })
    );

    return imageUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrls = await uploadImagesToCloudinary();

    const hotelData = {
      id: isEditing ? currentHotel.id : hotels.length + 1,
      name,
      price,
      freeCancellation,
      reserveNow,
      description,
      image: imageUrls,
    };

    if (isEditing) {
      setHotels(
        hotels.map((hotel) =>
          hotel.id === currentHotel.id ? hotelData : hotel
        )
      );
      setIsEditing(false);
    } else {
      setHotels([...hotels, hotelData]);
    }

    try {
      await axios.post("http://localhost:5218/api/hotels", hotelData);
      alert("Hotel information submitted successfully!");
    } catch (error) {
      console.error("Error submitting hotel information:", error);
      alert("Failed to submit hotel information. Please try again.");
    }

    resetForm();
  };

  const handleEdit = (hotel) => {
    setCurrentHotel(hotel);
    setName(hotel.name);
    setPrice(hotel.price);
    setFreeCancellation(hotel.freeCancellation);
    setReserveNow(hotel.reserveNow);
    setDescription(hotel.description);
    setImages(hotel.images || []);
    setIsEditing(true);
  };

  const resetForm = () => {
    setName("");
    setPrice("");
    setImages([]);
    setFreeCancellation(false);
    setReserveNow(false);
    setDescription("");
    setCurrentHotel(null);
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          {isEditing ? "Edit Hotel" : "Add New Hotel"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Images</label>
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`preview-${index}`}
                  className="h-24 w-24 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Free Cancellation</label>
            <input
              type="checkbox"
              checked={freeCancellation}
              onChange={(e) => setFreeCancellation(e.target.checked)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Reserve Now</label>
            <input
              type="checkbox"
              checked={reserveNow}
              onChange={(e) => setReserveNow(e.target.checked)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {isEditing ? "Update Hotel" : "Add Hotel"}
          </button>
        </form>

        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-4">View Hotels</h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel.id}>
                  <td className="border px-4 py-2">{hotel.name}</td>
                  <td className="border px-4 py-2">{hotel.price}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(hotel)}
                      className="bg-green-500 text-white py-1 px-3 rounded mr-2"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default HotelManagement;
