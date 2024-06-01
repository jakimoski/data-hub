import image1 from "../../assets/ads-images/Rectangle 129.png";
import image2 from "../../assets/ads-images/Rectangle 130.png";
import image3 from "../../assets/ads-images/Rectangle 134.png";

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
