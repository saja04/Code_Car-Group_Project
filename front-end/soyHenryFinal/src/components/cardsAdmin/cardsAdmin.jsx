import React from "react";
import carCardStyles from "./cardsAdmin.module.css"
import CarCardAdmin from "../cardCardAdmin/cardCardAdmin"

function CardsAdmin({ vehicles, onDelete }) {

  return (
    <div className={carCardStyles.carCards}>
    
      <div className={carCardStyles.allVehicles}>
        {vehicles.map((vehicle) => (
          <CarCardAdmin
            key={vehicle.car_id}
            vehicle={vehicle}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
}

export default CardsAdmin;

