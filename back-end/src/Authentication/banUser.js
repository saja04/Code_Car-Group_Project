const axios = require("axios");
const { User } = require("../db");
const { URL_INFO } = process.env;

const banUser = async (req, res) => {
  const { userEmail, ban } = req.query;

  const accesToken = req.auth.token;
  const userInfo = await axios.get(URL_INFO, {
    headers: {
      authorization: `Bearer ${accesToken}`,
    },
  });

  const userInDb = await User.findOne({
    where: { user_email: userEmail },
  });

    userInDb.user_ban = ban;
    await userInDb.save();
    
};

module.exports = banUser;
