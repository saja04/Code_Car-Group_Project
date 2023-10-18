import { Link } from "react-router-dom";
import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.cont}>
        <div className={style.contContent}>
          <h3>CONTACTO</h3>
          <p>info@carCode.com.ar</p>
          <p>+54 9 11-22435213</p>
        </div>
      </div>
      <div className={style.modelos}>
        <div className={style.modelosContent}>
          <h3>MODELOS</h3>
          <p>Chevrolet</p>
          <p>Ford</p>
          <p>Kia</p>
          <p>Renault</p>
          <p>Toyota</p>
          <p>Volkswagen</p>
        </div>
      </div>
      <div className={style.navFooter}>
        <div className={style.navLinks}>
          <h3>SITIO</h3>
          <Link className={style.links} to="/">
            Inicio
          </Link>
          <Link className={style.links} to="/tienda">
            Tienda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
