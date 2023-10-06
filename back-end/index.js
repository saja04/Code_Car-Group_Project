const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./src/Routes/index.routes.js");
const { conn } = require("./src/db.js");
const saveApiData = require("./saveApiData");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("./src/db.js");
const saveUserData = require("./saveUserData.js");
const crypto = require("crypto");
require("dotenv").config();
const { PASSPORT_SECRET, COOKIE_NEW, COOKIE_OLD } = process.env;
const cookieSession = require("cookie-session");

const server = express();
server.name = "server";

server.use(
  cookieSession({
    name: "session",
    keys: [COOKIE_NEW], // Cambia esto por una clave segura
    maxAge: 24 * 60 * 60 * 1000, // Duración de la sesión en milisegundos (1 día en este ejemplo)
  })
);

// server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());

server.use(morgan("dev"));

// server.use((req, res, next) => {
//   const allowedOrigins = [
//     "https://code-car-41a-pf-enac.vercel.app",
//     "http://localhost:5173",
//   ];

//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.header("Access-Control-Allow-Origin", origin);
//   }
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Esto permite solicitudes desde cualquier origen
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(passport.initialize());
server.use(passport.session());

passport.use(
  "local",
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
      const user = await User.findOne({ where: { user_email: username } });
      if (!user) return done("Mail no registrado");

      crypto.pbkdf2(
        password,
        user.dataValues.salt,
        350,
        32,
        "sha256",
        function (err, hashedPassword) {
          if (err) return done(err);
          if (
            !crypto.timingSafeEqual(
              user.dataValues.hashed_password,
              hashedPassword
            )
          ) {
            return done("Usuario y contraseña incorrectos");
          }

          return done(null, user.dataValues);
        }
      );
    }
  )
);

// passport.use(
//   new LocalStrategy(async (mail, password, done) => {
//     const findedUser = await User.findOne({
//       where: { user_email: mail },
//     });
//     if (!findedUser) {
//       return done(null, false, {
//         message: "Usuario y contraseña incorrectos",
//       });
//     }

//     crypto.pbkdf2(
//       password,
//       findedUser.dataValues.salt,
//       350,
//       32,
//       "sha256",
//       function (err, hashedPassword) {
//         if (err) return done(err);
//         if (
//           !crypto.timingSafeEqual(
//             findedUser.dataValues.hashed_password,
//             hashedPassword
//           )
//         ) {
//           return done(null, false, {
//             message: "Usuario y contraseña incorrectos",
//           });
//         }
//         return done(null, findedUser.dataValues);
//       }
//     );
//   })
// );

passport.serializeUser((user, done) => {
  console.log(user);
  return done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
  console.log(id);
  const user = await User.findOne({ where: { user_id: id } });
  if (user) {
    return done(null, {
      id: user.dataValues.user_id,
      name: user.dataValues.user_name,
    });
  } else {
    return done("No user con ese id");
  }
});

server.use("/", router);

// server.get("/", async (req, res) => {
//   res.status(200).send("server running");
// });

conn.sync({ force: false }).then(async () => {
  console.log("db connected");
  await saveApiData();
  // await saveUserData();
  server.listen(3001, () => {
    console.log("listening on port 3001");
  });
});

module.exports = server;
