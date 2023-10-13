const axios = require("axios");
const { User } = require("../db");
const { ADMIN_EMAIL, URL_INFO } = process.env;

const promoteUser = async (req, res) => {
  const { userEmail, moderator } = req.query;

  const accesToken = req.auth.token;
  const userInfo = await axios.get(URL_INFO, {
    headers: {
      authorization: `Bearer ${accesToken}`,
    },
  });

  if (userInfo.data.email === ADMIN_EMAIL) {
    const userInDb = await User.findOne({
      where: { user_email: userEmail },
    });
    userInDb.user_moderator = moderator;
    await userInDb.save();
    return res.status(200).send()
  } else return res.status(400).send("you are not admin!");
};

module.exports = promoteUser;
