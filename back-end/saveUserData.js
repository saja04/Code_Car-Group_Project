const { User } = require("./src/db");
const crypto = require("crypto");

const saveUserData = async () => {
  try {

    const resetUsers = await User.destroy({
      where: {},
    });
    const createUser = await User.findOrCreate({
      where: {
        user_name: "jamil",
        user_email: "jamil@mail.com",
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
