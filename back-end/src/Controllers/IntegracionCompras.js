const { Car, User, UserOrder } = require('../db');

const BuyCar = async (req, res) =>{
   // Verificar si el usuario y el automóvil existen en la base de datos
   const user = await User.findByPk(user_id);
   const car = await Car.findByPk(car_id);
 
   if (!user || !car) {
	 return { message: 'Usuario o automóvil no encontrado' };
   }
 
   // Crear un nuevo registro en la tabla UserOrder para representar un elemento en el carrito de compras
   const orderItem = await UserOrder.create({
	 user_id: user_id,
	 car_id: car_id,
   });
 
   return orderItem;
 
}

const removeFromCart = async (req, res) =>{
  try {
    // Lógica para eliminar un automóvil del carrito
  } catch (error) {
    // Manejo de errores
  }
}

 const viewCart = async(req, res) =>{

  // Buscar todos los elementos en el carrito del usuario
  const carrito = await UserOrder.findAll({
    where: { user_id: user_id },
  });

  return carrito;
}

module.exports = {
  BuyCar,
  removeFromCart,
  viewCart,
};

