require("dotenv").config();
const axios = require("axios");
const { ADMIN_EMAIL, ISSUER_BASE_URL, AUDIENCE, URL_INFO } = process.env;
const { User } = require("../db");


const userVerification = async (req, res, next) => {
    try {
      const accesToken = req.auth.token;
      const userInfo = await axios.get(URL_INFO, {
        headers: {
          authorization: `Bearer ${accesToken}`,
        },
      });
  
      if (userInfo.data.email === ADMIN_EMAIL) {
        const createInDb = await User.findOrCreate({    //asigna el usuario con el email de admin como admin
          where: {
            user_email: userInfo.data.email,
            user_name: userInfo.data.name,
            user_image: userInfo.data.picture,
            user_admin: true,
          },
        });
      };

      const searchInDb = await User.findOne({
        where: { user_email: userInfo.data.email },      //busca si el usuario ya esta creado
      });

      if (searchInDb) {
         console.log("usuario ya logeado", searchInDb.dataValues.user_email);
         next();
      }
      if (!searchInDb) {
        const createInDb = await User.create({
          user_email: userInfo.data.email,
          user_name: userInfo.data.name,
          user_image: userInfo.data.picture
        });
        console.log("nuevo usuario creado", );
        next();
      }
      next();
    } catch (error) {
      res.send(error.message);
    }
  };

  module.exports = userVerification;