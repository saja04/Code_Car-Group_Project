import React, { useState } from "react";
import CarCard from "../card/carCard";
import carCardStyles from "./carCards.module.css";
import PriceToggle from "../../components/priceToggle/priceToggle";

function CarCards({ vehicles }) {
  const [showPricesInUSD, setShowPricesInUSD] = useState(true);

  const togglePrices = () => {
    setShowPricesInUSD(!showPricesInUSD);
  };

  return (
    <div className={carCardStyles.carCards}>
      <PriceToggle
        showPricesInUSD={showPricesInUSD}
        onToggle={togglePrices}
      />
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
