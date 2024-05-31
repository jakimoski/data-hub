import FilterHomeCard from "../FilterHomeCard/FilterHomeCard";
import { categories } from "../../data/data";
import Section from "../Section/Section";

export default function FiltersHome() {
  return (
    <Section>
      <div className="filter-cards">
        {categories.map((category) => (
          <FilterHomeCard
            key={category.name.trim()}
            category={category}
            classes="filter-card"
          />
        ))}
      </div>
    </Section>
  );
}
