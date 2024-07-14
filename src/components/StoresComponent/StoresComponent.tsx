import { truncateText } from "../../utils/helpers";
import image from "../../assets/ads-images/merkur.png";

type Props = {
  price: number;
  shipping: string;
  name: string;
};

export default function StoresComponent({ price, shipping, name }: Props) {
  return (
    <div className="container-store">
      <div className="container-store__wrapper">
        <div>
          <img className="container-store__image" src={image} alt="merkur" />
          <p className="container-store__product">{truncateText(name, 20)}</p>
        </div>
        <p className="container-store__info">
          <span>{shipping}</span>
          <span className="text-yellow">{price} ден.</span>
        </p>
      </div>
    </div>
  );
}
