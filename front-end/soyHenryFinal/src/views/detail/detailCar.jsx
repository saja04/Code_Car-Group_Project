import React, { useState } from "react";
import { useParams } from "react-router-dom";
import vehicleData from "../../../utils/utils.json";
import carDetailPageStyles from "./detailCar.module.css";
import Lightbox from "../../components/lightbox/lightbox";

function CarDetailPage({ showPricesInUSD }) {
    const { id } = useParams();
    const vehicle = vehicleData.vehicles.find((v) => v.id === parseInt(id, 10));
  
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImageUrl, setLightboxImageUrl] = useState("");
  
    if (!vehicle) {
      return <div>No se encontró el vehículo con ID {id}</div>;
    }
  
    const openLightbox = (imageUrl) => {
      setLightboxImageUrl(imageUrl);
      setIsLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setIsLightboxOpen(false);
    };

    return (
        <div className={carDetailPageStyles.container}>
        <h2 className={carDetailPageStyles.heading}>Detalles del Vehículo ID: {id}</h2>
        <div className={carDetailPageStyles.flexContainer}>
          <div className={carDetailPageStyles.imageContainer}>
            <img
              src={vehicle.imagen}
              alt={`${vehicle.marca} ${vehicle.modelo}`}
              className={carDetailPageStyles.image}
              onClick={() => openLightbox(vehicle.imagen)} 
            />
                </div>
                <div className={carDetailPageStyles.detailsContainer}>
                    <p>Marca: {vehicle.marca}</p>
                    <p>Modelo: {vehicle.modelo}</p>
                    <p>Color: {vehicle.color}</p>
                    <p>Año: {vehicle.año}</p>
                    <p>Motor: {vehicle.tipo_de_motor}</p>
                    <p>
                        Precio: ${showPricesInUSD ? vehicle.precio_usd : vehicle.precio_ars}
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
