import { useState } from "react";
import "./app.scss";
import { MainPage, FavoritePage } from "pages";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Main");
  const currentTab = selectedTab === "Main";

  const changePage = (page) => {
    setSelectedTab(page);
  };

  return (
    <div className="container">
      <div className="page">
        <button
          className="main-page__button"
          onClick={() => changePage("Main")}
          disabled={currentTab}
        >
          Головна
        </button>
        <button
          className="favorite-page__button"
          onClick={() => changePage("Favorite")}
          disabled={!currentTab}
        >
          Улюблене
        </button>

        <div className="page-container">
          {currentTab ? <MainPage /> : <FavoritePage />}
        </div>
      </div>
    </div>
  );
};

export default App;
