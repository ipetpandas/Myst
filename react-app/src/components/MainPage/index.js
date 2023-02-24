import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkReadAllGames } from "../../store/games";
import FeaturedCarousel from "./Carousel";

const MainPage = () => {
  let dispatch = useDispatch();
  let [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  const allGames = useSelector((state) => state.games.allGames);
  // console.log(Object.values(allGames));

  useEffect(() => {
    dispatch(thunkReadAllGames()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <section className="carousel-container">
      {isLoaded && <FeaturedCarousel />}
    </section>
  );
};

export default MainPage;
