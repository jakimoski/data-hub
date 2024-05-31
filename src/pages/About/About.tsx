import aboutImg from "../../assets/about-images/about1.png";
import aboutImg2 from "../../assets/about-images/about2.png";
import aboutImg3 from "../../assets/icons/Rectangle 37.png";
export default function About() {
  return (
    <div className="about-page">
      <div className="about-first">
        <div className="about-img">
          <img src={aboutImg} alt="About img" />
        </div>
        <div className="about-content">
          <h1>За нас</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
      <div className="about-second">
        <div className="about-img2">
          <img src={aboutImg2} alt="about 2" />
        </div>
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
      </div>
      <div className="about-third">
        <div className="about-text">
          <h2>Контактирај не</h2>

          <div className="about-text-1">
            <h4>Членови и посетители</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <span className="about-span">
              <img src={aboutImg3} alt="" />
              <p>Email: info@datahub.com</p>
            </span>
            <span className="about-span">
              <img src={aboutImg3} alt="" />
              <p>Facebook: DataHub</p>
            </span>
            <span className="about-span">
              <img src={aboutImg3} alt="" />
              <p>Twitter: DataHub</p>
            </span>
            <span className="about-span">
              <img src={aboutImg3} alt="" />
              <p>Instagram: datahub</p>
            </span>
          </div>
          <div className="about-text-1">
            <h4>Управување со лични податоци</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              privacy@datahub.com
            </p>
          </div>
          <div className="about-text-1">
            <h4>Трговци, производители и огласувачи</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              privacy@datahub.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
