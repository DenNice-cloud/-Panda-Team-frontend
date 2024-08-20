import axios from "axios";
import { useEffect, useState } from "react";
import WeatherCard from "../WeatherCard/WeatherCard";
import SelectedCityPart from "../SelectedCityPart/SelectedCityPart";
import "./InputHeader.scss";
import { useWeather } from "context/WeatherContext";
import { fetchInputData } from "utils/api";

const InputHeader = ({ block, inputBlocks, setInputBlocks }) => {
  const { selectedFavorite, addToFavorite } = useWeather();

  const [selectedCity, setSelectedCity] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setQuery(value);
    setIsActive(false);

    if (value.length > 2) {
      const response = await fetchInputData(value);

      setCurrentCity(response.data.list);
      setIsActive(true);
    }
  };

  const handleRemoveBlock = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to remove this block?"
    );

    if (isConfirmed) {
      setInputBlocks(inputBlocks.filter((block) => block.id !== id));
    }
  };

  const [isFavoriteButton, setIsFavoriteButton] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      const test = selectedFavorite.some((fav) => fav.id === selectedCity.id);
      setIsFavoriteButton(test);
    }
  }, [selectedFavorite, query]);

  return (
    <>
      <div className="header">
        <div className="input-container">
          <div className="input-container__bar">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search city..."
              className="input-container__bar-layer"
            />

            {isActive && (
              <WeatherCard
                setQuery={setQuery}
                setIsActive={setIsActive}
                currentCity={currentCity}
                setSelectedCity={setSelectedCity}
              />
            )}
          </div>
        </div>

        <button
          className={`header__button-favorite ${isFavoriteButton && "active"}`}
          onClick={() => addToFavorite(selectedCity)}
        ></button>
      </div>

      {selectedCity && <SelectedCityPart selectedCity={selectedCity} />}

      <div className="remove-button">
        <button
          className="remove-button__style"
          onClick={() => handleRemoveBlock(block.id)}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default InputHeader;
