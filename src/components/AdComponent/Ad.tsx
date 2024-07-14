import { truncateText } from "../../utils/helpers";

type Props = {
  price: number;
  name: string;
};

export default function Ad({ price, name }: Props) {
  return (
    <div className="ad-container">
      <div className="ad-container__banner">
        <div className="ad-container__left">
          <p>AD</p>
        </div>
        <div className="ad-container__right">
          <div>
            <h4>Нептун</h4>
            <p className="blue-text">{truncateText(name, 20)}</p>
          </div>

          <p>
            <span className="ad-container__price">{price} ден.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
