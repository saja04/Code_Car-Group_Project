import { useEffect, useState } from "react";
import style from "./boardComprasAdmin.module.css";
import axios from "axios";
import DashCardsCrompas from "../dashCardsCompras/dashCardsCompras";
 
function BoardComprasAdmin() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      const response = await axios.post(
        "https://codecar.onrender.com/allOrders"
      );
      console.log(response.data);
      return setOrders(response.data);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    getOrders()
  }, []);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2 className={style.titleInfo}>Auto</h2>
        <h2 className={style.titleInfo}>Email</h2>
        <h2 className={style.titleInfo}>Precio</h2>
        <h2 className={style.titleInfo}>Estado</h2>
      </div>
      {orders.map((order) => (
        <DashCardsCrompas order={order} />
      ))}
    </div>
  );
}

export default BoardComprasAdmin;
