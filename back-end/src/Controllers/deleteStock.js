const { Car } = require('../db');

const deleteStock = async (carId, cantidad) => {
	const car = await Car.findByPk(carId);
  
	if (!car) {
	  return null;
	}
  
	if (car.stock < cantidad) {
	  return false;
	}
  
	car.stock -= cantidad;
  
	if (car.stock === 0) {
	  car.deleted = true;
	} else if (car.stock > 0) {
	  car.deleted = false;
	}
  
	await car.save();
	return car;
  };
  
  module.exports = deleteStock;
  