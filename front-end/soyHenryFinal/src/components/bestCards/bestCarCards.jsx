import React, { useState, useEffect } from "react";
import CarCard from "../card/carCard";
import { shuffleArray } from "../../../utils/utils";
import carCardStyles from "./bestCarCards.module.css";
import PriceToggle from "../priceToggle/priceToggle";

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
      <h2>Nuestros mejores Vehículos</h2>
      <div className={carCardStyles.bestVehicles}>
        {shuffledVehicles.slice(0, 4).map((vehicle) => (
          <CarCard
            key={vehicle.id}
            vehicle={vehicle}
            showPricesInUSD={showPricesInUSD}
          />
        ))}
      </div>
      <PriceToggle showPricesInUSD={showPricesInUSD} onToggle={togglePrices} />
    </div>
  );
}

export default BestCarCards;
