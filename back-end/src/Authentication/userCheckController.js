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
      const splittedName = userInfo.data.email.split('@')
      if (userInfo.data.email === ADMIN_EMAIL) {
        const createInDb = await User.findOrCreate({    //asigna el usuario con el email de admin como admin
          where: {
            user_email: userInfo.data.email,
            user_name: splittedName[0],
            user_image: userInfo.data.picture,
            user_admin: true,
          },
        });
        console.log('admin principal añadido');
      };

      const searchInDb = await User.findOne({
        where: { user_email: userInfo.data.email },      //busca si el usuario ya esta creado
      });

      if (searchInDb) {
         console.log("usuario ya logeado", searchInDb.dataValues.user_email);
        return next();
      }
      if (!searchInDb) {
        const createInDb = await User.create({
          user_email: userInfo.data.email,
          user_name: splittedName[0],
          user_image: userInfo.data.picture
        });
        console.log("nuevo usuario creado", );
        return next();
      }
      return next();
    } catch (error) {
      res.send(error.message);
    }
  };

  module.exports = userVerification;