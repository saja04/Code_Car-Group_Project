import React from "react";
import styles from "./Lightbox.module.css";
function Lightbox({ imageUrl, onClose }) {
  return (
    <div
      className={styles.lightboxContainer} 
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Imagen Ampliada"
        className={styles.image} 
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default Lightbox;

