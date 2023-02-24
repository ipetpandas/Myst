import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { thunkClearCart, thunkReadUserCart } from "../../store/carts";
import { useSelector } from "react-redux";
import "./Library.css";
import { thunkReadUserLibrary } from "../../store/libraries";

const Library = () => {
  const dispatch = useDispatch();
  const library = useSelector((state) => state.library);
  let [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(thunkReadUserLibrary()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <div className="library-container">
      {isLoaded &&
        Object.values(library).map((game) => {
          return (
            <div>
              <img src={game.main_banner_url}></img>
            </div>
          );
        })}
    </div>
  );
};

export default Library;
