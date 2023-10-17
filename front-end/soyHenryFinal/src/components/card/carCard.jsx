import React from "react";
import carCardStyles from "./carCard.module.css";
import { Link } from "react-router-dom";

function CarCard({ vehicle }) {
  return (
    <div className={carCardStyles.conteiner}>
      <Link to={`/detail/${vehicle.car_id}`} className={carCardStyles.links}>
        <div className={carCardStyles.carCard}>
          <img
            className={carCardStyles.cardImg}
            src={vehicle.car_imagen}
            alt={`${vehicle.car_marca} ${vehicle.car_modelo}`}
          />
          <div className={carCardStyles.info}>
            <h2 className={carCardStyles.title}>
              {vehicle.car_marca} {vehicle.car_modelo}
            </h2>
            <div>
              <p>
                | {vehicle.car_kilometraje} km | {vehicle.car_tipo_de_motor}
              </p>
            </div>
            <div className={carCardStyles.contPrice}>
              <p className={carCardStyles.price}>Precio </p>
              <p className={carCardStyles.arsUsd}>
                {vehicle.car_precio_usd
                  ? `USD$${vehicle.car_precio_usd}`
                  : `ARS$${vehicle.car_precio_ars}`}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CarCard;
