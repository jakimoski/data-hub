import AsideBanner from "../../components/AsideBanner/AsideBanner";
import Dropdown from "../../components/DropdownComponent/Dropdown";
import Filters from "../../components/Filters/Filters";
import MainButton from "../../components/MainButton/MainButton";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../data/data";
import ArrowIcon from "../../assets/icons/Arrow-top.png";

const realtedCategories = [
  "Спореди продукти",
  "Погледни ги како табела",
  "Прикажи ги како мрежа",
];

export default function BestDeals() {
  return (
    <main className="product-listing grid-page-aside ">
      <section className="product-listing__main">
        <div className="product-listing__top">
          <div className="product-listing__breadcrumbs">
            <a href="/">Почетна</a> <span>/</span>
            <a href="/best-deals"></a>
          </div>
          <div className="product-listing__title">
            <h2 className="page-title">Најдобри зделки</h2>
          </div>
          <div className="best-deals__sort">
            <div className="best-deals__sort__filter">
              <Dropdown
                options={[
                  "Подреди по популарност",
                  "Подреди по цена",
                  "Подреди по категорија",
                ]}
              />
            </div>
            <div className="best-deals__sort__related">
              {realtedCategories.map((category) => (
                <MainButton key={category} variant="btn--sm">
                  {category}
                </MainButton>
              ))}
            </div>
          </div>
          <div className="product-listing__sort"></div>
        </div>
        <section className="product-listing__products">
          <div className="product-listing__products-filters">
            <Filters />
          </div>
          <div className="product-listing__products-items">
            {products &&
              products.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
          </div>
        </section>
        <div className="product-listing__bottom div-container">
          <MainButton rightLogo={ArrowIcon} variant="btn--lg">
            Омиленo
          </MainButton>
        </div>
      </section>

      <section className="product-listing__aside">
        <div>
          <AsideBanner />
        </div>
      </section>
    </main>
  );
}
