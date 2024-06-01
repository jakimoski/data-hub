import image1 from "../../assets/images/ads-images/10993445535805353260 4.png";
import image2 from "../../assets/images/ads-images/Rectangle 133.png";
import image3 from "../../assets/images/ads-images/Rectangle 134.png";

export default function AsideBanner() {
  return (
    <div className="aside-container">
      <div className="aside-part">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </div>
  );
}
