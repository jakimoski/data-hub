import AsideBanner from "../../components/AsideBanner/AsideBanner";
import Filters from "../../components/Filters/Filters";
import MainButton from "../../components/MainButton/MainButton";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/data";

export default function BestDeals() {
  return (
    <section className="product-listing grid-page-aside ">
      <section className="product-listing__main">
        <section className="product-listing__top">
          <div className="product-listing__breadcrumbs">
            <a href="/">Почетна</a> <span>/</span>
            <a href="/best-deals"></a>
          </div>
          <div className="product-listing__title">
            <h2 className="page-title">Најдобри зделки</h2>
          </div>
          <div className="product-listing__sort">
            <MainButton>Подреди по популарност</MainButton>
          </div>
        </section>
        <section className="product-listing__products">
          <div className="product-listing__products-filters">
            <Filters />
          </div>
          <section className="product-listing__products-items">
            {products &&
              products.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
          </section>
        </section>
      </section>

      <section className="product-listing__aside">
        <div>
          <AsideBanner />
        </div>
      </section>
    </section>
  );
}
