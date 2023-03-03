import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Carousel.css";

const FeaturedCarousel = () => {
  const games = useSelector((state) => state.games.allGames);

  const [slideIndex, setSlideIndex] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log("GAMES", games.games);
  let featuredGames = Object.values(games).filter(
    (game) => game.large_featured_banner_url
  );

  // PAGINATION
  const gamesPerPage = 6;
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  let displayedGames = featuredGames.slice(startIndex, endIndex);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(Math.ceil(featuredGames.length / gamesPerPage));
    }
  }

  function nextPage() {
    if (currentPage < Math.ceil(featuredGames.length / gamesPerPage)) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  }

  function plusSlides() {
    if (slideIndex < featuredGames.length) {
      setSlideIndex(slideIndex + 1);
    }
    if (slideIndex === featuredGames.length) {
      setSlideIndex(1);
    }
    console.log("NEXT", slideIndex);
  }

  function minusSlides() {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
    }
    if (slideIndex === 1) {
      setSlideIndex(featuredGames.length);
    }
    console.log("PREV", slideIndex);
  }

  // console.log("FEATURED GAMES --------->", featuredGames);

  return (
    <>
      <div className="slideshow-container">
        {featuredGames.length &&
          featuredGames.map((game, index) => {
            return (
              <div key={game.id}>
                <div
                  className={`mySlides fade slide${index + 1} ${
                    index + 1 === slideIndex ? "active" : "hidden"
                  }`}
                >
                  <img
                    className="lrg-featured-banner-url"
                    src={game.large_featured_banner_url}
                    alt="game.title"
                  ></img>
                </div>
                <div
                  className={`textContainer ${
                    index + 1 === slideIndex ? "" : "hidden"
                  }`}
                >
                  <div className="game-info-container">
                    <div className="game-title">{game.title}</div>

                    <div className="game-price">
                      {game.price === 0 ? "FREE TO PLAY" : `$` + game.price}
                    </div>

                    <div className="game-button-container">
                      <NavLink exact to={`/games/${game.id}`}>
                        <button className="game-button">More Info</button>
                      </NavLink>
                    </div>
                    <div className="featured-header">
                      Featured & Recommended
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <div role="button" className="prev" onClick={minusSlides}>
          ❮
        </div>
        <div role="button" className="next" onClick={plusSlides}>
          ❯
        </div>
      </div>
      <div className="bottom-container">
        <div className="thumbnails">
          {displayedGames.map((game, index) => {
            return (
              <div
                className={`thumbnail ${
                  startIndex + index + 1 === slideIndex ? "active" : ""
                }`}
                key={game.id}
                onClick={() => {
                  setSlideIndex(startIndex + index + 1);
                }}
              >
                <img
                  className="featured-banner-url"
                  src={game.featured_banner_url}
                  alt="game.title"
                ></img>
              </div>
            );
          })}
        </div>
        <div className="dots">
          {displayedGames.map((game, index) => {
            const dotIndex = startIndex + index + 1;
            return (
              <span
                key={game.id}
                className={`dot ${slideIndex === dotIndex ? "dotactive" : ""}`}
                onClick={() => {
                  setSlideIndex(dotIndex);
                }}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
};

// export default FeaturedCarousel;
