import Search from "../Search/Search";
import MapIMG from "../../assets/backgrounds/Pic placeholder.png";

const MapComponent = () => {
  return (
    <div id="map">
      <h2>Купи во близина</h2>
      <div className="map__flex">
        <p>Достапно на 9 локации ширум Скопје</p>
        <Search />
      </div>
      <img src={MapIMG} alt="" />

      <button className="map--btn">Пребарај</button>
    </div>
  );
};

export default MapComponent;
