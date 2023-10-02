const getCars = require("../Controllers/getCars");

const getCarsHandler = async (req, res) => {
  try {
    const response = await getCars();
    return res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(401).json({
      mensaje: "no se han podido traer los cars, verifica la db y servidor",
    });
  }
};

module.exports = getCarsHandler;
