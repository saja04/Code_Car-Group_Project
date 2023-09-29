const { Car } = require('../db');

const deleteCar = async (req, res) => {
    const carId = parseInt(req.params.id);

    try {
        const car = await Car.findByPk(carId);

        if (car) {
            await car.destroy();
            res.json({ message: 'Coche eliminado exitosamente' });
        } else {
            res.status(404).json({ message: 'Coche no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
	deleteCar,
};