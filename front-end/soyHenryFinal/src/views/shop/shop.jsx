import React, { useState, useEffect } from "react";
import style from "./shop.module.css";
import Filter from "../../components/filter/filter";
import Pagination from "../../components/pagination/pagination";
import axios from "axios";
import CarCards from "../../components/cards/carCards";

function Shop() {
  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 6;

  const paginatedVehicles = Array.isArray(vehicles)
    ? vehicles.slice(
        (currentPage - 1) * vehiclesPerPage,
        currentPage * vehiclesPerPage
      )
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await axios.get("https://codecar.onrender.com/cars");
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    }
    fetchVehicles();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.filters}>
          <Filter />
        </div>
        <div className={style.cards}>
          <CarCards vehicles={paginatedVehicles} />
          <div className={style.pagination}>
            <Pagination
              vehiclesPerPage={vehiclesPerPage}
              totalVehicles={Array.isArray(vehicles) ? vehicles.length : 0}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
