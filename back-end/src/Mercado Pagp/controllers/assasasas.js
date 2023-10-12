// // ? enviar objeto de producto del json a mercado pago

// const mercadopago = require('mercadopago');
// require('dotenv').config()

// const { ACCESS_TOKEN_MP } = process.env;

// // * Configurar mercado pago
// mercadopago.configure({
//     access_token:ACCESS_TOKEN_MP
// })

// // * Crear el controlador createOrder

// const createOrder = (req,res) => {
//     const {
//         id, title, description, image, stock, condition, price, quantity
//     } = req.body;

//     // ? Crear preferencias
//     let preference = {
//         items:[
//             {
//                 id,
//                 title,
//                 quantity,
//                 unit_price:price,
//                 currency_id:'ARS',
//                 picture_url:image,
//                 description
//             }
//         ],
//         // ? Darle el control a mercado pago...
//         back_urls:{
//             success:'http://localhost:3001/payment/success',
//             failure:'http://localhost:3001/payment/failure',
//             pending: 'http://localhost:3001/payment/pending' //cuando el usuario no ha pagado
//         },
//         notification_url:'https://572e-181-117-92-240.ngrok-free.app/payment/webhook'
//     }

//     mercadopago.preferences.create(preference)
//     .then(response => res.status(200).json(response))
//     .catch(error => res.status(400).json({error:error.message}))
// }

// module.exports = createOrder;