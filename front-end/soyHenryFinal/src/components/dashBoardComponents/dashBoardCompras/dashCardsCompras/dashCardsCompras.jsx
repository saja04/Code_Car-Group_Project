import style from "./dashCardsCompras.module.css";

function DashCardsCompras(order) {


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
