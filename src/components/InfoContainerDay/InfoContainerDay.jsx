import TemperatureChart from "components/TemperatureChart";
import "./InfoContainerDay.scss"

const InfoContainerDay = ({ selectedCity }) => {
  return (
    <div className="info-container__description">
      <p>{`${selectedCity.name}, ${selectedCity.sys.country}`}</p>

      <p>
      Координати: {selectedCity.coord.lat}; {selectedCity.coord.lon}
      </p>

      <div className="info-container__description__detail" />

      <p>
        <strong>Температура:</strong> {Math.round(selectedCity.main.temp)}
        °С
      </p>

      <p>
        <strong>Вологість:</strong> {Math.round(selectedCity.main.humidity)}%
      </p>

      <p>
        <strong>Відчувається як:</strong> {Math.round(selectedCity.main.feels_like)}°С
      </p>

      <p>
        <strong>Рівень моря:</strong> {selectedCity.main.sea_level} hPa
      </p>
      
      {selectedCity.visibility && (
        <p>
          <strong>Видимість:</strong> {(selectedCity.visibility / 1000).toFixed(1)} km
        </p>
      )}

      {selectedCity.weather.map((weather) => (
        <div
          key={weather.id}
          className="info-container__weather"
        >
          <span>Погода: {weather.main}</span>
          <span>Детальніше: {weather.description}</span>
        </div>
      ))}

      <p>Дощить: {selectedCity.rain ? `${selectedCity.rain["1h"]} hour` : "Нема"}</p>

      <p>Сніжно: {selectedCity.snow ? `${selectedCity.snow["1h"]} hour` : "Нема"}</p>

      <TemperatureChart selectedCity={selectedCity} />
    </div>
  );
};
export default InfoContainerDay;
