import React, { useState, useEffect } from "react";
import CarCard from "../card/carCard";
import { shuffleArray } from "../../../utils/utils";
import carCardStyles from "./bestCarCards.module.css";

function BestCarCards({ vehicles }) {
  const [shuffledVehicles, setShuffledVehicles] = useState([]);

  useEffect(() => {
    if (Array.isArray(vehicles) && vehicles.length > 0) {
      setShuffledVehicles(shuffleArray(vehicles));
    }
  }, [vehicles]);

  return (
    <div className={carCardStyles.carCards}>
      <div className={carCardStyles.titleBk}>
        <h2 className={carCardStyles.title}>Nuestros mejores Vehículos</h2>
      </div>
      <div className={carCardStyles.bestVehicles}>
        {shuffledVehicles.slice(0, 4).map((vehicle) => (
          <CarCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

export default BestCarCards;
