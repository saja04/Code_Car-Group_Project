require("dotenv").config();
const axios = require("axios");
const { ADMIN_EMAIL, ISSUER_BASE_URL, AUDIENCE, URL_INFO } = process.env;
const { User } = require("../db");

const userVerification = async (req, res, next) => {
  try {
    const { email, photo } = req.body;

    const splittedName = email.split("@");

    const searchInDb = await User.findOne({
      where: { user_email: email }, //busca si el usuario ya esta creado
    });

    if (searchInDb) {
      console.log("usuario ya logeado", searchInDb.dataValues.user_email);
      return next();
    }

    if (email === ADMIN_EMAIL) {
      const createInDb = await User.findOrCreate({
        //asigna el usuario con el email de admin como admin
        where: {
          user_email: email,
          user_name: splittedName[0],
          user_image: photo,
          user_admin: true,
          user_moderator: true,
        },
      });
      console.log("admin principal añadido");
      return next()
    }
    else if (!searchInDb) {
      const createInDb = await User.create({
        user_email: email,
        user_name: splittedName[0],
        user_image: photo,
      });
      console.log("nuevo usuario creado");
      return next();
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = userVerification;
