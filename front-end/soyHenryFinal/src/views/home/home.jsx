import SearchBar from "../../components/searchBar/searchBar";
import style from "./home.module.css";
import React from 'react';
import CarCards from '../../components/cards/carCards'; 
import vehiclesData from "../../../utils/utils.json"
function Home() {
  return (
    <div className={style.container}>
      <SearchBar />
      <h1>soy el inicio</h1>
      <CarCards vehicles={vehiclesData.vehicles} />
    </div>
  );
}

export default Home;
