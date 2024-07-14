import profileImg from "../../assets/backgrounds/profile.png";
import favoriteImg from "../../assets/icons/heart.png";
import notification from "../../assets/icons/bell.png";
import settingsIcon from "../../assets/icons/settings.png";
import logoutIcon from "../../assets/icons/ph_arrow-up-bold.png";
import { useState } from "react";
import Carousel from "../../components/Carousel/ProductsCarousel";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const [cuurentItem, setCurrentitem] = useState("favorite");

  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const watchedProducts = JSON.parse(
    localStorage.getItem("preicewatch") || "[]"
  );

  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <main className="profile-page">
      <section className="profile-page__actions">
        <h2 className="profile-page__title">Мој профил</h2>
        <img className="profile-page__img" src={profileImg} alt="profile" />
        <div className="profile-page__actions__wrapper">
          <button
            className="button profile-page-btn"
            onClick={() => setCurrentitem("favorite")}
          >
            <img src={favoriteImg} alt="Омилено" /> Омилено
          </button>
          <button
            className="button profile-page-btn--notifications"
            onClick={() => setCurrentitem("notifications")}
          >
            <img src={notification} alt="Известување" /> Известување на цена
          </button>
          <button
            className=" button profile-page-btn--log-settings"
            onClick={() => setCurrentitem("settings")}
          >
            <img src={settingsIcon} alt="Поставувања" /> Поставувања
          </button>
          <button
            onClick={logOutHandler}
            className="button profile-page-btn--log-out"
          >
            <img src={logoutIcon} alt="Одјави се" /> Одјави се
          </button>
        </div>
      </section>
      <section className="profile-page__items">
        <div className="profile-page__items__wrapper">
          {cuurentItem && cuurentItem === "favorite" ? (
            <>
              <h1>Омилено</h1>
              <Carousel slidesToShow={5} products={favorites} />
            </>
          ) : null}
          {cuurentItem && cuurentItem === "notifications" ? (
            <>
              <h1>Известувања</h1>
              <Carousel slidesToShow={5} products={watchedProducts} />
            </>
          ) : null}
          {cuurentItem && cuurentItem === "settings" ? <h1>Поставки</h1> : null}
        </div>
      </section>
    </main>
  );
}
