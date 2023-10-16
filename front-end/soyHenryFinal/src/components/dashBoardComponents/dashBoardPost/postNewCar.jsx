import React, { useState, useEffect } from "react";
import carStyles from "./postNewCar.module.css";
import axios from "axios";
import { uploadFile } from "../../../../utils/firebase";
import Resizer from "react-image-file-resizer";

function PostNewCar() {
  const [formData, setFormData] = useState({
    marca: "Chevrolet",
    modelo: "",
    año: "",
    color: "Blanco",
    tipo_de_motor: "Nafta",
    tipo_de_auto: "Sedán",
    precio_usd: "",
    precio_ars: "",
    kilometraje: "",
    condicion: "Usado",
    imagen: "",
  });

  const [errors, setErrors] = useState({
    precio_usd: "",
    precio_ars: "",
    kilometraje: "",
  });

  const coloresBasicos = [
    "Blanco",
    "Negro",
    "Rojo",
    "Azul",
    "Amarillo",
    "Verde",
    "Naranja",
    "Gris",
    "Marrón",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (["precio_usd", "precio_ars", "kilometraje"].includes(name)) {
      if (!/^\d*$/.test(value)) {
        setErrors({
          ...errors,
          [name]: "Solo se permiten números",
        });
      } else {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const maxFileSize = 50 * 1024 * 1024;

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file.size > maxFileSize) {
      alert(
        "El archivo es demasiado grande. El tamaño máximo permitido es 50 MB."
      );
      return;
    }

    Resizer.imageFileResizer(file, 100, 100, "JPEG", 100, 0, (uri) => {
      setFormData({
        ...formData,
        imagen: uri,
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.imagen) {
      alert("Por favor, sube una imagen antes de enviar el formulario.");
      return;
    }

    try {
      const carData = {
        car_marca: formData.marca,
        car_modelo: formData.modelo,
        car_año: formData.año,
        car_color: formData.color,
        car_tipo_de_motor: formData.tipo_de_motor,
        car_tipo_de_auto: formData.tipo_de_auto,
        car_precio_usd: formData.precio_usd,
        car_precio_ars: formData.precio_ars,
        car_kilometraje: formData.kilometraje,
        car_condicion: formData.condicion,
        car_imagen: formData.imagen,
      };
      console.log(carData);

      await axios.post("https://codecar.onrender.com/carsPost", carData);
      alert("¡Se ha creado un vehículo exitosamente!");

      window.location.reload();
    } catch (error) {
      console.error("Error al agregar el vehículo:", error);
    }
  };

  return (
    <div className={carStyles.postNewCarContainer}>
      <h2 className={carStyles.postNewCarH2}>Agregar un Nuevo Vehículo</h2>

      <form onSubmit={handleSubmit}>
        <div className={carStyles.postNewCarFormGroup}>
          <div className={carStyles.postNewCarFormGroup}>
            <input
              type="file"
              name=""
              id=""
              onChange={(e) => {
                handleFileUpload(e);
                uploadFile(e.target.files[0], setFormData);
              }}
            />
          </div>

          {formData.imagen && (
            <div className={carStyles.postNewCarImage}>
              <img
                src={formData.imagen}
                alt="Vehículo"
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </div>
          )}

          <label className={carStyles.postNewCarLabel} htmlFor="marca">
            Marca:
          </label>
          <select
            id="marca"
            name="marca"
            className={carStyles.postNewCarSelect}
            value={formData.marca}
            onChange={handleInputChange}
            required
          >
            <option value="Chevrolet">Chevrolet</option>
            <option value="Ford">Ford</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Renault">Renault</option>
            <option value="Toyota">Toyota</option>
            <option value="Kia">Kia</option>
          </select>
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="modelo">
            Modelo:
          </label>
          <input
            type="text"
            id="modelo"
            name="modelo"
            className={carStyles.postNewCarInput}
            value={formData.modelo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="año">
            Año:
          </label>
          <select
            id="año"
            name="año"
            className={carStyles.postNewCarSelect}
            value={formData.año}
            onChange={handleInputChange}
            required
          >
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="color">
            Color:
          </label>
          <select
            id="color"
            name="color"
            className={carStyles.postNewCarSelect}
            value={formData.color}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Selecciona un color
            </option>

            {coloresBasicos.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="tipo_de_motor">
            Tipo de Motor:
          </label>
          <select
            id="tipo_de_motor"
            name="tipo_de_motor"
            className={carStyles.postNewCarSelect}
            value={formData.tipo_de_motor}
            onChange={handleInputChange}
            required
          >
            <option value="Nafta">Nafta</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="tipo_de_auto">
            Tipo de Auto:
          </label>
          <select
            id="tipo_de_auto"
            name="tipo_de_auto"
            className={carStyles.postNewCarSelect}
            value={formData.tipo_de_auto}
            onChange={handleInputChange}
            required
          >
            <option value="Sedán">Sedán</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Pick-up">Pick-up</option>
          </select>
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="precio_usd">
            Precio en USD:
          </label>
          <input
            type="text"
            id="precio_usd"
            name="precio_usd"
            className={carStyles.postNewCarInput}
            value={formData.precio_usd}
            onChange={handleInputChange}
            required
          />
          {errors.precio_usd && (
            <div className={carStyles.error}>{errors.precio_usd}</div>
          )}
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="precio_ars">
            Precio en ARS:
          </label>
          <input
            type="text"
            id="precio_ars"
            name="precio_ars"
            className={carStyles.postNewCarInput}
            value={formData.precio_ars}
            onChange={handleInputChange}
            required
          />
          {errors.precio_ars && (
            <div className={carStyles.error}>{errors.precio_ars}</div>
          )}
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="kilometraje">
            Kilometraje:
          </label>
          <input
            type="text"
            id="kilometraje"
            name="kilometraje"
            className={carStyles.postNewCarInput}
            value={formData.kilometraje}
            onChange={handleInputChange}
            required
          />
          {errors.kilometraje && (
            <div className={carStyles.error}>{errors.kilometraje}</div>
          )}
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="condicion">
            Condición:
          </label>
          <select
            id="condicion"
            name="condicion"
            className={carStyles.postNewCarSelect}
            value={formData.condicion}
            onChange={handleInputChange}
            required
          >
            <option value="Usado">Usado</option>
            <option value="0km">0km</option>
          </select>
        </div>

        <div className={carStyles.postNewCarFormGroup}>
          <button type="submit" className={carStyles.postNewCarButton}>
            Agregar Vehículo
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostNewCar;
