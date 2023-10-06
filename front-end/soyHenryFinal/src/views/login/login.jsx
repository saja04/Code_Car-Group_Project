import style from "./login.module.css";
import { Link } from "react-router-dom";
import Google from "../../components/google/google";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions"; 


function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.loginError);

  const handleLogin = (e) => {
    console.log(username, password)
    e.preventDefault();

    dispatch(loginUser(username, password));
  };
  return (
    <div className={style.container}>
      <form className={style.loginForm} onSubmit={handleLogin}>
        <div>
          <label className={style.loginContent}>
            Email:
            <input
              type="email"
              id="email"
              value={username}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <label className={style.loginContent}>
          Contraseña:
          <input
            type="password"
            id="contraseña"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
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
        {loginError && <p className={style.error}>Error al entrar.</p>}
        <Google />
      </form>
    </div>
  );
}

export default Login;
