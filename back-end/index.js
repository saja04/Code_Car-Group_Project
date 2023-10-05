const path = require('path');
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./src/Routes/index.routes.js");
const { conn } = require("./src/db.js");
const saveApiData = require("./saveApiData");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const { User } = require("./src/db.js");
const saveUserData = require("./saveUserData.js");
const crypto = require("crypto");
require('dotenv').config();
const { PASSPORT_SECRET } = process.env;

const server = express();
server.name = "server";

// server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(express.urlencoded({ extended: true }));

server.use(
  session({
    secret: PASSPORT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie : { secure: true }
  })
);

server.use(passport.authenticate('session'));
server.use(morgan("dev"));

server.use((req, res, next) => {
  const allowedOrigins = [
    "https://code-car-41a-pf-enac.vercel.app",
    "http://localhost:5173",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", router);
server.use(passport.authenticate('session'));
server.use(passport.initialize());
server.use(passport.session());

passport.use(
  new LocalStrategy(
    (verify = async (mail, password, done) => {
      const findedUser = await User.findOne({
        where: { user_email: mail},
      });
      if (!findedUser) {
        return done(null, false, {
          message: "Usuario y contraseña incorrectos",
        });
      }

      crypto.pbkdf2(
        password,
        findedUser.dataValues.salt,
        350,
        32,
        "sha256",
        function (err, hashedPassword) {
          if (err) return done(err);
          if (!crypto.timingSafeEqual(findedUser.dataValues.hashed_password, hashedPassword)) {
            return done(null, false, {
              message: "Usuario y contraseña incorrectos",
            });
          }
          return done(null, findedUser.dataValues);
        }
      );
    })
  )
);

passport.serializeUser(function (user, done) {
  // console.log(user);
  done(null, {
    id: user.user_id,
    name: user.user_name
  });
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});



// server.get("/", async (req, res) => {
//   res.status(200).send("server running");
// });

conn.sync({ force: true }).then(async () => {
  console.log("db connected");
  await saveApiData();
  await saveUserData();
  server.listen(3001, () => {
    console.log("listening on port 3001");
  });
});

module.exports = server;
