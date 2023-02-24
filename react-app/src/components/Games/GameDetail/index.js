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
                              activeTab === index ? "active-game-detail" : ""
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
                  <div className="game-detail-title">{singleGame.title}</div>
                  <div className="game-detail-description">
                    {singleGame.description}
                  </div>
                  <div className="game-detail-price">
                    {isLoaded & (singleGame.price === 0)
                      ? "FREE TO PLAY"
                      : `$` + singleGame.price}
                  </div>
                  <div className="add-to-cart-container">
                    {isLibraryLoaded && !user ? (
                      <NavLink to="/login">
                        <div className="login-to-purchase">
                          Login to Purchase
                        </div>
                      </NavLink>
                    ) : isLibraryLoaded && library[game_id] && user ? (
                      <div className="already-purchased">In Library</div>
                    ) : (
                      isLibraryLoaded && (
                        <button onClick={addToCart} className="add-to-cart-btn">
                          Add To Cart
                        </button>
                      )
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

export default Game;
