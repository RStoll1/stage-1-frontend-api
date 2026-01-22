import "./NewsCard.css";
import newsImage from "../../assets/newsimg.svg";
import bookmarkIcon from "../../assets/bookmark_normal.svg";
import bookmarkHoverIcon from "../../assets/bookmark_hover.svg";
import bookmarkCheckedIcon from "../../assets/bookmark_checked.svg";
import tooltipIcon from "../../assets/tooltip_hover.svg";
import deleteIcon from "../../assets/deleteicon.svg";
import deleteIconHover from "../../assets/deleteicon_hover.svg";
import keywordIcon from "../../assets/keywordIcon.svg";
import { useState } from "react";

function NewsCard({ article, isSaved = false, isLoggedIn = false }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);
  const { title, description, urlToImage, publishedAt, source } = article || {};

  const displayTitle = title;
  const displayText = description;
  const displayDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "January 1, 1970";
  const displaySource = (source && source.name) || "";

  const imageSrc = isSaved ? newsImage : urlToImage || newsImage;

  const bookmarkSrc =
    isSaved || isBookmarked
      ? bookmarkCheckedIcon
      : isLoggedIn
        ? bookmarkHoverIcon
        : bookmarkIcon;

  const deleteSrc = deleteHovered ? deleteIconHover : deleteIcon;

  const handleBookmarkClick = () => {
    if (!isLoggedIn || isSaved) return;
    setIsBookmarked((prev) => !prev);
  };

  return (
    <li className="card">
      <div className="card__header">
        <img src={imageSrc} alt={displayTitle} className="card__image" />
        {isSaved ? (
          <img
            src={deleteSrc}
            alt="Delete saved article"
            className="card__bookmark"
            onMouseEnter={() => setDeleteHovered(true)}
            onMouseLeave={() => setDeleteHovered(false)}
          />
        ) : (
          <img
            src={bookmarkSrc}
            alt="Bookmark"
            className="card__bookmark"
            onClick={handleBookmarkClick}
          />
        )}
        {!isSaved && !isLoggedIn && (
          <img src={tooltipIcon} alt="Tooltip" className="card__tooltip" />
        )}

        {isSaved && (
          <img src={keywordIcon} alt="Keyword" className="card__keyword-btn" />
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
