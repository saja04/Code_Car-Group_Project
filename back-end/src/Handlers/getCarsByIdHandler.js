const getCarsById = require("../Controllers/getCarsById");

const getCarsByIdHandler = async (req, res) => {
  try {

    const response = await getCarsById(req);
    res.status(236).json(response);
    
  } catch (error) {
    return res
      .status(437)
      .json({ msg: "error en servidor, verifica controler y handler" });
  }
};

module.exports = getCarsByIdHandler;
