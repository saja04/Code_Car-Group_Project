const { postCars } = require('../Controllers/postCars');

const postCarsHandler = async (req, res) => {
  try {
    await postCars(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

module.exports = {
  postCarsHandler,
};