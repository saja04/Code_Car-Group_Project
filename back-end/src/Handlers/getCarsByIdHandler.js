const getCarsById = require('../Controllers/getCarsById')


const getCarsByIdHandler = async(req, res) => {
    try {
        const {id} = req.params

        const response = await getCarsById(id);

        res.status(236).json({msg: 'car encontrado', car: response})

    } catch (error) {
        
    }
}

module.exports = getCarsByIdHandler;