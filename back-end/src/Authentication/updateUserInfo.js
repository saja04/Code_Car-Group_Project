
const { User } = require("../db");


const updateUserInfo = async (req, res) => {
  try {
    const { email, phone, name, address, image } = req.body;


    const userInDb = await User.findOne({
      where: { user_email: email },
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
