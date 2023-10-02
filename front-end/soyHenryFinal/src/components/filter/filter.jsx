import React, { useState } from "react";
import vehicles from "../../../utils/utils.json";
import style from "./filter.module.css";

function Filter() {
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

  const [marcasSeleccionadas, setMarcasSeleccionadas] = useState([]);
  const [añosSeleccionados, setAñosSeleccionados] = useState([]);
  const [tiposSeleccionados, setTiposSeleccionados] = useState([]);
  const [condicionSeleccionados, setCondicionSeleccionados] = useState([]);
  const [filtroPrecio, setFiltroPrecio] = useState(null);

  const handleMarcaChange = (event) => {
    const { value } = event.target;
    if (marcasSeleccionadas.includes(value)) {
      setMarcasSeleccionadas(
        marcasSeleccionadas.filter((marca) => marca !== value)
      );
    } else {
      setMarcasSeleccionadas([...marcasSeleccionadas, value]);
    }
  };

  const handleAñoChange = (event) => {
    const { value } = event.target;
    if (añosSeleccionados.includes(value)) {
      setAñosSeleccionados(añosSeleccionados.filter((año) => año !== value));
    } else {
      setAñosSeleccionados([...añosSeleccionados, value]);
    }
  };

  const handleTipoChange = (event) => {
    const { value } = event.target;
    if (tiposSeleccionados.includes(value)) {
      setTiposSeleccionados(
        tiposSeleccionados.filter((tipo) => tipo !== value)
      );
    } else {
      setTiposSeleccionados([...tiposSeleccionados, value]);
    }
  };

  const handleCondicionChange = (event) => {
    const { value } = event.target;
    if (condicionSeleccionados.includes(value)) {
      setCondicionSeleccionados(
        condicionSeleccionados.filter((tipo) => tipo !== value)
      );
    } else {
      setCondicionSeleccionados([...condicionSeleccionados, value]);
    }
  };

  const handlePrecioChange = (event) => {
    const { value } = event.target;
    setFiltroPrecio(value === filtroPrecio ? null : value);
  };

  return (
    <div className={style.container}>
      <h2>Filtros</h2>
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

        <div className={style.tipo}>
          <h3>Tipo</h3>
          <div className={style.checkTipo}>
            {tiposUnicos.map((tipo) => (
              <label key={tipo}>
                <input
                  type="checkbox"
                  value={tipo}
                  checked={tiposSeleccionados.includes(tipo)}
                  onChange={handleTipoChange}
                />{" "}
                {tipo}
              </label>
            ))}
          </div>
        </div>

        <div className={style.condicion}>
          <h3>Condición</h3>
          <div className={style.checkCondicion}>
            {condicionUnicos.map((condicion) => (
              <label key={condicion}>
                <input
                  type="checkbox"
                  value={condicion}
                  checked={condicionSeleccionados.includes(condicion)}
                  onChange={handleCondicionChange}
                />{" "}
                {condicion}
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

export default Filter;
