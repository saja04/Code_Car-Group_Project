const { Car } = require("../db");

const getCarById = async (id) => {
  const allCars = Car.findOne({ where: { car_id: id } });
  return allCars
};

module.exports = getCarById;
