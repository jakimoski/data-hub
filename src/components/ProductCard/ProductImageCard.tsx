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

type ProductCardProps = {
  product: Product;
};

export default function ProductImageCard({ product }: ProductCardProps) {
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
    <div
      className="product-card--image-card"
      style={{ backgroundImage: `url(/products-img/${product.image}.png)` }}
    >
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
