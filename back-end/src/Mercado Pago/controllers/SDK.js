// const mercadopago = require('mercadopago');
// mercadopago.configurations.setAccessToken('TEST-8027820177433735-101013-d8bd5f51ad6362c4dfb1913c39abdd7d-1275939038');
 // Mercado Pago SDK

 const { ACCESS_TOKEN_MP, HOST } = process.env;
 const mercadopago = require ('mercadopago');

 const createOrder= async (req, res) => {
 const { name, price } = req.query
 mercadopago.configure({
   access_token: ACCESS_TOKEN_MP
 });

 const priceNum = parseInt(price)

 const result = await mercadopago.preferences.create({
   "items": [
	 {
	   currency_id: "ARG",
	   title: name,
	   quantity: 1,
	   unit_price: priceNum
	 }
   ],
   back_urls: {
		// ** CAMBIAR CUANDO SE MANDE A PRODUCCION A URL DEL SERVIDOR ** //
		success:  `https://codecar.onrender.com/success`,
		pending: `https://codecar.onrender.com/pending`,
		failure: `https://codecar.onrender.com/failure`,
  	},
	notification_url: 'https://codecar.onrender.com/webhook'
}
	
 )
// console.log(result)
res.json(result.body.init_point)
}

 const receiveWebhook = async (req, res) => {
	try {
	  const payment = req.query;
	  console.log(payment);
	  if (payment.type === "payment") {
		const data = await mercadopago.payment.findById(payment["data.id"]);
		console.log(data);
	  }
  
	  res.sendStatus(204).send('pago aprobado');
	} catch (error) {
	  console.log(error);
	  return res.status(500).json({ message: "pago no acreditado" });
	}
};

module.exports = {
	createOrder,
	receiveWebhook
}