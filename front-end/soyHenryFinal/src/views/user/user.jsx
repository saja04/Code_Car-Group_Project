import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

function User() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

    const {
      loginWithRedirect,
      logout,
      user,
      isAuthenticated,
      getAccessTokenSilently,
    } = useAuth0();
  
    const getNoAuthenticated = async () => {
        try {  const token = await getAccessTokenSilently();
            const response = await axios.get("https://codecar.onrender.com/userInfo",{
              headers: {
                authorization: `Bearer ${token}`,
              }});
              console.log(response.data);
            return setUserData(response.data);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNoAuthenticated();
      }, []);
    

  return (
    <div>
      {userData ? (
        <div>
          <h1>Perfil de Usuario</h1>
          <p>Nombre: {userData.user_name}</p>
          <p>Correo Electrónico: {userData.user_email}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default User;
