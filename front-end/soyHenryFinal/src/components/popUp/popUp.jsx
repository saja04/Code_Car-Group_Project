import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./popUp.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, useNavigate } from "react-router-dom";

function PopUp({ onClose }) {
  const { logout, getAccessTokenSilently, user } = useAuth0();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  const getNoAuthenticated = async () => {
    try {
      const response = await axios.post(
        "https://codecar.onrender.com/userInfo",
        {
          email: user.email,
          photo: user.picture,
        }
      );
      console.log("holaa", response.data);

      return setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNoAuthenticated();
  }, []);

  const handleGoToUserProfile = () => {
    const profileURL = `/user/`;

    navigate(profileURL);
  };
  if (userData) {
    return (
      <div className={style.popup}>
        <div className={style.popupContent}>
          <h3 className={style.name}>{userData.user_name} </h3>
          <NavLink
            to="/user"
            className={style.links}
            onClick={handleGoToUserProfile}
          >
            Mi perfil
          </NavLink>
          <NavLink to="/userOrder" className={style.links}>Mis Pedidos</NavLink>
          <p className={style.links} onClick={logout}>
            Cerrar sesión
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.popup}>
        <div className={style.popupContent}>
          <h3 className={style.name}>Cargando...</h3>
          <NavLink
            to="/user"
            className={style.links}
            onClick={handleGoToUserProfile}
          >
            Mi perfil
          </NavLink>
          <NavLink   to="/userOrder" className={style.links}>Mis Pedidos</NavLink>
          <p className={style.links} onClick={logout}>
            Cerrar sesión
          </p>
        </div>
      </div>
    );
  }
}

export default PopUp;