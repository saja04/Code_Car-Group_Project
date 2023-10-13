import style from "./dashAside.module.css";

function DashAside() {
  return (
    <div className={style.menu}>
      <div className={style.container}>
        <div className={style.content}>
          <h3>Todos los autos</h3>
          <h3>Crear auto</h3>
          <h3>Todos los usuarios</h3>
          <h3>Todos los pedidos</h3>
          <h3>Todas las compras</h3>
        </div>
      </div>
    </div>
  );
}

export default DashAside;
