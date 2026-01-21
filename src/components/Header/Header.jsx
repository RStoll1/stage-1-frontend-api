import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({
  page,
  handleLoginClick,
  handleRegisterClick,
  currentUser,
  onLogout,
}) {
  const isSavedNews = page === "saved-news";

  return (
    <header className="header">
      <div
        className={`header__container ${
          isSavedNews ? "header__container--dark" : ""
        }`}
      >
        <p
          className={`header__logo ${isSavedNews ? "header__logo--dark" : ""}`}
        >
          NewsExplorer
        </p>
        <Navigation
          page={page}
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          currentUser={currentUser}
          onLogout={onLogout}
        />
      </div>
    </header>
  );
}

export default Header;
