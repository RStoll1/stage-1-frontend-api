import "./News.css";
import NewsCard from "../NewsCard/NewsCard";

function News() {
  return (
    <section className="news">
      <div className="news__container">
        <h2 className="news__title">Search results</h2>
        <ul className="news__list">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </ul>
        <button className="news__showmore-btn">Show more</button>
      </div>
    </section>
  );
}

export default News;
