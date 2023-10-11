const axios = require("axios");
const { User } = require("../db");
const { URL_INFO } = process.env;

const updateUserInfo = async (req, res) => {
  try {
    const { phone, name, address, image } = req.query;

    const accesToken = req.auth.token;
    const userInfo = await axios.get(URL_INFO, {
      headers: {
        authorization: `Bearer ${accesToken}`,
      },
    });

    const userInDb = await User.findOne({
      where: { user_email: userInfo.data.email },
    });

    if (phone) {
      const phoneToNumber = parseInt(phone);
      console.log(phoneToNumber);
      userInDb.user_phone = phoneToNumber;
      await userInDb.save();
      console.log("usuario actualizado exitosamente");
    }

    res.json(userInDb);
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateUserInfo;
