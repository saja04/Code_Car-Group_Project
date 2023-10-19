const { UserOrder } = require("../../db");
const transporter = require('../../../nodeMailer')
const { ACCESS_TOKEN_MP, NODEMAILER_EMAIL} = process.env;

const changeOrderStatus = async (req, res) => {
    const {orderId, status, userEmail} = req.body
  try {
    const searchInDb = await UserOrder.findByPk(orderId);
    console.log(searchInDb);

    if(status === 'Completa'){
        searchInDb.order_status = 'Completa'
        searchInDb.save()
        const mailSend = await transporter.sendMail({
            from: NODEMAILER_EMAIL,
            to: userEmail,
            subject: `Su orden fue completada!`,
            html: `
            <h1>El pago de la compra con identificador ${searchInDb.user_order_id} se realizó con éxito!</h1>
            <p>Esperamos que disfrutes de tu vehículo como nosotros disfrutamos en asesorarte.</p>
            <h3>carCode</h3>
            <b> *SI USTED NO REALIZO ESTA COMPRA, POR FAVOR COMUNIQUESE CON EL SOPORTE* </b>
            `,
          })
          console.log(mailSend);

    }
    else if(status === 'Cancelada'){
        searchInDb.order_status = 'Cancelada'
        searchInDb.save()
        const mailSend = await transporter.sendMail({
            from: NODEMAILER_EMAIL,
            to: userEmail,
            subject: `Orden cancelada`,
            html: `
            <h1>Su orden con identificador ${searchInDb.user_order_id} fue cancelada por el soporte</h1>
            <p>Ante cualquier duda, vuelve a comunicarte con nosotros</p>
            <h3>carCode</h3>
            `,
          })
          console.log(mailSend);
    }
    res.status(201).send('orden enviada con exito')
  } catch (error) {
    console.log(error);
  }
};

module.exports = changeOrderStatus;
