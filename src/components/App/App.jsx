import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import News from "../News/News";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => {
    setActiveModal("login");
    console.log("Login modal opened");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header handleLoginClick={handleLoginClick} />
          <Main />
        </div>

        <News />
        <About />
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={handleCloseModal}
        onLogin={() => {}}
        isLoginDisabled={false}
      />
    </>
  );
}

export default App;
