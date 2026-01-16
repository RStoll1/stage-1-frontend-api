import { preload } from "react-dom";
import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="circle-preloader" />
      <p className="circle-preloader__title">Searching for news...</p>
    </section>
  );
}

export default Preloader;
