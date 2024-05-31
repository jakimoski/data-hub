type FilterCheckboxProps = {
  title: string;
  changeHandler?: () => void;
};

export default function FilterCheckbox({
  title,
  changeHandler,
}: FilterCheckboxProps) {
  return (
    <label className="checkbox ">
      {title}
      <input
        type="checkbox"
        className="checkbox__input"
        onChange={changeHandler}
      />
      <div className="checkbox__indicator"></div>
    </label>
  );
}
