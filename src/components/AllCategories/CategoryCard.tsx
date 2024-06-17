import { Link } from "react-router-dom";

function getImgUrl(name: string) {
  return new URL(`../../assets/products-img/${name}.png`, import.meta.url).href;
}

export default function CategoryCard({
  name,
  items,
  image,
}: {
  name: string;
  items: string[];
  image: string;
}) {
  const categoryUrl = encodeURI(name.toLowerCase());
  return (
    <div className="single-category-item">
      <div>
        <img
          className="single-category-item-image"
          src={getImgUrl(image)}
          alt=""
        />
        <Link
          to={`/data-hub/category/${categoryUrl}`}
          className="single-category-item__title"
        >
          {name}
        </Link>
        <div className="single-category-item__content">
          <ul>
            {items &&
              items.map((el) => (
                <li key={el}>
                  <Link className="single-category-item__link" to={"/"}>
                    {el}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Link className="single-category-item__link--category" to={"/"}>
        Види ги сите {items.length}
      </Link>
    </div>
  );
}
