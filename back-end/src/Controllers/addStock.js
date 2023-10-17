const { Car } = require('../db');

 const addStock = async(carId, cantidad) =>{
  const car = await Car.findByPk(carId);
  if (!car) {
    return null; 
  }

  car.stock += cantidad;
  await car.save();
  return car;
}


module.exports = addStock;
