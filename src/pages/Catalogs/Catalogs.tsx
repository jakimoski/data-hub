import { products } from "../../data/data";
import Carousel from "../../components/Carousel/ProductsCarousel";
import MainButton from "../../components/MainButton/MainButton";
import AsideBanner from "../../components/AsideBanner/AsideBanner";
import ArrowIcon from "../../assets/icons/Arrow-top.png";
import catlog1 from "../../assets/partners-image/Rectangle 127.png";
import catlog2 from "../../assets/partners-image/Rectangle 128.png";
import catlog3 from "../../assets/partners-image/Rectangle 129.png";
import catlog4 from "../../assets/partners-image/Rectangle 130.png";
import catlog5 from "../../assets/partners-image/Rectangle 131.png";

import partner1 from "../../assets/partners-image/Rectangle 135.png";
import partner2 from "../../assets/partners-image/Rectangle 136.png";
import partner3 from "../../assets/partners-image/Frame 20023.png";
import partner4 from "../../assets/partners-image/Frame 20024.png";
import partner5 from "../../assets/partners-image/Frame 20025 copy.png";

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
          <img src={catlog1} alt="Neptun" />
          <img src={catlog2} alt="Neptun" />
          <img src={catlog3} alt="Neptun" />
          <img src={catlog4} alt="Neptun" />
          <img src={catlog5} alt="Neptun" />
        </div>

        <div className="div-container">
          <h2 className="page-title">Популарни продавници</h2>
          <div className="d-flex d-flex--sb">
            <img src={partner1} alt="Neptun" />
            <img src={partner2} alt="Neptun" />
            <img src={partner3} alt="Mebel-VI" />
            <img src={partner4} alt="TehnoMarket" />
            <img src={partner5} alt="Mr.Bricolage" />
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
