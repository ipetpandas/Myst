import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import Game from "./components/Games/GameDetail";
import Cart from "./components/Cart";
import Library from "./components/Library";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
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
          </Route>
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
