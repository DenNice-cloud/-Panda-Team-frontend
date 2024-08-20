import { useEffect, useState } from "react";
import { fetchWeatherByCityForWeek } from "utils/api";
import InfoContainerDay from "components/InfoContainerDay";
import "./SelectedCityPart.scss";

const SelectedCityPart = ({
  selectedCity,
}) => {
  const [selectedBlock, setSelectedBlock] = useState("Day");
  const [weekData, setWeekData] = useState([]);
  const currentBlock = selectedBlock === "Day";
  
  const changeBlock = (block) => {
    setSelectedBlock(block);
  };

  const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "short", day: "numeric", month: "short" };

    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchWeekData = async () => {
      const fetchData = await fetchWeatherByCityForWeek(selectedCity.name);
      const cityData = fetchData.data.list;
      let result = [];

      cityData.forEach((day) => {
        const date = new Date(day.dt_txt).toLocaleDateString();

        if (
          !result.some(
            (someDay) => new Date(someDay.dt_txt).toLocaleDateString() === date
          )
        ) {
          result.push(day);
        }
      });

      setWeekData(result);
    };

    fetchWeekData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBlock]);

  return (
    <div className="info-container">
      <div className="info-container__block">
        <button
          className="info-container__block__button"
          onClick={() => changeBlock("Day")}
          disabled={currentBlock}
        >
          Day
        </button>
        <button
          className="info-container__block__button"
          onClick={() => changeBlock("Week")}
          disabled={!currentBlock}
        >
          Week
        </button>
      </div>

      {currentBlock ? (
        <InfoContainerDay selectedCity={selectedCity} />
      ) : (
        <div className="info-container__week">
          {weekData.map((day) => (
            <div
              key={day.dt}
              className="info-container__week__detail"
            >
              <p>{`${getDayOfWeek(day.dt_txt)} `}</p>

              <p>
                {` ${Math.round(day.main.temp_min)} / ${Math.round(
                  day.main.temp_max
                )}°С`}
              </p>

              {day.weather.map((weather) => (
                <div key={weather.id}>{`${weather.description}`}</div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedCityPart;
