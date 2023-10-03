const { auth } = require('express-openid-connect');
require("dotenv").config();
const { AUTH0_CLIENT_ID, AUTH0_DOMAIN } = process.env;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'https://codecar.onrender.com',
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_DOMAIN
};

module.exports = config;