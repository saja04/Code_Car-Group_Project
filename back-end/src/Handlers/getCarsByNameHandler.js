const getCarsByName = require("../Controllers/getCarsByName");

const getCarsByNameHandler = async (req, res) => {
  try {
    const { modelo } = req.query;
    if (!modelo) {
      res.status(418).json({ msg: "ingresa un modelo" });
    } else if (modelo.length < 2) {
      res.status(419).json({ msg: "ingresa al menos dos caracteres" });
    }
    const response = await getCarsByName(modelo);
    if (response.error) {
      res.status(422).json(response);
    } else return res.status(218).json(response);
  } catch (error) {
    console.error(error);
    res.status(420).json({
      mensaje:
        "no se ha podido enviar el auto, revisa el servidor y su controlador",
    });
  }
};

module.exports = getCarsByNameHandler;
