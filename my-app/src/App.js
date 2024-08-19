import axios from "axios";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import "./app.scss";

const App = () => {
  const [query, setQuery] = useState("");
  const [currentCity, setCurrentCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const API_KEY = "c4b4cf0d1a560593f9339800a41e4f81";

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setQuery(value);
    setIsActive(false);

    if (value.length > 2) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`
      );

      setCurrentCity(response.data.list);
    }
  };

  return (
    <div className="container">
      <div className="page">
        <button
          className="main-page"
          // onClick={}
        >
          Main
        </button>
        <button
          className="favorite-page"
          // onClick={}
        >
          Favorite
        </button>
        
        <div className="page-container">
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

              <button
                className="input-container__button"
                onClick={() => setIsActive(true)}
              >
                Search
              </button>
            </div>

            <button
              className="header__button-favorite"
              // onClick={}
            >
              Add to favorite
            </button>
          </div>

          {selectedCity && (
            <div className="info-container">
              <div className="info-container__description">
                <p>{`${selectedCity.name}, ${selectedCity.sys.country}`}</p>
                <p>
                  Coord: {selectedCity.coord.lat}; {selectedCity.coord.lon}
                </p>
                <div className="info-container__description__detail" />
                <p>
                  <strong>Temperature:</strong>{" "}
                  {Math.round(selectedCity.main.temp)}
                  °С
                </p>
                <p>
                  <strong>Humidity:</strong>{" "}
                  {Math.round(selectedCity.main.humidity)}%
                </p>
                <p>
                  <strong>Feels like:</strong>{" "}
                  {Math.round(selectedCity.main.feels_like)}°С
                </p>
                <p>
                  <strong>Sea level:</strong> {selectedCity.main.sea_level} hPa
                </p>
                <p>
                  <strong>Visibility:</strong>{" "}
                  {(selectedCity.visibility / 1000).toFixed(1)} km
                </p>
                {/* </div> */}

                {selectedCity.weather.map((weather) => (
                  <div
                    key={weather.id}
                    className="info-container__weather"
                  >
                    <span>Weather: {weather.main}</span>
                    <span>More detail: {weather.description}</span>
                  </div>
                ))}

                <p>
                  Rain:{" "}
                  {selectedCity.rain
                    ? `${selectedCity.rain["1h"]} hour`
                    : "Nothing"}
                </p>
                <p>
                  Snow:{" "}
                  {selectedCity.snow
                    ? `${selectedCity.snow["1h"]} hour`
                    : "Nothing"}
                </p>
              </div>
            </div>
          )}

          <button
            className="header__button-more"
            // onClick={}
          >
            Add more
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default App;
