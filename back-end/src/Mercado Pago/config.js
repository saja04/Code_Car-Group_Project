 const PORT = 3001
 const HOST = `http://localhost:${PORT}`

 const MERCADOPAGO_API_KEY = process.env.ACCESS_TOKEN_MP

module.exports = {
	PORT,
	HOST,
	MERCADOPAGO_API_KEY
}