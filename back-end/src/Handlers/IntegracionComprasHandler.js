const {BuyCar,removeFromCart,viewCart} = require("../Controllers/IntegracionCompras")

const BuyCarHandler = (req, res) => {
	try {
	  const { carId, userId } = req.body;
	  const carrito = BuyCar(carId, userId);
	  return res.status(201).json(carrito);
	} catch (error) {
	  console.error(error);
	  return res.status(500).json({ message: "Error al agregar al carrito de compras" });
	}
  };
  
  const viewCartHandler = (req, res) => {
	try {
	  const { userId } = req.params;
	  const carrito = viewCart(userId);
	  return res.status(200).json(carrito);
	} catch (error) {
	  console.error(error);
	  return res.status(500).json({ message: "Error al obtener el carrito de compras" });
	}
  };
  
  module.exports = {
	BuyCarHandler,
	viewCartHandler,
  };