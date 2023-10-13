const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");
const getAllUsersHandler = require("../Handlers/getAllUsersHandler");
const buyCarHandler = require("../Handlers/buyCarHandler");

const userCheck = require("../Authentication/userCheckController");
const getUserInfo = require("../Authentication/getUserInfo");
const banUser = require("../Authentication/banUser");
const updateUserInfo = require('../Authentication/updateUserInfo')

const router = Router();
require("dotenv").config();
const { checkJwt } = require("../Authentication/auth0");
const {
  createOrder,
  receiveWebhook,
} = require("../Mercado Pago/controllers/SDK");

//ROUTES CARS
router.post("/carsPost", postCarsHandler);
router.post("/cars", getCarsHandler);
router.get("/users", getAllUsersHandler);
router.post("/pedido/", buyCarHandler);
router.get("/carsDelete/:id", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.post("/carsId/", getCarsByIdHandler);
router.post("/create-order/", createOrder);
router.post("/webhook", receiveWebhook);
router.get("/sucess", (req, res) => res.send("Success!"));
router.get("/pending", (req, res) => res.send("Pending..."));

//ROUTES USER

// router.get("/userCheck", checkJwt, userCheck, async (req, res) => {
//   return res.json({
//     msg: "este mensaje esta protegido y solo autenticados pueden verlo",
//   });
// });

router.post('/userCheck', userCheck, async(req, res) => {
  return res.status(200).send('usuario leído correctamente');
})

router.get("/userInfo", userCheck, getUserInfo);

router.get("/adminUser/", userCheck, banUser);

router.get("/updateUser/", userCheck, updateUserInfo);

//ROUTES ADMIN



module.exports = router;
