import { useEffect, useState } from "react";
import axios from 'axios'
import style from "./dashCardsCompras.module.css";

function DashCardsCompras(order) {
  console.log(order);
  const [vehicle, setVehicle] = useState(null)
  const [user, setUser ] = useState(null)

  const getCar = async() => {
    const response = await axios.post('https://codecar.onrender.com/carsId', {id: order.car_order})
    console.log(response);
    setVehicle(response)
  }
  const getUser = async() => {
    const response = await axios.post('https://codecar.onrender.com/userById', {id: order.user_order})
    console.log(response);
    setUser(response)
  }
  useEffect(() => {
    getCar()
    getUser()
  }, [order])

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h4 className={style.title}>{vehicle.car_model} </h4>
        <h4 className={style.title}>{user.user_email} </h4>
        <h4 className={style.title}>{vehicle.car_precio_ars} </h4>
        <h4 className={style.title}>{order.state} </h4>
      </div>
    </div>
  );
}

export default DashCardsCompras;
