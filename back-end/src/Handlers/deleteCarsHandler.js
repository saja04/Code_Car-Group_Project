const deleteCar = require("../Controllers/deleteCars");

const deleteCarsHandler = async (req, res) => {
  try {
    const {id} = req.params;
    const idParse = parseInt(id)
    if (isNaN(idParse)) {
      res.status(406).json({
        msg: "inserta un numero como parametro, checkea la direccion url",
      });
    }
    if (!isNaN(idParse)) {
      const response = await deleteCar(idParse);
      return res.status(205).json(response);
    } else return;
  } catch (error) {
    console.error(error);
    return res.status(407).json(error);
  }
};

module.exports = deleteCarsHandler;
