import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Carousel.css";

const FeaturedCarousel = () => {
  const games = useSelector((state) => state.games.allGames);

  const [slideIndex, setSlideIndex] = useState(1);
  const [autoSlide, setAutoSlide] = useState(true);
  const SLIDE_INTERVAL = 5000; // 5 seconds
  // console.log("GAMES", games.games);
  let featuredGames = Object.values(games).filter(
    (game) => game.large_featured_banner_url
  );

  // Only show the first 6 games
  featuredGames = featuredGames.slice(0, 6);

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

  function nextSlide() {
    if (slideIndex < featuredGames.length) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  }

  useEffect(() => {
    let slideInterval = null;

    if (autoSlide) {
      slideInterval = setInterval(() => {
        nextSlide();
      }, SLIDE_INTERVAL);
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, [slideIndex, autoSlide]);

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
        <div
          className="thumbnails"
          onMouseEnter={() => {
            setAutoSlide(false);
          }}
          onMouseLeave={() => {
            setAutoSlide(true);
          }}
        >
          {featuredGames.map((game, index) => {
            return (
              <div
                className={`thumbnail ${
                  index + 1 === slideIndex ? "active" : ""
                }`}
                key={game.id}
                onClick={() => {
                  setSlideIndex(index + 1);
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
          {featuredGames.map((game, index) => {
            return (
              <span
                key={game.id}
                className={`dot ${slideIndex === index + 1 ? "dotactive" : ""}`}
                onClick={() => {
                  setSlideIndex(index + 1);
                }}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturedCarousel;
