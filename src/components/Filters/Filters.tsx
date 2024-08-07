import FilterCheckbox from "./FilterCheckbox";
import FilterRange from "./FilterRange";
import FilterSearch from "./FilterSearch";

export default function Filters() {
  return (
    <div className="filters">
      <h2 className="filters__title page-title">Филтри</h2>
      <div className="filters__category">
        <h3 className="filters__category__title">Попуст</h3>
        <div>
          <FilterCheckbox title="20% или повеќе" />
          <FilterCheckbox title="10% или повеќе" />
          <FilterCheckbox title="5% или повеќе" />
        </div>
      </div>
      <div className="filters__category">
        <h3 className="filters__category__title">Цена</h3>
        <div>
          <FilterRange
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
      </div>
      <div className="filters__category">
        <h3 className="filters__category__title">Категорија</h3>
        <div>
          <FilterSearch />
          <FilterCheckbox title="Обувки" />
          <FilterCheckbox title="Бела техника" />
          <FilterCheckbox title="Облека" />
          <FilterCheckbox title="За деца" />
          <FilterCheckbox title="Фотографија" />
          <FilterCheckbox title="Спорт" />
        </div>
      </div>
      <div className="filters__category">
        <h3 className="filters__category__title">Бренд</h3>
        <div>
          <FilterSearch />
          <FilterCheckbox title="Apple" />
          <FilterCheckbox title="Sony" />
          <FilterCheckbox title="Samsung" />
          <FilterCheckbox title="Microsoft" />
          <FilterCheckbox title="Adidas" />
          <FilterCheckbox title="Nike" />
        </div>
      </div>
    </div>
  );
}
