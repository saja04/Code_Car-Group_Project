import React from "react";
import priceToggleStyles from "./priceToggle.module.css";

function PriceToggle({ showPricesInUSD, onToggle }) {
  return (
    <button className={priceToggleStyles.priceToggle} onClick={onToggle}>
      Mostrar en {showPricesInUSD ? "Pesos" : "Dólares"}
    </button>
  );
}

export default PriceToggle;
