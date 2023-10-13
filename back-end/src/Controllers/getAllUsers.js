const { User } = require("../db");

const getAllUsers = async () => {
  return User.findAll();
};

module.exports = getAllUsers

