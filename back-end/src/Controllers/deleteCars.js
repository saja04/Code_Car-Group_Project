const { Car } = require("../db");

const deleteCar = async (carId) => {
  
  const car = await Car.findByPk(carId);

  if (car) {
    await car.destroy();
    return {message: `eliminaste el coche con id ${carId} exitosamente!`}
  } else {
    return {message: `el coche con id ${carId} no se encuentra o no puede ser borrado, verifica el id`}
  }
};

module.exports = deleteCar;

