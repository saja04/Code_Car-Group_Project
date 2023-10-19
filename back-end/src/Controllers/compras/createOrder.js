const { UserOrder, Car } = require("../../db");
const transporter = require('../../../nodeMailer');

const createOrder = async (data) => {
  const fecha = new Date();
  const { price, userId, carId, carModelo, carMarca, userEmail } = data;

    const createInDb = await UserOrder.create({
      order_status: "aPagar",
      order_date: fecha.toString(),
      car_order: carId,
      user_order: userId,
      medio_de_pago: "efectivo",
      car_modelo: carModelo,
      car_marca: carMarca,
      car_precio_ars: price,
      user_email: userEmail,
    });
    console.log(createInDb);
    const searchInDb = await Car.findByPk(carId);
    if (searchInDb) {
      searchInDb.deleted = true;
      searchInDb.save();
    }
    await transporter.sendMail({

      from: '"COMPRA REALIZADA" <codecarinfo123@gmail.com>',
      to: userEmail,
      subject: `La compra de su vehiculo ${carMarca} ${car_modelo} fue realizada con exito.`,
      text: "lorem ipsum",
      html: `
      <b>Muchas gracias por la compra en nuestra concesionaria, disfrute su nuevo vehiculo.</b>
      <b>Para volver a nuestra página, haga click en el siguiente link: </b>
      <a href=""> REGRESAR </a>
      `,
    })
    return createInDb;
};
module.exports = createOrder;
