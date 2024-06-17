import profileImg from "../../assets/backgrounds/profile.png";
import favoriteImg from "../../assets/icons/heart.png";
import notification from "../../assets/icons/bell.png";
import settingsIcon from "../../assets/icons/settings.png";
import logoutIcon from "../../assets/icons/ph_arrow-up-bold.png";
import { useState } from "react";
import { products } from "../../data/data";
import Carousel from "../../components/Carousel/ProductsCarousel";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const [currentItem, setCurrentItem] = useState("favorite");

  const navigate = useNavigate();

  const logOutHandler = () => {
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
            onClick={() => setCurrentItem("favorite")}
          >
            <img src={favoriteImg} alt="Омилено" /> Омилено
          </button>
          <button
            className="button profile-page-btn--notifications"
            onClick={() => setCurrentItem("notifications")}
          >
            <img src={notification} alt="Известување" /> Известување на цена
          </button>
          <button
            className=" button profile-page-btn--log-settings"
            onClick={() => setCurrentItem("settings")}
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
          {currentItem && currentItem === "favorite" ? (
            <>
              <h1>Омилено</h1>
              <Carousel
                title="Зачувани продукти"
                slidesToShow={5}
                products={products}
              />
            </>
          ) : null}
          {currentItem && currentItem === "notifications" ? (
            <>
              <h1>Известувања</h1>
              <Carousel
                title="Зачувани продукти"
                slidesToShow={5}
                products={products}
              />
            </>
          ) : null}
          {currentItem && currentItem === "settings" ? <h1>Поставки</h1> : null}
        </div>
      </section>
    </main>
  );
}
