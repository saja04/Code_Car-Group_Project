const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");
const getAllUsersHandler = require("../Handlers/getAllUsersHandler");
const buyCarHandler = require("../Handlers/buyCarHandler");
const updateUserHandler = require('../Handlers/updateUserHandler')

const router = Router();
require("dotenv").config();
const userCheck = require('../Authentication/userCheckController')
const {checkJwt} = require('../Authentication/auth0');
const getUserInfo = require("../Authentication/getUserInfo");
const updateUserInfo = require("../Authentication/updateUserInfo");



//ROUTES CARS
router.post("/carsPost", postCarsHandler);
router.post("/cars", getCarsHandler);
router.post("/users", getAllUsersHandler);
router.post("/pedido/", buyCarHandler);
router.get("/carsDelete/:id", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.post("/carsId/", getCarsByIdHandler);

//ROUTES USER

router.get("/userCheck", checkJwt, userCheck, async (req, res) => {
  return res.json({
    msg: "este mensaje esta protegido y solo autenticados pueden verlo",
  });
});
router.get('/user/info', checkJwt, userCheck, getUserInfo)

// router.get('/updateUser', checkJwt, updateUserHandler)
router.get('/updateUser/', checkJwt, userCheck, updateUserInfo)
//ROUTES ADMIN

module.exports = router;
