import { useEffect, useState } from "react";
import axios from "axios";
import style from "./dashCardsCompras.module.css";

function DashCardsCompras(order) {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    updateOrderStatus(event.target.value);
  };

  const updateOrderStatus = async(newStatus) => {
    try {
      const response = await axios.post('https://codecar.onrender.com/editOrder', {id: order.order.user_order_id, status: newStatus})
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h4 className={style.title}>
          {order.order.car_marca} {order.order.car_modelo}
        </h4>
        <h4 className={style.title}>{order.order.user_email} </h4>
        <h4 className={style.title}>{order.order.car_precio_ars} </h4>
        <h4 className={style.title}>{order.order.order_status} </h4>
        <select  onChange={handleStatusChange}>
          <option value="Completa">Completa</option>
          <option value="Cancelada">Cancelada</option>
        </select>
      </div>
    </div>
  );
}

export default DashCardsCompras;
