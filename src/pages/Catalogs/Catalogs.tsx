import { products } from "../../data/data";
import Carousel from "../../components/Carousel/ProductsCarousel";
import MainButton from "../../components/MainButton/MainButton";
import AsideBanner from "../../components/AsideBanner/AsideBanner";
import ArrowIcon from "../../assets/icons/Arrow-top.png";

export default function Catalogs() {
  return (
    <section className="catalogs-page grid-page-aside ">
      <section className="catalogs-page__main">
        <div className="div-container">
          <h1 className="page-title">Каталози</h1>

          <div style={{ gap: "1rem", marginTop: "1rem" }} className="d-flex">
            <MainButton variant="btn--sm">Најбарани категории</MainButton>
            <MainButton variant="btn--sm"> Препорачани категории</MainButton>
            <MainButton variant="btn--sm">Сите категории</MainButton>
          </div>
        </div>

        <div className="d-flex div-container">
          <img src="src/assets/partners-image/Rectangle 127.png" alt="Neptun" />
          <img src="src/assets/partners-image/Rectangle 128.png" alt="Neptun" />
          <img src="src/assets/partners-image/Rectangle 129.png" alt="Neptun" />
          <img src="src/assets/partners-image/Rectangle 130.png" alt="Neptun" />
          <img src="src/assets/partners-image/Rectangle 131.png" alt="Neptun" />
        </div>

        <div className="div-container">
          <h2 className="page-title">Популарни продавници</h2>
          <div className="d-flex d-flex--sb">
            <img
              src="src/assets/partners-image/Rectangle 135.png"
              alt="Neptun"
            />
            <img
              src="src/assets/partners-image/Rectangle 136.png"
              alt="Neptun"
            />
            <img
              src="src/assets/partners-image/Frame 20023.png"
              alt="Mebel-VI"
            />
            <img
              src="src/assets/partners-image/Frame 20024.png"
              alt="TehnoMarket"
            />
            <img
              src="src/assets/partners-image/Frame 20025 copy.png"
              alt="Mr.Bricolage"
            />
          </div>
        </div>

        <div className="div-container">
          <Carousel
            title="Популарни продукти"
            slidesToShow={5}
            products={products}
          />
        </div>
        <section className="catalogs-page__bottom div-container">
          <MainButton rightLogo={ArrowIcon} variant="btn--lg">
            Омиленo
          </MainButton>
        </section>
      </section>
      <section className="catalogs-page__aside">
        <AsideBanner />
      </section>
    </section>
  );
}
