import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { fetchTravelPackages } from "../../api";

const PackageManagement = () => {
  const [packages, setPackages] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(null);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [freeCancellation, setFreeCancellation] = useState(false);
  const [reserveNow, setReserveNow] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getTravelPackages = async () => {
      const response = await fetchTravelPackages();
      setPackages(response);
    };

    getTravelPackages();
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

    const packageData = {
      id: isEditing ? currentPackage.id : packages.length + 1,
      name,
      price,
      freeCancellation,
      reserveNow,
      description,
      image: imageUrls,
    };

    if (isEditing) {
      setPackages(
        packages.map((packages) =>
          packages.id === currentPackage.id ? packageData : packages
        )
      );
      setIsEditing(false);
    } else {
      setPackages([...packages, packageData]);
    }

    try {
      await axios.post("http://localhost:5218/api/destination", packageData);
      alert("Package information submitted successfully!");
    } catch (error) {
      console.error("Error submitting package information:", error);
      alert("Failed to submit package information. Please try again.");
    }

    resetForm();
  };

  const handleEdit = (packages) => {
    setCurrentPackage(packages);
    setName(packages.name);
    setPrice(packages.price);
    setFreeCancellation(packages.freeCancellation);
    setReserveNow(packages.reserveNow);
    setDescription(packages.description);
    setImages(packages.images || []);
    setIsEditing(true);
  };

  const resetForm = () => {
    setName("");
    setPrice("");
    setImages([]);
    setFreeCancellation(false);
    setReserveNow(false);
    setDescription("");
    setCurrentPackage(null);
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">
          {isEditing ? "Edit Package" : "Add New Package"}
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
            {isEditing ? "Update Package" : "Add Package"}
          </button>
        </form>

        <div className="mt-10">
          <h1 className="text-3xl font-bold mb-4">View Travel Packages</h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((packages) => (
                <tr key={packages.id}>
                  <td className="border px-4 py-2">{packages.name}</td>
                  <td className="border px-4 py-2">{packages.price}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEdit(packages)}
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

export default PackageManagement;
