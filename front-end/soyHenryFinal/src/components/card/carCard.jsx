import React from "react";
import carCardStyles from "./carCard.module.css";

function CarCard({ vehicle, showPricesInUSD }) {
  return (
    <div className={carCardStyles.carCard}>
      <div className="carCard">
        <h2>
          {vehicle.marca} {vehicle.modelo}
        </h2>
        <img src={vehicle.imagen} alt={`${vehicle.marca} ${vehicle.modelo}`} />
        <p>Color: {vehicle.color}</p>
        <p>Año: {vehicle.año}</p>
        <p>Motor: {vehicle.tipo_de_motor}</p>
        <p>
          {showPricesInUSD
            ? `USD$${vehicle.precio_usd}`
            : `ARS$${vehicle.precio_ars}`}
        </p>
        <button type="submit">Agregar al carrito</button>
        <button>Detalle</button>
      </div>
    </div>
  );
}

export default CarCard;
