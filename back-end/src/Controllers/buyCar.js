const { UserOrder } = require('../db');

const postPedidos = async (pedidoData) => {
 	const {
    	order_status,
		order_date,
		car_pedido_id, 
  	} = pedidoData;

	const newPedido = await UserOrder.findOrCreate({
		where:{
			order_status: order_status,
			order_date: order_date,
			car_pedido_id: car_pedido_id, 
		}
    });

    return {
      status: "Pedido creado correctamente!",
      pedido: newPedido,
    };
  
};

module.exports = postPedidos;