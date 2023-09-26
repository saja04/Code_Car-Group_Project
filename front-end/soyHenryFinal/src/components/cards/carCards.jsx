import React from 'react';
import CarCard from '../card/carCard'; 
import { shuffleArray } from '../../../utils/utils'
import carCardStyles from './carCards.module.css'

function CarCards({ vehicles }) {

  const shuffledVehicles = shuffleArray(vehicles);

 
  const selectedVehicles = shuffledVehicles.slice(0, 4);

 
  const remainingVehicles = shuffledVehicles.slice(4);


  return (
    <div className={carCardStyles.carCards}>
      <h2>Los mejores Vehículos:</h2>
      <div className={carCardStyles.bestVehicles}>
        {selectedVehicles.map((vehicle) => (
          <CarCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
     
      <h2>Lista Completa de Vehículos:</h2>
      <div className={carCardStyles.allVehicles}> 
      {remainingVehicles.map((vehicle) => (
        <CarCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
    </div>
  );
}

export default CarCards;
