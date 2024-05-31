import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import RightLogo from "../../assets/icons/Arrow-right.png";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
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
        spaceBetween={5}
        // slidesPerView={"auto"}
        slidesPerGroup={1}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: slidesToShow ? slidesToShow - 2 : 3,
          },
          // when window width is >= 860px
          860: {
            slidesPerView: slidesToShow ? slidesToShow - 1 : 4,
          },
          // when window width is >= 1024px
          1025: {
            slidesPerView: slidesToShow ? slidesToShow : 6,
          },
        }}
      >
        {products &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
