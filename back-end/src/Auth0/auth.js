const { auth } = require('express-openid-connect');
require("dotenv").config();
const { SECRET } = process.env;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'https://codecar.onrender.com',
  clientID: 'rrRqAiM1AYESjGA1UvXV3loPDqdgY695',
  issuerBaseURL: 'http://localhost:5173/'
};

module.exports = config;