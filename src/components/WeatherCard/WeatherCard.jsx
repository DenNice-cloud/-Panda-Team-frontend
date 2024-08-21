import "./WeatherCard.scss";

const WeatherCard = ({
  setQuery,
  setIsActive,
  currentCity,
  setSelectedCity,
}) => {
  const handleCityClick = async (cityInfo) => {
    setSelectedCity(cityInfo);
    setQuery("");
    setIsActive(false);
  };

  return (
    <div className="currentCity">
      {currentCity.length > 0 ? (
        <>
          {currentCity.map((cityInfo) => (
            <button
              key={cityInfo.id}
              className="currentCity__button"
              onClick={() => handleCityClick(cityInfo)}
            >
              <div className="currentCity__list_description">
                {`${cityInfo.name}, ${cityInfo.sys.country}`}
              </div>
              <div className="currentCity__list_description">
                Координати: {cityInfo.coord.lat}; {cityInfo.coord.lon}
              </div>
              <div className="currentCity__list_description">
                Погода: {cityInfo.weather[0].main}
              </div>
            </button>
          ))}
        </>
      ) : (
        <div className="notFound">
          Not found. To make the search more precise, use the city's name,
          2-letter and more.
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
