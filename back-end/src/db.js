require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/concesionaria`,
    {
        logging: false,
        native: false,
    }
);
const basename = path.basename(__filename)

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
.filter(
    (file) => 
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === ".js"
)
.forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
});

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const{Admin, Car, CarCategory, User, UserAddress, UserFavs, UserOrder} = sequelize.models;

User.hasMany(UserAddress, { foreignKey: 'user_id' });
UserFavs.belongsTo(User, { foreignKey: 'client_id' }); // Relación con User
UserFavs.belongsTo(Car, { foreignKey: 'car_id' }); // Relación con Car
UserOrder.belongsTo(User, { foreignKey: 'user_id' }); // Relación con User
UserOrder.belongsTo(Car, { foreignKey: 'car_id' }); // Relación con Car
UserOrder.belongsTo(UserAddress, { foreignKey: 'user_address_id' }); // Relación con UserAddress


