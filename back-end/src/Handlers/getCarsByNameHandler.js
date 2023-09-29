const { getCarsByName } = require('../Controllers/getCarsByName');

const getCarsByNameHandler = async (req, res) => {
  try {
    await getCarsByName(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
	getCarsByNameHandler,
};