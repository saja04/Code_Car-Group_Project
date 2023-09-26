import { Link } from "react-router-dom";
import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.desc}>
        <p>
          Nos especializamos en la venta de autos usados y 0km. Con una amplia
          gama de opciones y de buena calidad, en carCode, estamos aquí para
          hacer que tu experiencia de compra de automóviles sea excepcional.
        </p>
      </div>
      <div className={style.navFooter}>
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
      <div className={style.redes}>
        <h3>Redes</h3>
        <div className={style.socials}>
          <p>ins</p>
          <p>twi</p>
          <p>you</p>
        </div>
      </div>
      <div className={style.cont}>
        <h3>Contacto</h3>
        <p>info@carCode.com.ar</p>
        <p>+54 9 11-22435213</p>
      </div>
    </div>
  );
}

export default Footer;
