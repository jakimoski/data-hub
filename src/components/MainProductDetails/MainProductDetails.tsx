import { Product } from "../../data/data";
import Ad from "../AdComponent/Ad";
import StoresComponent from "../StoresComponent/StoresComponent";
import ChartComponent from "../ChartComponent/ChartComponent";
import ProductReview from "../ProductReview/ProductReview";

import Experts from "../Experts/Experts";
import ProductOverview from "../ProductOverview/ProductOverview";

type Props = {
  product: Product;
};

export default function MainProductDetails({ product }: Props) {
  return (
    <div className="main-product">
      <div>Linkovi</div>

      <ProductOverview product={product} />
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
      <ProductReview />
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
