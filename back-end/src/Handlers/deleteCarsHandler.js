const deleteCar = require("../Controllers/deleteCars");

const deleteCarsHandler = async (req, res) => {
  try {
    const { id, deleted } = req.body;

    const response = await deleteCar(id, deleted);
    return res.status(205).json(response);
  } catch (error) {
    console.error(error);
    return res.status(407).json(error);
  }
};

module.exports = deleteCarsHandler;
