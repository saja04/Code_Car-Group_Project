import React, { useState } from "react";
import CarCard from "../card/carCard";
import carCardStyles from "./carCards.module.css";
import PriceToggle from "../../components/priceToggle/priceToggle";

function CarCards({ vehicles }) {

  if(vehicles.length === 0){
    return(
      <div>
        <p className={carCardStyles.allVehicles}>Ningun auto encontrado.</p>
      </div>
    )
  }

  return (
    <div className={carCardStyles.carCards}>
      <div className={carCardStyles.allVehicles}>
        {vehicles.map((vehicle) => (
          <CarCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

export default CarCards;
