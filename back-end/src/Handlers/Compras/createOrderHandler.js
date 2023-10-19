const createOrder = require("../../Controllers/compras/createOrder");

const createOrderHandler = async (req, res) => {
  try {
    const { price, userId, carId, carModelo, carMarca, userEmail } = req.body;
    const data = { price, userId, carId, carModelo, carMarca, userEmail};

    const response = createOrder(data);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createOrderHandler;
