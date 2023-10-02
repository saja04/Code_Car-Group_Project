const { Car } = require("../db");

const getCarById = async (id) => {
  const findedCar = await Car.findOne({ where: { car_id: id } });
  if(!findedCar){
    return{msg:'car no encontrado!'}
  } else {
    return findedCar;
  }
};

module.exports = getCarById;
