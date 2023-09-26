import NavBar from "../navBar/navBar";
import style from "./footer.module.css";

function Footer() {
  return (
    <div className={style.container}>
      <div>
        <p>
          Nos especializamos en la venta de autos usados y 0km. Con una amplia
          gama de opciones y de buena calidad, en carCode, estamos aquí para
          hacer que tu experiencia de compra de automóviles sea excepcional.
        </p>
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <h3>Redes</h3>
        <div>
          <p>ins</p>
          <p>twi</p>
          <p>you</p>
        </div>
      </div>
      <div>
        <h3>Contacto</h3>
        <p>info@carCode.com.ar</p>
        <p>+54 9 11-22435213</p>
      </div>
    </div>
  );
}

export default Footer;
