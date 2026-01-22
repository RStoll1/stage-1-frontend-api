import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import News from "../News/News";
import SignInModal from "../SignInModal/SignInModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Preloader, { NothingFound } from "../Preloader/Preloader";
import SuccessModal from "../SuccessModal/SuccessModal";
import SavedNews from "../SavedNews/SavedNews";
import { getNews } from "../../utils/newsApi.js";
import { authorize, checkToken, logout } from "../../utils/auth.js";

function App() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

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
    setActiveModal("");
    navigate("/saved-news");
  };

  const handleLogin = (email, password) => {
    authorize(email, password)
      .then(({ token }) => checkToken(token))
      .then((res) => {
        setCurrentUser(res.data);
        setActiveModal("");
      })
      .catch((err) => {
        console.error("Mock login failed", err);
      });
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate("/");
  };

  const handleNewsSearch = (keyword) => {
    setHasSearched(true);
    setIsLoading(true);
    const params = {
      q: keyword,
      from: "2026-01-19",
      to: "2026-12-20",
      pageSize: 100,
    };

    getNews(params)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch(() => {
          logout();
          setCurrentUser(null);
        });
    }
  }, []);

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
                    currentUser={currentUser}
                    onLogout={handleLogout}
                    isModalOpen={activeModal !== ""}
                  />
                  <Main onSearch={handleNewsSearch} />
                </div>
                {isLoading && <Preloader />}
                {!isLoading && hasSearched && articles.length === 0 && (
                  <NothingFound />
                )}
                {articles.length > 0 && (
                  <News articles={articles} isLoggedIn={Boolean(currentUser)} />
                )}
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
                    currentUser={currentUser}
                    onLogout={handleLogout}
                    isModalOpen={activeModal !== ""}
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
        onLogin={handleLogin}
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
