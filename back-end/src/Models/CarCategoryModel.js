const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("CarCategory", {
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
};
