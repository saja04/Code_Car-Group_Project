const { User } = require("./src/db");

const saveUserData = async () => {
  try {
    const resetUsers = await User.destroy({
      where: {},
    });
    const createUser = await User.findOrCreate({
      where: {
        user_name: "jamil",
        user_email: "jamil@mail.com",
        user_password: "1234",
      },
    });
    if (createUser) {
      console.log("usuario cargado correctamente");
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
module.exports = saveUserData;
