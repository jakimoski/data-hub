import FiltersHome from "../FiltersHome/FiltersHome";
import Search from "../Search/Search";

export default function Hero() {
  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("search");
  };

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
          <Search searchHandler={searchHandler} />
        </div>
      </div>
      <div className="hero-section__categories">
        <FiltersHome />
      </div>
    </section>
  );
}
