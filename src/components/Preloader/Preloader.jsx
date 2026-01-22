import "./Preloader.css";
import notFound from "../../assets/notfound_img.svg";

function Preloader() {
  return (
    <section className="preloader">
      <div className="circle-preloader" />
      <p className="circle-preloader__title">Searching for news...</p>
    </section>
  );
}

export function NothingFound() {
  return (
    <section className="preloader preloader--nothing-found">
      <img
        src={notFound}
        alt="Nothing Found"
        className="preloader__nothing-found-img"
      />
      <p className="preloader__nothing-found-text">Nothing found</p>
      <p className="preloader__nothing-found-subtext">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default Preloader;
