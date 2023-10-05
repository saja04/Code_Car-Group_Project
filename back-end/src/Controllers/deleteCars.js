// controllers/deleteCarController.js
const { Car } = require('../models');

// Controlador para el borrado lógico de un auto
const deleteCar = async (req, res) => {
  const { carId } = req.params;

  try {
    const car = await Car.findByPk(carId);

    // Verifica si el auto existe
    if (!car) {
      return res.status(404).json({ message: 'Auto no encontrado' });
    }

    // Actualiza el estado de borrado lógico
    car.deleted = true;
    await car.save();

    return res.status(200).json({ message: 'Auto borrado con éxito' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = deleteCar;
