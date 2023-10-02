import React, { isValidElement } from "react";
import priceToggleStyles from "./priceToggle.module.css";

function PriceToggle({ showPricesInUSD, onToggle }) {
  return (
    <div className={priceToggleStyles.container}>
      <button className={priceToggleStyles.priceToggle} onClick={onToggle}>
        {showPricesInUSD ? "ARS" : "USD"}
      </button>
    </div>
  );
}

export default PriceToggle;
