import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carDetailPageStyles from "./detailCar.module.css";
import Lightbox from "../../components/lightbox/lightbox";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";

function CarDetailPage() {
  const { id } = useParams();
  const [singleCar, setSingleCar] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState("");
  const navigate = useNavigate();

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
    return (
      <div className={carDetailPageStyles.containerCargando}>
        <p>Cargando...</p>
      </div>
    );
  }

  // CarDetailPage.js
  const handleRedirect = () => {
    navigate("/detailBuy", {
      state: { carDetails: singleCar, carPrice: singleCar.car_precio_ars },
    });
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
          <h1 className={carDetailPageStyles.nombre}>
            {singleCar.car_marca} {singleCar.car_modelo}
          </h1>{" "}
          <p className={carDetailPageStyles.precio}>Precio</p>
          <h1 className={carDetailPageStyles.divisa}>
            {divisa === "car_precio_ars"
              ? `USD$${singleCar.car_precio_usd}`
              : `ARS$${singleCar.car_precio_ars}`}
          </h1>
          <div className={carDetailPageStyles.detalles}>
            <div className={carDetailPageStyles.detallesCont}>
              <h5>{singleCar.car_color}</h5>
            </div>
            <div className={carDetailPageStyles.detallesCont}>
              <h5>{singleCar.car_año}</h5>{" "}
            </div>
            <div className={carDetailPageStyles.detallesCont}>
              <h5>{singleCar.car_tipo_de_motor}</h5>
            </div>
          </div>
          <div className={carDetailPageStyles.condicion}>
            <p>{singleCar.car_condicion}</p>
            <p>|</p>
            <p>{singleCar.car_kilometraje} KM</p>
          </div>
          <div className={carDetailPageStyles.comprar}>
            <button
              className={carDetailPageStyles.buyNow}
              onClick={handleRedirect}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox imageUrl={lightboxImageUrl} onClose={closeLightbox} />
      )}
    </div>
  );
}

export default CarDetailPage;
