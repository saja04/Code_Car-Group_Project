const createOrder = require('../../Controllers/compras/createOrder')


const createOrderHandler = async (req, res) => {
    try {

        const {userId, carId,  medioDePago} = req.body
        const data = {userId, carId, medioDePago}

        const response = createOrder(data)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error);
    }
}


module.exports = createOrderHandler;