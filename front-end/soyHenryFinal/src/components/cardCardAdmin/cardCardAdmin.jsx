import React from "react";
import carCardStyles from "./cardCardAdmin.module.css";

function CarCardAdmin({ vehicle, onDelete }) {
  
  const handleDeleteClick = () => {
    onDelete(vehicle.car_id); 
  };

  return (
    <div className={carCardStyles.conteiner}>
      <div className={carCardStyles.carCard}>
        <h2>
          {vehicle.marca} {vehicle.modelo}
        </h2>
        
        <p> {vehicle.car_marca} {vehicle.car_modelo}</p>
        <p>Id: {vehicle.car_id}</p>
        <div>
          
          
        <button onClick={handleDeleteClick}>Borrar</button>
          
        </div>
      </div>
    </div>
  );
}

export default CarCardAdmin;
