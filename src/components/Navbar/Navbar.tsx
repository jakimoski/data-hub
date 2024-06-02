import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/Logo 1 2.svg";
import { useEffect, useState } from "react";
import SignIn from "../SignIn/SignIn";
import AllCategories from "../AllCategories/AllCategories";
import Search from "../Search/Search";
import serchImg from "../../assets/icons/streamline_magnifying-glass-solid.png";
import Modal from "../ModalComponent/Modal";
import { createPortal } from "react-dom";
import MainButton from "../MainButton/MainButton";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();

  console.log(location.pathname);

  document.body.style.overflow = isVisible ? "hidden" : "auto";

  useEffect(() => {
    setIsVisible(false);
  }, [location]);

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <button
            onClick={() => setIsVisible((prev) => !prev)}
            className="nav__toggle"
            aria-label="Menu Toggle"
            aria-controls="primary-navigation"
          >
            <span></span>
          </button>
          <NavLink className="header__logo" to="/data-hub">
            <img src={Logo} alt="Brainster-Logo" />
          </NavLink>
          <Link
            to={"data-hub/category/бела%20техника"}
            className="nav-search-link"
          >
            <img src={serchImg} alt="serach" />
          </Link>
          <nav aria-label="Main Navigation" className="nav">
            <ul className="nav__list" id="primary-navigation">
              <li className="nav__list-item">
                <button
                  onClick={() => setIsVisible((prev) => !prev)}
                  className="nav__list-link"
                >
                  Сите категории
                  <svg
                    className="nav__list-link__icon"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.68025 24.0907C4.10219 24.5125 4.67438 24.7495 5.271 24.7495C5.86762 24.7495 6.43982 24.5125 6.86175 24.0907L17.9993 12.9532L29.1368 24.0907C29.5611 24.5006 30.1295 24.7274 30.7194 24.7223C31.3093 24.7171 31.8737 24.4805 32.2908 24.0633C32.708 23.6462 32.9446 23.0818 32.9498 22.4919C32.9549 21.9019 32.7281 21.3336 32.3183 20.9092L19.59 8.18099C19.1681 7.75918 18.5959 7.52222 17.9993 7.52222C17.4026 7.52222 16.8304 7.75918 16.4085 8.18099L3.68025 20.9092C3.25844 21.3312 3.02148 21.9034 3.02148 22.5C3.02148 23.0966 3.25844 23.6688 3.68025 24.0907Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </li>
              <li className="nav__list-item">
                <NavLink className="nav__list-link" to="/data-hub/catalogs">
                  Каталози
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink className="nav__list-link" to="/data-hub/best-deals">
                  Најдобри зделки
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink className="nav__list-link" to="/data-hub/about">
                  За нас
                </NavLink>
              </li>
            </ul>
            <div className="serach-nav">
              {location.pathname === "/" ? null : <Search />}
            </div>
            <MainButton
              style={{ marginLeft: "auto" }}
              handler={() => setShowModal(true)}
            >
              Најавете се
            </MainButton>
          </nav>
        </div>
      </header>

      {isVisible ? <AllCategories /> : null}
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)}>
            <SignIn />
          </Modal>,
          document.body
        )}
    </>
  );
}
