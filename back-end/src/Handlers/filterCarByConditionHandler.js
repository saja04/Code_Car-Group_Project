const filterCarByCondition = require("../Controllers/filterCarByCondition");

const filterCarByConditionHandler = async (req, res) => {
  const { condicion } = req.query;
  let primerLetraMayus = condicion.charAt(0).toUpperCase();
  let restoString = condicion.slice(1);
  const searchString = primerLetraMayus + restoString;
  try {
    const response = await filterCarByCondition(searchString);
    return res.status(224).json(response);
  } catch (error) {
    console.log(error);
    res.send(425).json({
      msg: "error, no se ha podido aplicar el filtro, por favor revisa el servidor y su controlador",
    });
  }
};

module.exports = filterCarByConditionHandler;
