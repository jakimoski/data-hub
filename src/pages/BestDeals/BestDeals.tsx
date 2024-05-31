import AsideBanner from "../../components/AsideBanner/AsideBanner";
import Filters from "../../components/Filters/Filters";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/data";

export default function BestDeals() {
  return (
    <section className="products-wrapper">
      <h1 className="products-wrapper__title"></h1>
    </section>
  );
}

<div className="best-deals">
  <div className="best-deals-nav">
    <a href="/">Почетна</a> <span>/</span>{" "}
    <a href="/best-deals">Најдобри зделки</a>
  </div>
  <div>
    <h2>Најдобри зделки</h2>
  </div>
  <div className="best-deals-buttons"></div>
  <div className="best-deals-products">
    <div className="best-deals-filter">
      <Filters />
    </div>
    <div className="best-deals-items">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <div className="best-deals-aside">
      <AsideBanner />
    </div>
  </div>
</div>;
