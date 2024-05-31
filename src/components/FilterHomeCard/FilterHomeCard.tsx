import { useState } from "react";

import { Category } from "../../data/data";

// import * frtom '../../assets/icons/apliance-icon.svg'
import { Link } from "react-router-dom";

type Props = {
  category: Category;
  classes: string;
};

function getImgUrl(name: string) {
  return new URL(`../../assets/icons/${name}`, import.meta.url).href;
}

export default function FilterHomeCard({ category, classes }: Props) {
  const [hover, setHover] = useState(false);
  const iconUrl = hover ? category.hoverIcon : category.icon;

  const categoryName =
    category.name.charAt(0).toUpperCase() + category.name.slice(1);

  console.log(categoryName);

  return (
    <Link
      to={`/category/${category.name.toLowerCase()}`}
      className={classes}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={getImgUrl(iconUrl!)} alt="" className="filter-icon" />

      <p>{categoryName}</p>
    </Link>
  );
}

// "filter-card"
