import style from "./boardComprasAdmin.module.css";
/* import DashCardsCrompas from "../dashCardsCompras/dashCardsCompras";
 */
function BoardComprasAdmin() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2 className={style.titleInfo}>Auto</h2>
        <h2 className={style.titleInfo}>Email</h2>
        <h2 className={style.titleInfo}>Precio</h2>
        <h2 className={style.titleInfo}>Estado</h2>
      </div>
      {/*       {users.map((user) => (
        <DashCardsCrompas user={user} />
      ))} */}
    </div>
  );
}

export default BoardComprasAdmin;
