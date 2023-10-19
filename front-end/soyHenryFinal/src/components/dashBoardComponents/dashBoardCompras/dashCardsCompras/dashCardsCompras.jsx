import { useEffect, useState } from "react";
import axios from 'axios'
import style from "./dashCardsCompras.module.css";

function DashCardsCompras(order) {
  console.log(order);

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h4 className={style.title}>{order.order.car_marca}  {order.order.car_modelo}</h4>
        <h4 className={style.title}>{order.order.user_email} </h4>
        <h4 className={style.title}>{order.order.car_precio_ars} </h4>
        <h4 className={style.title}>{order.order.order_status} </h4>
      </div>
    </div>
  );
}

export default DashCardsCompras;
