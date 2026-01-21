import { useEffect, useState } from "react";
import "./News.css";
import NewsCard from "../NewsCard/NewsCard";

function News({ articles = [] }) {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [articles]);

  const canShowMore = visibleCount < articles.length;
  const visibleArticles = articles.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, articles.length));
  };

  return (
    <section className="news">
      <div className="news__container">
        <h2 className="news__title">Search results</h2>
        <ul className="news__list">
          {visibleArticles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </ul>
        {canShowMore && (
          <button
            type="button"
            className="news__showmore-btn"
            onClick={handleShowMore}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default News;
