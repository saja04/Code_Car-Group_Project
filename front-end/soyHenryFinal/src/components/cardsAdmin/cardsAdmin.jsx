import React from "react";
import carCardStyles from "../cards/carCards.module.css"
import CarCardAdmin from "../cardCardAdmin/cardCardAdmin"


function CardsAdmin({ vehicles }) {

  return (
    <div className={carCardStyles.carCards}>
    
      <div className={carCardStyles.allVehicles}>
        {vehicles.map((vehicle) => (
          <CarCardAdmin
            key={vehicle.id}
            vehicle={vehicle}

          />
        ))}
      </div>
    </div>
  );
}

export default CardsAdmin;

