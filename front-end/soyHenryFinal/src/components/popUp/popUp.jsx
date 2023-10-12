import React from 'react';
import style from './popUp.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function PopUp({ onClose, user }) {
  const { user: auth0User, logout } = useAuth0(); 
  const navigate = useNavigate();

  const handleGoToUserProfile = () => {
    const profileURL = `/user/`;

    navigate(profileURL);
  };

  return (
    <div className={style.popup}>
      <div className={style.popupContent}>
        <div className={style.profileInfo}>
          <p>{user.email}</p>
          <button onClick={handleGoToUserProfile}>Mi perfil</button>
        </div>
        <div className={style.userActions}>
          <h2>Mis Pedidos</h2>
          <NavLink className={style.links} onClick={logout}>
            Cerrar sesión
          </NavLink>
         
        </div>
      </div>
    </div>
  );
}

export default PopUp;



