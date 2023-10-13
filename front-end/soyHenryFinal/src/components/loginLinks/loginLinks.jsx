import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./loginLinks.module.css";
import PopUp from "../popUp/popUp";

function LoginLinks() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const gettingAuth = async () => {
    const isAuthenticatedFlow = isAuthenticated;
    if (isAuthenticatedFlow) {
      return true;
    } else return false;
  };

  useEffect(() => {
    gettingAuth();
  }, []);

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

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
              loginWithRedirect({
                authorizationParams: { screen_hint: "signup" },
              });
            }}
          >
            Registrarse
          </NavLink>
        </div>
      ) : (
        <div className={style.login}>
          <span onClick={togglePopUp}>
            {" "}
            <img className={style.user} src={user.picture} alt={user.name} />
          </span>
        </div>
      )}
      {isPopUpOpen && <PopUp user={user} onClose={closePopUp} />}
    </div>
  );
}

export default LoginLinks;
