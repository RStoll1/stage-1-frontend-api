import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import mobileMenuIcon from "../../assets/menu.svg";
import mobileCloseBtn from "../../assets/mobile_close_btn.svg";

function Navigation({
  page,
  handleLoginClick,
  currentUser,
  onLogout,
  isMobileMenuOpen,
  onToggleMobileMenu,
  isModalOpen,
}) {
  const isSavedNewsPage = page === "saved-news";
  const isLoggedIn = Boolean(currentUser);

  return (
    <nav className={`navigation ${isSavedNewsPage ? "navigation--dark" : ""}`}>
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

      {isLoggedIn && (
        <NavLink to="/saved-news">
          <button
            type="button"
            className={`navigation__saved-articles-btn ${
              isSavedNewsPage ? "navigation__saved-articles-btn--active" : ""
            }`}
          >
            Saved Articles
          </button>
        </NavLink>
      )}

      {!isLoggedIn && (
        <button
          type="button"
          className="navigation__signin-btn"
          onClick={handleLoginClick}
        >
          Sign in
        </button>
      )}

      {isLoggedIn && (
        <>
          <button
            type="button"
            className="navigation__logout-btn"
            onClick={onLogout}
          >
            {currentUser?.name || "User"}
          </button>
          <img
            src={logoutIcon}
            alt="Logout"
            className="navigation__logout-icon"
            onClick={onLogout}
          />
        </>
      )}

      {!isModalOpen && (
        <button
          className="navigation__mobile-menu"
          type="button"
          onClick={onToggleMobileMenu}
        >
          <img
            className="navigation__mobile-close-btn"
            src={isMobileMenuOpen ? mobileCloseBtn : mobileMenuIcon}
            alt="Menu"
          />
        </button>
      )}
      {!isModalOpen && isMobileMenuOpen && (
        <div
          className="navigation__mobile-overlay"
          onClick={onToggleMobileMenu}
        >
          <div
            className="navigation__mobile-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <NavLink to="/">
              <button
                type="button"
                className="navigation__mobile-link"
                onClick={onToggleMobileMenu}
              >
                Home
              </button>
            </NavLink>
            {!isLoggedIn && (
              <button
                type="button"
                className="navigation__mobile-link navigation__mobile-link--primary"
                onClick={() => {
                  onToggleMobileMenu();
                  handleLoginClick();
                }}
              >
                Sign in
              </button>
            )}
            {isLoggedIn && (
              <button
                type="button"
                className="navigation__mobile-link navigation__mobile-link--primary"
                onClick={() => {
                  onToggleMobileMenu();
                  onLogout();
                }}
              >
                {currentUser?.name || "Log out"}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
