import { partners, products } from "../../data/data";
import Carousel from "../../components/Carousel/ProductsCarousel";
import MainButton from "../../components/MainButton/MainButton";
import AsideBanner from "../../components/AsideBanner/AsideBanner";
import ShopsCarousel from "../../components/Carousel/ShopsCarousel";
import CatalogsCarousel from "../../components/Carousel/CatalogsCarousel";

export default function Catalogs() {
  const catalogs = [
    "src/assets/partners-image/Rectangle 127.png",
    "src/assets/partners-image/Rectangle 128.png",
    "src/assets/partners-image/Rectangle 129.png",
    "src/assets/partners-image/Rectangle 130.png",
    "src/assets/partners-image/Rectangle 127.png",
    "src/assets/partners-image/Rectangle 128.png",
    "src/assets/partners-image/Rectangle 129.png",
    "src/assets/partners-image/Rectangle 130.png",
  ];

  return (
    <main className="catalogs-page grid-page-aside ">
      <section className="catalogs-page__main">
        <div className="div-container">
          <h1 className="page-title">Каталози</h1>

          <div style={{ gap: "1rem", marginTop: "1rem" }} className="d-flex">
            <MainButton variant="btn--sm">Најбарани категории</MainButton>
            <MainButton variant="btn--sm"> Препорачани категории</MainButton>
            <MainButton variant="btn--sm">Сите категории</MainButton>
          </div>
        </div>

        <div className="div-container">
          <CatalogsCarousel catalogs={catalogs} />
        </div>

        <div className="bg-grey">
          <ShopsCarousel
            partners={partners}
            title="Популарни продавници"
            slidesToShow={4.5}
          />
        </div>

        <div className="div-container">
          <Carousel
            title="Популарни продукти"
            slidesToShow={5}
            products={products}
          />
        </div>
      </section>
      <section className="catalogs-page__aside">
        <AsideBanner />
      </section>
    </main>
  );
}
