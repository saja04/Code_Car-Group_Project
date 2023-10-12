// const fetch = require('node-fetch'); // Asegúrate de tener node-fetch instalado (npm install node-fetch)

// const PUBLIC_KEY = 'TEST-337fa544-1215-460d-8f68-a53c9c4358d3'; // Reemplaza con tu clave pública
// const ACCESS_TOKEN = 'TEST-8027820177433735-101013-d8bd5f51ad6362c4dfb1913c39abdd7d-1275939038'; // Reemplaza con tu token de acceso
// const EXTERNAL_FLOW_ID = 'CODE-CAR'; // Reemplaza con tu identificador externo

// const data = {
//   return_url: 'https://www.mercadopago.com/',
//   external_flow_id: EXTERNAL_FLOW_ID,
//   external_user: {
//     id: 'usertest',
//     description: 'Test account',
//   },
//   agreement_data: {
//     validation_amount: 3.14,
//     description: 'Test agreement',
//   },
// };

// const headers = {
//   'Authorization': `Bearer ${ACCESS_TOKEN}`,
//   'x-integrator-id': 'mp-sdk-CODE-CAR', // Reemplaza CLIENT_ID con tu identificador
//   'Content-Type': 'application/json',
// };

// fetch(`https://api.mercadopago.com/v2/wallet_connect/agreements?public_key=${PUBLIC_KEY}`, {
//   method: 'POST',
//   headers: headers,
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Respuesta:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
