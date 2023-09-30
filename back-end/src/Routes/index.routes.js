const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler")
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler")

const router = Router();

//ROUTES CARS
router.post("/cars", postCarsHandler);
router.get('/cars', getCarsHandler)
router.get('/cars/delete/:id', deleteCarsHandler)
router.get("/carsName/", getCarsByNameHandler)

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
