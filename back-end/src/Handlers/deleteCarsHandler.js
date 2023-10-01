const deleteCar = require("../Controllers/deleteCars");

const deleteCarsHandler = async (req, res) => {
  try {
    const carId = parseInt(req.params.id);
    if (isNaN(carId)) {
      res.status(406).json({
        msg: "inserta un numero como parametro, checkea la direccion url",
      });
    }
    if (!isNaN(carId)) {
      const response = await deleteCar(carId);
      return res.status(205).json(response);
    } else return;
  } catch (error) {
    console.error(error);
    return res.status(407).json(error);
  }
};

module.exports = deleteCarsHandler;
