import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PlaceContext = createContext([]);

export const PlaceProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPlaces = async () => {
      const { data } = await axios.get(
        "https://homestay-app-server.cyclic.app/places"
      );
      console.log(data);
      setPlaces(data.places);
      setLoading(false);
    };

    getPlaces();
  }, []);

  return (
    <PlaceContext.Provider value={{ places, loading, setPlaces, setLoading }}>
      {children}
    </PlaceContext.Provider>
  );
};
