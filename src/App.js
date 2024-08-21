import { useState } from "react";
import "./app.scss";
import { MainPage, FavoritePage } from "pages";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Main");
  const currentPage = selectedPage === "Main";

  const changePage = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="container">
      <div className="page">
        <button
          className="main-page__button"
          onClick={() => changePage("Main")}
          disabled={currentPage}
        >
          Головна
        </button>
        <button
          className="favorite-page__button"
          onClick={() => changePage("Favorite")}
          disabled={!currentPage}
        >
          Улюблене
        </button>

        <div className="page-container">
          {currentPage ? <MainPage /> : <FavoritePage />}
        </div>
      </div>
    </div>
  );
};

export default App;
