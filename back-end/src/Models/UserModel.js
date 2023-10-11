const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_address: {
      type: DataTypes.STRING,
    },
    user_phone: {
      type: DataTypes.INTEGER
    },
    user_image: {
      type: DataTypes.STRING(20000)
    },
    user_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: true
    },
  });
};
