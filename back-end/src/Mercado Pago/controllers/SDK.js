// const mercadopago = require('mercadopago');
// mercadopago.configurations.setAccessToken('TEST-8027820177433735-101013-d8bd5f51ad6362c4dfb1913c39abdd7d-1275939038');
 // Mercado Pago SDK

 const { ACCESS_TOKEN_MP, HOST } = process.env;
 const mercadopago = require ('mercadopago');
 const {UserOrder} = require('../../db');

 const createOrder= async (req, res) => {
	const { name, price, userId, carId } = req.body
	try {
		mercadopago.configure({
			access_token: ACCESS_TOKEN_MP
		  });
		 
		  const priceNum = parseInt(price)
		  console.log(priceNum);
		 
		  const result = await mercadopago.preferences.create({
			"items": [
			  {
				currency_id: "ARG",
				title: name,
				quantity: 1,
				unit_price: priceNum,
				description: {
					userId,
					carId,
				}
			  }
			],
			back_urls: {
				 success:  `https://codecar.onrender.com/success`,
				 pending: `https://codecar.onrender.com/pending`,
				 failure: `https://codecar.onrender.com/failure`,
			   },
			 notification_url: 'https://codecar.onrender.com/webhook'
		 }
			 
		  )
		 res.json(result.body.init_point)

	} catch (error) {
		res.send(error)
	}
}

 const receiveWebhook = async (req, res) => {
	const payment = req.query;
	const fecha = new Date()
	try {
	  if (payment.type === "payment") {
		const data = await mercadopago.payment.findById(payment["data.id"]);
		console.log(data);
		console.log(data.metadata);
		// if(data.status === 'approoved' && data.status_detail === 'accredited'){
		// 	console.log('COMPRA APROBADA XD');
		// 	const createInDb = await UserOrder.create({
		// 		order_status: 'listoRetirar',
		// 		order_date: fecha.toString(),
		// 		car_order: carId,
		// 		user_order: userId,
		// 		medio_de_pago: medioDePago
		// 	})
		// }
	  }
	  
	} catch (error) {
		console.log(error);
	//   return res.status(401).json(error);
	}
};

module.exports = {
	createOrder,
	receiveWebhook
}