import aboutImg from "../../assets/about-images/about1.png";
import aboutImg2 from "../../assets/about-images/about2.png";
import aboutImg3 from "../../assets/icons/Rectangle 37.png";
export default function About() {
  return (
    <main className="about-page">
      <article className="about-page__section about-page__section--first">
        <div className="about-page__image-wrapper">
          <img className="about-page__image" src={aboutImg} alt="About img" />
        </div>
        <div className="about-page__content">
          <h1 className="about-page__title">За нас</h1>
          <p className="about-page__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </article>
      <article className="about-page__section about-page__section--second">
        <div className="about-page__image-wrapper">
          <img
            className="about-page__image"
            src={aboutImg2}
            alt="About img 2"
          />
        </div>
        <div className="about-page__content">
          <p className="about-page__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </article>
      <div className="about-page__section about-page__section--third">
        <div className="about-page__text-content">
          <h2 className="about-page__subtitle">Контактирај не</h2>

          <div className="about-page__text-group">
            <h4 className="about-page__subheader">Членови и посетители</h4>
            <p className="about-page__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="about-page__contact">
              <img
                className="about-page__icon"
                src={aboutImg3}
                alt="Email icon"
              />
              <p className="about-page__contact-info">
                Email: info@datahub.com
              </p>
            </div>
            <div className="about-page__contact">
              <img
                className="about-page__icon"
                src={aboutImg3}
                alt="Facebook icon"
              />
              <p className="about-page__contact-info">Facebook: DataHub</p>
            </div>
            <div className="about-page__contact">
              <img
                className="about-page__icon"
                src={aboutImg3}
                alt="Twitter icon"
              />
              <p className="about-page__contact-info">Twitter: DataHub</p>
            </div>
            <div className="about-page__contact">
              <img
                className="about-page__icon"
                src={aboutImg3}
                alt="Instagram icon"
              />
              <p className="about-page__contact-info">Instagram: datahub</p>
            </div>
          </div>
          <div className="about-page__text-group">
            <h4 className="about-page__subheader">
              Управување со лични податоци
            </h4>
            <p className="about-page__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              privacy@datahub.com
            </p>
          </div>
          <div className="about-page__text-group">
            <h4 className="about-page__subheader">
              Трговци, производители и огласувачи
            </h4>
            <p className="about-page__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              privacy@datahub.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
