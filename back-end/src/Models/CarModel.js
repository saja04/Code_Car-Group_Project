const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Car", {
    car_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    car_modelo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    car_marca: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    car_año: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    car_color: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    car_tipo_de_motor: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    car_tipo_de_auto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    car_precio_usd: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    car_precio_ars: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    car_kilometraje: {
      type: DataTypes.STRING,
      allowNull:false
    },
    car_condicion: {
      type: DataTypes.STRING(255),
      allowNull:false
    },
    car_imagen: {
      type: DataTypes.STRING(20000),
      allowNull:false
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Por defecto, un registro no está borrado
    },
  },
  { timestamps: false }
  );
};
