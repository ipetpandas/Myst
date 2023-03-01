import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import GameSelection from "./components/Games/GameSelection";
import Game from "./components/Games/GameDetail";
import Cart from "./components/Cart";
import Library from "./components/Library";
import { thunkReadUserCart } from "./store/carts";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // const [cartSize, setCartSize] = useState(null);
  // const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(authenticate())
      // .then(() => dispatch(thunkReadUserCart()))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className="app-container">
        {/* <Navigation isLoaded={isLoaded} />
        {isLoaded && ( */}
        <Navigation />
        <Switch>
          <Route exact path="/">
            <MainPage />
            {/* <GameSelection /> */}
          </Route>
          {/* <Route exact patch="/gameselection">
            <GameSelection />
          </Route> */}
          <Route exact path="/games/:game_id">
            <Game />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/library">
            <Library />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
        {/* )} */}
      </div>
    </>
  );
}

export default App;
