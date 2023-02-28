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
  const user = useSelector((state) => state.session.user);
  const library = useSelector((state) => state.library);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(thunkReadUserLibrary()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    user && (
      <div className="entire-library-parent">
        <div className="entire-library-container">
          <div className="library-sidebar-parent">
            <div className="library-sidebar-container">
              <div className="my-games-header">
                <i className="fa-solid fa-minus"></i>
                &nbsp;My Games&nbsp;
                <span className="my-games-count">
                  ({Object.keys(library).length})
                </span>
              </div>
              {isLoaded &&
                Object.values(library).map((game) => {
                  return (
                    <NavLink exact to={`/games/${game.id}`}>
                      <div className="library-game-list-container">
                        {game.title}
                      </div>
                    </NavLink>
                  );
                })}
            </div>
          </div>
          <div className="library-parent">
            <div className="library-header">ALL GAMES</div>
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
                        <div className="library-game-title-container">
                          <div className="library-game-title">{game.title}</div>
                          <div className="library-game-purchase">
                            Purchased: {dateConverter(game.created_at)}
                          </div>
                        </div>
                        <div className="library-links-container">
                          <button className="library-button">More Info</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    )
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

export default Library;
