import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
