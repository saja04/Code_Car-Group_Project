const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');
const UserAddress = require('./UserAdress');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

User.hasMany(UserAddress, { foreignKey: 'user_id' }); // Una relación de uno a muchos con UserAddress

module.exports = User;