const express = require('express');
const Car = require('../models/CarModel');

const router = express.Router();

// Ruta para crear un nuevo auto
router.post('/cars', async (req, res) => {
  try {
    // Obtiene los datos del cuerpo de la solicitud
    const { car_name, car_price, car_type, car_year, car_model, car_brand, car_condition, car_color } = req.body;

    // Crea un nuevo registro de automóvil en la base de datos
    const newCar = await Car.create({
      car_name,
      car_price,
      car_type,
      car_year,
      car_model,
      car_brand,
      car_condition,
      car_color,
    });

    // Devuelve una respuesta con el nuevo automóvil creado
    res.status(201).json(newCar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
