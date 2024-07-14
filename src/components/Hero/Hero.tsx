import FiltersHome from "../FiltersHome/FiltersHome";
import Search from "../Search/Search";
// import video from "../../assets/icons/-4994-4166-82cf-65cd7e40b4a6.mp4";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h1 className="hero-section__title">
          <span>D</span>atahub
        </h1>
        <h4 className="hero-section__title--sub">
          Сите твои потреби на едно место
        </h4>
        <div className="hero-section__search">
          <Search />
        </div>
        {/* <video className="hero-section__video" autoPlay muted loop id="video">
          <source src={video} type="video/mp4" />
        </video> */}
      </div>
      <div className="hero-section__categories">
        <FiltersHome />
      </div>
    </section>
  );
}
