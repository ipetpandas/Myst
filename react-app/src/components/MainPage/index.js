import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkReadAllGames } from "../../store/games";
import FeaturedCarousel from "./Carousel";

const MainPage = () => {
  let dispatch = useDispatch();
  let [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  let allGames = useSelector((state) => state.games);
  // console.log(Object.values(allGames));

  useEffect(() => {
    dispatch(thunkReadAllGames());
  }, [dispatch]);

  return (
    <div className="carousel-container">
      {Object.values(allGames).length && (
        <FeaturedCarousel games={Object.values(allGames)} />
      )}
    </div>
  );
};

export default MainPage;
