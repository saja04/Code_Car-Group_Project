import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carDetailPageStyles from "./detailCar.module.css";
import Lightbox from "../../components/lightbox/lightbox";
import PriceToggle from "../../components/priceToggle/priceToggle";
import axios from "axios";

function CarDetailPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null); // Cambié el nombre de la variable a 'car' para reflejar mejor la estructura del JSON
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState("");
  const [showPricesInUSD, setShowPricesInUSD] = useState(true);

  useEffect(() => {
    axios
      .get(`https://codecar.onrender.com/cars/${id}`)
      .then((response) => {
        // Establece el automóvil en el estado utilizando la clave 'car' en el JSON
        setCar(response.data.car);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del automóvil:", error);
      });
  }, [id]);

  const openLightbox = (imageUrl) => {
    setLightboxImageUrl(imageUrl);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const togglePrices = () => {
    setShowPricesInUSD(!showPricesInUSD);
  };

  if (!car) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={carDetailPageStyles.container}>
      <div className={carDetailPageStyles.flexContainer}>
        <div className={carDetailPageStyles.imageContainer}>
          <img
            src={car.car_imagen}
            alt={`${car.car_marca} ${car.car_modelo}`}
            className={carDetailPageStyles.image}
            onClick={() => openLightbox(car.car_imagen)}
          />
        </div>
        <div className={carDetailPageStyles.detailsContainer}>
          <PriceToggle showPricesInUSD={showPricesInUSD} onToggle={togglePrices} />
          <p>{car.car_marca} {car.car_modelo}</p>
          <p>Color: {car.car_color}</p>
          <p>Año: {car.car_año}</p>
          <p>Motor: {car.car_tipo_de_motor}</p>
          <p>
            {showPricesInUSD
              ? `USD$${car.car_precio_usd}`
              : `ARS$${car.car_precio_ars}`}
          </p>
          <button className={carDetailPageStyles.addToCart}>Agregar al Carrito</button>
          <button className={carDetailPageStyles.buyNow}>Comprar Ahora</button>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox imageUrl={lightboxImageUrl} onClose={closeLightbox} />
      )}
    </div>
  );
}

export default CarDetailPage;
