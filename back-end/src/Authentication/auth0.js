require("dotenv").config();
const axios = require('axios')
const {ADMIN_EMAIL, ISSUER_BASE_URL, AUDIENCE, URL_INFO} = process.env
const { auth } = require("express-oauth2-jwt-bearer");
const { User } = require("../db");


const checkJwt = auth({
    issuerBaseURL: ISSUER_BASE_URL,
    audience: AUDIENCE,
    tokenSigningAlg: 'RS256'
  });


  const userVerification = async (req, res, next) => {
    try {
      console.log(req.auth);
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
  
      if(userInfo.data.email === ADMIN_EMAIL){ //asigna el usuario con el email de admin como admin
        const createInDb = await User.create({
          user_email: userInfo.data.email,
          user_name: userInfo.data.name,
          user_admin: true,
        });
      }
      const searchInDb = await User.findOne({ //busca si el usuario ya esta creado
        where: { user_email: userInfo.data.email },
      });
      if(searchInDb){
        console.log('usuario ya logeado, ', searchInDb);
      }
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

  module.exports = {checkJwt, userVerification};