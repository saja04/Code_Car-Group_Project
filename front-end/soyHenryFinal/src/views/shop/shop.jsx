import SearchBar from "../../components/searchBar/searchBar";
import style from "./shop.module.css";
import CarCards from "../../components/cards/carCards";
import vehiclesData from "../../../utils/utils.json";

function Shop() {
  return (
    <div className={style.container}>
      <SearchBar />
      <h1>soy la tienda</h1>
      <CarCards vehicles={vehiclesData.vehicles} />
    </div>
  );
}

export default Shop;
