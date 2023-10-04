const { User } = require("./src/db");
const crypto = require("crypto");

const saveUserData = async () => {
  try {
    const salt = crypto.randomBytes(16);

    const hashedPassword = crypto.pbkdf2('1234', salt, 350, 32, 'sha256')

    const resetUsers = await User.destroy({
      where: {},
    });
    const createUser = await User.findOrCreate({
      where: {
        user_name: "jamil",
        user_email: "jamil@mail.com",
        hashed_password: hashedPassword,
        salt: salt
      },
    });
    if (createUser) {
      return console.log("usuario cargado correctamente");
    }
    return createUser;
  } catch (error) {
    console.log(error);
  }
};
module.exports = saveUserData;
