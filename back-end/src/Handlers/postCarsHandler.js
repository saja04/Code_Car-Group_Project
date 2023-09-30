const postCars = require("../Controllers/postCars");

const postCarsHandler = async (req, res) => {
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
  if(!car_id ||
    !car_modelo ||
    !car_marca ||
    !car_año ||
    !car_color ||
    !car_tipo_de_motor ||
    !car_tipo_de_auto ||
    !car_precio_usd ||
    !car_precio_ars ||
    !car_kilometraje ||
    !car_condicion ||
    !car_imagen){
      return res.status(410).json({msg: 'por favor, completa todos los campos requeridos, verifica los nombres de las propiedades'})
    }
  const carData = {
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
  };
  try {
    const response = await postCars(carData);
    return res.status(220).json(response)
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

module.exports = postCarsHandler;
