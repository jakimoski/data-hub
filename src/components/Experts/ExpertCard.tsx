import image from "../../assets/products-img/Pic placeholder.png";

export default function ExpertCard() {
  return (
    <div className="div-container">
      <div>
        <img
          src={image}
          alt=""
          style={{ borderRadius: "20px", width: "437px", fontSize: "22px" }}
        />
        <h4>Нешто за бледнерот</h4>
        <p>Секоe семејство има различни потреби. Ние имаме неколку видови на</p>
        блендери.. <b>Види повеќе</b>
      </div>
    </div>
  );
}
