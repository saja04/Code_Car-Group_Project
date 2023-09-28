const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define("Admin", {
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_login_data: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  });
}
