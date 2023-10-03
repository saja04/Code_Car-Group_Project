const { auth } = require('express-openid-connect');
require("dotenv").config();
const { SECRET } = process.env;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'https://codecar.onrender.com',
  clientID: 'rrRqAiM1AYESjGA1UvXV3loPDqdgY695',
  issuerBaseURL: 'https://dev-fl1dkagbtwtxnd7y.us.auth0.com'
};

module.exports = config;