import React, { useState } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({
  page,
  handleLoginClick,
  handleRegisterClick,
  currentUser,
  onLogout,
  isModalOpen,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isSavedNews = page === "saved-news";

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div
        className={`header__container ${
          isSavedNews ? "header__container--dark" : ""
        } ${isMobileMenuOpen ? "header__container--menu-open" : ""}`}
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
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={handleToggleMobileMenu}
          isModalOpen={isModalOpen}
        />
      </div>
    </header>
  );
}

export default Header;
