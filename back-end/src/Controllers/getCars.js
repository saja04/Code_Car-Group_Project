
const { Car } = require('../db')

const getCars = async(req, res) => {
    try {
        const response = await Car.findAll();
        res.status(201).json(response)


    } catch (error) {
        console.log(error);
        res.status(401).send(error.message)
    }
}

module.exports = getCars;