import { useState } from "react";
import video from "../../assets/icons/-4117-47af-8b14-2be80717c66b.mp4";
import facebook from "../../assets/icons/ic_baseline-facebook.png";
import google from "../../assets/icons/Vector.png";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [isRegister, setIsRegister] = useState(false);

  const isSignUpHandler = () => {
    setIsRegister((prev) => !prev);
  };

  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate("/data-hub/my-profile");
  };

  return (
    <div className="sign-in">
      <div className="sign-in__form">
        <h2>Добредојде</h2>
        <p>
          Регистрирај се за да станеш нов член и да ги добиваш најдобрите
          понуди.
        </p>
        <button className="social-btn social-btn__facebook">
          <img src={facebook} alt="Facebook" /> Продолжете со Facebook
        </button>
        <button className="social-btn social-btn__google">
          <img src={google} alt="Facebook" /> Продолжете со Facebook
        </button>

        <p className="separator">или</p>

        <form className="form">
          <div className="form__row">
            <label htmlFor="email"></label>
            <input type="email" id="email" placeholder="Е-маил" />
          </div>
          <div className="form__row">
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Лозинка" />
          </div>

          {!isRegister ? (
            <div className="form__row">
              <label htmlFor="chk-password"></label>
              <input
                type="password"
                id="chk-password"
                placeholder="Повтори лозинка"
              />
            </div>
          ) : null}
          <div className="form__row">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              Се согласувам со условите и правилата за продажба
            </label>
          </div>
          <button
            onClick={redirectHandler}
            className="social-btn social-btn__submit"
          >
            Продолжете со Е-маил
          </button>
        </form>
        <p>
          {isRegister ? "Сеуште немаш профил?" : "Веќе имаш профил?"}
          {"   "}
          <button onClick={isSignUpHandler} className="sign-in-link">
            {isRegister ? "Регистрирај се" : "  Најави се"}
          </button>
        </p>
      </div>
      <div className="sign-in__video">
        <video autoPlay muted loop id="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
