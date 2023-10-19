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
    const searchInDb = await Car.findByPk(carId);

    if (searchInDb) {
      searchInDb.deleted = true;
      searchInDb.save();
    }

    await transporter.sendMail({
      from: '"COMPRA REALIZADA" <codecarinfo123@gmail.com>',
      to: userEmail,
      subject: `La compra de su vehiculo ${carMarca} ${carModelo} fue realizada con exito.`,
      html: `
      <h1>Muchas gracias por la compra en nuestra concesionaria, disfrute su nuevo vehiculo.</h1>
      <p>Para ver el detalle de sus pedidos, haga click en el siguiente link: </p> <a href="https://code-car-41a-pf-7u9q.vercel.app/userOrder"> MIS PEDIDOS </a>
      <br/>
      <b> *SI USTED NO REALIZO ESTA COMPRA, POR FAVOR COMUNIQUESE CON EL SOPORTE* </b>
      `,
    })
    console.log('mail mandado');
    return createInDb;
};
module.exports = createOrder;
