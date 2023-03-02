import React from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import "./Navigation.css";
import { logout } from "../../store/session";
import { useState, useEffect } from "react";
import { thunkReadUserCart } from "../../store/carts";
import { thunkReadAllGames, thunkReadGame } from "../../store/games";
import SearchBox from "./SearchBox";

function Navigation({ isLoaded }) {
  // const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const cart = useSelector((state) => state.cart);
  const games = useSelector((state) => state.games.allGames);
  const cartSize = Object.values(cart).length;

  const [searchInput, setSearchInput] = useState("");
  const [searchGames, setSearchGames] = useState(Object.values(games));

  useEffect(() => {
    dispatch(thunkReadUserCart());
    dispatch(thunkReadAllGames()).then(setSearchGames(Object.values(games)));
  }, [dispatch]);

  useEffect(() => {
    let gamesList = Object.values(games).filter((game) =>
      game.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchGames(Object.values(gamesList));
    // console.log("Search Games--------->", gamesList);
    // console.log(searchInput);
  }, [searchInput]);

  const goLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    // history.push("/");
  };

  function navigate(gameId) {
    // dispatch(thunkReadGame(gameId));
    history.push(`/games/${gameId}`);
    window.location.reload();
    // return <Redirect to={`/games/${gameId}`}></Redirect>;
  }

  return (
    <div className="nav-container">
      <div className="link-container">
        <div className="myst-logo">
          <NavLink exact to="/">
            <span className="logo-icon">
              <i className="fa-solid fa-cloud-bolt fa-lg"></i>
            </span>
            <span className="logo-text">Myst</span>
          </NavLink>
        </div>
        {/* <a className="individual-links" href="#">
          Categories
        </a> */}
        <a className="individual-links" href="#all-games">
          All Games
        </a>
        <a className="individual-links" href="#">
          Support
        </a>
      </div>
      {/* <div className="main-links"></div> */}
      <div className="main-search-bar-container">
        <div className="main-search-bar">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchInput(e.target.value)}
            onBlur={(e) => setSearchInput("")}
            onFocus={(e) => setSearchInput(e.target.value)}
          ></input>
          {/* <button className="magnify-submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button> */}
        </div>
        {searchInput.length ? (
          <SearchBox gamesList={searchGames} navigate={navigate} />
        ) : (
          <></>
        )}
      </div>
      {!user ? (
        <div className="nav-buttons-container">
          <NavLink exact to="/login">
            <button className="nav-login">Login</button>
          </NavLink>
          <NavLink exact to="/signup">
            <button className="nav-register">Register</button>
          </NavLink>
        </div>
      ) : (
        <div className="nav-buttons-container">
          <div className="welcome-back-container">
            <NavLink exact to="/cart">
              <div
                className={`welcome-back-cart`}
                data-cart-size={`${cartSize > 0 ? cartSize : ""}`}
              >
                <i
                  className={`fa-solid fa-cart-shopping fa-xl ${
                    cartSize > 0 ? "cart-size-show" : ""
                  }`}
                ></i>
              </div>
            </NavLink>
            <div className="welcome-back">Welcome back,&nbsp;</div>
            <div className="welcome-back-username">{user.username}</div>
            <div className="welcome-back-avatar">
              <NavLink exact to="/library">
                <img src={user.display_pic}></img>
              </NavLink>
            </div>
          </div>
          <button onClick={goLogout} className="nav-login">
            Logout
          </button>
        </div>
      )}
      {/* {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )} */}
    </div>
  );
}

export default Navigation;
