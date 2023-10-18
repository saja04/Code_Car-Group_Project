import { useEffect } from "react";
import style from "./dashCardsCompras.module.css";

function DashCardsCompras(order) {
  console.log(order);
  const [vehicle, setVehicle] = useEffect(null)

  const getCar = async() => {
    const response = await axios.post('https://codecar.onrender.com/carsId', {id: order.car_order})
    setVehicle(response)
  }
  const getUser = async() => {
    const response = await axios.post('https://codecar.onrender.com/carsId', {id: order.car_order})
    setVehicle(response)
  }
  useEffect(() => {
    getCar()
  }, [order])

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h4 className={style.title}>{} </h4>
        <h4 className={style.title}>{} </h4>
        <h4 className={style.title}>{} </h4>
        <h4 className={style.title}>{} </h4>
      </div>
    </div>
  );
}

export default DashCardsCompras;
