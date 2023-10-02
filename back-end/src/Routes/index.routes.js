const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const filterCarByConditionHandler = require("../Handlers/filterCarByConditionHandler");
const orderCarsByPriceHandler = require("../Handlers/orderCarsByPriceHandler");
const filterCarByTypeHandler = require("../Handlers/filterCarByTypeHandler");

const router = Router();

//ROUTES CARS
router.post("/cars", postCarsHandler);
router.get("/cars", getCarsHandler);
router.get("/cars/delete/:id", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
//filtros
router.get("/carsCondicion/", filterCarByConditionHandler);
router.get("/carsTipo/", filterCarByTypeHandler);
router.get('/carsOrder/', orderCarsByPriceHandler)

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
