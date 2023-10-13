require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_URL } = process.env;
const AdminModel = require("./Models/AdminModel");
const CarModel = require("./Models/AdminModel");
const CarCategoryModel = require("./Models/CarCategoryModel");
const UserModel = require("./Models/UserModel");
const UserAddressModel = require("./Models/UserAdressModel");
const UserFavsModel = require("./Models/UserFavsModel");
const UserOrderModel = require("./Models/UserOrderModel");

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

const { Admin, Car, CarCategory, User, UserAddress, UserFavs, UserOrder, ReviewModel } =
  sequelize.models;

User.hasMany(UserAddress, { foreignKey: "user_id" });
UserFavs.belongsTo(User, { foreignKey: "client_id" }); // Relación con User
UserFavs.belongsTo(Car, { foreignKey: "car_id" }); // Relación con Car
UserOrder.belongsTo(User, { foreignKey: "user_id" }); // Relación con User
UserOrder.belongsTo(Car, { foreignKey: "car_id" }); // Relación con Car
UserOrder.belongsTo(UserAddress, { foreignKey: "user_address_id" }); // Relación con UserAddress


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
