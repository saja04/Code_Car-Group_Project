const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("CarCategory", {
    category_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
