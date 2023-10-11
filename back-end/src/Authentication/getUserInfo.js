const axios = require("axios");
const { User } = require("../db");
const { URL_INFO } = process.env;

const getUserInfo = async (req, res) => {
  try {
    const accesToken = req.auth.token;
    const userInfo = await axios.get(URL_INFO, {
      headers: {
        authorization: `Bearer ${accesToken}`,
      },
    });

    const userInDb = await User.findOne({
      where: { user_email: userInfo.data.email },
    });
    res.json(userInDb);


  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserInfo;
