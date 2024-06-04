import { ShopPartner } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// import * from "../../assets/partners-image/shops/"
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import PartnerCard from "../Partners/PartnerCard";

type Props = {
  partners?: ShopPartner[];
  slidesToShow?: number;
  title?: string;
};
export default function ShopsCarousel({
  partners,
  slidesToShow,
  title,
}: Props) {
  return (
    <section className="section-block carousel-products ">
      <h2 className="page-title"> {title}</h2>

      <Swiper
        spaceBetween={0}
        speed={10000}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        // slidesPerView={"auto"}
        slidesPerGroup={2}
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
          320: {
            slidesPerView: 2,
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
        {partners &&
          partners.map((partner) => (
            <SwiperSlide key={partner.title}>
              <PartnerCard partner={partner} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
