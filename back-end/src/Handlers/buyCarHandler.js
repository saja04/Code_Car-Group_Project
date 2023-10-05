const createUserOrder = require('../Controllers/buyCar');

const buyCarHandler = async (req, res) => {
  const pedidoData = req.body;

  try {
    const { status, pedido } = await createUserOrder(pedidoData);

    if (pedido) {
      res.status(201).json({
        status,
        pedido,
      });
    } else {
      res.status(200).json({
        status,
        pedido,
      });
    }
  } catch (error) {
    res.status(500).json({
      status,
      error: error.message,
    });
  }
};

module.exports = buyCarHandler;