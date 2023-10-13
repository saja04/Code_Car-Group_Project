import React from "react";
import styles from "./dashboard.module.css";
import DashAside from "../../components/dashBoardComponents/dashAside/dashAside";
import BoardAutosAdmin from "../../components/dashBoardComponents/dashBoardAutos/boardAutosAdmin/boardAutosAdmin";
import BoardUsersAdmin from "../../components/dashBoardComponents/dashBoardUsers//BoardUsersAdmin/boardUsersAdmin";

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.content}>
        <DashAside />
      </div>
      <div className={styles.board}>
        <BoardAutosAdmin />
        <BoardUsersAdmin />
      </div>
    </div>
  );
}

export default Dashboard;
