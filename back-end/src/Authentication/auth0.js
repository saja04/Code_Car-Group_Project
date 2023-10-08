require("dotenv").config();
const {ADMIN_EMAIL, ISSUER_BASE_URL, AUDIENCE, URL_INFO} = process.env
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");
const { User } = require("../db");

const checkScopes = requiredScopes("");

const checkJwt = auth({
    issuerBaseURL: ISSUER_BASE_URL,
    audience: AUDIENCE,
  });


  const userVerification = async (req, res, next) => {
    try {
      const accesToken = req.auth.token;
      const userInfo = await axios.get(
        URL_INFO,
        {
          headers: {
            authorization: `Bearer ${accesToken}`,
          },
        }
      );
      
      console.log(userInfo);
  
      if(userInfo.data.email === ADMIN_EMAIL){
        const createInDb = await User.create({
          user_email: userInfo.data.email,
          user_name: userInfo.data.name,
          user_admin: true,
        });
      }
      const searchInDb = await User.findOne({
        where: { user_email: userInfo.data.email },
      });
      if (!searchInDb) {
        const createInDb = await User.create({
          user_email: userInfo.data.email,
          user_name: userInfo.data.name,
        });
        console.log("usuario creado");
        next();
      }
      next();
    } catch (error) {
      res.send(error.message);
    }
  };

  module.exports = {checkJwt, userVerification, checkScopes};