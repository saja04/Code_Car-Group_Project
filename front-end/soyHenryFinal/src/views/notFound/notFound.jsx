import React from "react";
import { Link } from "react-router-dom";
import styles from "../notFound/notFound.module.css";

function NotFound() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorHeading}>Error 404 - Página no encontrada</h1>
      <p className={styles.errorMessage}>Lo sentimos, la página que buscas no existe.</p>
      <Link className={styles.errorLink} to="/">Volver a la página de inicio</Link>
    </div>
  );
}

export default NotFound;
