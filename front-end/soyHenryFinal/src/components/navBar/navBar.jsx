import { Link } from "react-router-dom";
import React, { useState } from "react";
import PriceToggle from "../../components/priceToggle/priceToggle";
import style from "./navBar.module.css";
import logo from "../../img/logo.png";
import SearchBar from "../searchBar/searchBar";
import DashboardButton from "../dashboardButton/dahsboardButton";
import LoginLinks from "../loginLinks/loginLinks";


function NavBar() {
  const [showPricesInUSD, setShowPricesInUSD] = useState(true);

  const togglePrices = () => {
    setShowPricesInUSD(!showPricesInUSD);
  };
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
        <div className={style.searchBar}>
          <SearchBar />
        </div>
        <PriceToggle
          showPricesInUSD={showPricesInUSD}
          onToggle={togglePrices}
        />
        <DashboardButton />
        <LoginLinks />
        
      </div>
    </div>
  );
}

export default NavBar;
