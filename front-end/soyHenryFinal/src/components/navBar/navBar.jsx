import { Link } from "react-router-dom";
import style from "./navBar.module.css";

function NavBar() {
  return (
    <div className={style.container}>
      <Link className={style.links} to="/">
        Inicio
      </Link>
      <Link className={style.links} to="/tienda">
        Tienda
      </Link>
      <Link className={style.links} to="/contacto">
        Contacto
      </Link>
      <Link className={style.links} to="/nosotros">
        Nosotros
      </Link>
    </div>
  );
}

export default NavBar;
