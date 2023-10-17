import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriceToggle from "../../components/priceToggle/priceToggle";
import style from "./navBar.module.css";
import logo from "../../img/logo.png";
import SearchBar from "../searchBar/searchBar";
import DashboardButton from "../dashboardButton/dahsboardButton";
import LoginLinks from "../loginLinks/loginLinks";
import { changeCurrency } from "../../redux/actions";

function NavBar() {
  const dispatch = useDispatch();
  const divisa = useSelector((state) => state.divisa);

  // useEffect(() => {
  //   dispatch(changeCurrency());
  // }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <img className={style.logo} src={logo} alt={logo} />
        <div className={style.linksContent}>
          <Link className={style.links} to="/">
            Inicio
          </Link>
          <Link className={style.links} to="/tienda">
            Tienda
          </Link>
          <Link className={style.links} to="/contacto">
            Contacto
          </Link>
          {/*       <Link className={style.links} to="/nosotros">
        Nosotros
      </Link> */}
        </div>
        <SearchBar />
        <PriceToggle
          divisa={divisa}
          changeCurrency={changeCurrency}
          dispatch={dispatch}
        />
        <DashboardButton />{" "}
        <div className={style.user}>
          <LoginLinks />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
