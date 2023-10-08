const postUser = require("../Controllers/postUser");
const { User } = require('../db')

const postUserHandler = async (req, res, next) => {
  
  const { name, email, password } = req.body;
  const existingUser = await User.findAll({where: {user_email: email}});
  console.log(existingUser);
  try {
    if(existingUser[0]) return res.status(401).json({msg: 'email ya existente'})
    if ((name, email, password)) {
      const response = await postUser(name, email, password);
      if (!response) {
        return res
          .status(401)
          .json({ msg: "error al crear usuario" });
      }
      console.log(response);
      const user = {
        id: response.user_id,
        username: name,
      };
      return res.status(202).json({msg: 'user created succesfully', user})
    }
    return;
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = postUserHandler