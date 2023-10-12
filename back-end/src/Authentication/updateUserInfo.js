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
    }
    if(name){
        userInDb.user_name = name;
        await userInDb.save()
    }
    if(address){
        userInDb.user_address = address;
        await userInDb.save();
    }
    if(image){
        userInDb.user_image = image;
        await userInDb.save()
    }
    console.log(`usuario ${userInDb.dataValues.user_email} actualizado`);
    res.json(userInDb);
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateUserInfo;
