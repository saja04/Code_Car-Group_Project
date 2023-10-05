import React from "react";
import style from "./google.module.css"; // Asegúrate de importar el archivo CSS
import google from "../../img/google.png";

function Google() {
  return ( // Agrega el retorno de JSX aquí
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
