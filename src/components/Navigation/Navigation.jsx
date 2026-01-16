import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";

function Navigation({ page, handleLoginClick }) {
  const isSavedNews = page === "saved-news";

  return (
    <nav className={`navigation ${isSavedNews ? "navigation--dark" : ""}`}>
      <NavLink to="/">
        <button
          type="button"
          className={`navigation__home-btn ${
            page === "home" ? "navigation__home-btn--active" : ""
          }`}
        >
          Home
        </button>
      </NavLink>

      {page === "home" && (
        <button
          type="button"
          className="navigation__signin-btn"
          onClick={handleLoginClick}
        >
          Sign in
        </button>
      )}

      {page === "saved-news" && (
        <>
          <NavLink to="/saved-news">
            <button
              type="button"
              className={`navigation__saved-articles-btn navigation__saved-articles-btn--active`}
            >
              Saved Articles
            </button>
          </NavLink>
          <button type="button" className="navigation__logout-btn">
            Elise
          </button>
          <img
            src={logoutIcon}
            alt="Logout"
            className="navigation__logout-icon"
          />
        </>
      )}
    </nav>
  );
}

export default Navigation;
