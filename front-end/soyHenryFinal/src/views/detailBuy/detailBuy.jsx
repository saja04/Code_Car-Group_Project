import React, { useEffect, useState } from "react";
import style from "./detailBuy.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useLocation, NavLink } from "react-router-dom";

function DetailBuy() {
  const [userData, setUserData] = useState(null);
  const { state } = useLocation();

  const carDetails = state && state.carDetails;

  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  const getNoAuthenticated = async () => {
    try {
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

  const buy = async () => {
    if (!isAuthenticated) {
      alert("Debes estar logeado para comprar un coche, avivate");
      loginWithRedirect();
    } else {
      const medioDePago = document.getElementById("medioDePago").value;

      if (medioDePago === "efectivo") {
        try {
          const carName = `${carDetails.car_marca} ${carDetails.car_modelo}`;
          const carPrice = carDetails.car_precio_ars;

          console.log(
            "Información del automóvil:",
            carName,
            carPrice,
            medioDePago
          );

          const response = await axios.post(
            "https://codecar.onrender.com/createOrderCar",
            {
              userId: userData.user_id,
              carId: carDetails.car_id,
              medioDePago: medioDePago,
            }
          );

          if (response.data) {
            console.log("Orden creada con éxito");
            alert("AUTO COMPRADO!");
          } else {
            console.error("Error al crear la orden de compra.");
          }
        } catch (error) {
          console.error("Error al crear la orden de compra:", error);
        }
      } else if (medioDePago === "mercadopago") {
        try {
          const carName = `${carDetails.car_marca} ${carDetails.car_modelo}`;
          const carPrice = carDetails.car_precio_ars;

          console.log(
            "Información del automóvil:",
            carName,
            carPrice,
            medioDePago
          );

          const response = await axios.post(
            `https://codecar.onrender.com/create-order/?name=${carName}&price=1`
          );

          console.log(response.data);

          if (response.data) {
            window.location.href = response.data;
          } else {
            console.error("No se recibió un enlace de pago válido.");
          }
        } catch (error) {
          console.error("Error al crear la orden de MercadoPago:", error);
        }
      }
    }
  };

  return (
    <div className={style["detail-buy-container"]}>
      <div className={style.containerInfo}>
        <div className={style["user-details"]}>
          <h2 className={style.title}>Datos del Comprador</h2>
          {userData ? (
            <>
              <p>
                <b>Nombre:</b> {userData.user_name}
              </p>
              <p>
                <b>Email:</b> {userData.user_email}
              </p>
              <p>
                <b>Dirección:</b> {userData.user_address}
              </p>
              <p>
                <b>Telefono:</b> {userData.user_phone}
              </p>
              <NavLink to="/user" className={style.link}>
                Editar Informacion
              </NavLink>
            </>
          ) : (
            <p>Cargando información del usuario...</p>
          )}
        </div>

        <div className={style["car-details"]}>
          <h2 className={style.title}>Datos del Automóvil</h2>
          {carDetails && (
            <>
              <p>
                <b>Marca:</b> {carDetails.car_marca}
              </p>
              <p>
                <b>Modelo:</b> {carDetails.car_modelo}
              </p>
              <p>
                <b>Color:</b> {carDetails.car_color}
              </p>
              <p>
                <b>Condición:</b> {carDetails.car_condicion}{" "}
                {carDetails.car_kilometraje} KM
              </p>
              <div className={style.price}>
                <p>
                  <b>Precio: </b>
                </p>
                <h2>{carDetails.car_precio_ars} ARS</h2>
              </div>
            </>
          )}
        </div>
      </div>

      <div className={style.detallePago}>
        <div className={style["purchase-details"]}>
          <h2 className={style.title}>Detalles de la Compra</h2>
          {userData ? (
            <p>
              <b>Usuario:</b> {userData.user_email}
            </p>
          ) : null}

          <p>
            <b>Auto:</b> {carDetails.car_marca} {carDetails.car_modelo}
          </p>
          <p>
            <b>Condición:</b> {carDetails.car_condicion}
          </p>
          <div className={style.metodo}>
            <p>
              <b>Medio de Pago:</b>
            </p>
            <select id="medioDePago" defaultValue="efectivo">
              <option value="efectivo">Efectivo</option>
              <option value="mercadopago">MercadoPago</option>
            </select>
          </div>
          <div className={style.compra}>
            <h2>{carDetails.car_precio_ars} ARS</h2>
            <button className={style.buyNow} onClick={buy}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBuy;
