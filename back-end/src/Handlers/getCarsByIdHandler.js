const getCarsById = require("../Controllers/getCarsById");

const getCarsByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(id)) {
      return res.status(436).json({ msg: "ingresa un numero!" });
    } else {
        
      const response = await getCarsById(id);
      res.status(236).json({ msg: "car encontrado", car: response });
    }
  } catch (error) {
    return res
      .status(437)
      .json({ msg: "error en servidor, verifica controler y handler" });
  }
};

module.exports = getCarsByIdHandler;
