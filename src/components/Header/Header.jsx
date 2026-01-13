import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <p className="header__logo">NewsExplorer</p>
        <NavLink to="/">
          <button type="button" className="header_home-btn">
            Home
          </button>
        </NavLink>
        <button type="button" className="header_signin-btn">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default Header;
