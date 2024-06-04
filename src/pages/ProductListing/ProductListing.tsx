import ProductCard from "../../components/ProductCard/ProductCard";
import { categories, products } from "../../data/data";
import Filters from "../../components/Filters/Filters";
import AsideBanner from "../../components/AsideBanner/AsideBanner";
import { useParams } from "react-router-dom";

import ArrowIcon from "../../assets/icons/Arrow-top.png";
import MainButton from "../../components/MainButton/MainButton";
import Dropdown from "../../components/DropdownComponent/Dropdown";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function ProductListing() {
  const { name } = useParams() as { name: string };

  const realtedCategories = [
    "Смути блендери",
    "Блендер со сад",
    "Стоечки блендери",
    "Рачен блендер",
  ];

  const category = categories.find(
    (category) => category.name.toLowerCase() === name
  );

  const currentProducts = products.filter((product) =>
    product.categories.includes("КОМПЈУТЕРИ И ГЕЈМИНГ")
  );

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <main className="product-listing grid-page-aside ">
      <section className="product-listing__main">
        <div className="product-listing__top ">
          <div className="product-listing__breadcrumbs">
            <div className="p-t-m ">
              <Breadcrumbs breadcrumbs={[{ label: category.name }]} />
            </div>
          </div>
          <div className="product-listing__title">
            <h2 className="page-title">{category.name}</h2>
          </div>
          <div className="product-listing__sort">
            <div className="product-listing__sort__related">
              {realtedCategories.map((category) => (
                <MainButton key={category} variant="btn--sm">
                  {category}
                </MainButton>
              ))}
            </div>
            <div className="product-listing__sort__filter">
              <Dropdown
                options={[
                  "Подреди по популарност",
                  "Подреди по цена",
                  "Подреди по категорија",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="product-listing__products">
          <div className="product-listing__products-filters">
            <Filters />
          </div>
          <div className="product-listing__products-items">
            {currentProducts &&
              currentProducts.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
          </div>
        </div>
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
