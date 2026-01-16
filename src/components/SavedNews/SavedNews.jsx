import React from "react";
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews() {
  return (
    <main className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__subtitle">Saved articles</p>
        <h1 className="saved-news__title">Elise, you have 5 saved articles</h1>
        <div className="saved-news__keyword-container">
          <p className="saved-news__by-keywords">By keywords: </p>
          <p className="saved-news__keywords">
            Nature, Yellowstone and 2 others
          </p>
        </div>
      </div>
      <div className="saved-news__cards">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </main>
  );
}

export default SavedNews;
