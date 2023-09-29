const { deleteCar } = require('../Controllers/deleteCars');

const deleteCarsHandler = async (req, res) => {
    try {
        await deleteCar(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    deleteCarsHandler,
};