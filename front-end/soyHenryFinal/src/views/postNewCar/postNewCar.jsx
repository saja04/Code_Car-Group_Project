import React, { useState } from "react";
import carStyles from "./PostNewCar.module.css";
import axios from "axios";


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
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post('https://codecar.onrender.com/cars', formData);

    } catch (error) {
      console.error('Error al agregar el vehículo:', error);
    }
  };

  return (
    <div className={carStyles.postNewCarContainer}>
      <h2 className={carStyles.postNewCarH2}>Agregar un Nuevo Vehículo</h2>
      <form onSubmit={handleSubmit}>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="marca">Marca:</label>
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
          <label className={carStyles.postNewCarLabel} htmlFor="modelo">Modelo:</label>
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
          <label className={carStyles.postNewCarLabel} htmlFor="año">Año:</label>
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
          <label className={carStyles.postNewCarLabel} htmlFor="color">Color:</label>
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
          <label className={carStyles.postNewCarLabel} htmlFor="tipo_de_motor">Tipo de Motor:</label>
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
          <label className={carStyles.postNewCarLabel} htmlFor="tipo_de_auto">Tipo de Auto:</label>
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
          <label className={carStyles.postNewCarLabel} htmlFor="precio_usd">Precio en USD:</label>
          <input
            type="text"
            id="precio_usd"
            name="precio_usd"
            className={carStyles.postNewCarInput}
            value={formData.precio_usd}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="precio_ars">Precio en ARS:</label>
          <input
            type="text"
            id="precio_ars"
            name="precio_ars"
            className={carStyles.postNewCarInput}
            value={formData.precio_ars}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="kilometraje">Kilometraje:</label>
          <input
            type="text"
            id="kilometraje"
            name="kilometraje"
            className={carStyles.postNewCarInput}
            value={formData.kilometraje}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <label className={carStyles.postNewCarLabel} htmlFor="condicion">Condición:</label>
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
          <label className={carStyles.postNewCarLabel} htmlFor="imagen">URL de la Imagen:</label>
          <input
            type="text"
            id="imagen"
            name="imagen"
            className={carStyles.postNewCarInput}
            value={formData.imagen}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={carStyles.postNewCarFormGroup}>
          <button type="submit" className={carStyles.postNewCarButton}>Agregar Vehículo</button>
        </div>
      </form>
    </div>
  );
}

export default PostNewCar;
