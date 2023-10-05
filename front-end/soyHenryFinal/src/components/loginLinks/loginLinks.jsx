import React from "react";
import { Link } from "react-router-dom";
import style from "./loginLinks.module.css";

function LoginLinks() {
  return (
    <div className={style.container}>
      <Link to="/login" className={style.links}>
        Ingresar
      </Link>{" "}
      <p>|</p>
      <Link to="/register" className={style.links}>
        Registrar
      </Link>{" "}
    </div>
  );
}

export default LoginLinks;
