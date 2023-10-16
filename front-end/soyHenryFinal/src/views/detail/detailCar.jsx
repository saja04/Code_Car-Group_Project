import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import carDetailPageStyles from "./detailCar.module.css";
import Lightbox from "../../components/lightbox/lightbox";
import PriceToggle from "../../components/priceToggle/priceToggle";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";

function CarDetailPage() {
  const { id } = useParams();
  // const dispatch = useDispatch();
  // const singleCar = useSelector((state) => state.singleCar);
  const [singleCar, setSingleCar] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState("");
  const [showPricesInUSD, setShowPricesInUSD] = useState(true);
  const navigate = useNavigate();

  const {
    loginWithRedirect,
    isAuthenticated,
    
} = useAuth0();

  const divisa = localStorage.getItem("divisa");

  const getById = async (id) => {
    const response = await axios.post(`https://codecar.onrender.com/carsId/`, {
      id: id,
      divisa: divisa,
    });
    const data = response.data;
   
    return setSingleCar(data);
  };

  useEffect(() => {
    getById(id);
  }, [divisa]);

  const openLightbox = (imageUrl) => {
    setLightboxImageUrl(imageUrl);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  if (!singleCar) {
    return <div>Cargando...</div>;
  }
  
// CarDetailPage.js
const handleRedirect = () => {
  navigate("/detailBuy", { state: { carDetails: singleCar, carPrice: singleCar.car_precio_ars } });
};

  

  return (
    <div className={carDetailPageStyles.container}>
      <div className={carDetailPageStyles.flexContainer}>
        <div className={carDetailPageStyles.imageContainer}>
          <img
            src={singleCar.car_imagen}
            alt={`${singleCar.car_marca} ${singleCar.car_modelo}`}
            className={carDetailPageStyles.image}
            onClick={() => openLightbox(singleCar.car_imagen)}
          />
        </div>
        <div className={carDetailPageStyles.detailsContainer}>
          {/* <PriceToggle
            showPricesInUSD={showPricesInUSD}
            onToggle={togglePrices}
          /> */}
          <p>
            {singleCar.car_marca} {singleCar.car_modelo}
          </p>
          <p>Color: {singleCar.car_color}</p>
          <p>Año: {singleCar.car_año}</p>
          <p>Motor: {singleCar.car_tipo_de_motor}</p>
          <p>{singleCar.car_condicion}</p>
          <p>
            {divisa === "car_precio_ars"
              ? `USD$${singleCar.car_precio_usd}`
              : `ARS$${singleCar.car_precio_ars}`}
          </p>
          <button className={carDetailPageStyles.buyNow} onClick={handleRedirect}>Comprar</button>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox imageUrl={lightboxImageUrl} onClose={closeLightbox} />
      )}
    </div>
  );
}

export default CarDetailPage;