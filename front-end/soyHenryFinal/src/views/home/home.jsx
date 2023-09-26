import SearchBar from "../../components/searchBar/searchBar";
import style from "./home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <SearchBar />
      <h1>soy el inicio</h1>
    </div>
  );
}

export default Home;
