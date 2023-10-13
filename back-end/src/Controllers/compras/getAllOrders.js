const { UserOrder } = require("../../db");

const getAllOrders = async (req, res) => {
  try {
    const response = await UserOrder.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllOrders;
