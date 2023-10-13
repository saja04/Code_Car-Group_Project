import React from "react";
import styles from "./dashboard.module.css";
import DashAside from "../../components/dashBoardComponents/dashAside/dashAside";
import BoardAutosAdmin from "../../components/dashBoardComponents/boardAutosAdmin/boardAutosAdmin";

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.content}>
        <DashAside />
      </div>
      <div className={styles.board}>
        <BoardAutosAdmin />
      </div>
      {/*       <h2 className={styles.dashboardTitle}>Panel de Control</h2>
      <div className={styles.buttonContainer}>
        <Link to="/post" className={styles.link}>
          <button className={`${styles.customButton} ${styles.primary}`}>Crear Nuevo Automóvil</button> 
        </Link>
        <Link to="/delete" className={styles.link}>
          <button className={`${styles.customButton} ${styles.secondary}`}>Eliminar Automóvil</button> 
        </Link>
      </div> */}
    </div>
  );
}

export default Dashboard;
