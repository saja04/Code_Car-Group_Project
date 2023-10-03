import React from "react";
import carCardStyles from "./carCard.module.css";
import { Link } from "react-router-dom";

function CarCard({ vehicle, showPricesInUSD }) {
  return (
    <div className={carCardStyles.conteiner}>
      <div className={carCardStyles.carCard}>
        <h2>
          {vehicle.marca} {vehicle.modelo}
        </h2>
        <img
          src={vehicle.car_imagen}
          alt={`${vehicle.car_marca} ${vehicle.car_modelo}`}
        />
        <p>
          {" "}
          {vehicle.car_marca} {vehicle.car_modelo}
        </p>
        <p>Color: {vehicle.car_color}</p>
        <p>Año: {vehicle.car_año}</p>
        <p>{vehicle.car_condicion}</p>
        <p>
          {showPricesInUSD
            ? `USD$${vehicle.car_precio_usd}`
            : `ARS$${vehicle.car_precio_ars}`}
        </p>{" "}
        <div>
          <button type="submit">Agregar al carrito</button>
          <Link to={`/detail/${vehicle.car_id}`}>
            <button>Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
