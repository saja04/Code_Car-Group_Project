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
    user,
  } = useAuth0();

  const getNoAuthenticated = async () => {
    try {
      const response = await axios.post("https://codecar.onrender.com/userInfo/", {
        email: user.email,
        photo: user.picture,
        user_id: user.sub
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

  const [isEditing, setIsEditing] = useState(false);
  const [newUserData, setNewUserData] = useState({});
  

const startEditing = () => {
  setIsEditing(true);
};

const saveChanges = async () => {
  try {

    const url = `https://codecar.onrender.com/updateUser/`;

    await axios.get(url, newUserData);

    setIsEditing(false);
    getNoAuthenticated();
  } catch (error) {
    console.error('Error al actualizar la información del usuario', error);
  }
};



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
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={newUserData.user_name || userData.user_name}
                      onChange={(e) => setNewUserData({ ...newUserData, user_name: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Dirección"
                      value={newUserData.user_address || userData.user_address}
                      onChange={(e) => setNewUserData({ ...newUserData, user_address: e.target.value })}
                    />
                    <input
                      type="number"
                      placeholder="Teléfono"
                      value={newUserData.user_phone || userData.user_phone}
                      onChange={(e) => setNewUserData({ ...newUserData, user_phone: e.target.value })}
                    />
                  </>
                ) : (
                  <>
                    <p>Nombre: {userData.user_name}</p>
                    <p>Dirección: {userData.user_address}</p>
                    <p>Telefono: {userData.user_phone}</p>
                  </>
                )}
              </div>
            }
          />
        </Card>
        {isEditing ? (
          <button onClick={saveChanges}>Guardar Cambios</button>
        ) : (
          <button onClick={startEditing}>Editar Información</button>
        )}
      </div>
    ) : (
      <h2 className={styles.cargando}>Cargando...</h2>
    )}
  </div>
);
}

export default User;
