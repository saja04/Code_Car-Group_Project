const axios = require("axios");
const { User } = require("../db");
const { URL_INFO } = process.env;

const banUser = async (req, res) => {
  const { ban } = req.query;

  const accesToken = req.auth.token;
  const userInfo = await axios.get(URL_INFO, {
    headers: {
      authorization: `Bearer ${accesToken}`,
    },
  });

  const userInDb = await User.findOne({
    where: { user_email: userInfo.data.email },
  });

  if (ban) {
    userInDb.user_ban = ban;
    await userInDb.save()
  }
};


module.exports = banUser;