import React, { useState } from "react";
import axios from "axios";
import carCardStyles from "./dashCardsCar.module.css";

function DashCardsCar({ vehicle }) {
  const [isDeleted, setIsDeleted] = useState(vehicle.deleted);

  const handleToggleDeleted = async () => {
    setIsDeleted(!isDeleted);
    await axios.post("https://codecar.onrender.com/carsDelete", {
      id: vehicle.car_id,
      deleted: !isDeleted,
    });
  };

  return (
    <div className={carCardStyles.container}>
      <div className={carCardStyles.info}>
        <h3 className={carCardStyles.title}>{vehicle.car_marca}</h3>
        <h3 className={carCardStyles.title}>{vehicle.car_modelo}</h3>
        <div className={carCardStyles.kmContent}>
          <h3 className={carCardStyles.km}>{vehicle.car_kilometraje}</h3>
          <h3> KM</h3>
        </div>
        <h3 className={carCardStyles.title}>{vehicle.car_tipo_de_motor}</h3>
        <h3 className={carCardStyles.title}>
          {vehicle.car_precio_usd
            ? `USD$${vehicle.car_precio_ars}`
            : `ARS$${vehicle.car_precio_ars}`}
        </h3>
        <div className={carCardStyles.button}>
          <h3
            className={`${carCardStyles.onOffButton} ${
              isDeleted ? carCardStyles.off : ""
            }`}
            onClick={handleToggleDeleted}
          >
            {isDeleted ? "Off" : "On"}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default DashCardsCar;
