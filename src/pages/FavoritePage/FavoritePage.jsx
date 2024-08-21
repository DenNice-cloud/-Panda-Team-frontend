import "./FavoritePage.scss";
import SelectedCityPart from "components/SelectedCityPart";
import { useWeather } from "context/WeatherContext";

const FavoritePage = () => {
  const { selectedFavorite, addToFavorite } = useWeather();
  
  return (
    <div className="favorite-page">
      {selectedFavorite.length > 0 ? (
        selectedFavorite.map((selectedCity) => (
          <div key={selectedCity.id}>
            <button
              className="header__button-favorite-f active"
              onClick={() => addToFavorite(selectedCity)}
            ></button>

            <SelectedCityPart
              key={selectedCity.id}
              selectedCity={selectedCity}
            />
          </div>
        ))
      ) : (
        <p className="favorite-page__empty-message">
          Ви ще нічого не додали до обраних.
        </p>
      )}
    </div>
  );
};

export default FavoritePage;
