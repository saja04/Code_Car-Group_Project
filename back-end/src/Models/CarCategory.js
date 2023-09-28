const { DataTypes } = require('sequelize');
const sequelize = require('sequelize')

const CarCategory = sequelize.define('CarCategory', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CarCategory;