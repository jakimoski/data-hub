import { Product } from "../../data/data";
import Ad from "../AdComponent/Ad";
import StoresComponent from "../StoresComponent/StoresComponent";
import ChartComponent from "../ChartComponent/ChartComponent";
// import ProductReview from "../ProductReview/ProductReview";
import Experts from "../Experts/Experts";
import ProductOverview from "../ProductOverview/ProductOverview";
import Carousel from "../Carousel/ProductsCarousel";
import { products } from "../../data/data";
import ProductInformation from "../ProductInformation/ProductInformation";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-scroll";
import bannerimage from "../../assets/ads-images/image-banner.png";

type Props = {
  product: Product;
};

const sections = [
  { name: "Поврзани продукти", id: "related-products" },
  { name: "Експертите велат", id: "experts" },
  { name: "Цени", id: "prices" },
  { name: "Информации за продуктот", id: "product-info" },
];

export default function MainProductDetails({ product }: Props) {
  return (
    <div className="main-product">
      <div className="mt-s mb-m">
        <Breadcrumbs breadcrumbs={[{ label: product?.productName }]} />
      </div>
      <ProductOverview product={product} />
      <div className=" main-product__ads border-bottom p-y-m">
        <nav className="sticky-nav">
          {sections.map((section) => (
            <Link
              key={section.id}
              className={"sticky-nav__link"}
              activeClass="active"
              spy={true}
              smooth={"easeInOut"}
              offset={-50}
              duration={100}
              to={section.id}
            >
              {section.name}
            </Link>
          ))}
        </nav>
        <Ad
          price={
            product.discountedPrice
              ? product.discountedPrice
              : product.regularPrice
          }
          name={product.productName}
        />
        <StoresComponent
          price={
            product.discountedPrice
              ? product.discountedPrice
              : product.regularPrice
          }
          shipping={"Досатва 150ден"}
          name={product.productName}
        />
        <StoresComponent
          price={
            product.discountedPrice
              ? product.discountedPrice
              : product.regularPrice
          }
          shipping={"Бесплатна достава"}
          name={product.productName}
        />
        <StoresComponent
          price={
            product.discountedPrice
              ? product.discountedPrice
              : product.regularPrice
          }
          shipping={"Достава 150ден"}
          name={product.productName}
        />
        <StoresComponent
          price={
            product.discountedPrice
              ? product.discountedPrice
              : product.regularPrice
          }
          shipping={"Бесплатна достава"}
          name={product.productName}
        />
        <div className="image-banner ">
          <img src={bannerimage} alt="image-banner" />
        </div>
        <StoresComponent
          price={
            product.discountedPrice
              ? product.discountedPrice
              : product.regularPrice
          }
          shipping={"Бесплатна достава"}
          name={product.productName}
        />

        <div id="related-products" className="mt border-bottom p-y-m">
          <Carousel
            products={products}
            slidesToShow={5}
            title="Слични продукти"
          />
          {/* <ProductReview product={product} /> */}
        </div>

        <div id="experts" className="p-y-m border-bottom">
          <Experts title="Експертите велат..." slidesToShow={3} />
        </div>
        <div id="prices" className="border-bottom">
          <ChartComponent />
        </div>
        <div id="product-info" className="p-y-m">
          <ProductInformation />
        </div>
      </div>
    </div>
  );
}
