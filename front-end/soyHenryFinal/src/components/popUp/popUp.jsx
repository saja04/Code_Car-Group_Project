import React from 'react';
import style from './popUp.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function PopUp({ onClose, user }) {
    const { logout } = useAuth0(); // Obtén logout de useAuth0
  
    const navigate = useNavigate();
  
    const handleGoToUserProfile = () => {
      navigate('/user');
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
  


