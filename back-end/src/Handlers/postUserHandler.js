const postUser = require("../Controllers/postUser");

const postUserHandler = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if ((name, email, password)) {
      const response = await postUser(name, email, password);
      if (!response) {
        return res
          .status(401)
          .json({ msg: "error en controller o datos proporcionados" });
      }
      console.log(response);
      const user = {
        id: response.user_id,
        username: name,
      };
      return req.login(user, function (err) {
        if (err) return next(err);
        res.redirect("/");
      });
    }
    return;
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = postUserHandler