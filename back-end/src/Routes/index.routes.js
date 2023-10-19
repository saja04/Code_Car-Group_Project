const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");
const buyCarHandler = require("../Handlers/buyCarHandler");
const ReviewHandler = require("../Handlers/ReviewHandler");

const getAllOrders = require("../Controllers/compras/getAllOrders");
const addStockHandler = require("../Handlers/addStockHandler.js");
const deleteStockHandler = require("../Handlers/deleteStockHandler.js");
const getUserOrderHandler = require("../Handlers/Compras/getUserOrderHandler");

const userCheck = require("../Authentication/userCheckController");
const adminCheck = require("../Authentication/adminCheck");
const moderatorCheck = require("../Authentication/moderatorCheck");
const getAllUsersHandler = require("../Handlers/getAllUsersHandler");
const getUserInfo = require("../Authentication/getUserInfo");
const adminUser = require("../Authentication/adminUser");
const updateUserInfo = require("../Authentication/updateUserInfo");

const allReviewsHandler = require("../Handlers/allReviewsHandler");

const router = Router();
require("dotenv").config();

const {
  createOrder,
  receiveWebhook,
} = require("../Mercado Pago/controllers/SDK");
const createOrderHandler = require("../Handlers/Compras/createOrderHandler");
const getUserById = require("../Authentication/getUserById");
const getCarsAdmin = require("../Controllers/getAllCarsAdmin");
const changeOrderStatus = require("../Controllers/compras/changeOrderStatus");

//ROUTES CARS
router.post("/carsPost", postCarsHandler);
router.post("/cars", getCarsHandler);
router.post("/pedido/", buyCarHandler);
router.post("/carsDelete", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.post("/carsId/", getCarsByIdHandler);
router.post("/create-order/", createOrder);
router.post("/webhook", receiveWebhook);
router.get("/success", (req, res) => res.send("Success!"));
router.get("/pending", (req, res) => res.send("Pending..."));
router.post("/review", ReviewHandler);
router.get("/allreview", allReviewsHandler);

//ROUTES USER

router.get("/users", getAllUsersHandler);

router.post("/userInfo", userCheck, getUserInfo);

router.post("/userById", getUserById);

router.post("/banUser", adminUser);

router.post("/updateUser/", updateUserInfo);

//ROUTES ADMIN
router.get("/carsAdmin", getCarsAdmin);
router.post("/addStock", addStockHandler);
router.post("/deleteStock", deleteStockHandler);

router.post("/allOrders", getAllOrders);
router.post("/userOrder", getUserOrderHandler);
router.post("/createOrderCar", createOrderHandler);
router.post("/editOrder", changeOrderStatus);

module.exports = router;
