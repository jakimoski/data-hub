import { Swiper, SwiperSlide } from "swiper/react";
import RightLogo from "../../assets/icons/Arrow-right.png";

// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";
import MainButton from "../MainButton/MainButton";
import ExpertCard from "./ExpertCard";

type Props = {
  slidesToShow?: number;
  title?: string;
};

export default function Experts({ title, slidesToShow }: Props) {
  return (
    <section className="carousel-products">
      <div className="carousel-products__title">
        <h2 className="page-title"> {title}</h2>
        <MainButton variant="btn--icon--sm" rightLogo={RightLogo}>
          Види повеќе
        </MainButton>
      </div>
      <Swiper
        // spaceBetween={16}
        slidesPerGroup={1}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 620px
          620: {
            slidesPerView: 2,
          },

          // when window width is >= 860px
          860: {
            slidesPerView: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: slidesToShow ? slidesToShow : 6,
          },
        }}
      >
        <SwiperSlide>
          <ExpertCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpertCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpertCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpertCard />
        </SwiperSlide>
        <SwiperSlide>
          <ExpertCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
