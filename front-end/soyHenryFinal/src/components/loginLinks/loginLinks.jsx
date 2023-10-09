import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./loginLinks.module.css";

function LoginLinks() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const gettingAuth = async() => {
    const isAuthenticatedFlow =  isAuthenticated;
    if(isAuthenticatedFlow){
      return true
    } else return false
  }
  useEffect(() => {
    gettingAuth()
  }, []);
  

  return (
    <div className="container">
      <ul>
        {!isAuthenticated ? (
          <div>
            <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
            <button
              onClick={() => {
                loginWithRedirect({ screen_hint: "signup" });
              }}
            >Registrarse</button>
          </div>
        ) : (
          <div>
            <NavLink to="/user">
              {" "}
              <img src={user.picture} alt={user.name} />
            </NavLink>
            <button onClick={logout}>Log out</button>
          </div>
        )}
      </ul>
    </div>
  );
}

export default LoginLinks;
