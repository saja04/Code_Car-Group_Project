import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import style from "./shop.module.css";
import Filter from "../../components/filter/filter";
import Pagination from "../../components/pagination/pagination";
import CarCards from "../../components/cards/carCards";
import { getCars } from "../../redux/actions";

function Shop({ allCars, getCars }) {
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
    getCars();
    setVehicles(allCars);
  }, [allCars]);

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

const mapStateToProps = (state) => {
  return {
    allCars: state.allCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCars: () => dispatch(getCars()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
