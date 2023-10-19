import style from "./boardUsersAdmin.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashCardsUsers from "../dashCardsUsers/dashCardsUsers";
import { getUsers } from "../../../../redux/actions";

function BoardUsersAdmin() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    setUsers(allUsers);
  }, [allUsers]);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h2 className={style.titleInfo}>Nombre</h2>
        <h2 className={style.titleInfo}>Email</h2>
        <h2 className={style.titleInfo}>Dirección</h2>
        <h2 className={style.titleInfo}>Teléfono</h2>
        <h2 className={style.titleInfo}>Editar</h2>
      </div>
      {users.map((user) => (
        <DashCardsUsers user={user} />
      ))}
    </div>
  );
}

export default BoardUsersAdmin;
