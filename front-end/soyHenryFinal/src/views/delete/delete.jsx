import React, { useState, useEffect } from "react";
import style from "../delete/delete.module.css";
import Pagination from "../../components/pagination/pagination";
import axios from "axios";
import CardsAdmin from "../../components/cardsAdmin/cardsAdmin";
import { connect } from "react-redux";
import { deleteCar, getCars } from "../../redux/actions";

function Delete({ allCars, getCars, deleteCar }) {
  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const vehiclesPerPage = 16;

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
  }, []);

  useEffect(() => {
    getCars()
    setVehicles(allCars);
  }, [allCars]);

  const handleDelete = async (carId) => {
    try {
      // await axios.delete(`https://codecar.onrender.com/cars/delete/${carId}`);

      // setVehicles((prevVehicles) =>
      //   prevVehicles.filter((vehicle) => vehicle.car_id !== carId)
      // );


      deleteCar(carId)
      alert("Automóvil borrado satisfactoriamente.");
    } catch (error) {
      console.error("Error al eliminar el vehículo:", error);
      alert("No se pudo eliminar el automóvil. Inténtelo de nuevo.");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.filters}></div>
        <div className={style.cards}>
          <CardsAdmin vehicles={paginatedVehicles} onDelete={handleDelete} />
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
    deleteCar: (id) => dispatch(deleteCar(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
