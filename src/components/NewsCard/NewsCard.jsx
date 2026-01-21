import "./NewsCard.css";
import newsImage from "../../assets/newsimg.svg";
import bookmarkIcon from "../../assets/bookmark_normal.svg";
import bookmarkCheckedIcon from "../../assets/bookmark_checked.svg";
import tooltipIcon from "../../assets/tooltip_hover.svg";
import deleteIcon from "../../assets/closebtn.svg";

function NewsCard({ article, isSaved = false }) {
  const { title, description, urlToImage, publishedAt, source } = article || {};

  const displayTitle = title || "News title";
  const displayText = description || "Article description";
  const displayDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "January 1, 1970";
  const displaySource = (source && source.name) || "";

  const imageSrc = isSaved ? newsImage : urlToImage || newsImage;

  return (
    <li className="card">
      <div className="card__header">
        <img src={imageSrc} alt={displayTitle} className="card__image" />
        <img
          src={isSaved ? bookmarkCheckedIcon : bookmarkIcon}
          alt="Bookmark"
          className="card__bookmark"
        />
        <img
          src={isSaved ? deleteIcon : ""}
          alt=""
          className="card__delete-btn"
        />
        {!isSaved && (
          <img src={tooltipIcon} alt="Tooltip" className="card__tooltip" />
        )}
      </div>
      <div className="card__body">
        <p className="card__date">{displayDate}</p>
        <h3 className="card__title">{displayTitle}</h3>
        <p className="card__text">{displayText}</p>
        <p className="card__source">{displaySource}</p>
      </div>
    </li>
  );
}

export default NewsCard;
