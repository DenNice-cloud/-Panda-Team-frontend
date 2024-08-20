import React, { createContext, useState, useContext } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [selectedFavorite, setSelectedFavorite] = useState([]);

  const addToFavorite = (city) => {
    if (city) {
      if (selectedFavorite.length < 5) {
        setSelectedFavorite((prevFavorites) =>
          prevFavorites.some((fav) => fav.id === city.id)
            ? prevFavorites.filter((item) => item.id !== city.id)
            : [...prevFavorites, city]
        );
      } else {
        window.alert(
          "Для додавання видаліть місто, оскільки максимальна кількість міст — 5."
        );
      }
    }
  };

  const value = { selectedFavorite, setSelectedFavorite, addToFavorite };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
