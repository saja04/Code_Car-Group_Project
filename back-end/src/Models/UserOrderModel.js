const { DataTypes, DatabaseError } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("UserOrder", {
    user_order_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    order_status: {
      type: DataTypes.STRING,
    },
    order_date: {
      type: DataTypes.STRING,
    },
    car_order: {
      type: DataTypes.STRING,
    },
    user_order: {
      type: DataTypes.STRING,
    },
    medio_de_pago: {
      type: DataTypes.STRING,
    },
    
  });
};
