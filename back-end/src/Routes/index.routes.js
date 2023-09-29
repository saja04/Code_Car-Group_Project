const { Router } = require("express");
const {postCarsHandler} = require("../Handlers/postCarshandler");
const {getCarsHandler} = require("../Handlers/getCarshandler");
const {deleteCarsHandler} = require("../Handlers/deleteCarshandler")
const {getCarsByNameHandler} = require("../Handlers/getCarsByNameHandler")
const getCarsByModelHandler = require("../Handlers/getCarsByModelHandler");

const router = Router();

//ROUTES CARS
router.post("/cars", postCarsHandler);
router.get('/cars', getCarsHandler)
router.get('/cars/delete/:id', deleteCarsHandler)
router.get("/carsName/", getCarsByNameHandler)

router.get('/carsModel/', getCarsByModelHandler)

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
