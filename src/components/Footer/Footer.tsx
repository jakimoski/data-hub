import "./footer.scss";
import {} from "../../assets/icons/Logo 1 2.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/Logo 1 2.svg";
import Insta from "../../assets/icons/ri_instagram-fill.png";
import Fb from "../../assets/icons/ic_baseline-facebook.png";
import Ln from "../../assets/icons/mingcute_linkedin-fill.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="newsletter">
          <h2>Претплати се на нашиот билтен</h2>
          <p>
            Биди во тек со сите новости и случувања секаде и во секое време.
          </p>
          <form>
            <div className="input-wrapper">
              <input type="email" placeholder="Испрати Е-Пошта" />
              <button type="submit">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8898 2.40059C20.405 0.975325 19.024 -0.405813 17.5988 0.110623L0.180467 6.41043C-1.24949 6.92806 -1.42242 8.8793 -0.106956 9.64143L5.45307 12.8605L10.418 7.89533C10.6429 7.67807 10.9442 7.55786 11.2569 7.56057C11.5696 7.56329 11.8687 7.68872 12.0898 7.90986C12.311 8.13099 12.4364 8.43014 12.4391 8.74286C12.4418 9.05558 12.3216 9.35685 12.1044 9.5818L7.13945 14.547L10.3595 20.1073C11.1204 21.4229 13.0716 21.2487 13.5892 19.8199L19.8898 2.40059Z"
                    fill="#9A9A9A"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img className="logo" src={Logo} alt="Brainster-Logo" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              iure nihil quae ad facilis velit quidem voluptatem aperiam rem
              dolore accusantium tempora explicabo ullam ducimus ipsam commodi
              sapiente, inventore qui. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nihil, provident!
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Ut enim ad minim veniam</h3>
              <Link to={"/"}>enimadm</Link>
            </div>
            <div className="footer-column">
              <h3>Корисни линкови </h3>
              <ul>
                <Link to={"/about"}>За нас</Link>
                <Link to={"/faq"}>ЧПП</Link>
                <Link to={"/best-deals"}>Најдобри зделки</Link>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Ut enim </h3>
              <ul>
                <Link to={"/"}>enimadm</Link>
                <Link to={"/"}>enimadm</Link>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Ut enim ad </h3>
              <ul>
                <Link to={"/"}>enimadm</Link>
                <Link to={"/"}>enimadm</Link>
                <Link to={"/"}>enimadm</Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="social-media">
          <p>loremIpsum</p>
          <div className="social">
            <Link to={"/"}>
              <img src={Insta} alt="Instagram " />
            </Link>

            <Link to={"/"}>
              {" "}
              <img src={Ln} alt="linkedin " />{" "}
            </Link>
            <Link to={"/"}>
              {" "}
              <img src={Fb} alt="facebook " />{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
