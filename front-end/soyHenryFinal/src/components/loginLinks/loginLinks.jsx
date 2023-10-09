import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./loginLinks.module.css";

function LoginLinks() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const gettingAuth = async () => {
    const isAuthenticatedFlow = isAuthenticated;
    if (isAuthenticatedFlow) {
      return true;
    } else return false;
  };
  useEffect(() => {
    gettingAuth();
  }, []);

  return (
    <div>
      {!isAuthenticated ? (
        <div className={style.container}>
          <NavLink className={style.links} onClick={() => loginWithRedirect()}>
            Iniciar sesión
          </NavLink>
          <p>|</p>
          <NavLink
            className={style.links}
            onClick={() => {
              loginWithRedirect({ screen_hint: "signup" });
            }}
          >
            Registrarse
          </NavLink>
        </div>
      ) : (
        <div className={style.login}>
          <NavLink to="/user">
            {" "}
            <img className={style.user} src={user.picture} alt={user.name} />
          </NavLink>
          <NavLink className={style.links} onClick={logout}>
            Cerrar sesión
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default LoginLinks;
