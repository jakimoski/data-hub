import image1 from "../../assets/ads-images/10993445535805353260 4.png";
import image2 from "../../assets/ads-images/Rectangle 133.png";
import image3 from "../../assets/ads-images/Rectangle 130.png";

export default function AsideBanner() {
  return (
    <div className="aside-container">
      <div className="aside-part">
        <img src={image1} alt="image" />
        <img src={image2} alt="image1" />
        <img src={image3} alt="image2" />
      </div>
    </div>
  );
}
