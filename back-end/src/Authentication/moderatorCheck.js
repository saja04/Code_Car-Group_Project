
const { User } = require("../db");

const moderatorVerification = async (req, res, next) => {
  try {
    const { email } = req.body;

    const searchInDb = await User.findOne({
      where: { user_email: email, user_moderator: true }, //busca si el usuario ya esta creado
    });

    if (searchInDb) {
      console.log("tiene acceso mod: ", searchInDb.dataValues.user_email);
      return next();
    }
    if (!searchInDb) {
      return res.status(401).send('usuario no autorizado, permisos necesarios: mod');
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = moderatorVerification;
