import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHotel } from "../api";

const Hotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const getHotel = async () => {
      const data = await fetchHotel(id);
      setHotel(data);
    };

    getHotel();
  }, [id]);

  //loading animation alternative
  //   if (!hotel) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <>
      {!hotel ? (
        <div>Loading</div>
      ) : (
        <div>
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>Rating: {hotel.rating}</p>
          {/* Add more hotel details as needed */}
        </div>
      )}
    </>
  );
};

export default Hotel;
