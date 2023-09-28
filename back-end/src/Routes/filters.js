const express = require('express');
const { Op } = require('sequelize');
const Car = require('../models/Car'); // Importa tu modelo Car

const router = express.Router();

// Ruta para obtener autos con filtros y ordenamiento
router.get('/cars', async (req, res) => {
  const { brand, orderBy, orderDirection } = req.query;
  
  try {
    let whereClause = {};

    // Aplica el filtro por marca si se proporciona
    if (brand) {
      whereClause.car_brand = brand;
    }

    // Define el ordenamiento
    let orderClause = [];

    // Agrega los campos de ordenamiento según lo que se haya proporcionado
    if (orderBy === 'price' || orderBy === 'year' || orderBy === 'name') {
      orderClause.push([orderBy, orderDirection]);
    }

    // Realiza la consulta Sequelize
    const cars = await Car.findAll({
      where: whereClause,
      order: orderClause,
    });

    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});

module.exports = router;
