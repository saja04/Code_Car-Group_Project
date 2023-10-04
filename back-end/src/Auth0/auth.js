const { auth } = require("express-openid-connect");
require("dotenv").config();
const { AUTH0_CLIENT_ID, SECRET } = process.env;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: "https://codecar.onrender.com",
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: "https://dev-fl1dkagbtwtxnd7y.us.auth0.com",
};

module.exports = config;
