import { Product } from "../../data/data";
import MainButton from "../MainButton/MainButton";
import imageUser1 from "../../assets/about-images/Ellipse 126.png";
import imageUser2 from "../../assets/about-images/Ellipse 127.png";

export default function ProductReview({ product }: { product: Product }) {
  const totalStars = product?.reviews?.reduce(
    (acc, review) => acc + review.stars,
    0
  );

  const averageStars =
    product.reviews && product.reviews.length > 0
      ? totalStars ?? 0 / product.reviews.length
      : 0;

  return (
    <div className="reviews">
      <div className="reviews__header">
        <h1 className="reviews__title page-title">Рецензии</h1>
        <p className="reviews__subtitle">
          Погледни што мислат другите корисници
        </p>
      </div>
      <div className="reviews__content">
        <div className="reviews__grid">
          <div className="reviews__grid-item">
            <div className="reviews__rating">
              <span className="reviews__rating-value">
                <span className="reviews__star-icon">★</span> {averageStars}
              </span>
              <p className="reviews__responses">
                од{" "}
                <b>
                  {product?.reviews?.length}{" "}
                  {product.reviews && product?.reviews?.length > 1
                    ? " одговори"
                    : " одговор"}
                </b>
              </p>
              <div className="reviews__progress">
                <div>
                  <p>
                    5 <progress value="0.5"></progress>
                  </p>
                  <p>
                    4 <progress value="0.4"></progress>
                  </p>
                  <p>
                    3 <progress value="0.3"></progress>
                  </p>
                  <p>
                    2 <progress value="0.2"></progress>
                  </p>
                  <p>
                    1 <progress value="0.1"></progress>
                  </p>
                </div>
                <MainButton variant="btn--black">+ Коментар</MainButton>
              </div>
            </div>
          </div>
          <div className="reviews__grid-item">
            <div className="reviews__user">
              <div className="reviews__user-info">
                <img
                  src={imageUser1}
                  alt="Stefan"
                  className="reviews__user-image"
                />
                <div>
                  <p className="reviews__user-name">Стефан</p>
                  <p className="reviews__user-time">сега</p>
                </div>
              </div>
              <img
                src="../../src/assets/about-images/Frame 203.png"
                alt="stars"
                className="reviews__user-stars"
              />
            </div>
            <div className="reviews__user-comment">
              <p>
                Дали ова веќе 2 недели го добив како замена за мојата постара
                серија од 600. Првично сакав да ја купам серијата 1000, но таа е
                распродадена насекаде.
              </p>
            </div>
            <div className="reviews__user">
              <div className="reviews__user-info">
                <img
                  src={imageUser2}
                  alt="Franjo"
                  className="reviews__user-image"
                />
                <div>
                  <p className="reviews__user-name">Фрањо</p>
                  <p className="reviews__user-time">пред 3 дена</p>
                </div>
              </div>
              <img
                src="../../src/assets/about-images/Frame 204.png"
                alt="stars"
                className="reviews__user-stars"
              />
            </div>
            <div className="reviews__user-comment">
              <p>
                Го купив ова за смути и мило ми е што го направивте. Лесен е за
                употреба, многу брз и лесен за чистење. Го користевте и за да
                скршите блок сирење и брзо успеа.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
