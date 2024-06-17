import { partners, products } from "../../data/data";
import Carousel from "../../components/Carousel/ProductsCarousel";
import MainButton from "../../components/MainButton/MainButton";
import AsideBanner from "../../components/AsideBanner/AsideBanner";
import ArrowIcon from "../../assets/icons/Arrow-top.png";
import ShopsCarousel from "../../components/Carousel/ShopsCarousel";
import CatalogsCarousel from "../../components/Carousel/CatalogsCarousel";

export default function Catalogs() {
  const catalogs = [
    "./ads-images/Rectangle 127.png",
    "./ads-images/Rectangle 128.png",
    "./ads-images/Rectangle 129.png",
    "./ads-images/Rectangle 130.png",
    "./ads-images/Rectangle 127.png",
    "./ads-images/Rectangle 128.png",
    "./ads-images/Rectangle 129.png",
    "./ads-images/Rectangle 130.png",
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
        <div className="catalogs-page__bottom div-container">
          <MainButton rightLogo={ArrowIcon} variant="btn--lg">
            Омиленo
          </MainButton>
        </div>
      </section>
      <section className="catalogs-page__aside">
        <AsideBanner />
      </section>
    </main>
  );
}
