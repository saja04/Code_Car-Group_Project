require("dotenv").config();
const { ADMIN_EMAIL, ISSUER_BASE_URL, AUDIENCE, URL_INFO } = process.env;
const { auth } = require("express-oauth2-jwt-bearer");


const checkJwt = auth({
  issuerBaseURL: ISSUER_BASE_URL,
  audience: AUDIENCE,
  tokenSigningAlg: "RS256",
});

module.exports = { checkJwt };
