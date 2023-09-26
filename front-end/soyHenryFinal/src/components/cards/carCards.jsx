import React from "react";
import CarCard from "../card/carCard";
import { shuffleArray } from "../../../utils/utils";
import carCardStyles from "./carCards.module.css";

function CarCards({ vehicles }) {
  return (
    <div className={carCardStyles.carCards}>
      <h2>Lista Completa de Vehículos:</h2>
      <div className={carCardStyles.allVehicles}>
        {vehicles.map((vehicle) => (
          <CarCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

export default CarCards;
