const { Car } = require("../db");

const getCars = async () => {
  const response = await Car.findAll();
  return response
};

module.exports = getCars;
