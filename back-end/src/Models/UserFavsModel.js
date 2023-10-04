const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("UserFavs", {
    favorite_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  });
};
