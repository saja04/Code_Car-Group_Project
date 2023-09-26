import React from 'react';
import CarCards from '../../components/cards/carCards'; 
import vehiclesData from "../../../utils/utils.json"

function Home() {
  return (
    <div className="home">
      <h1>Soy el Home</h1>
      <CarCards vehicles={vehiclesData.vehicles} />
    </div>
  );
}

export default Home;
