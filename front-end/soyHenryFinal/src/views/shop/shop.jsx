import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions";

import style from "./shop.module.css";
import Filter from "../../components/filter/filter";
import Pagination from "../../components/pagination/pagination";
import CarCards from "../../components/cards/carCards";

function Shop() {
  const dispatch = useDispatch();
  const allCars = useSelector((state) => state.allCars);
  const divisa = localStorage.getItem("divisa");
  const searchCar = useSelector((state) => state.searchCar);

  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchPerformed, setSearchPerformed] = useState(false);

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

  const resetPagination = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    setVehicles(allCars);
    setCurrentPage(1);
  }, [allCars]);

  useEffect(() => {
    dispatch(getCars(divisa));
  }, [dispatch]);

  useEffect(() => {
    if (searchPerformed) {
      resetPagination(); 
    }
  }, [searchPerformed]);

  useEffect(()=>{
    setVehicles(searchCar);
    setCurrentPage(1);
  }, [searchCar]) 

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.filters}>
          <Filter resetPagination={resetPagination} />
        </div>
        <div className={style.cards}>
          <CarCards vehicles={paginatedVehicles} />
          <div className={style.pagination}>
            <Pagination
              vehiclesPerPage={vehiclesPerPage}
              totalVehicles={Array.isArray(vehicles) ? vehicles.length : 0}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
