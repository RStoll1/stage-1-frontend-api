import "./NewsCard.css";
import newsImage from "../../assets/newsimg.svg";
import bookmarkIcon from "../../assets/bookmark_normal.svg";
import tooltipIcon from "../../assets/tooltip_hover.svg";

function NewsCard() {
  return (
    <li className="card">
      <div className="card__header">
        <img src={newsImage} alt="News" className="card__image" />
        <img src={bookmarkIcon} alt="Bookmark" className="card__bookmark" />
        <img src={tooltipIcon} alt="Tooltip" className="card__tooltip" />
      </div>
      <div className="card__body">
        <p className="card__date">October 8, 2020</p>
        <h3 className="card__title">
          Ruble crashes against dollar and euro as sanctions tighten
        </h3>
        <p className="card__text">
          The ruble continued its rapid decline against the US dollar and euro
          on Thursday, as a series of Western sanctions over Russia's invasion
          of Ukraine battered the currency. This could be the end of the world
          as we know it and I feel fine.
        </p>
        <p className="card__source">Source: BBC News</p>
      </div>
    </li>
  );
}

export default NewsCard;
