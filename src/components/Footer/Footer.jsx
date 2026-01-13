import "./Footer.css";
import { NavLink } from "react-router-dom";
import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2026 Supersite, Powered by News API</p>
      <div className="footer__links">
        <NavLink to="/" className="footer__link">
          Home
        </NavLink>
        <a
          href="http://www.tripleten.com"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          TripleTen
        </a>
        <NavLink to="http://www.github.com/RStoll1" className="footer__icon">
          <img src={Github} alt="GitHub" className="footer__github" />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/ryanstolinski"
          className="footer__icon"
        >
          <img src={LinkedIn} alt="LinkedIn" className="footer__linkedin" />
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
