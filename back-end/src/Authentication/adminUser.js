const axios = require("axios");
const { User } = require("../db");
const { URL_INFO } = process.env;

const adminUser = async (req, res) => {
  const { userEmail, ban } = req.body;
  const userInDb = await User.findOne({
    where: { user_email: userEmail },
  });
  if(userInDb){
    userInDb.user_ban = ban;
    await userInDb.save()
    return (`usuario editado correctamente`)  
  }
   else return 'accion no realizada' 
};

module.exports = adminUser;
