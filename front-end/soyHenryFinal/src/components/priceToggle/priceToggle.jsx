import React, { isValidElement, useEffect } from "react";
import priceToggleStyles from "./priceToggle.module.css";
import LoginLinks from "../loginLinks/loginLinks";

function PriceToggle() {

  const divisa = localStorage.getItem('divisa');


  const togglePrice = () => {
    if(!divisa){
      localStorage.setItem('divisa', "car_precio_usd")
    }
    if(divisa === 'car_precio_usd'){
      localStorage.setItem('divisa', "car_precio_ars")
      window.location.reload()
    } else{
      localStorage.setItem('divisa', "car_precio_usd")
      window.location.reload()
    }
  }
  return (
    <div className={priceToggleStyles.container}>
      <button className={priceToggleStyles.priceToggle} onClick={togglePrice}>
        {divisa === 'car_precio_ars' ? "USD" : "ARS"}
      </button>
    </div>
  );
}

export default PriceToggle;
