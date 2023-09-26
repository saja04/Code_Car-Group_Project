import React, { useState, useEffect } from "react";
import CarCard from "../card/carCard";
import { shuffleArray } from "../../../utils/utils";
import carCardStyles from "./bestCarCards.module.css";

function BestCarCards({ vehicles }) {
  const [showPricesInUSD, setShowPricesInUSD] = useState(true);
  const [shuffledVehicles, setShuffledVehicles] = useState([]);

  useEffect(() => {

    if (shuffledVehicles.length === 0) {
      setShuffledVehicles(shuffleArray(vehicles));
    }
  }, [shuffledVehicles, vehicles]);

  const togglePrices = () => {
    setShowPricesInUSD(!showPricesInUSD);
  };

  return (
    <div className={carCardStyles.carCards}>
      <h2>Los mejores Vehículos:</h2>
      <button onClick={togglePrices}>
        Mostrar en {showPricesInUSD ? "Pesos" : "Dólares"}
      </button>
      <div className={carCardStyles.bestVehicles}>
        {shuffledVehicles.slice(0, 4).map((vehicle) => (
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

export default BestCarCards;

