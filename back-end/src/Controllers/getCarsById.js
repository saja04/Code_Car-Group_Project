const { Car } = require("../db");

const getCarById = async (id) => {
  const findedCar = await Car.findOne({
    where: { car_id: id, deleted: false }, // Agregar la condición para autos no borrados
  });

  if (!findedCar) {
    return { msg: 'Auto no encontrado!' };
  } else {
    return findedCar;
  }
};

module.exports = getCarById;
