import React, { useEffect, useState } from "react";
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";
import { getItems } from "../../utils/api";

function SavedNews() {
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    getItems()
      .then((items) => {
        setSavedArticles(items);
      })
      .catch((err) => {
        console.error("Error loading saved items", err);
      });
  }, []);

  return (
    <main className="saved-news">
      <div className="saved-news__header">
        <p className="saved-news__subtitle">Saved articles</p>
        <h1 className="saved-news__title">
          Elise, you have {savedArticles.length} saved articles
        </h1>
        <div className="saved-news__keyword-container">
          <p className="saved-news__by-keywords">By keywords: </p>
          <p className="saved-news__keywords">
            Nature, Yellowstone and 2 others
          </p>
        </div>
      </div>
      <div className="saved-news__cards">
        {savedArticles.map((item) => (
          <NewsCard key={item._id} article={item} isSaved />
        ))}
      </div>
    </main>
  );
}

export default SavedNews;
