import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkReadGameByCategory } from "../../../store/games";
import "./GameSelection.css";
import Pagination from "./Pagination";
import { NavLink } from "react-router-dom";

const GameSelection = (games) => {
  let dispatch = useDispatch();
  // const allGames = Object.values(games);
  // console.log("ALL GAMES ---> ", allGames);
  const allGames = useSelector((state) => state.games.allGames);
  const [activeTab, setActiveTab] = useState("All");

  // PAGINATION STUFF
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 10;

  useEffect(() => {
    setCurrentPage(1); // Set currentPage to 1 whenever activeTab changes
  }, [activeTab]);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const filteredGames = Object.values(allGames)
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter((game) => {
      const gameCategories = Object.values(game.categories).map(
        (category) => category.name
      );
      return activeTab === "All" || gameCategories.includes(activeTab);
    });

  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);

  const pageCount = Math.ceil(filteredGames.length / gamesPerPage);
  const showPagination = pageCount > 1;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // let [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   dispatch(thunkReadGameByCategory()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  return (
    <div className="game-selection-container">
      <div className="game-selection-header">Browse Games</div>
      {/* TAB LINKS */}
      <div className="category-tab-container">
        <button
          className={`category-tab-btn ${
            activeTab === "All" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("All")}
        >
          All
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Action" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Action")}
        >
          Action
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Battle Royale" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Battle Royale")}
        >
          Battle Royale
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Casual" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Casual")}
        >
          Casual
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Fighting" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Fighting")}
        >
          Fighting
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Horror" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Horror")}
        >
          Horror
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "JRPG" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("JRPG")}
        >
          JRPG
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Platformer" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Platformer")}
        >
          Platformer
        </button>
        <button
          className={`category-tab-btn ${
            activeTab === "Simulation" ? "active-category-tab" : ""
          }`}
          onClick={() => setActiveTab("Simulation")}
        >
          Simulation
        </button>
      </div>
      {/* TAB CONTENT */}
      <div id="AllGames" className="tab-content">
        {showPagination && (
          <div className="splash-pagination">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
        {currentGames.map((game) => (
          <NavLink exact to={`/games/${game.id}`}>
            <div className="splash-game-container" key={game.id}>
              <div className="splash-game-banner">
                <img src={game.main_banner_url}></img>
              </div>
              <div className="splash-game-info-parent">
                <div className="splash-game-info-container">
                  <div className="splash-game-title">{game.title}</div>
                  <div className="splash-game-categories-container">
                    {game.categories?.map((category) => {
                      return (
                        <div className="splash-game-category">
                          {category.name}&nbsp;
                        </div>
                      );
                    })}
                  </div>
                  <div className="splash-reviews-container">
                    <span>Overall reviews:&nbsp;</span>
                    <div
                      className={
                        calculateReviewScore(game.reviews) === "Mixed"
                          ? "game-detail-mixed-score"
                          : calculateReviewScore(game.reviews) !==
                              "No reviews" &&
                            calculateReviewScore(game.reviews).includes(
                              "Negative"
                            )
                          ? "game-detail-negative-score"
                          : "game-detail-positive-score"
                      }
                    >
                      <span className="game-detail-review-score">
                        {calculateReviewScore(game.reviews)}&nbsp;
                      </span>
                      <span className="game-detail-review-length">
                        ({game.reviews.length})
                      </span>
                    </div>
                  </div>
                  <div className="splash-price">{formatPrice(game.price)}</div>
                </div>
                <div className="splash-screenshots-parent">
                  {game.screenshots &&
                    Array.from({ length: 3 })
                      .reduce((acc, _, i) => {
                        const availableIndices = game.screenshots
                          .map((_, index) => index)
                          .filter((index) => !acc.includes(index));
                        const randomIndex =
                          availableIndices[
                            Math.floor(Math.random() * availableIndices.length)
                          ];
                        const screenshot = game.screenshots[randomIndex];
                        return [...acc, randomIndex];
                      }, [])
                      .map((index) => {
                        const screenshot = game.screenshots[index];
                        return (
                          <div
                            className="splash-screenshots-container"
                            key={index}
                          >
                            <img
                              className="splash-screenshot"
                              src={screenshot.screenshot_url}
                            />
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      {showPagination && (
        <div className="splash-pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

// 0 TO FREE TO PLAY
function formatPrice(price) {
  if (price === 0) {
    return "FREE TO PLAY";
  } else {
    return `$${price}`;
  }
}

function calculateReviewScore(reviews) {
  const numReviews = reviews.length;
  if (numReviews === 0) {
    return "No reviews";
  }
  const numPositive = reviews.filter(
    (review) => review.recommended === true
  ).length;
  const numNegative = reviews.filter(
    (review) => review.recommended === false
  ).length;
  const numMixed = numReviews - numPositive - numNegative;

  const positivePercentage = (numPositive / numReviews) * 100;
  const negativePercentage = (numNegative / numReviews) * 100;

  if (positivePercentage >= 95) {
    return "Overwhelmingly Positive";
  } else if (positivePercentage >= 80 && positivePercentage < 95) {
    return "Very Positive";
  } else if (positivePercentage >= 70 && positivePercentage < 80) {
    return "Mostly Positive";
  } else if (positivePercentage >= 40 && positivePercentage < 70) {
    if (numMixed === 0) {
      return "Mixed";
    } else {
      return "Positive";
    }
  } else if (positivePercentage >= 20 && positivePercentage < 40) {
    return "Mostly Negative";
  } else {
    if (numNegative > numPositive) {
      return "Overwhelmingly Negative";
    } else {
      return "Very Negative";
    }
  }
}

export default GameSelection;
