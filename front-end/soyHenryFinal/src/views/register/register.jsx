import style from "./register.module.css";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Google from "../../components/google/google";

function Register() {
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("contraseña").value;

    dispatch(registerUser(name, email, password));
  };

  return (
    <div className={style.container}>
      <form className={style.loginForm} onSubmit={handleRegister}>
      <div>
          <label className={style.loginContent}>
            Nombre:
            <input type="text" id="name" />
          </label>
        </div>
        <div>
          <label className={style.loginContent}>
            Email:
            <input type="email" id="email" />
          </label>
        </div>
        <label className={style.loginContent}>
          Contraseña:
          <input type="text" id="contraseña" />
        </label>
        <label className={style.loginContent}>
          Repetir contraseña:
          <input type="text" id="contraseña" />
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
        <Google />
      </form>
    </div>
  );
}

export default Register;
