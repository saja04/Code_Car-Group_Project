const { Car } = require("../db");
const sequelize = require("sequelize");

const getCarsAdmin = async (req) => {
  return await Car.findAll();
};

module.exports = getCarsAdmin;
