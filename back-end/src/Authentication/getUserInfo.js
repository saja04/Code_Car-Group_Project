const axios = require("axios");
const { User } = require("../db");
const { URL_INFO } = process.env;

const getUserInfo = async (req, res) => {
  try {

    const {email} = await req.body;

    const userInDb = await User.findOne({
      where: { user_email: email },
    });
    res.json(userInDb);


  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserInfo;
