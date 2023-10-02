import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import carDetailPageStyles from "./detailCar.module.css";
import Lightbox from "../../components/lightbox/lightbox";
import PriceToggle from "../../components/priceToggle/priceToggle";
import { getCarById } from "../../redux/actions";

function CarDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleCar = useSelector((state) => state.singleCar);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImageUrl, setLightboxImageUrl] = useState("");
  const [showPricesInUSD, setShowPricesInUSD] = useState(true);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

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

  if (!singleCar) {
    return <div>Cargando...</div>;
  }

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
          <PriceToggle
            showPricesInUSD={showPricesInUSD}
            onToggle={togglePrices}
          />
          <p>
            {singleCar.car_marca} {singleCar.car_modelo}
          </p>
          <p>Color: {singleCar.car_color}</p>
          <p>Año: {singleCar.car_año}</p>
          <p>Motor: {singleCar.car_tipo_de_motor}</p>
          <p>{vehicle.car_condicion}</p>
          <p>
            {showPricesInUSD
              ? `USD$${singleCar.car_precio_usd}`
              : `ARS$${singleCar.car_precio_ars}`}
          </p>
          <button className={carDetailPageStyles.addToCart}>
            Agregar al Carrito
          </button>
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
