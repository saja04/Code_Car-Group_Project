import SearchBar from "../../components/searchBar/searchBar";
import style from "./shop.module.css";

function Shop() {
  return (
    <div className={style.container}>
      <SearchBar />
      <h1>soy la tienda</h1>
    </div>
  );
}

export default Shop;
