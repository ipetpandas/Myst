import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { thunkClearCart, thunkReadUserCart } from "../../store/carts";
import { useSelector } from "react-redux";
import "./Library.css";
import { thunkReadUserLibrary } from "../../store/libraries";
import "./Library.css";

const Library = () => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(thunkReadUserLibrary()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <div className="entire-library-container">
      <div className="library-sidebar-parent">
        <div className="library-sidebar-container">
          {isLoaded &&
            Object.values(library).map((game) => {
              return (
                <div className="library-game-list-container">{game.title}</div>
              );
            })}
        </div>
      </div>
      <div className="library-parent">
        <div className="library-header">Your Games</div>
        <div className="library-container">
          {isLoaded &&
            Object.values(library).map((game) => {
              return (
                <div className="library-game-container">
                  <img
                    className="library-banner"
                    src={game.main_banner_url}
                  ></img>
                  <div className="library-info-container">
                    <div className="library-game-title">{game.title}</div>
                    <div className="library-links-container">
                      <button className="library-game-button">Game Page</button>
                      <button className="library-review-button">Review</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Library;
