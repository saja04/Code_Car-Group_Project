
const { User } = require("../db");

const getUserById = async (req, res) => {
  try {

    const {id} = await req.body;

    const userInDb = await User.findByPk(id);
    res.json(userInDb);


  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserById;
