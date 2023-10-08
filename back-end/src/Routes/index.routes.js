const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");
const getAllUsersHandler = require("../Handlers/getAllUsersHandler");
const postUserHandler = require("../Handlers/postUserHandler");
const buyCarHandler = require("../Handlers/buyCarHandler");
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");
const { User } = require("../db");
const axios = require("axios");
const router = Router();

const checkScopes = requiredScopes("see:cars");

//ROUTES CARS
router.post("/carsPost", postCarsHandler);
router.post("/cars", getCarsHandler);
router.post("/users", getAllUsersHandler);
router.post("/pedido/", buyCarHandler);
router.get("/carsDelete/:id", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.get("/cars/:id", getCarsByIdHandler);

//ROUTES USER

const userVerification = async (req, res, next) => {
  try {
    const accesToken = req.auth.token;
    const userInfo = await axios.get(
      "https://dev-mp4haipy0yoq4dta.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accesToken}`,
        },
      }
    );
    console.log(userInfo);
      console.log(userInfo.data.email);
    const searchInDb = await User.findOne({
      where: { user_email: userInfo.data.email },
    });
    if (!searchInDb) {
      const createInDb = await User.create({
        user_email: userInfo.data.email,
        user_name: userInfo.data.name,
      });
      console.log("usuario creado");
      next();
    } else next();
  } catch (error) {
    res.send(error.message)
  }
};

const checkJwt = auth({
  audience: "https://codecar.onrender.com",
  issuerBaseURL: "https://dev-mp4haipy0yoq4dta.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

router.get("/checking1", (req, res) => {
  return res.json({
    msg: "este es un mensaje no protejido, cualquiera puede acceder",
  });
});
router.get("/protected", checkJwt, userVerification,  async (req, res) => {
  return res.json({
    msg: "este mensaje esta protegido y solo autenticados pueden verlo",
  });
});
router.get("/proteced/role", checkJwt, checkScopes, (req, res) => {
  return res.json({
    msg: "this route haves authentication AND role management",
  });
});
//ROUTES ADMIN

module.exports = router;
