// document.getElementById('payment-form').addEventListener('submit', async (e) => {
// 	e.preventDefault();
  
// 	const cardForm = {
// 	  cardholder_name: document.getElementById('card-holder').value,
// 	  card_number: document.getElementById('card-number').value,
// 	  card_expiration_month: document.getElementById('card-expiration-month').value,
// 	  card_expiration_year: document.getElementById('card-expiration-year').value,
// 	  card_cvv: document.getElementById('card-cvv').value,
// 	};
  
// 	// Realiza el pago
// 	const paymentResponse = await mercadopago.payment.create({
// 	  transaction_amount: 100, // Monto total de la compra en tu moneda local
// 	  token: cardForm, // Los datos de la tarjeta
// 	  description: 'Compra en tu sitio web', // Descripción de la compra
// 	  installments: 1, // Cantidad de cuotas
// 	  payment_method_id: 'visa', // Método de pago (puedes modificarlo según tus necesidades)
// 	  issuer_id: '308', // ID del emisor de la tarjeta (puedes modificarlo según tus necesidades)
// 	});
  
// 	// Maneja la respuesta del pago
// 	if (paymentResponse.status === 'approved') {
// 	  alert('Pago aprobado');
// 	  // Aquí puedes realizar acciones adicionales, como actualizar el estado de la compra en tu base de datos.
// 	} else {
// 	  alert('El pago no fue aprobado');
// 	}
//   });
  