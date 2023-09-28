const { DataTypes } = require('sequelize');
const sequelize = require('sequelize');

const UserOrder = sequelize.define('UserOrder', {
  user_order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// UserOrder.belongsTo(User, { foreignKey: 'user_id' }); // Relación con User
// UserOrder.belongsTo(Car, { foreignKey: 'car_id' }); // Relación con Car
// UserOrder.belongsTo(UserAddress, { foreignKey: 'user_address_id' }); // Relación con UserAddress


module.exports = UserOrder;