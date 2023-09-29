import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarCard from "../card/carCard";
import { shuffleArray } from "../../../utils/utils";
import suggestedCardsStyles from "./suggestedCards.module.css";

function SuggestedCards({ vehicles, showPricesInUSD }) {
  const [shuffledVehicles, setShuffledVehicles] = useState([]);

  useEffect(() => {
    if (Array.isArray(vehicles) && vehicles.length > 0) {
      setShuffledVehicles(shuffleArray(vehicles));
    }
  }, [vehicles]);

  const vehiclesToShow = shuffledVehicles.slice(0, 8);

  return (
    <div className={suggestedCardsStyles.suggestedCards}>
      <h2>Sugerencias</h2>
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={false}
        centerMode={true}
        centerSlidePercentage={33.33}
        useKeyboardArrows={true}
      >
        {vehiclesToShow.map((vehicle) => (
          <div
            key={vehicle.id}
            className={suggestedCardsStyles.suggestedVehicleCard}
          >
            <CarCard
              key={vehicle.id}
              vehicle={vehicle}
              showPricesInUSD={showPricesInUSD}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SuggestedCards;

