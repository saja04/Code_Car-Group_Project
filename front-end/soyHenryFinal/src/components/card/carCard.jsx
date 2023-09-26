import React from "react";
import carCardStyles from "./carCard.module.css";

function carCard({ vehicle, showButton }) {
  return (
    <div className={carCardStyles.carCard}>
      <div className="carCard">
        <h2>
          {vehicle.marca} {vehicle.modelo}
        </h2>
        <img src={vehicle.imagen} />
        <p>Color: {vehicle.color}</p>
        <p>Año: {vehicle.año}</p>
        <p>Motor: {vehicle.motor}</p>
        <p>Precio: ${vehicle.precio}</p>
        <button type="submit">Agregar al carrito</button>
        <button>Detalle</button>
      </div>
    </div>
  );
}

export default carCard;
