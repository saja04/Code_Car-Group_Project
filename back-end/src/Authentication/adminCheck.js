
const { User } = require("../db");

const adminVerification = async (req, res, next) => {
  try {
    const { adminEmail } = req.body;

    const searchInDb = await User.findOne({
      where: { user_email: adminEmail, user_admin: true }, //busca si el usuario ya esta creado
    });

    if (searchInDb) {
      console.log("tiene acceso admin: ", searchInDb.dataValues.user_email);
      return next();
    }
    if (!searchInDb) {
      return res.status(401).send('usuario no autorizado, permisos necesarios: admin');
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = adminVerification;
