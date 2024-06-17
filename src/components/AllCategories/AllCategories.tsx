import { useEffect, useState } from "react";
import { categories, TSubCategories } from "../../data/data";
import CategoryCard from "./CategoryCard";
import Search from "../Search/Search";
import { motion } from "framer-motion";

function getImgUrl(name: string) {
  return new URL(`../../assets/icons/${name}`, import.meta.url).href;
}

const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function AllCategories() {
  const [currentCategory, setCurrentCategory] = useState("Обувки");
  const [currentSubCategory, setCurrentSubCategory] = useState<
    TSubCategories[]
  >([]);
  useEffect(() => {
    categories.map((category) => {
      if (
        category.name.toLocaleLowerCase() ===
        currentCategory.toLocaleLowerCase()
      )
        setCurrentSubCategory(category.subCategories);
    });
  }, [currentCategory]);

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("search");
  };

  return (
    <motion.div
      className="categories"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="categories__all">
        <div className="categories__search">
          <Search searchHandler={searchHandler} />
        </div>
        {categories.map((category) => (
          <span
            className="categories__all__item"
            key={category.name.trim()}
            onClick={() => setCurrentCategory(category.name)}
            style={{
              backgroundColor: `${
                currentCategory === category.name ? "#F6F6F6" : ""
              }`,
            }}
          >
            <img
              src={getImgUrl(category.icon)}
              alt={category.name}
              className="filter-icon"
            />
            <p>{Capitalize(category.name)}</p>
          </span>
        ))}
        <div>
          <ul className="categories__all--mobile">
            <li>Најавете се</li>
            <li>Претплатете се на билтенот</li>
            <li>За нас</li>
          </ul>
        </div>
      </div>

      <div className="categories__sub">
        <h2 className="page-title">{currentCategory}</h2>
        <div className="categories__sub__items">
          {currentSubCategory &&
            currentSubCategory.map((el) => (
              <CategoryCard
                key={el.name.trim()}
                items={el.childCategories}
                image={el.icon}
                name={el.name}
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
}
