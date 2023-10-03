import style from "./login.module.css";
import { Link } from "react-router-dom";

function Login() {
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
        <div className={style.buttons}>
          <button className={style.buttonLogin} type="submit">
            Log In
          </button>
          <p>|</p>
          <Link className={style.register} to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
