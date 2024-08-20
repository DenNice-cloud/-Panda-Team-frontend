import TemperatureChart from "components/TemperatureChart";
import "./InfoContainerDay.scss"

const InfoContainerDay = ({ selectedCity }) => {
  return (
    <div className="info-container__description">
      <p>{`${selectedCity.name}, ${selectedCity.sys.country}`}</p>

      <p>
        Coord: {selectedCity.coord.lat}; {selectedCity.coord.lon}
      </p>

      <div className="info-container__description__detail" />

      <p>
        <strong>Temperature:</strong> {Math.round(selectedCity.main.temp)}
        °С
      </p>

      <p>
        <strong>Humidity:</strong> {Math.round(selectedCity.main.humidity)}%
      </p>

      <p>
        <strong>Feels like:</strong> {Math.round(selectedCity.main.feels_like)}°С
      </p>

      <p>
        <strong>Sea level:</strong> {selectedCity.main.sea_level} hPa
      </p>
      
      {selectedCity.visibility && (
        <p>
          <strong>Visibility:</strong> {(selectedCity.visibility / 1000).toFixed(1)} km
        </p>
      )}

      {selectedCity.weather.map((weather) => (
        <div
          key={weather.id}
          className="info-container__weather"
        >
          <span>Weather: {weather.main}</span>
          <span>More detail: {weather.description}</span>
        </div>
      ))}

      <p>Rain: {selectedCity.rain ? `${selectedCity.rain["1h"]} hour` : "None"}</p>

      <p>Snow: {selectedCity.snow ? `${selectedCity.snow["1h"]} hour` : "None"}</p>

      <TemperatureChart selectedCity={selectedCity} />
    </div>
  );
};
export default InfoContainerDay;
