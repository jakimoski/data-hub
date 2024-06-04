import FilterHomeCard from "../FilterHomeCard/FilterHomeCard";
import { categories } from "../../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

export default function FiltersHome() {
  return (
    <div className="filter-cards">
      <Swiper
        spaceBetween={10}
        modules={[Pagination, Autoplay]}
        slidesPerGroup={2}
        breakpoints={{
          280: {
            slidesPerView: 2,
          },

          450: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 4,
          },
          700: {
            slidesPerView: 5,
          },

          768: {
            slidesPerView: 7,
          },
        }}
      >
        <div className="filter-cards">
          {categories.map((category) => (
            <SwiperSlide key={category.name.trim()}>
              <FilterHomeCard category={category} classes="filter-card" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
