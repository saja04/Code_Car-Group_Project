import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import vehicles from "../../../utils/utils.json";
import style from "./filter.module.css";
import { getFilters } from "../../redux/actions";
import { connect } from "react-redux";

function Filter({ getFilters, resetPagination }) {
  const [currentPage, setCurrentPage] = useState(1);

  const marcasUnicas = [
    ...new Set(vehicles.vehicles.map((vehicle) => vehicle.marca)),
  ];

  const añosUnicos = [
    ...new Set(vehicles.vehicles.map((vehicle) => vehicle.año.toString())),
  ];

  const tiposUnicos = [
    ...new Set(vehicles.vehicles.map((vehicle) => vehicle.tipo_de_auto)),
  ];

  const condicionUnicos = [
    ...new Set(vehicles.vehicles.map((vehicle) => vehicle.condicion)),
  ];

  const divisa = localStorage.getItem("divisa");

  const [marcasSeleccionadas, setMarcasSeleccionadas] = useState([]);
  const [añosSeleccionados, setAñosSeleccionados] = useState([]);
  const [tiposSeleccionados, setTiposSeleccionados] = useState([]);
  const [condicionSeleccionados, setCondicionSeleccionados] = useState([]);
  const [filtroPrecio, setFiltroPrecio] = useState(null);

  const handleMarcaChange = async (event) => {
    const { value } = event.target;
    await setMarcasSeleccionadas(value);

    if (añosSeleccionados[0]) {
      await getFilters({
        filter: { car_marca: value, car_año: añosSeleccionados },
        precio: divisa,
      });
    } else await getFilters({ filter: { car_marca: value }, precio: divisa });

    resetPagination();
  };

  const handleAñoChange = async (event) => {
    const { value } = event.target;
    await setAñosSeleccionados(value);

    console.log(marcasSeleccionadas);
    if (marcasSeleccionadas[0]) {
      await getFilters({
        filter: { car_marca: marcasSeleccionadas, car_año: value },
        precio: divisa,
      });
    } else await getFilters({ filter: { car_año: value }, precio: divisa });

    resetPagination();
  };

  const handlePrecioChange = async (event) => {
    const { value } = event.target;
    await setFiltroPrecio(value);

    if (marcasSeleccionadas[0] && añosSeleccionados[0]) {
      if (value === "mayor") {
        await getFilters({
          filter: {
            car_año: añosSeleccionados,
            car_marca: marcasSeleccionadas,
          },
          order: { value: "car_precio_usd", sequence: "DESC" },
          precio: divisa,
        });
      } else if (value === "menor") {
        await getFilters({
          filter: {
            car_año: añosSeleccionados,
            car_marca: marcasSeleccionadas,
          },
          order: { value: "car_precio_usd", sequence: "ASC" },
          precio: divisa,
        });
      }
    } else if (marcasSeleccionadas[0]) {
      if (value === "mayor") {
        await getFilters({
          filter: { car_marca: marcasSeleccionadas },
          order: { value: "car_precio_usd", sequence: "DESC" },
          precio: divisa,
        });
      } else if (value === "menor") {
        await getFilters({
          filter: { car_marca: marcasSeleccionadas },
          order: { value: "car_precio_usd", sequence: "ASC" },
          precio: divisa,
        });
      }
    } else if (añosSeleccionados[0]) {
      if (value === "mayor") {
        await getFilters({
          filter: { car_año: añosSeleccionados },
          order: { value: "car_precio_usd", sequence: "DESC" },
          precio: divisa,
        });
      } else if (value === "menor") {
        await getFilters({
          filter: { car_año: añosSeleccionados },
          order: { value: "car_precio_usd", sequence: "ASC" },
          precio: divisa,
        });
      }
    } else {
      if (value === "mayor") {
        await getFilters({
          order: { value: "car_precio_usd", sequence: "DESC" },
          precio: divisa,
        });
      } else if (value === "menor") {
        await getFilters({
          order: { value: "car_precio_usd", sequence: "ASC" },
          precio: divisa,
        });
      }
    }
  };

  const resetHandler = () => {
    setMarcasSeleccionadas([]);
    setAñosSeleccionados([]);
    setCondicionSeleccionados([]);
    setFiltroPrecio(null);
    resetPagination();
    return getFilters({ precio: divisa });
  };

  return (
    <div className={style.container}>
      <h2>Filtros</h2>
      <button onClick={resetHandler}>RESET</button>
      <form>
        <div className={style.marcas}>
          <h3>Marcas</h3>
          <div className={style.checkMarcas}>
            {marcasUnicas.map((marca) => (
              <label key={marca}>
                <input
                  type="checkbox"
                  value={marca}
                  checked={marcasSeleccionadas.includes(marca)}
                  onChange={handleMarcaChange}
                />{" "}
                {marca}
              </label>
            ))}
          </div>
        </div>

        <div className={style.años}>
          <h3>Años</h3>
          <div className={style.checkAños}>
            {añosUnicos.map((año) => (
              <label key={año}>
                <input
                  type="checkbox"
                  value={año}
                  checked={añosSeleccionados.includes(año)}
                  onChange={handleAñoChange}
                />{" "}
                {año}
              </label>
            ))}
          </div>
        </div>

        <div className={style.precio}>
          <h3>Precio</h3>
          <div className={style.checkPrecio}>
            <label>
              <input
                type="radio"
                name="precio"
                value="mayor"
                checked={filtroPrecio === "mayor"}
                onChange={handlePrecioChange}
              />{" "}
              Mayor
            </label>
            <label>
              <input
                type="radio"
                name="precio"
                value="menor"
                checked={filtroPrecio === "menor"}
                onChange={handlePrecioChange}
              />{" "}
              Menor
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFilters: (filters) => dispatch(getFilters(filters)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
