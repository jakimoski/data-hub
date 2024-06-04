import { Product } from "../../data/data";
import Ad from "../AdComponent/Ad";
import StoresComponent from "../StoresComponent/StoresComponent";
import ChartComponent from "../ChartComponent/ChartComponent";
import ProductReview from "../ProductReview/ProductReview";
import Experts from "../Experts/Experts";
import ProductOverview from "../ProductOverview/ProductOverview";
import Carousel from "../Carousel/ProductsCarousel";
import { products } from "../../data/data";
import ProductInformation from "../ProductInformation/ProductInformation";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import MainButton from "../MainButton/MainButton";
import ArrowIcon from "../../assets/icons/Arrow-top.png";

type Props = {
  product: Product;
};

export default function MainProductDetails({ product }: Props) {
  return (
    <div className="main-product">
      <div className="div-container">
        <Breadcrumbs breadcrumbs={[{ label: product?.productName }]} />
      </div>

      <ProductOverview product={product} />
      <div className="div-container main-product__ads border-bottom">
        <p className="actions">
          <span>Цени</span>
          <span>Прегледи</span>
          <span>Статистики</span>
          <span>Информации за продуктот</span>
        </p>
        <Ad></Ad>
        <StoresComponent />
        <StoresComponent />
        <StoresComponent />
        <StoresComponent />
        <div className="image-banner ">
          <img
            src="../../../src/assets/ads-images/image-banner.png"
            alt="image-banner"
          />
        </div>
        <StoresComponent />
      </div>
      <div className="div-container mt border-bottom p-m">
        <Carousel
          products={products}
          slidesToShow={5}
          title="Слични продукти"
        />
        <ProductReview product={product} />
      </div>

      <div className="div-container border-bottom">
        <Experts title="Експертите велат..." slidesToShow={3} />
      </div>
      <div className="div-container border-bottom">
        <ChartComponent />
      </div>
      <div className="div-container ">
        <ProductInformation />
      </div>
      <div className="product-button-box p-y-m">
        <MainButton rightLogo={ArrowIcon} variant="btn--lg">
          Омиленo
        </MainButton>
      </div>
    </div>
  );
}
