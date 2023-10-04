const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define("Admin", {
    admin_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
