const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("UserOrder", {
    user_order_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
};
