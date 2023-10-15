import style from "./dashAside.module.css";

function DashAside({
  handleRenderAutos,
  handleRenderUsers,
  handleRenderPost,
  handleRenderCompras,
}) {
  return (
    <div className={style.menu}>
      <div className={style.container}>
        <div className={style.content}>
          <h3 onClick={handleRenderAutos}>Todos los autos</h3>
          <h3 onClick={handleRenderPost}>Crear auto</h3>
          <h3 onClick={handleRenderUsers}>Todos los usuarios</h3>
          <h3 onClick={handleRenderCompras}>Todas las compras</h3>
        </div>
      </div>
    </div>
  );
}

export default DashAside;
