require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_URL } = process.env;
// const CarModel = require("./Models/AdminModel");
// const UserModel = require("./Models/UserModel");
// const UserFavsModel = require("./Models/UserFavsModel");
// const UserOrderModel = require("./Models/UserOrderModel");

const sequelize = new Sequelize(`${DB_URL}`, {
  dialectOptions: {
    ssl: {
      require: true, // Forzar el uso de SSL
      rejectUnauthorized: false, // Permite la conexión incluso si el certificado no es de confianza
    },
  },
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/Models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/Models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Car, User, UserFavs, UserOrder, ReviewModel } = sequelize.models;

UserFavs.belongsTo(User, { foreignKey: "client_id" }); // Relación con User
UserFavs.belongsTo(Car, { foreignKey: "car_id" }); // Relación con Car
UserOrder.belongsTo(User, { foreignKey: "user_id" }); // Relación con User
UserOrder.belongsTo(Car, { foreignKey: "car_id" }); // Relación con Car

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
