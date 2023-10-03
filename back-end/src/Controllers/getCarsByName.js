const { Car } = require("../db");

const getCarsByName = async (input) => {
  if (!input) {
    return { error: "Falta el término de búsqueda" };
  }

  const formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

  const allCars = await Car.findAll();

  const results = allCars.map((car) => {
    const marca = car.dataValues.car_marca;
    const modelo = car.dataValues.car_modelo;

    if (
      marca.includes(formattedInput) ||
      modelo.includes(formattedInput)
    ) {
      return car.dataValues;
    }

    return null;
  }).filter((car) => car !== null);

  if (results.length === 0) {
    return { error: "Auto no encontrado" };
  }

  return { msg: "Autos encontrados", cars: results };
};

module.exports = getCarsByName;