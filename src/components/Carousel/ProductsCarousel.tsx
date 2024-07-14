import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import RightLogo from "../../assets/icons/Arrow-right.png";
import { A11y, Navigation, Pagination } from "swiper/modules";
import ArrowRight from "../../assets/icons/right-arrow.png";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import MainButton from "../MainButton/MainButton";

type Props = {
  products?: Product[];
  slidesToShow?: number;
  title?: string;
};

export default function Carousel({ products, title, slidesToShow }: Props) {
  return (
    <section className="carousel-products">
      <div className="carousel-products__title">
        <h2 className="page-title"> {title}</h2>
        <MainButton variant="btn--icon--sm" rightLogo={RightLogo}>
          Види повеќе
        </MainButton>
      </div>
      <Swiper
        navigation={{
          nextEl: ".carousel-products__arrow",
          prevEl: "",
        }}
        spaceBetween={0}
        modules={[Pagination, Navigation, A11y]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          280: {
            slidesPerView: 1,
            pagination: {
              dynamicBullets: true,
              clickable: false,
              enabled: true,
            },
          },

          480: {
            slidesPerView: 2,
            pagination: {
              clickable: false,
              enabled: false,
            },
          },

          768: {
            slidesPerView: slidesToShow ? slidesToShow - 2 : 3,
            pagination: {
              clickable: false,
              enabled: false,
            },
          },
          // when window width is >= 860px
          860: {
            slidesPerView: slidesToShow ? slidesToShow - 1 : 4,
            pagination: {
              clickable: false,
              enabled: false,
            },
          },
          // when window width is >= 1024px
          1025: {
            slidesPerView: slidesToShow ? slidesToShow : 5,
            pagination: {
              clickable: false,
              enabled: false,
            },
          },
          1240: {
            slidesPerView: slidesToShow ? slidesToShow : 6,
            pagination: {
              clickable: false,
              enabled: false,
            },
          },
        }}
      >
        {products &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        <button className="carousel-products__arrow">
          <img src={ArrowRight} alt="right" />
        </button>
      </Swiper>
    </section>
  );
}
