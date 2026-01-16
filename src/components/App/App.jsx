import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import News from "../News/News";
import SignInModal from "../SignInModal/SignInModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Preloader from "../Preloader/Preloader";
import SuccessModal from "../SuccessModal/SuccessModal";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleRegisterSuccess = () => {
    setActiveModal("success");
  };

  return (
    <>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="page__content page__content--with-bg">
                  <Header
                    page="home"
                    handleLoginClick={handleLoginClick}
                    handleRegisterClick={handleRegisterClick}
                  />
                  <Main />
                </div>
                <Preloader />
                <News />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <>
                <div className="page__content">
                  <Header
                    page="saved-news"
                    handleLoginClick={handleLoginClick}
                    handleRegisterClick={handleRegisterClick}
                  />
                  <SavedNews />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>

      <SignInModal
        isOpen={activeModal === "login"}
        onClose={handleCloseModal}
        onLogin={() => {}}
        isLoginDisabled={false}
        onSwitchToRegister={handleRegisterClick}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        onClose={handleCloseModal}
        onRegister={handleRegisterSuccess}
        isRegisterDisabled={false}
        onSwitchToLogin={handleLoginClick}
      />
      <SuccessModal
        isOpen={activeModal === "success"}
        onClose={handleCloseModal}
        onSignIn={handleLoginClick}
      />
    </>
  );
}

export default App;
