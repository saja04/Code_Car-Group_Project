import React from "react";
import style from "./google.module.css"; 
import google from "../../img/google.png";

function Google() {
  return ( 
    <button className={style.googleButton} type="button">
      Continuar con Google
      <img
        src={google}
        alt="Google Logo"
        className={style.googleLogo}
      />
    </button>
  );
}

export default Google;
