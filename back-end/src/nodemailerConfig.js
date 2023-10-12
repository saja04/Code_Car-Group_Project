require("dotenv").config();

const nodemailer = require('nodemailer');

// Configura el transporte de correo
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
  });


  transporter.verify().then(() => {
    console.log('Ready for send emails');
  });

