import ProductCard from "../../components/ProductCard/ProductCard";
import { Product, products } from "../../data/data";
import Filters from "../../components/Filters/Filters";
import AsideBanner from "../../components/AsideBanner/AsideBanner";
import { useParams } from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";
import Dropdown from "../../components/DropdownComponent/Dropdown";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useEffect, useMemo, useState } from "react";

const realtedCategories = [
  "Смути блендери",
  "Блендер со сад",
  "Стоечки блендери",
  "Рачен блендер",
];

export default function ProductListing() {
  const { name } = useParams() as { name: string };
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  // const category = categories.find(
  //   (category) => category.name.toLowerCase() === name
  // );

  useEffect(() => {
    const currentProducts = products.filter((product) =>
      product.categories.includes("КОМПЈУТЕРИ И ГЕЈМИНГ")
    );
    setAllProducts(currentProducts);
  }, []);

  const sortedByPrice = useMemo(() => {
    return [...allProducts].sort((a, b) => a.regularPrice - b.regularPrice);
  }, [allProducts]);

  const sortedProducts = useMemo(() => {
    return [...allProducts].sort((a, b) => b.regularPrice - a.regularPrice);
  }, [allProducts]);

  const handleSortChange = (option: string) => {
    if (option === "Подреди по цена") {
      setAllProducts(sortedByPrice);
    }
    if (option === "Подреди по популарност") {
      setAllProducts(sortedProducts);
    }
  };

  // if (!category) {
  //   return <div>Category not found</div>;
  // }

  return (
    <main className="product-listing grid-page-aside ">
      <section className="product-listing__main">
        <div className="product-listing__top ">
          <div className="product-listing__breadcrumbs">
            <Breadcrumbs breadcrumbs={[{ label: name }]} />
          </div>
          <div className="product-listing__title">
            <h2 className="page-title">{name}</h2>
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
                optionHandler={handleSortChange}
              />
            </div>
          </div>
        </div>
        <div className="product-listing__products">
          <div className="product-listing__products-filters">
            <Filters />
          </div>
          <div className="product-listing__products-items">
            {allProducts &&
              allProducts.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
          </div>
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
