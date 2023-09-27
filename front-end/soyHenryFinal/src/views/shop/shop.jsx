import SearchBar from "../../components/searchBar/searchBar";
import style from "./shop.module.css";
import CarCards from "../../components/cards/carCards";
import vehiclesData from "../../../utils/utils.json";
import Filter from "../../components/filter/filter";

function Shop() {
  return (
    <div className={style.container}>
      <SearchBar />
      <div className={style.content}>
        <div className={style.filters}>
          <Filter />
        </div>
        <div className={style.cards}>
          <CarCards vehicles={vehiclesData.vehicles} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
