const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("UserFavs", {
    favorite_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
};

  // UserFavs.belongsTo(User, { foreignKey: 'client_id' }); // Relación con User
  // UserFavs.belongsTo(Car, { foreignKey: 'car_id' }); // Relación con Car
