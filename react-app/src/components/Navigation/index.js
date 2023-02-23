import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

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
      <div className="nav-buttons-container">
        <button className="nav-login">Login</button>
        <button className="nav-register">Register</button>
      </div>
      {/* {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )} */}
    </div>
  );
}

export default Navigation;
