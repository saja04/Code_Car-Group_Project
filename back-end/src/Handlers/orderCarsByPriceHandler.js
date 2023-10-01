const orderCarsByPrice = require("../Controllers/orderCarsByPrice");

const orderCarsByPriceHandler = async (req, res) => {
  const { precio } = await req.query;
  console.log( precio === 'mayorMenor' );

  try {
    if ( precio !== 'menorMayor' && precio !== 'mayorMenor' ) {
      return res
        .status(430)
        .json({ msg: "ingresar parametros menorMayor o mayorMenor" });
    } else return res.status(230).json(await orderCarsByPrice(precio));
  } catch (error) {
    console.log(error);
  }
};

module.exports = orderCarsByPriceHandler;
