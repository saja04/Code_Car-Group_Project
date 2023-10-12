import UserModel from '../db';
import transporter from '../nodemailerConfig';


try {
  
  await transporter.sendMail({
    from: '"COMPRA REALIZADA" <carugatimateo@gmail.com>',
    to: UserModel.user_name,
    subject: "La compra de su vehiculo fue realizada con exito.",
    text: "lorem ipsum",
    html: `
    <b>Muchas gracias por la compra en nuestra concesionaria, disfrute su nuevo vehiculo.</b>
    <b>Para volver a nuestra página, haga click en el siguiente link: </b>
    <a href=""> REGRESAR </a>
    `,
  })
} catch (error) {
 emailStatus = error ;
 return resizeBy.status(400).json({ message: 'Algo salio mal'});
}