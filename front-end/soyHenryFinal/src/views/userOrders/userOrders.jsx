import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "antd";
import styles from "../userOrders/userOrders.module.css";
import formatFecha from "../../../utils/formatFecha";

function UserOrder() {
  const [orders, setOrders] = useState([]);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user && user.email) {
      axios
        .post("https://codecar.onrender.com/userOrder", {
          email: user.email,
        })
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los pedidos:", error);
        });
    }
  }, [isAuthenticated, user]);

  return (
    <div className={styles["user-order-container"]}>
      <h1 className={styles["H1-userorder"]}>Tus Pedidos</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <Card key={order.user_order_id} className={styles["order-card"]}>
            <p>ID de Pedido: {order.user_order_id}</p>
            <p>Modelo: {order.car_modelo}</p>
            <p>Marca: {order.car_marca}</p>
            <p>Precio: {order.car_precio_ars}</p>
            <p>Fecha de Pedido: {formatFecha(order.order_date)}.</p>
            <p>Estado del Pedido: {order.order_status}</p>
            <p>Medio de Pago: {order.medio_de_pago === "efectivo" ? "Efectivo" : "Mercado Pago"}</p>
          </Card>
        ))
      ) : (
        <p className={styles["no-orders-message"]}>No tienes pedidos aún.</p>
      )}
    </div>
  );
}

export default UserOrder;
