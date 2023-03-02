import React, { useState, useEffect } from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { thunkReadGame } from "../../../store/games";
import "./GameDetail.css";
import { thunkAddToCart } from "../../../store/carts";
import { thunkReadUserLibrary } from "../../../store/libraries";
import GameReviews from "./GameReviews";

const Game = () => {
  const dispatch = useDispatch();
  let [isLoaded, setIsLoaded] = useState(false);
  let [isLibraryLoaded, setIsLibraryLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();
  const { game_id } = useParams();
  const singleGame = useSelector((state) => state.games.singleGame);
  const user = useSelector((state) => state.session.user);
  const cart = useSelector((state) => state.cart);
  const library = useSelector((state) => state.library);

  // let gameScreenshots = singleGame.screenshots;

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    dispatch(thunkReadGame(game_id)).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunkReadUserLibrary()).then(() => setIsLibraryLoaded(true));
  }, [dispatch]);

  const addToCart = () => {
    // dispatch thunk to add to cart
    if (!cart[game_id]) {
      dispatch(thunkAddToCart(game_id)).then(() => history.push(`/cart`));
    } else {
      history.push(`/cart`);
    }
  };

  // PURCHASE BUTTON HOVER
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 0 TO FREE TO PLAY
  function formatPrice(price) {
    if (price === 0) {
      return "FREE TO PLAY";
    } else {
      return `$${price}`;
    }
  }

  return (
    <>
      {isLoaded && (
        <>
          <div className="game-detail-parent">
            <div className="game-detail-container">
              <div className="game-detail-slideshow-container">
                <div className="game-detail-image">
                  {isLoaded &&
                    singleGame.screenshots?.map((screenshot, index) => {
                      return (
                        <div
                          className={
                            activeTab === index
                              ? "active-game-detail"
                              : "hidden"
                          }
                        >
                          <img src={screenshot.screenshot_url}></img>
                        </div>
                      );
                    })}
                </div>
                <div className="game-detail-screenshots">
                  {isLoaded &&
                    singleGame.screenshots?.map((screenshot, index) => {
                      return (
                        <div className="screenshot-thumbnail">
                          <img
                            onClick={() => handleTabClick(index)}
                            src={screenshot.screenshot_url}
                            className={`tab ${
                              activeTab === index ? "active-game-detail-2" : ""
                            }`}
                          ></img>
                        </div>
                      );
                    })}
                </div>
                {isLoaded &&
                  singleGame.screenshots?.map((screenshot, index) => {
                    return (
                      <div className="screenshot-container">
                        {/* <img src={screenshot.screenshot_url[activeTab]}></img> */}
                      </div>
                    );
                  })}
              </div>
              <div className="game-detail-info-container">
                <div className="game-detail-main-img-container">
                  <img
                    className="game-detail-main-img"
                    src={singleGame.main_banner_url}
                  ></img>
                </div>
                <div className="game-detail-text-container">
                  <div className="game-detail-title-des">
                    <div className="game-detail-title-wrapper">
                      <div className="game-detail-title">
                        {singleGame.title}
                      </div>
                      <div className="game-detail-price">
                        {isLoaded & (singleGame.price === 0)
                          ? "FREE TO PLAY"
                          : `$` + singleGame.price}
                      </div>
                    </div>
                    <div className="game-detail-description">
                      {singleGame.description}
                    </div>
                  </div>
                  <div className="game-detail-info-mid-container">
                    <div className="game-detail-mid-info">
                      <div className="game-detail-key">All Reviews:&nbsp;</div>
                      <div
                        className={
                          "game-detail-value " +
                          (calculateReviewScore(singleGame.reviews) === "Mixed"
                            ? "game-detail-mixed-score"
                            : calculateReviewScore(singleGame.reviews) !==
                                "No reviews" &&
                              calculateReviewScore(singleGame.reviews).includes(
                                "Negative"
                              )
                            ? "game-detail-negative-score"
                            : "game-detail-positive-score")
                        }
                      >
                        <span className="game-detail-review-score">
                          {calculateReviewScore(singleGame.reviews)}&nbsp;
                        </span>
                        <span className="game-detail-review-length">
                          ({singleGame.reviews.length})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="game-detail-mid-info">
                    <div className="game-detail-key">Release Date:&nbsp;</div>
                    <div className="game-detail-value2">
                      {dateConverter(singleGame.release_date)}
                    </div>
                  </div>
                  <div className="game-detail-info-mid-container">
                    <div className="game-detail-mid-info">
                      <div className="game-detail-key">Developer:&nbsp;</div>
                      <div className="game-detail-value3">
                        {singleGame.developer}
                      </div>
                    </div>
                    <div className="game-detail-mid-info">
                      <div className="game-detail-key">Publisher:&nbsp;</div>
                      <div className="game-detail-value4">
                        {singleGame.publisher}
                      </div>
                    </div>
                  </div>
                  <div className="game-detail-categories-container">
                    {singleGame.categories?.map((category) => {
                      return (
                        <div className="game-detail-category">
                          {category.name}&nbsp;
                        </div>
                      );
                    })}
                  </div>
                  <div className="btn-container">
                    <div className="add-to-cart-container">
                      {isLibraryLoaded && !user ? (
                        <NavLink to="/login">
                          <div className="login-to-purchase">
                            Login to Purchase
                          </div>
                        </NavLink>
                      ) : isLibraryLoaded && library[game_id] && user ? (
                        <NavLink to="/library">
                          <div className="login-to-purchase">In Library</div>
                        </NavLink>
                      ) : (
                        isLibraryLoaded && (
                          <button
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={addToCart}
                            className="add-to-cart-btn"
                          >
                            {isHovered
                              ? formatPrice(singleGame.price)
                              : "Add To Cart"}
                          </button>
                        )
                      )}
                    </div>
                    {user && isLibraryLoaded && !library[game_id] ? (
                      <div className="wishlist-container">
                        {/* <button className="wishlist-btn">
                          <i className="fa-regular fa-heart"></i>
                          &nbsp;Add To Wishlist
                        </button> */}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GameReviews game_id={game_id} />
        </>
      )}
    </>
  );
};

const dateConverter = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "utc",
  });
};

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

  // let numPositive = 0;
  // let numNegative = 0;
  // for (review in reviews) {
  //   if (review.recommended) {
  //     numPositive++;
  //   } else {
  //     numNegative++;
  //   }
  // }

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

export default Game;
