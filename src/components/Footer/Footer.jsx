import "./Footer.css";
import { NavLink } from "react-router-dom";
import Github from "../../assets/github.svg";
import LinkedIn from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2026 Supersite, Powered by News API</p>
      <div className="footer__links">
        <NavLink
          to="/"
          className="footer__link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
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
        <a
          href="http://www.github.com/RStoll1"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="GitHub" className="footer__github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ryanstolinski"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" className="footer__linkedin" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
