import style from "./boardAutosAdmin.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashCardsCar from "../dashCardsCars/dashCardsCars";
import { getCars } from "../../../../redux/actions";
import axios from 'axios'

function BoardAutosAdmin() {
  const allCars = useSelector((state) => state.allCars);
  const divisa = localStorage.getItem("divisa");

  const [vehicles, setVehicles] = useState([]);

  const getCarsAdmin = async() => {
    const response = axios.get('https://codecar.onrender.com/carsAdmin');
    setVehicles(response.data)
  }

  useEffect(() => {
    getCarsAdmin()
  }, []);


  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2 className={style.titleInfo}>Marca</h2>
        <h2 className={style.titleInfo}>Modelo</h2>
        <h2 className={style.titleKm}>Kilometraje</h2>
        <h2 className={style.titleInfo}>Motor</h2>
        <h2 className={style.titleInfo}>Precio</h2>
        <h2 className={style.titleInfo}>Stock</h2>
      </div>
      {vehicles.map((vehicles) => (
        <DashCardsCar vehicle={vehicles} />
      ))}
    </div>
  );
}

export default BoardAutosAdmin;
