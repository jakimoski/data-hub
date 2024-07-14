import { Link } from "react-router-dom";
import { Product } from "../../data/data";
import { truncateText } from "../../utils/helpers";

type ProductCardProps = {
  product: Product;
  handler: () => void;
};

export default function ProductSmall({ product, handler }: ProductCardProps) {
  // const toMkd = (price: number) =>
  //   price.toLocaleString("mk-MK", { style: "currency", currency: "MKD" });

  // const totalStars = product?.reviews?.reduce(
  //   (acc, review) => acc + review.stars,
  //   0
  // );

  // const averageStars =
  //   product.reviews && product.reviews.length > 0
  //     ? totalStars ?? 0 / product.reviews.length
  //     : 0;

  const productUrl = encodeURI(product.productName);

  return (
    <div onClick={handler} className="product-card--small">
      <Link
        to={`/data-hub/product/${productUrl}`}
        className="product-card--small__link"
      >
        <div>
          <div className="product-card--small__image-wrapper">
            <img
              className="product-card--small__image"
              src={product.imageUrl}
              alt="Avatar"
              loading="lazy"
            />
          </div>
        </div>

        <div className="product-card--small__container">
          <h4 className="product-card--small__name">
            {truncateText(product.productName, 15)}
          </h4>
          {product.discountedPrice > 0 && (
            <p className="small">{product.regularPrice} ден.</p>
          )}
          <p className="product-card--small__price">
            {product.discountedPrice > 0
              ? product.discountedPrice
              : product.regularPrice}{" "}
            ден.
          </p>
          <div className="d-flex">
            {/* <div className="product-card--small__rating">
              <button>
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
              </button>
              {averageStars}
            </div> */}
          </div>
          <div>
            <p className="product-card--small__stores">
              in {product.store.length} stores
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
