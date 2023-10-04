const { auth } = require('express-openid-connect');
require("dotenv").config();
const { AUTH0_CLIENT_ID, SECRET } = process.env;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'https://code-car-41a-pf-enac.vercel.app/',
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: 'https://codecar.onrender.com/auth0Problem'
};

module.exports = config;