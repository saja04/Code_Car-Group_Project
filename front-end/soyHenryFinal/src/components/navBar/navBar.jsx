import { Link } from "react-router-dom";
import style from "./navBar.module.css";

function NavBar() {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <Link to="/">Tienda</Link>
      <Link to="/">Contacto</Link>
      <Link to="/">Nosotros</Link>
    </div>
  );
}

export default NavBar;
