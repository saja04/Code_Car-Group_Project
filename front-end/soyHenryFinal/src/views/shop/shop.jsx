import React, { useState } from "react";
import style from "./shop.module.css";
import CarCards from "../../components/cards/carCards";
import vehiclesData from "../../../utils/utils.json";
import Filter from "../../components/filter/filter";
import Pagination from "../../components/pagination/pagination";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 6;

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = vehiclesData.vehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.filters}>
          <Filter />
        </div>
        <div className={style.cards}>
          <CarCards vehicles={currentVehicles} />
        </div>
      </div>
      <div className={style.pagination}>
        <Pagination
          vehiclesPerPage={vehiclesPerPage}
          totalVehicles={vehiclesData.vehicles.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Shop;
