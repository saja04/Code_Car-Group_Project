import React from "react";
import { Link } from "react-router-dom";
import styles from "./dashboard.module.css"; 

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.dashboardTitle}>Mi Panel de Control</h2>
      <div className={styles.buttonContainer}>
        <Link to="/post" className={styles.link}>
          <button className={`${styles.customButton} ${styles.primary}`}>Crear Nuevo Automóvil</button> 
        </Link>
        <Link to="/delete" className={styles.link}>
          <button className={`${styles.customButton} ${styles.secondary}`}>Eliminar Automóvil</button> 
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
