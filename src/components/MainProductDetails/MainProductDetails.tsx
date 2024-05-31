import { Product } from "../../data/data";
import Ad from "../AdComponent/Ad";
import StoresComponent from "../StoresComponent/StoresComponent";
// import TestCard from "../TestCard/TestCard";
import ChartComponent from "../ChartComponent/ChartComponent";
import MapComponent from "../MapComponent/MapComponent";

import Review from "../Review/Review";
import { useState } from "react";
import Modal from "../ModalComponent/Modal";
import { createPortal } from "react-dom";
import ProductImageCard from "../ProductCard/ProductImageCard";
import Experts from "../Experts/Experts";

type Props = {
  product: Product;
};

export default function MainProductDetails({ product }: Props) {
  const [showModal, setShowModal] = useState(false);

  const totalStars = product.reviewsList.reduce(
    (acc, review) => acc + review.stars,
    0
  );

  const averageStars =
    product.reviewsList.length > 0
      ? totalStars / product.reviewsList.length
      : 0;
  return (
    <div className="main-product">
      <div>Linkovi</div>

      <div className="product-info">
        <div className="product-info__images">
          <div className="product-info__images__small">
            <img src="../../../src/assets/product-details/part1.png" alt="" />
            <img src="../../../src/assets/product-details/part2.png" alt="" />
            <img src="../../../src/assets/product-details/part3.png" alt="" />
          </div>
          <div className="product-info__images__main">
            <ProductImageCard product={product} />
          </div>
        </div>

        <div className="product-info__details">
          <h1 className="product-info__details__title">{product.name}</h1>
          <div className="product-info__reviews">
            <div className="product-info__reviews__star">
              <svg
                width="20"
                height="20"
                viewBox="0 0 59 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M57.5259 25.5085L45.6549 35.7141L49.2109 50.9085C49.3991 51.7028 49.3454 52.5342 49.0566 53.2986C48.7677 54.063 48.2565 54.7266 47.5869 55.2064C46.9173 55.6862 46.119 55.9609 45.2917 55.9961C44.4645 56.0314 43.645 55.8256 42.9359 55.4046L29.4829 47.3666L16.0589 55.4046C15.3497 55.8256 14.5303 56.0314 13.703 55.9961C12.8758 55.9609 12.0774 55.6862 11.4078 55.2064C10.7382 54.7266 10.227 54.063 9.93817 53.2986C9.64932 52.5342 9.59562 51.7028 9.7838 50.9085L13.3346 35.7297L1.46091 25.5085C0.832897 24.9749 0.37878 24.2706 0.155503 23.4838C-0.0677732 22.697 -0.0502693 21.8628 0.20582 21.0858C0.461909 20.3087 0.945183 19.6235 1.59504 19.116C2.24489 18.6084 3.0324 18.3012 3.85881 18.2328L19.5096 16.8974L25.6189 2.54312C25.9379 1.78992 26.476 1.14655 27.1655 0.694011C27.855 0.241472 28.6649 0 29.4934 0C30.3219 0 31.1319 0.241472 31.8213 0.694011C32.5108 1.14655 33.0489 1.78992 33.368 2.54312L39.4956 16.8974L55.1412 18.2328C55.9676 18.3012 56.7551 18.6084 57.405 19.116C58.0548 19.6235 58.5381 20.3087 58.7942 21.0858C59.0503 21.8628 59.0678 22.697 58.8445 23.4838C58.6212 24.2706 58.1671 24.9749 57.5391 25.5085H57.5259Z"
                  fill="#FFA500"
                />
              </svg>
              {averageStars}
            </div>
            <button className="product-info__reviews__btn">Оцени</button>
            <button className="product-info__reviews__btn">Спореди</button>
            <button className="product-info__reviews__btn">
              Известување за цена
            </button>
          </div>
          <p className="product-info__details__desc">
            Nutribullet е екстрактор на хранливи состојки кој со својот
            единствен систем за екстракција на храната, ги разградува продуктите
            до микро ниво и ги ослободува сите хранливи материи кои ги...
            <b> Види повеќе...</b>
          </p>
          <div className="product-info__customize">
            <button className="product-info__customize__btn">
              <img src="../../../src/assets/icons/drops.png" alt="" />
              Боја
            </button>
            <button className="product-info__customize__btn">
              <img src="../../../src/assets/icons/size.png" alt="" />
              Големина
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="product-info__customize__btn"
            >
              <img src="../../../src/assets/icons/pin.png" alt="" />
              Близу до тебе
            </button>
            {showModal &&
              createPortal(
                <Modal onClose={() => setShowModal(false)}>
                  <MapComponent />
                </Modal>,
                document.body
              )}
          </div>
          <div className="colors">
            <div className="color__1"></div>
            <div className="color__2"></div>
            <div className="color__3"></div>
            <div className="color__4"></div>
            <div className="color__5"></div>
          </div>
        </div>
      </div>
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
      <div className="image-banner">
        <img src="../../../src/assets/ads-images/image-banner.png" alt="" />
      </div>
      <StoresComponent />
      <hr className="separator-hr" />

      <div className="section">
        <Experts title="Експертите велат..." slidesToShow={3} />
      </div>
      <ChartComponent />
      <Review />
      <div className="product-information">
        <h2>Информации за прдуктот</h2>
        <h4>
          Најниската цена за Nutribullet Pro е 3000ден. Ова е најдобрата цена во
          моментов меѓу 4 продавници.
        </h4>
        <p>
          Блендерот е очигледен избор на кујнска машина. Честиот кој пие смути
          ќе сфати дека е многу полесно да експериментира со состојки и вкусови
          со навистина добар блендер. Уморни од мешање тесто за палачинки со
          рака? Само фрлете ги сите состојки во блендерот и седнете додека тој
          работи за вас. Затоа можете да уживате во блендер во вашата кујна!
        </p>

        <ul>
          <li>Отстранлив нож</li>
          <li>Мотор од 900 вати</li>

          <li>Две програми</li>
        </ul>

        <p>
          За да биде мешањето уште поефикасно, овој блендер има нож со четири
          сечила. Деловите од блендерот може да се мијат во машина за миење
          садови, така што не е потребно време од вадењето на блендерот до
          уживањето во вашето смути во мир и тишина. Има висока просечна оцена
          од 4,3/5, што го прави еден од најдобрите блендери на PriceRunner. Во
          моментов најниската цена за овој блендер е 3000 денари, но слободно
          споредете ја цената помеѓу различни трговци.
        </p>
      </div>
      <div className="product-button-box"></div>
    </div>
  );
}
