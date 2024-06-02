import { useEffect, useState } from "react";
import { categories, TSubCategories } from "../../data/data";
import FilterHomeCard from "../FilterHomeCard/FilterHomeCard";
import CategorryCard from "./CategorryCard";
import Search from "../Search/Search";
import { motion } from "framer-motion";
import React from "react";

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

  return (
    <motion.div
      className="categories"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="categories__all">
        <div className="categories__search">
          <Search />
        </div>
        {categories.map((category) => (
          <span
            key={category.name.trim()}
            onMouseOver={() => setCurrentCategory(category.name)}
            style={{
              backgroundColor: `${
                currentCategory === category.name ? "#F6F6F6" : ""
              }`,
            }}
          >
            <FilterHomeCard
              category={category}
              classes="categories__all__item"
            />
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
        <h2>{currentCategory}</h2>
        <div className="categories__sub__items">
          {currentSubCategory &&
            currentSubCategory.map((el) => (
              <CategorryCard
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
