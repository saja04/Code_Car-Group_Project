import style from "./register.module.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className={style.container}>
      <form className={style.loginForm}>
        <div>
          <label className={style.loginContent}>
            Email:
            <input type="email" id="email" />
          </label>
        </div>
        <label className={style.loginContent}>
          Contraseña:
          <input type="password" id="contraseña" />
        </label>
        <label className={style.loginContent}>
          Repetir contraseña:
          <input type="password" id="reContraseña" />
        </label>
        <div className={style.buttons}>
          <button className={style.buttonLogin} type="submit">
            Register
          </button>
          <p>|</p>
          <Link className={style.register} to="/login">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
