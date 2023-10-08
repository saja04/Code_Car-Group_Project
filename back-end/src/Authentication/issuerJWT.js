const base64url = require('base64url');
const crypto = require('crypto');
const signatureFunction = crypto.createSign('RSA-SHA256')
const fs = require('fs')


const jwtParts = JWT.split('.');

const header = base64url.decode(jwtParts[0]);
const payload = base64url.decode(jwtParts[1]);
const signature = base64url.decode(jwtParts[2]);


