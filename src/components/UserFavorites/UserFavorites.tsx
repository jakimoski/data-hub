import { useState } from "react";
import Carousel from "../Carousel/ProductsCarousel";
import { products } from "../../data/data";

export default function UserFavorites() {
  const [cuurentItem] = useState("favorite");
  return (
    <div className="profile-page__items__wrapper">
      {cuurentItem && cuurentItem === "favorite" ? (
        <>
          <h1>Омилено</h1>
          <Carousel
            title="Зачувани продукти"
            slidesToShow={6}
            products={products}
          />
        </>
      ) : null}
      {cuurentItem && cuurentItem === "notifications" ? (
        <>
          <h1>Известувања</h1>
          <Carousel
            title="Зачувани продукти"
            slidesToShow={6}
            products={products}
          />
        </>
      ) : null}
      {cuurentItem && cuurentItem === "settings" ? <h1>Поставки</h1> : null}
    </div>
  );
}
