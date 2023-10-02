import React from "react";
import carCardStyles from "../cardsAdmin/cardsAdmin.module.css";

function CarCardAdmin({ vehicle }) {
  
  return (
    <div className={carCardStyles.conteiner}>
      <div className={carCardStyles.carCard}>
        <h2>
          {vehicle.marca} {vehicle.modelo}
        </h2>
        <img src={vehicle.car_imagen} alt={`${vehicle.car_marca} ${vehicle.car_modelo}`} />
        <p> {vehicle.car_marca} {vehicle.car_modelo}</p>
        <p>Id: {vehicle.car_id}</p>
        <div>
          
          
            <button>Borrar</button>
          
        </div>
      </div>
    </div>
  );
}

export default CarCardAdmin;
