import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Avatar } from "antd";
import styles from "../user/user.module.css";
import { useForm, Controller } from "react-hook-form";

const { Meta } = Card;

function User() {
  const { id } = useParams();
  const { control, handleSubmit, setValue } = useForm();
  const { user } = useAuth0();

  const [userData, setUserData] = useState(null);

  const getNoAuthenticated = async () => {
    try {
      console.log(user);
      const response = await axios.post(
        "https://codecar.onrender.com/userInfo/",
        {
          email: user.email,
          photo: user.picture,
        }
      );
      return setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNoAuthenticated();
  }, [user]);

  const [isEditing, setIsEditing] = useState(false);
  const [newUserData, setNewUserData] = useState({});


  const startEditing = () => {
    setIsEditing(true);
    setNewUserData({ ...newUserData, email: user.email });
  };

  const saveChanges = async () => {
    try {
      console.log(newUserData);
      const url = `https://codecar.onrender.com/updateUser/`;

      await axios.post(url, newUserData);

      setIsEditing(false);
      getNoAuthenticated();
      setNewUserData({});
    } catch (error) {
      console.error("Error al actualizar la información del usuario", error);
    }
  };


  return (
    <div className={styles.userContainer}>
      {userData ? (
        <div>
          <Card className={styles.userCard}>
            <Meta
              avatar={
                <Avatar
                  className={styles.imageCard}
                  src={userData.user_image}
                />
              }
              title="Perfil de Usuario"
              description={
                <div>
                  {isEditing ? (
                    <>

                      <input
                        type="text"
                        placeholder="Nombre"
                        required
                        value={newUserData.name !== undefined ? newUserData.name : userData.user_name}
                        onChange={(e) =>
                          setNewUserData({
                            ...newUserData,
                            name: e.target.value,
                          })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Dirección"
                        required
                        pattern="^(?=.*[A-Za-z])(?=.*\d{2,}).+$"
                        title="Ingrese una dirección válida."
                        value={newUserData.address !== undefined ? newUserData.address : userData.user_address}
                        onChange={(e) =>
                          setNewUserData({
                            ...newUserData,
                            address: e.target.value,
                          })
                        }
                      />

                      <input
                        type="tel"
                        placeholder="Teléfono"
                        required
                        pattern="[0-9]*"
                        value={newUserData.phone !== undefined ? newUserData.phone : userData.user_phone}
                        onChange={(e) =>
                          setNewUserData({
                            ...newUserData,
                            phone: e.target.value,
                          })
                        }
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
