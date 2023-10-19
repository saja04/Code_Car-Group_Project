require("dotenv").config();
const { UserOrder, Car } = require("../../db");
const transporter = require('../../../nodeMailer');
const {NODEMAILER_EMAIL} = process.env;

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

    const mailSend = await transporter.sendMail({
      from: NODEMAILER_EMAIL,
      to: userEmail,
      subject: `La compra de su orden ${carMarca} ${carModelo} fue realizada con exito.`,
      html: `
      <h1>Su orden por el vehículo solicitado fue aprobada, puede pagar y retirar el coche en nuestra sucursal</h1>
      <p>Para ver el detalle de sus pedidos, haga click en el siguiente link: </p><a href="https://code-car-41a-pf-7u9q.vercel.app/userOrder"> MIS PEDIDOS </a>
      <br/>
      <b> *SI USTED NO REALIZO ESTA COMPRA, POR FAVOR COMUNIQUESE CON EL SOPORTE* </b>
      `,
    })
    console.log(mailSend);
    return createInDb;
};
module.exports = createOrder;
