/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import ProductImageCard from "../ProductCard/ProductImageCard";
import { Product } from "../../data/data";
import { useState } from "react";

export default function ProductImages({ product }: { product: Product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();

  return (
    <div className="product-overview__images">
      <div className="product-overview__images__small">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={3}
          modules={[FreeMode, Thumbs]}
        >
          <SwiperSlide>
            <img src={product.imageUrl} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product.imageUrl} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product.imageUrl} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="product-overview__images__main">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          effect={"fade"}
          modules={[Thumbs, Pagination]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            220: {
              slidesPerView: 1,
              pagination: {
                dynamicBullets: true,
                clickable: false,
                enabled: true,
              },
            },

            480: {
              pagination: {
                clickable: false,
                enabled: false,
              },
            },
          }}
        >
          <SwiperSlide>
            <ProductImageCard product={product} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductImageCard product={product} />
          </SwiperSlide>
          <SwiperSlide>
            <ProductImageCard product={product} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
