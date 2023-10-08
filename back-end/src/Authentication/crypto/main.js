const fs = require('fs');
const encrypt = require('./encrypt');
const decrypt = require('./decrypt')
require("dotenv").config();
const {ENCRYPT} = process.env

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const encryptedMessage = encrypt(publicKey, 'mensaje')

const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf-8');

const decryptedMessage = decrypt(privateKey, encryptedMessage);

console.log(decryptedMessage.toString());