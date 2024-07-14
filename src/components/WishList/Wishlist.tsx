import { useState } from "react";
import ProductSmall from "../ProductCard/ProductSmall";
import { Product } from "../../data/data";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const arrowIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.68025 24.0907C4.10219 24.5125 4.67438 24.7495 5.271 24.7495C5.86762 24.7495 6.43982 24.5125 6.86175 24.0907L17.9993 12.9532L29.1368 24.0907C29.5611 24.5006 30.1295 24.7274 30.7194 24.7223C31.3093 24.7171 31.8737 24.4805 32.2908 24.0633C32.708 23.6462 32.9446 23.0818 32.9498 22.4919C32.9549 21.9019 32.7281 21.3336 32.3183 20.9092L19.59 8.18099C19.1681 7.75918 18.5959 7.52222 17.9993 7.52222C17.4026 7.52222 16.8304 7.75918 16.4085 8.18099L3.68025 20.9092C3.25844 21.3312 3.02148 21.9034 3.02148 22.5C3.02148 23.0966 3.25844 23.6688 3.68025 24.0907Z"
      fill="black"
    />
  </svg>
);

const exitIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.0612 18.938C21.343 19.2198 21.5013 19.602 21.5013 20.0005C21.5013 20.399 21.343 20.7812 21.0612 21.063C20.7794 21.3448 20.3972 21.5031 19.9987 21.5031C19.6002 21.5031 19.218 21.3448 18.9362 21.063L10.9999 13.1242L3.0612 21.0605C2.7794 21.3423 2.39721 21.5006 1.9987 21.5006C1.60018 21.5006 1.21799 21.3423 0.936196 21.0605C0.654403 20.7787 0.496094 20.3965 0.496094 19.998C0.496094 19.5995 0.654403 19.2173 0.936196 18.9355L8.87495 10.9992L0.938695 3.06049C0.656903 2.7787 0.498594 2.39651 0.498594 1.99799C0.498594 1.59948 0.656903 1.21729 0.938695 0.935493C1.22049 0.6537 1.60268 0.49539 2.0012 0.49539C2.39971 0.49539 2.7819 0.6537 3.0637 0.935493L10.9999 8.87424L18.9387 0.934242C19.2205 0.65245 19.6027 0.494141 20.0012 0.494141C20.3997 0.494141 20.7819 0.65245 21.0637 0.934242C21.3455 1.21603 21.5038 1.59823 21.5038 1.99674C21.5038 2.39526 21.3455 2.77745 21.0637 3.05924L13.1249 10.9992L21.0612 18.938Z"
      fill="black"
    />
  </svg>
);

export default function Wishlist() {
  const favorites = useSelector(
    (state: RootState) => state?.favorites.favorites
  );
  const watchList = useSelector(
    (state: RootState) => state?.priceWatch.priceWatch
  );
  const visitedItems = useSelector(
    (state: RootState) => state?.visited.visited
  );

  const [wishlist, setWishlist] = useState<boolean>(false);
  const [content, setContent] = useState<Product[]>(favorites);

  const handleWishlist = () => {
    const body = document.querySelector("body");
    body?.classList.toggle("hide-scroll");
    setWishlist(!wishlist);
  };

  const handleFavorites = () => {
    setContent(favorites);
  };

  const handleProductClick = () => {
    setWishlist(false);
  };

  return (
    <>
      {wishlist ? (
        <div onClick={handleWishlist} className={"wishlist__overlay"}></div>
      ) : null}
      <div className="wishlist" style={{ zIndex: wishlist ? 1020 : 10 }}>
        <div className="wishlist__header">
          <button onClick={handleWishlist}>
            Омилени продукти {wishlist ? exitIcon : arrowIcon}
          </button>
        </div>
        {wishlist ? (
          <>
            <div className="wishlist__body">
              <div className="wishlist__content">
                {content.length > 0
                  ? content.map((product) => (
                      <ProductSmall
                        handler={handleProductClick}
                        key={product.id}
                        product={product}
                      />
                    ))
                  : null}
              </div>
            </div>
            <div className="wishlist__buttons">
              <button onClick={handleFavorites} className="wishlist__button">
                Мој Листи
              </button>
              <button
                onClick={() => setContent(watchList)}
                className="wishlist__button"
              >
                Известување за цена
              </button>
              <button
                onClick={() => setContent(visitedItems)}
                className="wishlist__button"
              >
                Последни прегледи
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
