const { Car } = require('../db');

const postCars = async (req, res) => {
  try {
    const {
      car_id,
      car_modelo,
      car_marca,
      car_año,
      car_color,
      car_tipo_de_motor,
      car_tipo_de_auto,
      car_precio_usd,
      car_precio_ars,
      car_kilometraje,
      car_condicion,
      car_imagen,
    } = req.body;

    const newCar = await Car.create({
      car_id,
      car_modelo,
      car_marca,
      car_año,
      car_color,
      car_tipo_de_motor,
      car_tipo_de_auto,
      car_precio_usd,
      car_precio_ars,
      car_kilometraje,
      car_condicion,
      car_imagen,
    });

    res.status(201).json({
      status: "Auto creado correctamente!",
      auto: newCar,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
};

module.exports = {
  postCars,
};