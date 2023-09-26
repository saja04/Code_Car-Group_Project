import style from "./searchBar.module.css";

function SearchBar() {
  return (
    <div className={style.container}>
      <input placeholder="Buscar..." type="text" />
      <button>Buscar</button>
    </div>
  );
}

export default SearchBar;
