import BestCarCards from "../../components/bestCards/bestCarCards";
import SearchBar from "../../components/searchBar/searchBar";
import vehiclesData from "../../../utils/utils.json";

import style from "./home.module.css";
import React from "react";

function Home() {
  return (
    <div className={style.container}>
      <SearchBar />
      <h1>soy el inicio</h1>
      <BestCarCards vehicles={vehiclesData.vehicles} />
    </div>
  );
}

export default Home;
