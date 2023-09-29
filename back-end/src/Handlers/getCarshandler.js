const { getCars } = require('../Controllers/getCars');

const getCarsHandler = async (req, res) => {
    try {
        await getCars(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    getCarsHandler,
};