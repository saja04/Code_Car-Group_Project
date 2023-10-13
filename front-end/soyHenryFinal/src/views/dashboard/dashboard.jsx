import React, { useState } from "react";
import styles from "./dashboard.module.css";
import DashAside from "../../components/dashBoardComponents/dashAside/dashAside";
import BoardAutosAdmin from "../../components/dashBoardComponents/dashBoardAutos/boardAutosAdmin/boardAutosAdmin";
import BoardUsersAdmin from "../../components/dashBoardComponents/dashBoardUsers//BoardUsersAdmin/boardUsersAdmin";
import BoardComprasAdmin from "../../components/dashBoardComponents/dashBoardCompras/boardComprasAdmin/boardComprasAdmin";
import PostNewCar from "../../components/dashBoardComponents/dashBoardPost/postNewCar";

function Dashboard() {
  const [renderAutos, setRenderAutos] = useState(true);
  const [renderPost, setRenderPost] = useState(false);
  const [renderUsers, setRenderUsers] = useState(false);
  const [renderCompras, setRenderCompras] = useState(false);

  const handleRenderAutos = () => {
    setRenderAutos(true);
    setRenderPost(false);
    setRenderUsers(false);
    setRenderCompras(false);
    console.log(renderPost);
  };

  const handleRenderPost = () => {
    setRenderAutos(false);
    setRenderPost(true);
    setRenderUsers(false);
    setRenderCompras(false);
    console.log(renderPost);
  };

  const handleRenderUsers = () => {
    setRenderAutos(false);
    setRenderPost(false);
    setRenderUsers(true);
    setRenderCompras(false);
  };

  const handleRenderCompras = () => {
    setRenderAutos(false);
    setRenderPost(false);
    setRenderUsers(false);
    setRenderCompras(true);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.content}>
        <DashAside
          handleRenderAutos={handleRenderAutos}
          handleRenderPost={handleRenderPost}
          handleRenderUsers={handleRenderUsers}
          handleRenderCompras={handleRenderCompras}
        />
      </div>
      <div className={styles.board}>
        {renderAutos ? <BoardAutosAdmin /> : null}
        {renderPost ? <PostNewCar /> : null}
        {renderUsers ? <BoardUsersAdmin /> : null}
        {renderCompras ? <BoardComprasAdmin /> : null}
      </div>
    </div>
  );
}

export default Dashboard;
