import carCardStyles from "./dashCardsCar.module.css";

function DashCardsCar({ vehicle }) {
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
            ? `USD$${vehicle.car_precio_usd}`
            : `ARS$${vehicle.car_precio_ars}`}
        </h3>
        <h3 className={carCardStyles.title}>{vehicle.stock}</h3>
      </div>
    </div>
  );
}

export default DashCardsCar;
