// controllers/deleteCarController.js
const { Car } = require('../db');

// Controlador para el borrado lógico de un auto
const deleteCar = async (id, deleted) => {

  try {
    const car = await Car.findByPk(id);

    // Verifica si el auto existe
    if (!car) {
      return res.status(404).json({ message: 'Auto no encontrado' });
    }

    // Alternar el estado de borrado lógico
    car.deleted = deleted;
    await car.save();

    const message = car.deleted ? 'Auto marcado como borrado' : 'Auto restaurado';

    return message;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = deleteCar;

