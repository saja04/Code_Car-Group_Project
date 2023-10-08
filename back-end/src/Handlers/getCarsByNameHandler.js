const getCarsByName = require('../Controllers/getCarsByName')
const getCarsByNameHandler = async (req, res) => {
  try {
    const { input } = req.body;
    const result = await getCarsByName(req);

    if (result.error) {
      return res.status(404).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error en el controlador de búsqueda de autos:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = getCarsByNameHandler;
