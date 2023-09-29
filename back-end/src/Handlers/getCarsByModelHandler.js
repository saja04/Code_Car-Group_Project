const getCarsByModel = require('../Controllers/getCarsByModel')

const getCarsByModelHandler = async(req, res) => {
    try {
        await getCarsByModel(req, res)
    } catch (error) {
            console.log(error);
    }
}

module.exports = getCarsByModelHandler;