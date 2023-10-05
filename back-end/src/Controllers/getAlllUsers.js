const { User } = require("../db");

const getAllUsers = async () => {
  return User.findAll({
    attributes: ["user_id", "user_name", "user_email"],
  });
};

module.exports = {
  getAllUsers,
};
