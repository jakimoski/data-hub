import image from "../../assets/ads-images/merkur.png";

export default function StoresComponent() {
  return (
    <div className="container-store">
      <div className="add-banner">
        <div className="right-part">
          <div className="merkur">
            <img src={image} alt="merkur" />
            <p className="blue-text">Nutribullet PRO 900W</p>
          </div>

          <p className="text-yellow">
            <b>0000 ден. </b>
          </p>
        </div>
      </div>
    </div>
  );
}
