const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

const Car = sequelize.define('Car', {
  car_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  car_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  car_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  car_model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Car;