import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalButton from "../OpenModalButton";
import "./Navigation.css";
import { logout } from "../../store/session";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const goLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
    history.push("/");
  };

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
        <a className="individual-links" href="#">
          Categories
        </a>
        <a className="individual-links" href="#">
          All Games
        </a>
        <a className="individual-links" href="#">
          Support
        </a>
      </div>
      {/* <div className="main-links"></div> */}
      <div className="main-search-bar">
        <input type="text" placeholder="Search..."></input>
        <button className="magnify-submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
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
            <div className="welcome-back">Welcome back,&nbsp;</div>
            <div className="welcome-back-username">{user.username}</div>
            <div className="welcome-back-avatar">
              <img src={user.display_pic}></img>
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
