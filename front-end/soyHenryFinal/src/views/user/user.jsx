import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Avatar } from 'antd';
import styles from "../user/user.module.css";

const { Meta } = Card;

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
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("https://codecar.onrender.com/userInfo", {
        headers: {
          authorization: `Bearer ${token}`,
        }
      });
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
    <div className={styles.userContainer}> 
      {userData ? (
        <div>
          <Card className={styles.userCard}>
            <Meta
              avatar={<Avatar className={styles.imageCard} src={userData.user_image} />}
              title="Perfil de Usuario"
              description={
                <div>
                  <p>Nombre: {userData.user_name}</p>
                  <p>Correo Electrónico: {userData.user_email}</p>
                  <p>Dirección: {userData.user_address}</p>
                </div>
              }
            />
          </Card>
        </div>
      ) : (
        <h2 className={styles.cargando}>Cargando...</h2>
      )}
    </div>
  );
}

export default User;
