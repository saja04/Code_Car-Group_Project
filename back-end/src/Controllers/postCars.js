const { Car } = require('../db');

const postCars = async (carData) => {
    const {
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
      car_imagen
    } = carData;

    const newCar = await Car.create({
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
      car_imagen
    });

    return{
      status: "Auto creado correctamente!",
      auto: newCar,
    };
  };

module.exports = postCars;