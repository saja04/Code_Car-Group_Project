
const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
  audience: 'https://codecar.onrender.com',
  issuerBaseURL: 'https://dev-mp4haipy0yoq4dta.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

module.exports = jwtCheck;