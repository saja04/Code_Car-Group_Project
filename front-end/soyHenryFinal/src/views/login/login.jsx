import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../components/google/google";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions";

async function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.loginError);

  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(username, password, navigate));
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
          <div> 
          <input
            type={showPassword ? "text" : "password"}
            id="contraseña"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          /> <label
          className={style.togglePasswordButton}
          onClick={togglePasswordVisibility}
        >
          👁️
        </label>
        </div>
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
       
        <Google />
      </form>
    </div>
  );
}

export default Login;
