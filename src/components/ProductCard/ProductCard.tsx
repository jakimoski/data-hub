import { Link } from "react-router-dom";
import { Product } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { favoritesActions } from "../../store/favorites-slice";
import heartYelow from "../../assets/icons/heart-yellow.png";
import heartBlack from "../../assets/icons/heart-black.png";
import bellBlack from "../../assets/icons/bell-black.png";
import bellYellow from "../../assets/icons/bell-yelow.png";
import { priceWatchActions } from "../../store/price-watch-slice";
import { truncateText } from "../../utils/helpers";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatching, setIsWatching] = useState(false);

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state?.favorites.favorites
  );

  const watching = useSelector(
    (state: RootState) => state?.priceWatch.priceWatch
  );

  useEffect(() => {
    const favCheck = favorites?.find((item: Product) => item.id === product.id);
    if (favCheck) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }

    const watchCheck = watching?.find(
      (item: Product) => item.id === product.id
    );
    if (watchCheck) {
      setIsWatching(true);
    } else {
      setIsWatching(false);
    }
  }, [watching, favorites, product.id]);

  function updateFavorites() {
    dispatch(favoritesActions.toggleFavorite(product));

    setIsFavorite((prev) => !prev);
  }

  function updateWatchList() {
    dispatch(priceWatchActions.toggleWatch(product));

    setIsWatching((prev) => !prev);
  }

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card__link">
        <div>
          <div className="product-card__image-wrapper">
            <img
              className="product-card__image"
              // src={`/products-img/${product.imageUrl}.png`}
              src={product.imageUrl}
              alt="Avatar"
            />
            <p className="product-card__sale">
              <span>10%</span>
            </p>
          </div>
          <h4 className="product-card__name">
            {truncateText(product.productName, 25)}{" "}
          </h4>
        </div>

        <div className="product-card__container">
          <p className="small">{product.regularPrice} ден.</p>
          <div className="d-flex">
            <div>
              <p>{product.discountedPrice} ден.</p>
            </div>
            <div className="product-card__rating">
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
              0.0
            </div>
          </div>
        </div>
      </Link>
      <button
        className="product-card__icon product-card__icon--bell"
        onClick={updateWatchList}
      >
        <img src={isWatching ? bellYellow : bellBlack} alt="" />
      </button>
      <button
        className="product-card__icon product-card__icon--heart"
        onClick={updateFavorites}
      >
        <img src={isFavorite ? heartYelow : heartBlack} alt="" />
      </button>
    </div>
  );
}
