const { Car } = require("../db");

const getCarsAdmin = async (req, res) => {
  const response = await Car.findAll();
  res.status(201).json(response)
};

module.exports = getCarsAdmin;
