import FiltersHome from "../FiltersHome/FiltersHome";
import Search from "../Search/Search";

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
      </div>
      <div className="hero-section__categories">
        <FiltersHome />
      </div>
    </section>
  );
}
