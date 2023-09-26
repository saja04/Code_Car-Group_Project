import React, { useState } from "react";
import CarCard from "../card/carCard";
import carCardStyles from "./carCards.module.css";

function CarCards({ vehicles }) {
  const [showPricesInUSD, setShowPricesInUSD] = useState(true);

  return (
    <div className={carCardStyles.carCards}>
      <h2>Lista Completa de Vehículos:</h2>
      <button onClick={() => setShowPricesInUSD(!showPricesInUSD)}>
        Mostrar en {showPricesInUSD ? "Pesos" : "Dólares"}
      </button>
      <div className={carCardStyles.allVehicles}>
        {vehicles.map((vehicle) => (
          <CarCard
            key={vehicle.id}
            vehicle={vehicle}
            showPricesInUSD={showPricesInUSD}
          />
        ))}
      </div>
    </div>
  );
}

export default CarCards;
