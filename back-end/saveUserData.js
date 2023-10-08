const { User } = require("./src/db");

const resetUsers = async () => {
  try {
    const resetUsers = await User.destroy({
      where: {},
    });
   return;
  } catch (error) {
    console.log(error);
  }
};
module.exports = resetUsers;
