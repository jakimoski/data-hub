import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";

import Catalog from "../Catalog/Catalog";

type Props = {
  catalogs: string[];
  slidesToShow?: number;
};

export default function CatalogsCarousel({ catalogs, slidesToShow }: Props) {
  return (
    <section className="carousel-products">
      <Swiper
        spaceBetween={16}
        slidesPerGroup={1}
        breakpoints={{
          // when window width is >= 320px
          460: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: slidesToShow ? slidesToShow - 2 : 5,
          },
          // when window width is >= 860px
          860: {
            slidesPerView: slidesToShow ? slidesToShow - 1 : 5,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: slidesToShow ? slidesToShow : 6,
          },
        }}
      >
        {catalogs &&
          catalogs.map((catalog, index) => (
            <SwiperSlide key={index}>
              <Catalog catalog={catalog} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
